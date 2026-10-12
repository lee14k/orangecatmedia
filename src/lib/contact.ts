const RESEND_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const RATE_LIMIT_COUNT = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
// One Railway service instance, so in-memory tracking is enough.
const recentByIp = new Map<string, number[]>();

// Optional project-brief fields and their max lengths.
const OPTIONAL_FIELDS = {
  stage: 100,
  users: 300,
  mustHaves: 1000,
  links: 500,
  budget: 100,
  timeline: 100,
  deadline: 200,
  company: 200,
  role: 200,
  heard: 100,
} as const;

type OptionalField = keyof typeof OPTIONAL_FIELDS;

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  types: string[];
  // Honeypot: hidden from people, filled in by naive bots.
  website: string;
} & Record<OptionalField, string>;

export class ContactNotConfigured extends Error {}

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactMessage(body: unknown): ContactMessage | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;

  const name = field(record, "name");
  const email = field(record, "email");
  const message = field(record, "message");
  if (name.length < 1 || name.length > 100) return null;
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) return null;
  if (message.length < 1 || message.length > 5000) return null;

  const rawTypes = Array.isArray(record.types) ? record.types : [];
  const types = rawTypes
    .filter((t): t is string => typeof t === "string")
    .map((t) => t.trim().slice(0, 60))
    .filter(Boolean)
    .slice(0, 10);

  const optional = {} as Record<OptionalField, string>;
  for (const [key, max] of Object.entries(OPTIONAL_FIELDS) as [OptionalField, number][]) {
    const value = field(record, key);
    if (value.length > max) return null;
    optional[key] = value;
  }

  return { name, email, message, types, website: field(record, "website"), ...optional };
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (recentByIp.get(ip) ?? []).filter((t) => now - t <= RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_COUNT) {
    recentByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  recentByIp.set(ip, recent);
  return false;
}

function emailText(msg: ContactMessage): string {
  const contact = [msg.role, msg.company].filter(Boolean).join(", ");
  const lines = [
    `From: ${msg.name} <${msg.email}>${contact ? ` (${contact})` : ""}`,
    ["Building", msg.types.join(", ")],
    ["Today", msg.stage],
    ["Budget", msg.budget],
    ["Timeline", [msg.timeline, msg.deadline].filter(Boolean).join(" · ")],
    ["Heard via", msg.heard],
  ]
    .map((line) => (typeof line === "string" ? line : line[1] ? `${line[0]}: ${line[1]}` : ""))
    .filter(Boolean);

  const sections = [
    ["About it", msg.message],
    ["Users", msg.users],
    ["Must-haves", msg.mustHaves],
    ["Links", msg.links],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}:\n${value}`);

  return [lines.join("\n"), ...sections].join("\n\n");
}

export async function sendContactEmail(msg: ContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from) throw new ContactNotConfigured();

  const subject = msg.types.length
    ? `Project brief from ${msg.name}${msg.company ? ` (${msg.company})` : ""}`
    : `Orange Cat Media inquiry from ${msg.name}`;

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: msg.email,
      subject,
      text: emailText(msg),
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}`);
  }
}

const RESEND_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const RATE_LIMIT_COUNT = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
// One Railway service instance, so in-memory tracking is enough.
const recentByIp = new Map<string, number[]>();

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  // Honeypot: hidden from people, filled in by naive bots.
  company: string;
};

export class ContactNotConfigured extends Error {}

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactMessage(body: unknown): ContactMessage | null {
  if (!body || typeof body !== "object") return null;
  const record = body as Record<string, unknown>;
  const msg = {
    name: field(record, "name"),
    email: field(record, "email"),
    message: field(record, "message"),
    company: field(record, "company"),
  };
  if (msg.name.length < 1 || msg.name.length > 100) return null;
  if (msg.email.length > 254 || !EMAIL_PATTERN.test(msg.email)) return null;
  if (msg.message.length < 1 || msg.message.length > 5000) return null;
  return msg;
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

export async function sendContactEmail(msg: ContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  if (!apiKey || !to || !from) throw new ContactNotConfigured();

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: msg.email,
      subject: `Orange Cat Media inquiry from ${msg.name}`,
      text: `From: ${msg.name} <${msg.email}>\n\n${msg.message}`,
    }),
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}`);
  }
}

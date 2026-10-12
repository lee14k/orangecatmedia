import type { NextApiRequest, NextApiResponse } from "next";
import {
  ContactNotConfigured,
  isRateLimited,
  parseContactMessage,
  sendContactEmail,
} from "@/lib/contact";

type Response = { status: string } | { detail: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ detail: "Method not allowed" });
  }

  const msg = parseContactMessage(req.body);
  if (!msg) {
    return res.status(400).json({ detail: "Name, a valid email, and a message are required." });
  }
  if (msg.website) {
    return res.status(200).json({ status: "sent" });
  }

  // Railway's proxy puts the real client first in X-Forwarded-For.
  const forwarded = req.headers["x-forwarded-for"];
  const ip =
    (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0].trim() ||
    req.socket.remoteAddress ||
    "unknown";
  if (isRateLimited(ip)) {
    return res.status(429).json({ detail: "Too many messages. Try again later." });
  }

  try {
    await sendContactEmail(msg);
  } catch (err) {
    if (err instanceof ContactNotConfigured) {
      return res.status(503).json({ detail: "Contact form is not configured" });
    }
    console.error("Contact email failed:", err);
    return res.status(502).json({ detail: "Could not send message" });
  }

  return res.status(200).json({ status: "sent" });
}

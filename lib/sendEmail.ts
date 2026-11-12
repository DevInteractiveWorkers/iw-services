// lib/sendEmail.ts
import nodemailer from "nodemailer";

export interface EmailCta {
  label: string;
  href: string;
  /** "primary" = solid brand button, "secondary" = outlined. Default "primary". */
  variant?: "primary" | "secondary";
}

interface SendEmailParams {
  from: string;
  to: string | string[];
  bcc?: string | string[];
  subject: string;
  data: Record<string, string>;
  logoUrl?: string;
  heading?: string;
  /** Short line under the heading, e.g. "Someone just applied through the site." */
  intro?: string;
  /** Buttons shown under the details. */
  ctas?: EmailCta[];
  attachments?: {
    content: Buffer | any;
    filename: string | undefined;
  }[];
}

const BRAND = "#c1272d";
const FONT = "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

/** Escape user-submitted values so they can't inject HTML into the email. */
const esc = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** "fullName" / "full_name" -> "Full Name" */
const humanize = (key: string) =>
  key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\b\w/g, (c) => c.toUpperCase());

/** Turns emails and phone numbers into tappable links. */
const renderValue = (value: string) => {
  const safe = esc(value).replace(/\n/g, "<br>");
  const v = value.trim();
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return `<a href="mailto:${esc(v)}" style="color:${BRAND};text-decoration:none;">${safe}</a>`;
  }
  if (/^\+?[\d\s().-]{7,}$/.test(v)) {
    return `<a href="tel:${esc(v.replace(/[^\d+]/g, ""))}" style="color:${BRAND};text-decoration:none;">${safe}</a>`;
  }
  return safe;
};

/** Ready-made CTA: reply to the person who submitted the form. */
export const replyCta = (
  email: string,
  subject = "Re: Your submission",
  label = "Reply by email",
): EmailCta => ({
  label,
  href: `mailto:${email}?subject=${encodeURIComponent(subject)}`,
});

const renderCta = ({ label, href, variant = "primary" }: EmailCta) => {
  const solid = variant === "primary";
  return `
    <td style="padding:0 6px 8px 0;">
      <a href="${esc(href)}" target="_blank"
         style="display:inline-block;padding:12px 24px;font-family:${FONT};font-size:14px;font-weight:600;
                text-decoration:none;border-radius:6px;border:2px solid ${BRAND};
                background:${solid ? BRAND : "#ffffff"};color:${solid ? "#ffffff" : BRAND};">
        ${esc(label)}
      </a>
    </td>`;
};

export async function sendEmail({
  from,
  to,
  bcc,
  subject,
  data,
  logoUrl = "https://www.interactiveworkers.com/_next/image?url=%2Flogo%2F01_Primary_Logo%2FPrimary_Logo-06.png&w=1080&q=75",
  heading = "New Submission",
  intro,
  ctas = [],
  attachments,
}: SendEmailParams): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.verify();

  const entries = Object.entries(data).filter(
    ([, value]) => value !== undefined && value !== null && value !== "",
  );

  const rows = entries
    .map(
      ([key, value], i) => `
        <tr>
          <td valign="top" width="35%" style="padding:14px 0;font-family:${FONT};font-size:12px;font-weight:600;
              letter-spacing:.06em;text-transform:uppercase;color:#6b7280;
              ${i < entries.length - 1 ? "border-bottom:1px solid #eceef2;" : ""}">${esc(humanize(key))}</td>
          <td valign="top" style="padding:14px 0 14px 12px;font-family:${FONT};font-size:15px;line-height:1.5;color:#111827;
              word-break:break-word;${i < entries.length - 1 ? "border-bottom:1px solid #eceef2;" : ""}">${renderValue(String(value))}</td>
        </tr>`,
    )
    .join("");

  const ctaBlock = ctas.length
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr>${ctas.map(renderCta).join("")}</tr></table>`
    : "";

  const attachmentNote = attachments?.length
    ? `<p style="margin:20px 0 0;font-family:${FONT};font-size:13px;color:#6b7280;">
         📎 ${attachments.length} attachment${attachments.length > 1 ? "s" : ""} included: ${attachments
           .map((a) => esc(a.filename ?? "file"))
           .join(", ")}
       </p>`
    : "";

  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body style="margin:0;padding:0;background:#f3f4f6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 12px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
               style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;">
          <tr><td style="height:6px;background:${BRAND};font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr><td style="padding:28px 32px 8px;">
            <img src="${esc(logoUrl)}" alt="Interactive Workers" width="160" style="display:block;height:auto;border:0;">
          </td></tr>
          <tr><td style="padding:16px 32px 0;">
            <h1 style="margin:0;font-family:${FONT};font-size:22px;font-weight:700;color:#111827;">${esc(heading)}</h1>
            ${intro ? `<p style="margin:8px 0 0;font-family:${FONT};font-size:14px;line-height:1.5;color:#6b7280;">${esc(intro)}</p>` : ""}
          </td></tr>
          <tr><td style="padding:16px 32px 32px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"
                   style="border-top:1px solid #eceef2;">${rows}</table>
            ${ctaBlock}
            ${attachmentNote}
          </td></tr>
        </table>
        <p style="margin:16px 0 0;font-family:${FONT};font-size:12px;color:#9ca3af;">
          Sent automatically from interactiveworkers.com
        </p>
      </td></tr>
    </table>
  </body>
</html>`;

  await transporter.sendMail({
    from,
    to,
    bcc,
    subject,
    html,
    attachments,
  });
}

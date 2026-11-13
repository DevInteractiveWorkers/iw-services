// Send Mail
import { NextRequest } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

// Replaces the missing "@/components/lib/utils" getCurrentDate helper: [DD, MM, YY]
const getCurrentDate = () => {
  const d = new Date();
  return [
    String(d.getDate()).padStart(2, "0"),
    String(d.getMonth() + 1).padStart(2, "0"),
    String(d.getFullYear()).slice(-2),
  ];
};

// Subdomains served by proxy.ts, mapped to display names.
const SERVICES: Record<string, string> = {
  services: "Services",
  homecare: "Home Care",
  insurance: "Insurance",
  lawfirms: "Law Firms",
  privatesecurity: "Private Security",
};

// Derived server-side from the Host header (not the request body) so it can't be spoofed by the form.
const getService = (req: NextRequest) => {
  const host = (
    req.headers.get("x-forwarded-host") ??
    req.headers.get("host") ??
    ""
  ).split(":")[0];
  const subdomain = host.split(".")[0];
  const name = SERVICES[subdomain];
  return { subdomain, name: name ?? "interactiveworkers.com" };
};

export async function POST(req: NextRequest) {
  let data: Record<string, any>;
  try {
    data = await req.json();
  } catch {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }

  if (!data?.fullName || !data?.email || !data?.phone) {
    return new Response(JSON.stringify({ success: false }), { status: 400 });
  }

  const date = getCurrentDate().join(" / ");

  // Accepts one professional (string) or several (array).
  const professionals: string[] = (
    Array.isArray(data.professional) ? data.professional : [data.professional]
  )
    .map((p: unknown) => String(p ?? "").trim())
    .filter(Boolean);

  const service = getService(req);

  const consentLine = (v: unknown) =>
    v === true ? "Yes" : v === false ? "No" : "";

  try {
    await sendEmail({
      from: process.env.NODEMAILER_USER!,
      // to: process.env.NODEMAILER_USER!,
      to: "gm@interactiveworkers.com",
      bcc: ["info@interactiveworkers.com", "ceo@interactiveworkers.com"],
      // Company is optional on the newsletter form, so only append it when present.
      subject: `[Client Lead] ${data.fullName}${data.company ? ` - ${data.company}` : ""}`,
      heading: `${data.fullName} signed up to our newsletter through ${service.name}`,
      data: {
        "Date (DD/MM/YY)": date,
        Service: service.name,
        Name: data.fullName,
        Email: data.email,
        Phone: data.phone,
        Country: data.country,
        "Company Name": data.company,
        "Company Size": data.size,
        "Number of Staff Required": data.staff,
        [professionals.length > 1 ? "Professionals" : "Professional"]:
          professionals.join(", "),
        Message: data.message,
        "Marketing Consent": consentLine(data.marketingConsent),
        "Privacy Policy Agreed": consentLine(data.privacyAgreement),
      },
    });
  } catch (err) {
    console.error("Failed to send contact email", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}

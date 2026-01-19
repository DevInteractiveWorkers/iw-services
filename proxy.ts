import { NextRequest, NextResponse } from "next/server";

const ALLOWED_SUBDOMAINS = [
  "homecare",
  "insurance",
  "lawfirms",
  "privatesecurity",
];

// Domains that may host this app
const BASE_DOMAINS = [
  "interactiveworkers.com",
  "iw-services.vercel.app",
  "localhost",
  "10.100.9.208",
];

function getSubdomain(host: string): string | null {
  // Remove port if present
  const cleanHost = host.split(":")[0];

  for (const base of BASE_DOMAINS) {
    if (cleanHost === base) return null;
    if (cleanHost.endsWith(`.${base}`)) {
      return cleanHost.replace(`.${base}`, "").split(".")[0];
    }
  }

  // Fallback for preview URLs (Vercel)
  const parts = cleanHost.split(".");
  if (parts.length > 2) {
    return parts[0];
  }

  return null;
}

export default function proxy(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // Ignore static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const subdomain = getSubdomain(host);

  // ❌ Block root or unknown domains
  if (!subdomain || !ALLOWED_SUBDOMAINS.includes(subdomain)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  // ✅ Rewrite to internal route
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/((?!_next|api|.*\\..*).*)",
};

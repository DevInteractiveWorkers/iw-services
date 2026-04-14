import { NextRequest, NextResponse } from "next/server";

const ALLOWED_SUBDOMAINS = [
  "services",
  "homecare",
  "insurance",
  "lawfirms",
  "privatesecurity",
];

function extractSubdomain(host: string): string | null {
  const cleanHost = host.split(":")[0]; // remove port
  const parts = cleanHost.split(".");

  // localhost or invalid
  if (parts.length < 2) return null;

  // homecare.iw-services.vercel.app → homecare
  // homecare.interactiveworkers.com → homecare
  return parts[0];
}

export default function proxy(req: NextRequest) {
  const host = req.headers.get("host");
  if (!host) return NextResponse.next();

  const pathname = req.nextUrl.pathname;

  // Ignore Next internals & static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const subdomain = extractSubdomain(host);

  // ❌ Block root domain & unknown subdomains
  if (!subdomain || !ALLOWED_SUBDOMAINS.includes(subdomain)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  // Prevent infinite rewrite
  if (pathname.startsWith(`/${subdomain}`)) {
    return NextResponse.next();
  }

  // ✅ Rewrite to internal route
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/((?!_next|api|.*\\..*).*)",
};

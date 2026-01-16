import { NextRequest, NextResponse } from "next/server";

const ALLOWED_SUBDOMAINS = [
  "homecare",
  "insurance",
  "lawfirms",
  "privatesecurity",
];

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // Ignore internal assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const subdomain = host.split(".")[0];

  // ❌ Block root domain and unknown subdomains
  if (!ALLOWED_SUBDOMAINS.includes(subdomain)) {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  // ✅ Rewrite to the correct service folder
  const url = req.nextUrl.clone();
  url.pathname = `/${subdomain}${pathname}`;
  return NextResponse.rewrite(url);
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─────────────────────────────────────────────────────────────────────────────
// EDGE MIDDLEWARE — Bot & Abuse Protection
//
// This runs at the CDN edge BEFORE any serverless function is invoked.
// Blocking here costs almost nothing and prevents runaway billing.
// ─────────────────────────────────────────────────────────────────────────────

// Known malicious/wasteful bot User-Agent patterns
// These are automated scrapers, vulnerability scanners, and spam bots
const BLOCKED_USER_AGENTS = [
  /sqlmap/i,           // SQL injection scanner
  /nikto/i,            // Web vulnerability scanner
  /nmap/i,             // Network scanner
  /masscan/i,          // Port scanner
  /zgrab/i,            // Banner grabber
  /python-requests/i,  // Generic scraper (unless you need API access)
  /go-http-client/i,   // Generic Go scraper
  /^curl\/[\d.]+$/i,   // Bare curl only (e.g. "curl/7.68.0") — Google uses curl differently
  /^wget\/[\d.]+$/i,   // Bare wget only
  /scrapy/i,           // Python scraping framework
  // /semrush/i,          // SEO crawler (remove if you want SEMrush data)
  // /ahrefsbot/i,        // Ahrefs crawler
  /dotbot/i,           // Moz crawler
  /petalbot/i,         // Huawei bot
];

// Path prefixes that are never valid on a Next.js site — block immediately
// These are exclusively hit by automated scanners probing for vulnerabilities
const BLOCKED_PATH_PREFIXES = [
  "/wp-admin",
  "/wp-login",
  "/wp-content",
  "/wp-includes",
  "/.env",
  "/.git",
  "/phpmyadmin",
  "/admin/config",
  "/xmlrpc",
  "/shell",
  "/cgi-bin",
  "/.well-known/acme-challenge", // Legitimate for SSL, but can be abused
  "/boaform",
  "/vendor/phpunit",
  "/telescope",      // Laravel debug tool probe
  "/horizon",        // Laravel queue probe
];

// File extension patterns that are never valid on a Next.js site
const BLOCKED_EXTENSIONS = /\.(php|asp|aspx|jsp|cgi|pl|py|rb|sh|bash|env|config|bak|sql|db|sqlite|log|xml)$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get("user-agent") || "";

  // ── 1. Block by suspicious path prefixes ──────────────────────────────────
  const isBlockedPath = BLOCKED_PATH_PREFIXES.some((prefix) =>
    pathname.toLowerCase().startsWith(prefix.toLowerCase())
  );

  if (isBlockedPath) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 2. Block by file extension probing ────────────────────────────────────
  // Exclude legitimate SEO files like sitemap.xml from the block
  if (BLOCKED_EXTENSIONS.test(pathname) && !pathname.endsWith("sitemap.xml")) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 3. Block known malicious User-Agents ─────────────────────────────────
  const isBlockedAgent = BLOCKED_USER_AGENTS.some((pattern) =>
    pattern.test(userAgent)
  );

  if (isBlockedAgent) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 4. Block empty User-Agents (almost always bots) ──────────────────────
  if (!userAgent || userAgent.trim() === "") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ── 5. Add security headers to all responses ─────────────────────────────
  const response = NextResponse.next();

  // Prevent this page being loaded in iframes on other sites
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  // Prevent MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

// ─── Matcher ──────────────────────────────────────────────────────────────────
// Define which paths the middleware runs on.
// Exclude static files and Next.js internals for performance —
// only run on actual page/API routes.
export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static JS/CSS/fonts — already cached)
     * - _next/image (image optimization pipeline)
     * - favicon.ico
     * - Public folder files
     */
    "/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|css|js|woff|woff2|ttf)).*)",
  ],
};

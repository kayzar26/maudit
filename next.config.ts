import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Performance & Cost Protection ──────────────────────────────────────────
  // Compress responses to reduce bandwidth costs
  compress: true,

  // ─── Image Optimization ───────────────────────────────────────────────────
  images: {
    // Cache optimized images for 60 seconds minimum before re-optimizing
    // This prevents repeated image optimization function invocations
    minimumCacheTTL: 60,
    // Only allow images from your own domain (prevents image proxy abuse)
    remotePatterns: [],
  },

  // ─── HTTP Headers ──────────────────────────────────────────────────────────
  async headers() {
    return [
      // Aggressively cache static assets at CDN edge for 1 year
      // These NEVER hit a serverless function on repeat visits
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // Cache local images (served from public/img) for 30 days
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      // Apply security headers to ALL routes to deter bot scanners
      {
        source: "/(.*)",
        headers: [
          // Prevents clickjacking attacks
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Prevents MIME type sniffing (common attack vector)
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controls referrer information
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  // ─── Redirects ─────────────────────────────────────────────────────────────
  async redirects() {
    return [
      { source: "/wp-admin/:path*", destination: "/403", permanent: false },
      { source: "/wp-login.php", destination: "/403", permanent: false },
      { source: "/:path*.php", destination: "/403", permanent: false },
      { source: "/.env(.*)", destination: "/403", permanent: false },
      { source: "/xmlrpc.php", destination: "/403", permanent: false },
    ];
  },
};

export default nextConfig;

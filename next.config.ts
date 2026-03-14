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
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache public assets (images, fonts, etc.) for 1 year
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache images for 30 days
      {
        source: "/:path*.:ext(jpg|jpeg|png|gif|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
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
          // Disallow indexing of admin/private URLs by search bots
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // ─── Redirects ─────────────────────────────────────────────────────────────
  // Block known bot/scanner paths that probe for vulnerabilities
  // These paths are hit thousands of times per day by automated scanners
  async redirects() {
    return [
      // Block WordPress scanner paths (very common automated attacks)
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: false,
      },
      // Block PHP file probing
      {
        source: "/:path*.php",
        destination: "/",
        permanent: false,
      },
      // Block common vulnerability scanner paths
      {
        source: "/.env(.*)",
        destination: "/",
        permanent: false,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

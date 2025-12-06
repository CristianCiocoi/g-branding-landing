import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Images config for static export
  images: {
    unoptimized: true, // Required for static export
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },

  // Properly configure Turbopack
  experimental: {
    turbo: {},
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "titancode.pl",
      },
      {
        protocol: "https",
        hostname: "assets.titancode.pl",
      },
    ],
  },
  // Vercel automatically converts /api/* to serverless functions
};

export default nextConfig;

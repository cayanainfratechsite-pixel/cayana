import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "artgallery.yale.edu" },
      { hostname: "www.photocrati.com" },
      { hostname: "145.223.23.134" },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "images.ctfassets.net",
      "example.com",
      "artgallery.yale.edu",
      "www.photocrati.com",
      "145.223.23.134"
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

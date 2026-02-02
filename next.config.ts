import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "artgallery.yale.edu" },
      { hostname: "www.photocrati.com" },
      { hostname: "145.223.23.134" },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/public/**',
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: 'http',
        hostname: 'custom-images.strikinglycdn.com',
      },
      {
        protocol: "https",
        hostname: "cayana.s3.amazonaws.com",
        pathname: "/**",
      },
    ],
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "images.ctfassets.net",
      "example.com",
      "artgallery.yale.edu",
      "www.photocrati.com",
      "145.223.23.134",
      "api.cayana.co.in",
      "cayana.s3.amazonaws.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

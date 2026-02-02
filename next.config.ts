import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "cayana.s3.amazonaws.com",
      "backend.cayana.co.in",
      "admin.cayana.co.in"
    ],
  },
};

export default nextConfig;

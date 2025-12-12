// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       { hostname: "images.unsplash.com" },
//       { hostname: "artgallery.yale.edu" },
//       { hostname: "www.photocrati.com" },
//       { hostname: "145.223.23.134" },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '4000',
//         pathname: '/public/**',
//       },
//       {
//         protocol: "https",
//         hostname: "cdn-icons-png.flaticon.com",
//       },
//       {
//         protocol: 'http',
//         hostname: 'custom-images.strikinglycdn.com',
//       },
//     ],
//     domains: [
//       "images.unsplash.com",
//       "media.istockphoto.com",
//       "images.ctfassets.net",
//       "example.com",
//       "artgallery.yale.edu",
//       "www.photocrati.com",
//       "145.223.23.134",
//       "api.cayana.co.in",
//     ],
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "artgallery.yale.edu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.photocrati.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "145.223.23.134",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
        pathname: "/public/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "custom-images.strikinglycdn.com",
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
      "cdn-icons-png.flaticon.com",
      "custom-images.strikinglycdn.com",
      "backend.cayana.co.in",
      
    ],
  },
};

export default nextConfig;


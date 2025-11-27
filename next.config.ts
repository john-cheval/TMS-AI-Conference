import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmsai.girishandco.com",
        pathname: "/public/Admin/uploads/**",
      },
      {
        protocol: "https",
        hostname: "tmsai.girishandco.com",
        pathname: "/public/public/Admin/uploads/**",
      },
    ],
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true"
  },
};

export default nextConfig;

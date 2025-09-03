import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tmsai.girishandco.com",
      },
    ],
  },
};

export default nextConfig;

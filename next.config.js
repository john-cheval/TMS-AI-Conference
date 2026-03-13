const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manage.tmsaitechconference.com",
        pathname: "/public/Admin/uploads/**",
      },
      {
        protocol: "https",
        hostname: "manage.tmsaitechconference.com",
        pathname: "/public/public/Admin/uploads/**",
      },
    ],
    // unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === "true",
  },
};

module.exports = nextConfig;
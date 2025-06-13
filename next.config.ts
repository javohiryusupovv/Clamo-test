import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clamo-production.up.railway.app",
        port: "",
        pathname: "/media/team_members/**",
      },
      {
        protocol: "https",
        hostname: "clamo-production.up.railway.app",
        port: "",
        pathname: "/media/news/**",
      },
      {
        protocol: "https",
        hostname: "clamo-production.up.railway.app",
        port: "",
        pathname: "/media/partners/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;


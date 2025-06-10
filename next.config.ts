import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['clamo-production.up.railway.app'], // API-dan keladigan rasm domenini shu yerga qo'sh
  },
};

export default nextConfig;

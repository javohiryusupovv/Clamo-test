import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    domains: ['admin.clamo.uz'],
        remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.commeta.uz",
      },
    ],
  },
  // Allow Yandex Metrica scripts
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru; img-src 'self' data: https:; connect-src 'self' https:;",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default withNextIntl(nextConfig);


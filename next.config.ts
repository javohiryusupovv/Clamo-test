import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.clamo.uz",
      },
      {
        protocol: "https",
        hostname: "cdn.commeta.uz",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'react-icons',           // ✅ qo'shing
      'lucide-react',          // ✅ qo'shing
      'date-fns',              // ✅ agar ishlatsangiz
    ],
    optimizeCss: true,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
  async headers() {
    return [
      // ✅ Next.js statik fayllar — 1 yil cache
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ✅ Rasmlar — 1 yil cache
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ✅ Fontlar — 1 yil cache
      {
        source: '/:path*\\.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // ✅ Barcha sahifalar — CSP va boshqa headerlar
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://mc.yandex.ru https://mc.yandex.com https://www.google.com https://www.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https: wss://mc.yandex.com wss://mc.yandex.ru wss:",
              "frame-src 'self' https://www.google.com https://mc.yandex.ru https://mc.yandex.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "worker-src 'self' blob:",
            ].join("; "),
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400', // ✅ 1 soat + 1 kun background revalidate
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
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
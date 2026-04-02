import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/iframe",
        headers: [
          {
            key: "X-Frame-Options",
            value: "",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://*.top.gg https://top.gg",          },
        ],
      },
    ];
  },
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
  allowedDevOrigins: ["horizon-bot.me", "localhost:3000", "192.168.1.26"],
};

export default withNextIntl(nextConfig);

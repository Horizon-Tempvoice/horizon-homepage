import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [
      "https://horizon-bot.me/sitemap.xml",
      "https://horizon-bot.me/docs/sitemap.xml",
    ],
  };
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/imprint", "/de/imprint"],
    },
    sitemap: "https://horizon-bot.me/sitemap.xml",
  };
}

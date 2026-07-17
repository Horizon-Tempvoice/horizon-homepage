import { execSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { localizedUrl } from "@/lib/seo";

type Page = {
  path: string;
  sources: string[];
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  locales?: string[];
};

const PAGES: Page[] = [
  {
    path: "",
    sources: ["src/app/[locale]/page.tsx", "src/components", "messages"],
    changeFrequency: "monthly",
    priority: 1.0,
  },
  {
    path: "/privacy",
    sources: ["src/app/[locale]/privacy/page.tsx"],
    changeFrequency: "yearly",
    priority: 0.4,
  },
  {
    path: "/tos",
    sources: ["src/app/[locale]/tos/page.tsx"],
    changeFrequency: "yearly",
    priority: 0.4,
    locales: ["en"],
  },
];

function lastModified(sources: string[]): Date | undefined {
  try {
    const spec = sources.map((s) => `'${s}'`).join(" ");
    const iso = execSync(`git log -1 --format=%cI -- ${spec}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(
    ({ path, sources, changeFrequency, priority, locales }) => {
      const pageLocales = locales ?? routing.locales;
      const modified = lastModified(sources);
      const languages = {
        "x-default": localizedUrl(path, routing.defaultLocale),
        ...Object.fromEntries(
          pageLocales.map((locale) => [locale, localizedUrl(path, locale)]),
        ),
      };
      return pageLocales.map((locale) => ({
        url: localizedUrl(path, locale),
        ...(modified ? { lastModified: modified } : {}),
        changeFrequency,
        priority,
        alternates: { languages },
      }));
    },
  );
}

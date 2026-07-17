import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

export const SITE_URL = "https://horizon-bot.me";

export function localizedUrl(path: string, locale: string): string {
  return locale === routing.defaultLocale
    ? `${SITE_URL}${path}`
    : `${SITE_URL}/${locale}${path}`;
}

export function localizedLanguages(path: string): Record<string, string> {
  return {
    "x-default": localizedUrl(path, routing.defaultLocale),
    ...Object.fromEntries(
      routing.locales.map((locale) => [locale, localizedUrl(path, locale)]),
    ),
  };
}

export function localizedAlternates(
  path: string,
  locale: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localizedUrl(path, locale),
    languages: localizedLanguages(path),
  };
}

export function enOnlyAlternates(
  path: string,
): NonNullable<Metadata["alternates"]> {
  const url = localizedUrl(path, routing.defaultLocale);
  return {
    canonical: url,
    languages: {
      "x-default": url,
      [routing.defaultLocale]: url,
    },
  };
}

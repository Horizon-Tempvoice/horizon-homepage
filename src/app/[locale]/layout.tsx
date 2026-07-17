import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CookieBanner from "@/components/CookieBanner";
import IntlProvider from "@/components/IntlProvider";
import { routing } from "@/i18n/routing";
import { localizedAlternates, localizedUrl, SITE_URL } from "@/lib/seo";
import "../globals.css";

const CONTENT: Record<string, { title: string; description: string }> = {
  en: {
    title: "Horizon | Temporary Voice Channel Bot for Discord",
    description:
      "Horizon is a free Discord bot for temporary voice channels. Join a Join to Create channel and get a private room that deletes itself once empty. No setup needed.",
  },
  de: {
    title: "Horizon | Temporärer Voice-Channel-Bot für Discord",
    description:
      "Horizon ist ein kostenloser Discord-Bot für temporäre Voice-Kanäle. Join to Create: privater Raum, der sich selbst löscht, sobald er leer ist. Keine Einrichtung nötig.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = CONTENT[locale] ?? CONTENT.en;

  return {
    metadataBase: new URL(SITE_URL),
    title: content.title,
    description: content.description,
    alternates: localizedAlternates("", locale),
    openGraph: {
      title: content.title,
      description: content.description,
      url: localizedUrl("", locale),
      siteName: "Horizon",
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#00A0FF",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <Script
          defer
          src="https://analytics.diamondforge.me/script.js"
          data-website-id="49c54271-ab93-41ce-a58e-0a04eaeef4b8"
          strategy="afterInteractive"
        />
        <Script
          defer
          src="https://analytics.diamondforge.me/recorder.js"
          data-website-id="49c54271-ab93-41ce-a58e-0a04eaeef4b8"
          data-sample-rate="0.75"
          data-mask-level="moderate"
          data-max-duration="300000"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <IntlProvider locale={locale} messages={messages}>
          {children}
          <CookieBanner />
        </IntlProvider>
      </body>
    </html>
  );
}

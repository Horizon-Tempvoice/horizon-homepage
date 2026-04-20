import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CookieBanner from "@/components/CookieBanner";
import IntlProvider from "@/components/IntlProvider";
import { routing } from "@/i18n/routing";
import "../globals.css";

const BASE_URL = "https://horizon-bot.me";

const CONTENT: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  en: {
    title: "Horizon - Temporary Voice Channels for Discord",
    description:
      "Horizon Bot automatically creates a private Discord voice channel when a user joins. The channel deletes itself once empty. Free, no configuration needed.",
    keywords: [
      "discord bot",
      "temporary voice channels discord",
      "temp vc bot",
      "join to create discord",
      "auto voice channel discord",
      "discord voice channel bot",
      "dynamic voice channels",
      "private voice channel bot",
      "discord voice room bot",
      "horizon discord bot",
      "free discord bot",
      "discord utility bot",
    ],
  },
  de: {
    title: "Horizon – Temporäre Voice Kanäle für Discord",
    description:
      "Horizon Bot erstellt automatisch einen privaten Discord-Voice-Kanal, sobald ein Nutzer beitritt. Der Kanal löscht sich selbst, wenn er leer ist. Kostenlos, keine Konfiguration nötig.",
    keywords: [
      "Discord Bot",
      "temporäre Voice Kanäle Discord",
      "temp vc Bot",
      "Join to Create Discord",
      "automatischer Voice Kanal Discord",
      "Discord Voice Channel Bot",
      "dynamische Sprachkanäle",
      "privater Voice Kanal Bot",
      "Horizon Discord Bot",
      "kostenloser Discord Bot",
      "Discord Utility Bot",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;
  const content = CONTENT[locale] ?? CONTENT.en;

  return {
    metadataBase: new URL(BASE_URL),
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: BASE_URL,
        de: `${BASE_URL}/de`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      siteName: "Horizon",
      images: [
        {
          url: "/logo.png",
          width: 480,
          height: 480,
          alt: "Horizon Bot Logo",
        },
      ],
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary",
      title: content.title,
      description: content.description,
      images: ["/logo.png"],
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
          data-sample-rate="0.2"
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

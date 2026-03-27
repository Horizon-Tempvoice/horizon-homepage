import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import CookieBanner from "@/components/CookieBanner";
import IntlProvider from "@/components/IntlProvider";
import { routing } from "@/i18n/routing";
import "../globals.css";

const BASE_URL = "https://horizon-bot.me";
const DESCRIPTION =
  "Horizon automatically spins up a private voice channel when a user joins a Join to Create channel. Once everyone leaves, the channel is deleted.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonicalUrl = locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: "Horizon - Temporary Voice Channels",
    description: DESCRIPTION,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: BASE_URL,
        de: `${BASE_URL}/de`,
      },
    },
    openGraph: {
      title: "Horizon - Temporary Voice Channels",
      description: DESCRIPTION,
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
      title: "Horizon - Temporary Voice Channels",
      description: DESCRIPTION,
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
      <body className="antialiased">
        <IntlProvider locale={locale} messages={messages}>
          {children}
          <CookieBanner />
        </IntlProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: "Horizon - Temporary Voice Channels",
  description:
    "Horizon automatically spins up a private voice channel when a user joins a Join to Create channel. Once everyone leaves, the channel is deleted.",
  openGraph: {
    title: "Horizon - Temporary Voice Channels",
    description:
      "Horizon automatically spins up a private voice channel when a user joins a Join to Create channel. Once everyone leaves, the channel is deleted.",
    url: "https://horizon-bot.cloud",
    siteName: "Horizon",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon - Temporary Voice Channels",
    description:
      "Horizon automatically spins up a private voice channel when a user joins a Join to Create channel. Once everyone leaves, the channel is deleted.",
    images: ["/logo.png"],
  },
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

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

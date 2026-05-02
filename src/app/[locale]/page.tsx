import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import Connect from "@/components/Connect";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GuildMarquee from "@/components/GuildMarquee";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Showcase from "@/components/Showcase";

const BASE_URL = "https://horizon-bot.me";

async function buildSchemas(locale: string) {
  const t = await getTranslations({ locale, namespace: "faq" });
  const faqItems = t.raw("items") as { question: string; answer: string }[];
  const isDE = locale === "de";

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Horizon",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Discord Bot",
    operatingSystem: "Discord",
    description: isDE
      ? "Horizon erstellt automatisch temporäre Voice-Kanäle auf Discord. Tritt einem Join-to-Create-Kanal bei – Horizon erstellt sofort einen privaten Raum, der sich selbst löscht. Kostenlos, keine Konfiguration nötig."
      : "Horizon automatically creates temporary voice channels on Discord. Join a Join to Create channel — Horizon spins up a private room that deletes itself once empty. Free, no configuration needed.",
    url: BASE_URL,
    featureList: isDE
      ? [
          "Temporäre Sprachkanäle",
          "Join to Create",
          "Automatisches Löschen leerer Kanäle",
          "Nutzer-gesteuerte Berechtigungen",
          "Session-Profile",
          "Keine Konfiguration nötig",
        ]
      : [
          "Temporary voice channels",
          "Join to Create",
          "Auto-delete empty channels",
          "User-controlled permissions",
          "Session profiles",
          "Zero configuration",
        ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Diamondforge Labs",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return { softwareApp, faqPage };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const { softwareApp, faqPage } = await buildSchemas(locale);

  return (
    <main
      key={locale}
      className="bg-[#080a10] text-[#dde2f0] overflow-x-hidden animate-page-fade [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00A0FF]"
    >
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted JSON-LD data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted JSON-LD data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <Loader />
      <Navbar />
      <Hero />
      <Showcase />
      <Suspense>
        <GuildMarquee />
      </Suspense>
      <FAQ />
      <Connect />
      <ScrollToTop />
      <Footer />
    </main>
  );
}

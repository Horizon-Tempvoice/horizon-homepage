import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import Connect from "@/components/Connect";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GuildMarquee from "@/components/GuildMarquee";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Showcase from "@/components/Showcase";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Horizon",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Discord Bot",
  operatingSystem: "Discord",
  description:
    "Horizon automatically creates temporary voice channels on Discord. When someone joins a Join to Create channel, Horizon spins up a private room that deletes itself once empty. Free, no configuration needed.",
  url: "https://horizon-bot.me",
  featureList: [
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-[#080a10] text-[#dde2f0] overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00A0FF]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static, trusted JSON-LD data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Suspense>
        <GuildMarquee />
      </Suspense>
      <Connect />
      <ScrollToTop />
      <Footer />
    </main>
  );
}

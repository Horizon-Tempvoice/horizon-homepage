import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import Connect from "@/components/Connect";
import GuildMarquee from "@/components/GuildMarquee";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

export default async function IframePage() {
  setRequestLocale("en");

  return (
    <main className="bg-[#080a10] text-[#dde2f0] overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00A0FF]">
      <Hero />
      <Showcase />
      <Suspense>
        <GuildMarquee />
      </Suspense>
      <Connect />
    </main>
  );
}

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GuildMarquee from "@/components/GuildMarquee";
import Connect from "@/components/Connect";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#080a10] text-[#dde2f0] overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#00A0FF]">
      <Loader />
      <Navbar />
      <Hero />
      <Features />
      <GuildMarquee />
      <Connect />
      <ScrollToTop />
      <Footer />
    </main>
  );
}

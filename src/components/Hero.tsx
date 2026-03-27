import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A0FF]/10 via-[#080a10] to-[#080a10]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left mt-16 lg:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("headline")}{" "}
              <span className="text-brand">{t("headlineAccent")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              {t.rich("description", {
                highlight: (chunks) => (
                  <span className="text-brand">{chunks}</span>
                ),
              })}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 justify-center lg:justify-start">
              <Link
                href="https://invite.horizon-bot.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gradient-bg shine-effect px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
              >
                {t("inviteButton")}
              </Link>
              <Link
                href="https://docs.horizon-bot.me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-colors duration-300"
              >
                {t("docsButton")}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-[#00A0FF] rounded-3xl blur-3xl opacity-20" />
            <Image
              src="/logo.png"
              alt="Horizon"
              width={480}
              height={480}
              className="relative rounded-3xl w-full max-w-md mx-auto floating"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

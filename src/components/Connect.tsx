import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Connect() {
  const t = await getTranslations("connect");

  return (
    <section className="bg-[#080a10] min-h-[60vh] flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-32">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-4 text-white">{t("title")}</h2>
        <p className="text-xl text-white/70">{t("subtitle")}</p>
      </div>
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-8 items-stretch sm:px-6 lg:px-8">
        <div className="feature-card bg-white/5 border border-white/10 rounded-2xl p-6 w-full">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/logo.png"
              alt="Horizon"
              width={48}
              height={48}
              className="rounded-xl"
            />
            <div>
              <h3 className="text-white text-xl font-bold">
                {t("community.name")}
              </h3>
              <p className="text-white/70 text-sm">
                {t("community.description")}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/70 text-sm"></div>
            <Link
              href="https://support.horizon-bot.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              {t("community.joinButton")}
            </Link>
          </div>
        </div>

        <div className="feature-card bg-white/5 border border-white/10 rounded-2xl p-6 w-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">{t("docs.name")}</h3>
              <p className="text-white/70 text-sm">{t("docs.description")}</p>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link
              href="https://docs.horizon-bot.me"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg hover:opacity-90 text-white text-sm font-medium px-4 py-2 rounded-lg transition-opacity"
            >
              {t("docs.viewButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

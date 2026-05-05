"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getConsentLevel, setConsentLevel } from "@/lib/cookieConsent";

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsentLevel() === "none") setVisible(true);

    function onConsentChange(e: Event) {
      if ((e as CustomEvent<string>).detail === "none") setVisible(true);
    }
    window.addEventListener("consent-change", onConsentChange);
    return () => window.removeEventListener("consent-change", onConsentChange);
  }, []);

  async function accept(level: "necessary" | "all") {
    await setConsentLevel(level);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] backdrop-blur-md bg-[#111318]/70 border border-white/10 rounded-2xl p-6 shadow-2xl">
      <p className="text-lg font-bold text-white mb-3">{t("title")}</p>
      <p className="text-sm text-[#9ba3b8] leading-relaxed mb-5">
        {t("description")}
      </p>
      <div className="flex gap-2 mb-3">
        <button
          type="button"
          onClick={() => accept("necessary")}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          {t("necessary")}
        </button>
        <button
          type="button"
          onClick={() => accept("all")}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          {t("acceptAll")}
        </button>
      </div>
      <Link
        href="/privacy"
        className="block text-center text-xs text-[#9ba3b8] hover:text-white/80 transition-colors duration-200"
      >
        {t("privacy")}
      </Link>
    </div>
  );
}

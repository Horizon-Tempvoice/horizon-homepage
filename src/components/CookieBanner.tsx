"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-[#111318] border border-white/10 rounded-2xl p-6 shadow-2xl">
      <p className="text-lg font-bold text-white mb-3">{t("title")}</p>
      <p className="text-sm text-[#9ba3b8] leading-relaxed mb-5">
        {t("description")}
      </p>
      <div className="flex gap-3">
        <Link
          href="/privacy"
          className="flex-1 text-center bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200"
        >
          {t("privacy")}
        </Link>
        <button
          type="button"
          onClick={accept}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          {t("okay")}
        </button>
      </div>
    </div>
  );
}

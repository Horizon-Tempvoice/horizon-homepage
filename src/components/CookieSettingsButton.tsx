"use client";

import { useTranslations } from "next-intl";
import { resetConsent } from "@/lib/cookieConsent";

export default function CookieSettingsButton() {
  const t = useTranslations("footer");
  return (
    <button
      type="button"
      onClick={() => resetConsent()}
      className="text-white/50 hover:text-white transition-colors"
    >
      {t("nav.cookieSettings")}
    </button>
  );
}

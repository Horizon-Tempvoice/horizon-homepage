"use client";

import { Cookie } from "lucide-react";
import { useTranslations } from "next-intl";
import { resetConsent } from "@/lib/cookieConsent";

export default function CookieSettingsButton() {
  const t = useTranslations("footer");
  return (
    <button
      type="button"
      onClick={() => resetConsent()}
      title={t("nav.cookieSettings")}
      aria-label={t("nav.cookieSettings")}
      className="text-white/50 hover:text-white transition-colors"
    >
      <Cookie size={14} />
    </button>
  );
}

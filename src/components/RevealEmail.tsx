"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function RevealEmail({ email }: { email: string }) {
  const t = useTranslations("revealEmail");
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="text-[#00A0FF] hover:underline cursor-pointer"
      >
        {t("label")}
      </button>
    );
  }

  return (
    <a href={`mailto:${email}`} className="text-[#00A0FF] hover:underline">
      {email}
    </a>
  );
}

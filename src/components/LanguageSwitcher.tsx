"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState, useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "English", countryCode: "us" },
  { code: "de", label: "Deutsch", countryCode: "de" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  function Flag({ countryCode }: { countryCode: string }) {
    return (
      <span
        className={`fi fi-${countryCode} rounded-sm`}
        style={{
          width: "1.25rem",
          height: "0.9375rem",
          display: "inline-block",
        }}
      />
    );
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(next: string) {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={isPending}
        className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 text-lg disabled:opacity-50"
        aria-label="Switch language"
      >
        <Flag countryCode={current.countryCode} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-[#1a1a2e]/95 backdrop-blur-md border border-white/10 shadow-xl z-50 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          {LOCALES.map((l) => (
            <button
              type="button"
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className="flex items-center gap-3 w-full px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors duration-150"
            >
              <Flag countryCode={l.countryCode} />
              <span className="flex-1 text-left">{l.label}</span>
              {l.code === locale && (
                <svg
                  className="w-4 h-4 text-brand"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Selected"
                  role="img"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

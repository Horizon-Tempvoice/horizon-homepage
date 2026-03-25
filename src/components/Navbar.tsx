"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="nav-blur bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Horizon"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500">
                Horizon
              </span>
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="text-white p-2"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>

            <Link
              href="https://invite.horizon-bot.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-all duration-300"
            >
              {t("invite")}
            </Link>
          </div>

          {open && (
            <div className="md:hidden animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 rounded-lg mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    document.getElementById("hero")?.scrollIntoView();
                  }}
                  className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
                >
                  {t("home")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    document.getElementById("features")?.scrollIntoView();
                  }}
                  className="block w-full text-left px-3 py-2 text-white/70 hover:text-white transition-colors"
                >
                  {t("features")}
                </button>
                <Link
                  href="https://invite.horizon-bot.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-white/70 hover:text-white transition-colors"
                >
                  {t("invite")}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

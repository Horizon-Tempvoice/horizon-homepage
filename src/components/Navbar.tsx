"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const _t = useTranslations("navbar");

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
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
              <span className="text-2xl font-bold text-white">
                <span className="sm:hidden">Horizon</span>
                <span className="hidden sm:inline">
                  Horizon | Temporary Channels
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                href="https://dashboard.horizon-bot.me"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-all duration-300"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

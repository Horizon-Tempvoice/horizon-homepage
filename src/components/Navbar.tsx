"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Navbar() {
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

            <Link
              href="https://invite.horizon-bot.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-all duration-300"
            >
              {t("invite")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

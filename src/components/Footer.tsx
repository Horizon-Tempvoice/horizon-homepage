import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logo.png"
              alt="Horizon"
              width={40}
              height={40}
              className="h-10 w-auto mb-6 rounded-lg"
            />
            <p className="text-lg text-white/70">{t("description")}</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#hero"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.features")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("links")}</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://invite.horizon-bot.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.invite")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.horizon-bot.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.support")}
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.horizon-bot.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.docs")}
                </Link>
              </li>
              <li>
                <Link
                    href="https://translate.horizon-bot.cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                >
                  {t("nav.translate")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Diamondforge Labs. {t("legal")}
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/imprint"
              className="text-white/50 hover:text-white transition-colors"
            >
              {t("nav.imprint")}
            </Link>
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white transition-colors"
            >
              {t("nav.privacy")}
            </Link>
            <Link
              href="/tos"
              className="text-white/50 hover:text-white transition-colors"
            >
              {t("nav.tos")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

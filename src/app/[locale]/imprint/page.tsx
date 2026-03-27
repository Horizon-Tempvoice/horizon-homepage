import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Imprint - Horizon",
  description:
    "Legal information and contact details for Horizon, operated by Diamondforge Labs.",
  robots: { index: false },
};

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <LegalLayout title="Imprint" subtitle="Information according to § 5 TMG">
      <div className="not-prose feature-card rounded-2xl p-6 mb-6 border border-yellow-500/20 bg-yellow-500/5">
        <p className="text-sm text-yellow-400/70 uppercase tracking-widest mb-2 font-medium">
          Notice
        </p>
        <p className="text-white/80 leading-relaxed">
          This project is operated on a strictly{" "}
          <strong className="text-white">
            non-commercial, non-profit basis
          </strong>
          . No fees are charged, no revenue is generated, and no financial
          compensation of any kind is received in connection with this project.
          It is developed and maintained as a private hobby project without any
          commercial intent.
        </p>
      </div>

      <div className="not-prose feature-card rounded-2xl p-6 mb-10">
        <p className="text-sm text-white/50 uppercase tracking-widest mb-4 font-medium">
          Contact
        </p>
        <div className="space-y-1 text-white/80 leading-relaxed">
          <p className="font-semibold text-white">Fabian Thomys</p>
          <p>c/o COCENTER</p>
          <p>Koppoldstr. 1</p>
          <p>86551 Aichach</p>
          <p>Germany</p>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-sm text-white/50 uppercase tracking-widest mb-2 font-medium">
            Email
          </p>
          <a
            href="mailto:hello@horizon-bot[dot]cloud"
            className="text-[#00A0FF] hover:underline"
          >
            hello@horizon-bot.me
          </a>
        </div>
      </div>
    </LegalLayout>
  );
}

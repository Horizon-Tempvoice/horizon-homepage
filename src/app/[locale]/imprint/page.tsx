import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Imprint - Horizon",
};

export default function ImprintPage() {
  return (
    <LegalLayout title="Imprint" subtitle="Information according to § 5 TMG">
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
            href="mailto:hello@horizon-bot.cloud"
            className="text-[#00A0FF] hover:underline"
          >
            hello@horizon-bot.cloud
          </a>
        </div>
      </div>
    </LegalLayout>
  );
}

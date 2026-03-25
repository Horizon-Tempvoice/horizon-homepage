import { Zap, Trash2, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons: LucideIcon[] = [Zap, Trash2, Settings];

export default async function Features() {
  const t = await getTranslations("features");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">{t("sectionTitle")}</h2>
          <p className="text-xl text-white/70">{t("sectionSubtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="feature-card p-8 rounded-2xl">
                <div className="w-14 h-14 gradient-bg rounded-xl mb-6 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

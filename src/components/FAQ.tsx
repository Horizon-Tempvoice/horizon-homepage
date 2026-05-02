import { getTranslations } from "next-intl/server";
import FAQAccordion from "./FAQAccordion";

type FAQItem = { question: string; answer: string };

export default async function FAQ() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as FAQItem[];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-xl text-white/50">{t("sectionSubtitle")}</p>
        </div>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}

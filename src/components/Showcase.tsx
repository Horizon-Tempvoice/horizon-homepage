import { getTranslations } from "next-intl/server";
import ShowcaseItem from "./ShowcaseItem";

type ShowcaseEntry = {
  title: string;
  description: string;
};

function renderDescription(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const [, label, href] = match;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        key={part}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-brand underline-offset-4 hover:underline"
      >
        {label}
      </a>
    );
  });
}

export default async function Showcase() {
  const [ts, tf] = await Promise.all([
    getTranslations("showcase"),
    getTranslations("features"),
  ]);
  const items = ts.raw("items") as ShowcaseEntry[];

  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">{tf("sectionTitle")}</h2>
          <p className="text-xl text-white/70">{tf("sectionSubtitle")}</p>
        </div>
        <div className="flex flex-col gap-24">
          {items.map((item, i) => (
            <ShowcaseItem
              key={item.title}
              index={i}
              title={item.title}
              description={renderDescription(item.description)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

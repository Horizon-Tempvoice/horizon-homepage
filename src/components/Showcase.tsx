import Image from "next/image";
import { getTranslations } from "next-intl/server";

type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default async function Showcase() {
  const t = await getTranslations("showcase");
  const items = t.raw("items") as ShowcaseItem[];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-32">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              i % 2 === 0 ? "" : "md:[direction:rtl] [&>*]:[direction:ltr]"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#00A0FF] rounded-2xl blur-3xl opacity-10" />
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-2xl"
                  priority={i === 0}
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

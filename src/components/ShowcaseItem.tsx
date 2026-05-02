"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  index: number;
  title: string;
  description: ReactNode;
};

export default function ShowcaseItem({ index, title, description }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isOdd = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`relative max-w-2xl space-y-4 self-start pl-8 transition-all duration-700 ease-out delay-200 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${isOdd ? "md:self-end md:pl-0 md:pr-8 md:text-right" : ""}`}
    >
      <div
        aria-hidden="true"
        className={`absolute top-0 bottom-0 w-[2px] bg-[#00A0FF] left-0 origin-top transition-transform duration-1000 ease-out ${
          inView ? "scale-y-100" : "scale-y-0"
        } ${isOdd ? "md:left-auto md:right-0" : ""}`}
      />
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
      <p className="text-lg text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

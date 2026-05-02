"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = { question: string; answer: string };

function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItem & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left font-medium hover:underline"
      >
        {question}
        <ChevronDown
          className={`ml-4 h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-sm text-white/70 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="w-full">
      {items.map(({ question, answer }, i) => (
        <AccordionItem
          key={question}
          question={question}
          answer={answer}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  );
}

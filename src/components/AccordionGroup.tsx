"use client";

import { useState } from "react";

type Item = { title: string; body: string };

export default function AccordionGroup({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={item.title} className="border-t border-white/[0.06] last:border-b last:border-white/[0.06]">
          <button
            className="flex items-center justify-between py-6 w-full text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-[18px] font-medium text-[#D4B996] tracking-[-0.01em]">
              {item.title}
            </span>
            <svg
              className={`shrink-0 text-[#D4B996]/60 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              width="16" height="16" viewBox="0 0 12 12" fill="none"
            >
              <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-6">
              <span className="text-[14px] text-[#C2C7D0] leading-relaxed">
                {item.body}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

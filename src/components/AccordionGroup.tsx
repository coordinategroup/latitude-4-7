"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Item = { title: string; body: string };

export default function AccordionGroup({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={item.title} className="border-t border-black/[0.08] last:border-b last:border-black/[0.08]">
          <button
            className="flex items-center justify-between py-6 w-full text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-[18px] font-medium text-[#0A0A0B] tracking-[-0.01em]">
              {item.title}
            </span>
            <svg
              className={`shrink-0 text-[#0A0A0B]/40 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              width="16" height="16" viewBox="0 0 12 12" fill="none"
            >
              <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-6">
                  <span className="text-[14px] text-[#0A0A0B]/55 leading-relaxed">
                    {item.body}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Significantly faster than traditional executive recruitment. Because I operate as a B2B partner via Latitude Four Seven, I can bypass the typical 4-6 month hiring cycle. My availability for on-island, in-person work depends on the project phases of my current client portfolio, but I can typically be on the ground in Victoria within less than a week.",
  },
  {
    q: "Are you available for interim roles?",
    a: "Yes. I specialise in High-Impact Interims, stepping in to rescue stalling projects or provide leadership during the critical 3-6 month setup phase of a new department or digital initiative.",
  },
  {
    q: "Can you fill a fractional leadership gap?",
    a: "Absolutely. I can act as a Digital Advisor for a set number of days per month, providing the same professional standards without the commitment of a full-time permanent hire.",
  },
  {
    q: "How do you handle the notice period?",
    a: "My consultancy structure, Latitude Four Seven, is designed for immediate deployment. I manage my own transition logistics, ensuring there is zero administrative lag for the Seychelles Government or banking partners.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#08090A] py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-0">
          <h2 className="text-[36px] md:text-[36.8px] font-medium text-[#F8FAFC] tracking-[-0.02em]">
            What we&apos;re often asked
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/40 hidden md:block">
            FAQ
          </span>
        </div>

        {/* Accordion */}
        <div className="flex flex-col max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/[0.08]">
              <button
                className="w-full flex items-center justify-between gap-8 py-8 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[17px] font-medium text-[#F8FAFC] tracking-[-0.01em] group-hover:text-[#F8FAFC]/70 transition-colors duration-200">
                  {faq.q}
                </span>
                <span className={`w-5 h-5 shrink-0 flex items-center justify-center rounded-full border border-white/20 text-[#939DB8]/70 transition-all duration-300 ${open === i ? "rotate-45 border-white/40 text-[#F8FAFC]" : ""}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <p className="text-[14pt] md:text-[16pt] text-[#939DB8] leading-relaxed pb-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

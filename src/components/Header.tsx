"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const capabilities = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Designing national digital systems that remain under full local jurisdictional control.",
    href: "#",
  },
  {
    index: "02",
    label: "Governance Frameworks",
    description: "Building the policy and oversight structures that make technology accountable.",
    href: "#",
  },
  {
    index: "03",
    label: "Product Leadership",
    description: "Embedding senior product expertise directly into government and institutional programmes.",
    href: "#",
  },
];

export default function Header() {
  const [capOpen, setCapOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#08090A]/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="px-20 md:px-32 py-[21px] flex items-center justify-between">

        <a href="/">
          <Image
            src="/images/Logos/latitude_logo.png"
            alt="Latitude 4.7"
            width={191}
            height={55}
            className="block object-contain object-left"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">

          {/* Capabilities mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setCapOpen(true)}
            onMouseLeave={() => setCapOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors">
              Capabilities
              <motion.svg
                width="11" height="11" viewBox="0 0 12 12" fill="none"
                animate={{ rotate: capOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </button>

            <AnimatePresence>
              {capOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-full right-0 mt-4 w-[680px] bg-[#08090A]/95 backdrop-blur-md border border-white/[0.08]"
                >
                  {/* Gold accent line */}
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#D4B996] to-transparent" />

                  <div className="grid grid-cols-3 divide-x divide-white/[0.06] p-0">
                    {capabilities.map((item, i) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.25 }}
                        className="group flex flex-col gap-4 p-7 hover:bg-white/[0.03] transition-colors"
                      >
                        <span className="font-mono text-[11px] tracking-[0.22em] text-[#D4B996]/50 uppercase">
                          {item.index}
                        </span>
                        <div className="flex flex-col gap-2">
                          <span className="text-[14px] font-medium text-[#F8FAFC] tracking-[-0.01em] group-hover:text-white transition-colors">
                            {item.label}
                          </span>
                          <span className="text-[12px] text-[#8a8f98] leading-[1.6]">
                            {item.description}
                          </span>
                        </div>
                        <span className="flex items-center gap-1.5 text-[12px] text-[#D4B996]/60 group-hover:text-[#D4B996] transition-colors mt-auto">
                          Explore
                          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/research" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors">
            Research &amp; Perspectives
          </a>
          <a href="/who-we-are" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors">
            Who We Are
          </a>
          <a href="#contact" className="text-[13px] bg-white text-[#08090A] px-5 py-2 rounded-[4px] font-medium hover:bg-white/90 transition-colors">
            Secure briefing
          </a>
        </nav>

        {/* Mobile */}
        <a href="#contact" className="md:hidden text-[13px] bg-white text-[#08090A] px-4 py-2 rounded-[4px] font-medium">
          Secure briefing
        </a>

      </div>
    </header>
  );
}

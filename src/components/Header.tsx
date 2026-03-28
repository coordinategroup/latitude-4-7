"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const capabilities = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Designing national digital systems that remain under full local sovereign control.",
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
    label: "Digital Leadership",
    description: "Embedding senior digital expertise directly into government and institutional programmes.",
    href: "#",
  },
];

export default function Header() {
  const [capOpen, setCapOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCapOpen, setMobileCapOpen] = useState(false);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setCapOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setCapOpen(false), 120);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  useEffect(() => {
    if (capOpen) setHoveredItem(0);
  }, [capOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-500"
        onMouseEnter={cancelClose}
        style={{
          backgroundColor: scrolled ? "rgba(8,9,10,0.90)" : "transparent",
          borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="px-4 md:px-20 lg:px-32 pt-[32px] pb-[20px] flex items-center justify-between">

          <a href="/">
            <Image
              src="/images/Logos/latitude_logo.png"
              alt="Latitude 4.7"
              width={191}
              height={55}
              className="block object-contain object-left transition-opacity duration-300"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">

            {/* Capabilities trigger */}
            <div
              className="relative"
              onMouseEnter={openMenu}
            >
              <button
                className="group relative flex items-center gap-1.5 text-[10px] text-[#F8FAFC] hover:text-white transition-colors px-3 py-1.5"
              >
                <span className={`absolute top-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute top-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute top-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute top-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute bottom-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute bottom-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute bottom-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
                <span className={`absolute bottom-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] tracking-widest">CAPABILITIES</span>
                <motion.svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none"
                  animate={{ rotate: capOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
            </div>

            <a href="/research-and-perspectives" className="group relative text-[10px] text-[#F8FAFC] hover:text-white transition-colors px-3 py-1.5">
              <span className={`absolute top-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] tracking-widest">RESEARCH_&amp;_PERSPECTIVES</span>
            </a>

            <a href="/who-we-are" className="group relative text-[10px] text-[#F8FAFC] hover:text-white transition-colors px-3 py-1.5">
              <span className={`absolute top-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute top-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40`} />
              <span className={`absolute bottom-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40`} />
              <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] tracking-widest">WHO_WE_ARE</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2 text-[10px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 hover:translate-x-px transition-all duration-300"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              SECURE_BRIEFING
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-6 h-px bg-[#F8FAFC] block" />
            <span className="w-6 h-px bg-[#F8FAFC] block" />
            <span className="w-4 h-px bg-[#F8FAFC] block" />
          </button>

        </div>
      </header>

      <AnimatePresence>
        {capOpen && (
          <>
            {/* Blurred backdrop — full screen, behind the panel, closes on hover */}
            <motion.div
              className="fixed inset-0 z-30"
              style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.25)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={scheduleClose}
            />

            {/* White panel — content width with gutters */}
            <motion.div
              className="fixed top-[108px] left-20 right-20 md:left-32 md:right-32 z-40 bg-[#16181D] border border-white/[0.08] flex flex-col overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              {/* Gold rule at top */}
              <div className="h-[1px] w-full bg-gradient-to-r from-[#D4B996] via-[#D4B996]/40 to-transparent" />

              {/* Capabilities list */}
              <div className="flex flex-col justify-center py-10">
                <p className="font-mono text-[11px] tracking-[0.22em] text-[#D4B996] uppercase mb-10 px-12">
                  Capabilities
                </p>

                <div className="flex flex-col divide-y divide-white/[0.06]">
                  {capabilities.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="group relative flex items-center gap-10 py-8 px-12 transition-colors duration-150"
                      onMouseEnter={() => setHoveredItem(i)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.25 }}
                    >
                      {hoveredItem === i && (
                        <div className="absolute inset-0 bg-white" />
                      )}
                      <span className={`relative font-mono text-[12px] tracking-[0.15em] w-7 shrink-0 transition-colors duration-150 ${hoveredItem === i ? "text-[#C5A059]" : "text-[#D4B996]"}`}>
                        {item.index}
                      </span>
                      <div className="flex-1 flex items-baseline gap-8">
                        <span
                          className={`relative font-normal tracking-[-0.02em] leading-none transition-colors duration-150 ${hoveredItem === i ? "text-[#0A0A0B]" : "text-[#F8FAFC]"}`}
                          style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(28px, 3vw, 52px)" }}
                        >
                          {item.label}
                        </span>
                        <span className={`relative text-[13px] leading-relaxed max-w-xs transition-all duration-150 ${hoveredItem === i ? "text-[#0A0A0B]/50 opacity-100" : "text-[#F8FAFC]/40 opacity-0"}`}>
                          {item.description}
                        </span>
                      </div>
                      <svg
                        className={`relative w-5 h-5 transition-all duration-150 shrink-0 mr-2 ${hoveredItem === i ? "text-[#0A0A0B]/40 opacity-100 translate-x-0" : "text-[#D4B996] opacity-0 -translate-x-2"}`}
                        viewBox="0 0 14 14" fill="none"
                      >
                        <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom label */}
              <motion.div
                className="px-12 pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <p className="font-mono text-[11px] tracking-[0.22em] text-white/20 uppercase">
                  Latitude Four Seven — Seychelles Digital Advisory
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Mobile full-screen menu ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#08090A] flex flex-col md:hidden"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-white/[0.06]">
              <a href="/" onClick={() => setMobileOpen(false)}>
                <Image
                  src="/images/Logos/latitude_logo.png"
                  alt="Latitude 4.7"
                  width={140}
                  height={40}
                  className="object-contain object-left"
                />
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#F8FAFC]"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Gold rule */}
            <div className="h-px bg-gradient-to-r from-[#D4B996] via-[#D4B996]/40 to-transparent" />

            {/* Nav items */}
            <div className="flex flex-col divide-y divide-white/[0.06] flex-1 overflow-y-auto">

              {/* Capabilities — expandable */}
              <div>
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setMobileCapOpen(!mobileCapOpen)}
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  <span className="text-[11px] tracking-widest text-[#F8FAFC] uppercase">CAPABILITIES</span>
                  <motion.svg
                    width="16" height="16" viewBox="0 0 12 12" fill="none"
                    animate={{ rotate: mobileCapOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M2 4.5L6 8l4-3.5" stroke="#D4B996" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {mobileCapOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col divide-y divide-white/[0.04] pl-10 pr-6 pb-4">
                        {capabilities.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-4 text-[11px] tracking-widest text-[#8a8f98] hover:text-[#D4B996] transition-colors duration-150 uppercase"
                            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                          >
                            _{item.label.replace(/ /g, "_")}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="/research-and-perspectives"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-5 text-[11px] tracking-widest text-[#F8FAFC] uppercase"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                RESEARCH_&amp;_PERSPECTIVES
              </a>
              <a
                href="/who-we-are"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-5 text-[11px] tracking-widest text-[#F8FAFC] uppercase"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                WHO_WE_ARE
              </a>
            </div>

            {/* Secure briefing CTA */}
            <div className="px-6 pb-12 pt-6 border-t border-white/[0.06]">
              <a
                href="mailto:contact@latitudefourseven.com"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-4 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                SECURE_BRIEFING
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

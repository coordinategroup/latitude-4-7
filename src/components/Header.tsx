"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SecureBriefingModal from "./SecureBriefingModal";
const capabilities = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Designing national digital systems that remain under full local sovereign control.",
    href: "/sovereign-architecture",
  },
  {
    index: "02",
    label: "Governance Frameworks",
    description: "Building the policy and oversight structures that make technology accountable.",
    href: "/governance-frameworks",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Embedding senior digital expertise directly into government and institutional programmes.",
    href: "/digital-leadership",
  },
];

export default function Header() {
  const [capOpen, setCapOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const capTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCap = useCallback(() => {
    if (capTimeout.current) clearTimeout(capTimeout.current);
    setCapOpen(true);
    setAboutOpen(false);
    if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
  }, []);
  const closeCap = useCallback(() => {
    capTimeout.current = setTimeout(() => setCapOpen(false), 120);
  }, []);
  const openAbout = useCallback(() => {
    if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
    setAboutOpen(true);
    setCapOpen(false);
    if (capTimeout.current) clearTimeout(capTimeout.current);
  }, []);
  const closeAbout = useCallback(() => {
    aboutTimeout.current = setTimeout(() => setAboutOpen(false), 120);
  }, []);
  useEffect(() => {
    const onScroll = () => {
      setCapOpen(false);
      setAboutOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Notification bar */}

      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]"
        style={{ backgroundColor: "rgba(8,9,10,1)" }}
      >
        <div className="px-4 md:px-20 lg:px-32 pt-[32px] pb-[28px] flex items-center justify-between relative">

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

          {/* Desktop nav — three items centred absolutely */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">

            {/* Capabilities trigger */}
            <div className="relative" onMouseEnter={openCap} onMouseLeave={closeCap}>
              <button
                className="group relative flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors"
              >
                <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[12px] tracking-widest">CAPABILITIES</span>
                <motion.svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none"
                  animate={{ rotate: capOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
            </div>

            <a
              href="/research-and-perspectives"
              className="text-[12px] tracking-widest text-[#F8FAFC] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              RESEARCH & PERSPECTIVES
            </a>

            {/* About Us trigger */}
            <div className="relative" onMouseEnter={openAbout} onMouseLeave={closeAbout}>
              <button
                className="group relative flex items-center gap-1.5 text-[#F8FAFC] hover:text-white transition-colors"
              >
                <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[12px] tracking-widest">ABOUT US</span>
                <motion.svg
                  width="11" height="11" viewBox="0 0 12 12" fill="none"
                  animate={{ rotate: aboutOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <path d="M2 4.5L6 8l4-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </button>
            </div>
          </nav>

          {/* Right: CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setBriefingOpen(true)}
              className="hidden md:inline-flex px-5 py-2 text-[12px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 hover:translate-x-px transition-all duration-300"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              SECURE BRIEFING
            </button>

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

        </div>

        {/* ── Capabilities dropdown ───────────────────────────────────── */}
        <AnimatePresence>
          {capOpen && (
            <motion.div
              className="hidden md:block absolute top-full left-0 right-0 border-b border-white/[0.08]"
              style={{ backgroundColor: "rgba(8,9,10,1)" }}
              onMouseEnter={openCap}
              onMouseLeave={closeCap}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="px-4 md:px-20 lg:px-32 py-8">
                <p className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase mb-5" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Capabilities
                </p>
                <div className="flex flex-col">
                  {capabilities.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setCapOpen(false)}
                      className="group py-4 border-t border-white/[0.06] last:border-b last:border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200"
                    >
                      <span className="text-[18px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── About Us dropdown ───────────────────────────────────────── */}
        <AnimatePresence>
          {aboutOpen && (
            <motion.div
              className="hidden md:block absolute top-full left-0 right-0 border-b border-white/[0.08]"
              style={{ backgroundColor: "rgba(8,9,10,1)" }}
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="px-4 md:px-20 lg:px-32 py-8">
                <p className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase mb-5" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  About Us
                </p>
                <div className="flex flex-col">
                  {[
                    { label: "Who We Are", href: "/who-we-are" },
                    { label: "Leadership", href: "/leadership" },
                    { label: "Sustainability", href: "/sustainability" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setAboutOpen(false)}
                      className="group py-4 border-t border-white/[0.06] last:border-b last:border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200"
                    >
                      <span className="text-[18px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

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
            <div className="flex flex-col flex-1 overflow-y-auto">

              {/* Capabilities group */}
              <div className="border-b border-white/[0.06]">
                <div className="px-6 pt-6 pb-3">
                  <span className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Capabilities
                  </span>
                </div>
                {capabilities.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between px-6 py-4 border-t border-white/[0.06]"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-[#D4B996]/40 text-[14px] leading-none">↳</span>
                      <span className="text-[17px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">
                        {item.label}
                      </span>
                    </span>
                    <svg className="w-4 h-4 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Research & Perspectives */}
              <a
                href="/research-and-perspectives"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between px-6 py-5 border-b border-white/[0.06]"
              >
                <span className="text-[17px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">
                  Research &amp; Perspectives
                </span>
                <svg className="w-4 h-4 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* About Us group */}
              <div className="border-b border-white/[0.06]">
                <div className="px-6 pt-6 pb-3">
                  <span className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    About Us
                  </span>
                </div>
                {[
                  { label: "Who We Are", href: "/who-we-are" },
                  { label: "Leadership", href: "/leadership" },
                  { label: "Sustainability", href: "/sustainability" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center justify-between px-6 py-4 border-t border-white/[0.06]"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-[#D4B996]/40 text-[14px] leading-none">↳</span>
                      <span className="text-[17px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">
                        {item.label}
                      </span>
                    </span>
                    <svg className="w-4 h-4 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

            </div>

            {/* Secure briefing CTA */}
            <div className="px-6 pb-12 pt-6 border-t border-white/[0.06]">
              <button
                onClick={() => { setMobileOpen(false); setBriefingOpen(true); }}
                className="block w-full text-center py-4 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                SECURE BRIEFING
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <SecureBriefingModal isOpen={briefingOpen} onClose={() => setBriefingOpen(false)} />
    </>
  );
}

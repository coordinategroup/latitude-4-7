"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
type NavArticle = {
  _id: string;
  type: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset: { url: string } };
};

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
const [navArticles, setNavArticles] = useState<NavArticle[]>([]);
  useEffect(() => {
    if (capOpen) {
      fetch("/api/nav-articles")
        .then((r) => r.json())
        .then(setNavArticles);
    }
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
            >
              <button
                className="group relative flex items-center gap-1.5 text-[10px] text-[#F8FAFC] hover:text-white transition-colors px-5 py-2"
                onClick={() => setCapOpen(v => !v)}
              >
                <span className="absolute top-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40" />
                <span className="absolute top-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40" />
                <span className="absolute top-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40" />
                <span className="absolute top-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40" />
                <span className="absolute bottom-0 left-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40" />
                <span className="absolute bottom-0 left-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40" />
                <span className="absolute bottom-0 right-0 w-2.5 h-[1px] group-hover:w-full transition-all duration-300 bg-white/40" />
                <span className="absolute bottom-0 right-0 w-[1px] h-2.5 group-hover:h-full transition-all duration-300 bg-white/40" />
                <span style={{ fontFamily: "var(--font-jetbrains-mono)" }} className="text-[10px] tracking-widest">{capOpen ? "CLOSE_STRATEGY" : "VIEW_STRATEGY"}</span>
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


      {/* ── Desktop full-page capabilities overlay ───────────────────── */}
      <AnimatePresence>
        {capOpen && (
          <motion.div
            className="hidden md:flex fixed inset-0 z-40 bg-[#08090A] flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Gold rule */}
            <div className="h-px bg-gradient-to-r from-[#D4B996] via-[#D4B996]/40 to-transparent shrink-0" />

            {/* Content */}
            <div className="flex-1 px-20 lg:px-32 pt-36 pb-16 grid grid-cols-[1fr_1fr] gap-24 overflow-hidden">

              {/* Left: navigation */}
              <div className="flex flex-col justify-start gap-2 border-r border-white/[0.06] pr-24">
                <p className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase mb-8" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Navigation
                </p>
                {[...capabilities.map(item => ({ label: item.label, href: item.href, nested: true })),
                  { label: "Research & Perspectives", href: "/research-and-perspectives", nested: false },
                  { label: "Who We Are", href: "/who-we-are", nested: false },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setCapOpen(false)}
                    className="group flex items-center justify-between py-5 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200"
                  >
                    <span className="flex items-center gap-3">
                      {item.nested && (
                        <span className="text-[#D4B996]/40 text-[18px] leading-none">↳</span>
                      )}
                      <span className="text-[28px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">
                        {item.label}
                      </span>
                    </span>
                    <svg className="w-5 h-5 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Right: articles 2x2 */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center justify-between mb-8 shrink-0">
                  <p className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Research &amp; Perspectives
                  </p>
                  <a
                    href="/research-and-perspectives"
                    onClick={() => setCapOpen(false)}
                    className="text-[10px] tracking-widest text-[#D4B996]/50 hover:text-[#D4B996] transition-colors duration-200 uppercase"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    View all →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {navArticles.map((article) => (
                    <a
                      key={article._id}
                      href={`/research-and-perspectives/${article.slug.current}`}
                      onClick={() => setCapOpen(false)}
                      className="group flex flex-col overflow-hidden border border-white/[0.06] hover:border-white/[0.14] transition-colors duration-200"
                    >
                      <div className="relative flex-1 min-h-[160px] bg-white/[0.03] overflow-hidden">
                        {article.mainImage?.asset?.url ? (
                          <Image src={article.mainImage.asset.url} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        ) : (
                          <div className="absolute inset-0 bg-white/[0.03]" />
                        )}
                      </div>
                      <div className="flex flex-col gap-1 p-3 shrink-0">
                        <span className="text-[9px] tracking-widest text-[#8a8f98] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {article.type}
                        </span>
                        <span className="text-[12px] font-medium text-[#F8FAFC] leading-snug group-hover:text-[#D4B996] transition-colors duration-200 line-clamp-2 min-h-[2.75em]">
                          {article.title}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
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
              {[...capabilities.map(item => ({ label: item.label, href: item.href, nested: true })),
                { label: "Research & Perspectives", href: "/research-and-perspectives", nested: false },
                { label: "Who We Are", href: "/who-we-are", nested: false },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between px-6 py-5"
                >
                  <span className="flex items-center gap-2.5">
                    {item.nested && (
                      <span className="text-[#D4B996]/40 text-[14px] leading-none">↳</span>
                    )}
                    <span className="text-[18px] font-medium text-[#F8FAFC] tracking-[-0.02em] group-hover:text-[#D4B996] transition-colors duration-200">
                      {item.label}
                    </span>
                  </span>
                  <svg className="w-4 h-4 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
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

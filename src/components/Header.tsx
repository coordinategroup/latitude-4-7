"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SecureBriefingModal from "./SecureBriefingModal";
const capabilities = [
  {
    index: "01",
    label: "Souvren Architecture",
    description: "Building considerate digital systems that scale",
    href: "/sovereign-architecture",
  },
  {
    index: "02",
    label: "Experience Design",
    description: "Creating impactful digital products and services",
    href: "/experience-design",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Empowering local leaders and teams to succeed",
    href: "/digital-leadership",
  },
];

export default function Header({ transparentAtTop = false }: { transparentAtTop?: boolean }) {
  const [capOpen, setCapOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileFrameworksOpen, setMobileFrameworksOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
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
    setIsAtTop(window.scrollY < 10);
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastY;
      setCapOpen(false);
      setAboutOpen(false);
      setIsAtTop(currentY < 10);
      if (currentY > 10) {
        setHeaderHidden(scrollingDown);
      } else {
        setHeaderHidden(false);
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const atTop = transparentAtTop && isAtTop;
  const navTextClass = atTop
    ? "text-white hover:text-white/80"
    : "text-[#0A0A0B] hover:text-black";
  const underlineClass = atTop ? "bg-white" : "bg-[#292929]";

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        animate={{
          y: headerHidden ? "-100%" : 0,
          backgroundColor: atTop ? "rgba(0,0,0,0)" : "#FAFAFA",
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-[1932px] mx-auto px-4 md:px-[51px] lg:px-[56px] pt-[31px] pb-[31px] flex items-center justify-between">

          <a href="/">
            <Image
              src={atTop ? "/images/Logos/souvren_logo_white.svg" : "/images/Logos/souvren_logo.svg"}
              alt="Souvren"
              width={138}
              height={24}
              className="block object-contain object-left transition-all duration-300"
              priority
            />
          </a>

          {/* Right: nav + CTA + mobile hamburger */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-10">

              <button
                className={`group relative text-[15px] transition-colors duration-300 ${navTextClass}`}
                onMouseEnter={openCap} onMouseLeave={closeCap}
              >
                Frameworks
                <span className={`absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineClass}`} />
              </button>

              <a
                href="/research-and-perspectives"
                className={`group relative text-[15px] transition-colors duration-300 ${navTextClass}`}
              >
                Research & Perspectives
                <span className={`absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineClass}`} />
              </a>

              <a
                href="/case-studies"
                className={`group relative text-[15px] transition-colors duration-300 ${navTextClass}`}
              >
                Case Studies
                <span className={`absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineClass}`} />
              </a>

              <button
                className={`group relative text-[15px] transition-colors duration-300 ${navTextClass}`}
                onMouseEnter={openAbout} onMouseLeave={closeAbout}
              >
                About us
                <span className={`absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${underlineClass}`} />
              </button>

            </nav>

            <button
              onClick={() => setBriefingOpen(true)}
              className={`hidden lg:inline-flex items-center h-9 px-5 rounded-full text-[11px] tracking-widest uppercase transition-all duration-300 ${
                atTop
                  ? "text-white border border-white/40 hover:bg-white hover:text-[#110F0F]"
                  : "text-white bg-[#110F0F] hover:bg-[#2a2828]"
              }`}
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Contact
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="24" y2="1" stroke={atTop ? "white" : "#292929"} strokeWidth="2" />
                <line x1="0" y1="8" x2="24" y2="8" stroke={atTop ? "white" : "#292929"} strokeWidth="2" />
                <line x1="0" y1="15" x2="24" y2="15" stroke={atTop ? "white" : "#292929"} strokeWidth="2" />
              </svg>
            </button>
          </div>

        </div>

        {/* Frameworks full-width panel */}
        <AnimatePresence>
          {capOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full bg-[#FAFAFA] shadow-[0_8px_24px_rgba(0,0,0,0.08)] [clip-path:inset(0_-100px_-100px_-100px)]"
              onMouseEnter={openCap}
              onMouseLeave={closeCap}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-[1932px] mx-auto px-4 md:px-[51px] lg:px-[56px] pt-[28px] pb-[48px]">
                <span className="block text-[15px] text-[#0A0A0B]/70 leading-relaxed mb-3">Frameworks</span>
                <div className="flex gap-0">
                  {capabilities.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setCapOpen(false)}
                      className="group py-3 pr-16"
                    >
                      <div className="relative inline-block rounded pr-[18px] pl-[18px] py-[10px] -ml-[18px]">
                        <div className="absolute inset-0 rounded bg-[#EFEFEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative block text-[16px] font-medium text-[#292929] mb-1 group-hover:text-black transition-colors">{item.label}</span>
                        <span className="relative text-[15px] text-[#0A0A0B]/70 leading-relaxed line-clamp-2">{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* About us full-width panel */}
        <AnimatePresence>
          {aboutOpen && (
            <motion.div
              className="absolute left-0 right-0 top-full bg-[#FAFAFA] shadow-[0_8px_24px_rgba(0,0,0,0.08)] [clip-path:inset(0_-100px_-100px_-100px)]"
              onMouseEnter={openAbout}
              onMouseLeave={closeAbout}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-[1932px] mx-auto px-4 md:px-[51px] lg:px-[56px] pt-[28px] pb-[48px]">
                <span className="block text-[15px] text-[#0A0A0B]/70 leading-relaxed mb-3">About us</span>
                <div className="flex gap-0">
                  {[
                    { label: "Who We Are", href: "/who-we-are", description: "Our approach to supporting sovereign strategy" },
                    { label: "Leadership", href: "/leadership", description: "Providing seasoned experience and direction" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setAboutOpen(false)}
                      className="group py-3 pr-16"
                    >
                      <div className="relative inline-block rounded pr-[18px] pl-[18px] py-[10px] -ml-[18px]">
                        <div className="absolute inset-0 rounded bg-[#EFEFEF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative block text-[16px] font-medium text-[#292929] mb-1 group-hover:text-black transition-colors">{item.label}</span>
                        <span className="relative text-[15px] text-[#0A0A0B]/70 leading-relaxed line-clamp-2">{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>

      {/* ── Mobile dropdown menu ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed top-[86px] inset-x-0 bottom-0 z-[59] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-[86px] inset-x-0 bottom-0 z-[60] bg-[#FAFAFA] flex flex-col lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Nav items */}
              <div className="flex flex-col flex-1 justify-start pt-8 px-6 gap-1">

                {/* Frameworks group */}
                <button
                  className="flex items-center justify-between py-2 w-full text-left"
                  onClick={() => { setMobileFrameworksOpen((o) => !o); setMobileAboutOpen(false); }}
                >
                  <span className="text-[20px] font-medium text-[#0A0A0B] tracking-[-0.02em]">Frameworks</span>
                  <svg
                    className={`w-4 h-4 text-[#0A0A0B]/40 transition-transform duration-200 ${mobileFrameworksOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 14 14" fill="none"
                  >
                    <path d="M2.5 4.5L7 9.5L11.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {mobileFrameworksOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pl-3 mb-1">
                        {capabilities.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-[18px] text-[#0A0A0B]/60 hover:text-[#C48C59] transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Standalone links */}
                <a href="/research-and-perspectives" onClick={() => setMobileOpen(false)} className="py-2 text-[20px] font-medium text-[#0A0A0B] tracking-[-0.02em] hover:text-[#C48C59] transition-colors duration-200">
                  Research &amp; Perspectives
                </a>
                <a href="/case-studies" onClick={() => setMobileOpen(false)} className="py-2 text-[20px] font-medium text-[#0A0A0B] tracking-[-0.02em] hover:text-[#C48C59] transition-colors duration-200">
                  Case Studies
                </a>

                {/* About Us group */}
                <button
                  className="flex items-center justify-between py-2 w-full text-left"
                  onClick={() => { setMobileAboutOpen((o) => !o); setMobileFrameworksOpen(false); }}
                >
                  <span className="text-[20px] font-medium text-[#0A0A0B] tracking-[-0.02em]">About Us</span>
                  <svg
                    className={`w-4 h-4 text-[#0A0A0B]/40 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 14 14" fill="none"
                  >
                    <path d="M2.5 4.5L7 9.5L11.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pl-3 mb-1">
                        {[
                          { label: "Who We Are", href: "/who-we-are" },
                          { label: "Leadership", href: "/leadership" },
                        ].map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-[18px] text-[#0A0A0B]/60 hover:text-[#C48C59] transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Contact CTA */}
              <div className="px-6 pb-12 pt-6 border-t border-black/[0.08]">
                <button
                  onClick={() => { setMobileOpen(false); setBriefingOpen(true); }}
                  className="flex items-center justify-center w-full h-10 rounded-full text-[11px] tracking-widest uppercase text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <SecureBriefingModal isOpen={briefingOpen} onClose={() => setBriefingOpen(false)} />
    </>
  );
}

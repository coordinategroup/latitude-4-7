"use client";

import { motion } from "framer-motion";

const rings = [0, 1, 2, 3, 4];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-[#08090A] py-40 border-t border-white/[0.06] overflow-hidden">

      {/* Sonar visualisation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-end pr-[10%]">
        <div className="relative w-[600px] h-[600px] flex items-center justify-center">

          {/* Radial grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 600 600">
            {[0, 30, 60, 90, 120, 150].map((angle) => (
              <line
                key={angle}
                x1="300" y1="300"
                x2={300 + 300 * Math.cos((angle * Math.PI) / 180)}
                y2={300 + 300 * Math.sin((angle * Math.PI) / 180)}
                stroke="#D4B996"
                strokeWidth="0.5"
              />
            ))}
          </svg>

          {/* Static ring guides */}
          {rings.map((i) => (
            <div
              key={`static-${i}`}
              className="absolute rounded-full border border-[#D4B996]/[0.06]"
              style={{
                width: `${(i + 1) * 20}%`,
                height: `${(i + 1) * 20}%`,
              }}
            />
          ))}

          {/* Pulsing rings */}
          {rings.map((i) => (
            <motion.div
              key={`pulse-${i}`}
              className="absolute rounded-full border border-[#D4B996]"
              initial={{ width: "0%", height: "0%", opacity: 0.5 }}
              animate={{ width: "120%", height: "120%", opacity: 0 }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Centre dot */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#D4B996]"
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating scanner sweep */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ background: "conic-gradient(from 0deg, transparent 330deg, rgba(212,185,150,0.07) 360deg)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-20 md:px-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-16">

          <div className="flex flex-col gap-6 max-w-2xl">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
              Formal Engagement
            </span>
            <h2 className="text-[40px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
              Formal Engagement
            </h2>
            <p className="text-[16px] text-[#8a8f98] leading-[1.85]">
              For institutional stakeholders and governing bodies requiring independent technical oversight and strategic alignment.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:contact@latitudefourseven.com"
              className="group relative inline-flex items-center gap-2 bg-white text-[#08090A] px-6 py-3 rounded-[4px] text-[13px] font-medium transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_32px_rgba(212,185,150,0.3)]"
            >
              Secure Briefing
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const rings = [0, 1, 2, 3, 4];

export default function ContactCTA() {
  return (
    <section id="contact" className="relative bg-white py-40 border-t border-black/[0.08] overflow-hidden -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">

      <div className="relative z-10 px-6 md:px-20 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: content */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <h2 className="text-[28px] md:text-[40px] font-medium text-[#08090A] tracking-[-0.02em] leading-[1.15]">
            Begin Engagement
          </h2>
          <p className="text-[16px] text-black leading-[1.85] max-w-md">
            For institutional stakeholders and governing bodies requiring independent technical oversight and strategic alignment.
          </p>
          <div className="mt-2">
            <a
              href="mailto:contact@latitudefourseven.com"
              className="px-8 py-3 text-[10px] tracking-widest text-[#08090A] border border-[#08090A]/40 hover:border-[#08090A] hover:bg-[#08090A]/5 hover:translate-x-px transition-all duration-300 inline-block"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              SECURE_BRIEFING
            </a>
          </div>
        </div>

        {/* Right: sonar */}
        <div className="hidden md:flex items-center justify-end">
          <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">

            {/* Radial grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 600 600">
              {[0, 30, 60, 90, 120, 150].map((angle) => (
                <line
                  key={angle}
                  x1="300" y1="300"
                  x2={300 + 300 * Math.cos((angle * Math.PI) / 180)}
                  y2={300 + 300 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#1a1a1a"
                  strokeWidth="0.5"
                />
              ))}
            </svg>

            {/* Static ring guides */}
            {rings.map((i) => (
              <div
                key={`static-${i}`}
                className="absolute rounded-full border border-black/[0.15]"
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
                className="absolute rounded-full border border-black/40"
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
              className="absolute w-2 h-2 rounded-full bg-[#1a1a1a]"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating scanner sweep */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{ background: "conic-gradient(from 0deg, transparent 330deg, rgba(26,26,26,0.08) 360deg)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

          </div>
        </div>

      </div>

    </section>
  );
}

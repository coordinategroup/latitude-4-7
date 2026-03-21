"use client";

import { motion } from "framer-motion";

const lines = [
  "Supporting the Seychelles".split(" "),
  "in its digital leadership".split(" "),
  "and transformation".split(" "),
];

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(12px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden min-h-[70vh] py-14"
      style={{ background: "#08090A" }}
    >

      {/* Text content */}
      <div className="relative z-10 px-20 md:px-32 w-full max-w-7xl">

        <motion.h1
          className="text-[36px] md:text-[64px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[40px] md:leading-[68px]"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
        >
          {lines.map((lineWords, li) => (
            <span key={li} className="block">
              {lineWords.map((w, wi) => (
                <span key={wi} className="inline-block mr-[0.25em]">{w}</span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="mt-4"
          variants={fadeUp}
          custom={0.35}
          initial="hidden"
          animate="visible"
        >
          <span className="text-[18px] md:text-[28px] font-mono text-[#F8FAFC] tracking-normal">
            4.6753<span className="text-[#D4B996]">&deg;</span>S
          </span>
        </motion.div>

        <motion.div
          className="flex items-center justify-between gap-8 mt-6"
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate="visible"
        >
          <p className="text-[16px] text-[#8a8f98] leading-relaxed whitespace-nowrap">
            Strategic digital governance and independent oversight.<br />Bridging institutional policy with world-class digital standards.
          </p>

          <a
            href="#experience"
            className="shrink-0 flex items-center gap-2 text-[15px] font-semibold text-[#F8FAFC] hover:text-[#F8FAFC]/70 transition-colors duration-200"
          >
            Strategic Advisory
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2.5v9M2.5 7L7 11.5 11.5 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

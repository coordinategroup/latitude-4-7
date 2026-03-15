"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const outcomes = [
  {
    title: "Experience Design & Strategy",
    description:
      "We'll oversee the creation of intuitive, data-driven experiences that aligns on citizen needs with institutional goals.",
  },
  {
    title: "Digital Governance",
    description:
      "We'll align your goals, customer needs, and technical constraints across departments and teams.",
  },
  {
    title: "Service Delivery & Launch",
    description:
      "We'll provide the leadership required to turn complex roadmaps into shipped reality by partnering with your design and engineering teams.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

// Grey → white: torch brightens text under cursor
function TorchText({ text }: { text: string }) {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  return (
    <div
      className="relative cursor-default"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos({ x: -999, y: -999 })}
    >
      <div className="text-[#939DB8] text-[28px] font-normal tracking-[-0.02em] leading-relaxed">
        {text}
      </div>
      <div
        className="absolute inset-0 text-[#F8FAFC] text-[28px] font-normal tracking-[-0.02em] leading-relaxed pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
        }}
      >
        {text}
      </div>
    </div>
  );
}

// White → grey: torch dims text under cursor
function ReverseTorchText({ text, className }: { text: string; className?: string }) {
  const [pos, setPos] = useState({ x: -999, y: -999 });

  return (
    <div
      className={`relative cursor-default ${className ?? ""}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setPos({ x: -999, y: -999 })}
    >
      <div className="text-[#F8FAFC]">{text}</div>
      <div
        className="absolute inset-0 text-[#939DB8] pointer-events-none"
        style={{
          maskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 160px at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default function Outcomes() {
  return (
    <section id="outcomes" className="bg-[#08090A] pt-48 pb-48">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          className="pb-10 mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          variants={fadeUp}
        >
          <ReverseTorchText
            text="We'll achieve measurable outcomes that matter"
            className="text-[34px] md:text-[54.4px] font-medium tracking-[-0.02em] leading-tight max-w-2xl"
          />
        </motion.div>

        {/* Editorial list */}
        <div className="flex flex-col">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-4 md:gap-16 py-10 border-b border-white/[0.07] last:border-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.12,
              }}
              variants={fadeUp}
            >
              <ReverseTorchText
                text={item.title}
                className="text-[28px] font-medium tracking-[-0.02em]"
              />
              <TorchText text={item.description} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

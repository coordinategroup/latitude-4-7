"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function Authority() {
  return (
    <section className="bg-[#08090A] py-32 border-t border-white/[0.06]">
      <div className="px-20 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

          {/* Left: heading */}
          <motion.h2
            className="text-[40px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.1]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Bridging the gap between strategy and delivery.
          </motion.h2>

          {/* Right: body */}
          <motion.p
            className="text-[17px] text-[#8a8f98] leading-[1.9]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          >
            With over a decade of experience leading digital transformation at Tier 1 UK financial institutions; we bring a global benchmark of governance to Mahé. Our role is to act as the independent bridge between government mandates and digital execution.
          </motion.p>

        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="bg-[#FAFAFA] flex flex-col h-[100svh] md:h-auto md:block">

      {/* H1 left · subtext right */}
      <div className="px-4 md:px-[51px] lg:px-[56px] pt-[120px] sm:pt-[200px] lg:pt-[300px] pb-10">
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">

          <motion.h1
            className="text-[#292929] font-medium text-[28px] md:text-[32px] lg:text-[48px] leading-[1.25] tracking-[-0.02em] md:max-w-[680px]"
            style={{ fontFamily: "var(--font-instrument)" }}
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
          >
            Empowering the Seychelles in its digital independence
          </motion.h1>

          <div className="md:ml-auto md:max-w-[620px] flex flex-col gap-6">
            <motion.p
              className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] md:pt-2"
              variants={fadeUp}
              custom={0.35}
              initial="hidden"
              animate="visible"
            >
              Architecture built to last. Services designed for people. Leadership developed from within.
            </motion.p>
          </div>

        </div>
      </div>

      {/* Image — page-width with standard padding */}
      <motion.div
        className="flex-1 min-h-0 md:flex-none md:px-[51px] lg:px-[56px] md:pb-[clamp(32px,6vh,80px)]"
        variants={fadeUp}
        custom={0.1}
        initial="hidden"
        animate="visible"
      >
        <div className="relative w-full h-full md:h-[55vh] lg:h-[65vh] overflow-hidden">
          <Image
            src="/images/Homepage/Firefly.jpg"
            alt="Souvren"
            fill
            className="object-cover object-[90%_20%] md:object-[center_100%]"
            sizes="100vw"
            quality={100}
            priority
          />
        </div>
      </motion.div>

    </section>
  );
}

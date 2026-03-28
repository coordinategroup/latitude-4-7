"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function GoldSpan({
  children,
  scrollYProgress,
  start,
  end,
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const color = useTransform(
    scrollYProgress,
    [start - 0.12, start, end, end + 0.12],
    ["#F8FAFC", "#D4B996", "#D4B996", "#F8FAFC"]
  );
  return <motion.span style={{ color }}>{children}</motion.span>;
}

function Sentence({
  children,
  scrollYProgress,
  start,
  end,
}: {
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start - 0.12, start, end, end + 0.12],
    [0.3, 1, 1, 0.3]
  );
  const filter = useTransform(
    scrollYProgress,
    [start - 0.12, start, end, end + 0.12],
    ["blur(6px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );

  return (
    <motion.p style={{ opacity, filter }}>
      {children}
    </motion.p>
  );
}

export default function StrategicContext() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const s0Start = 0 / 2;
  const s0End = 1 / 2;
  const s1Start = 1 / 2;
  const s1End = 2 / 2;

  return (
    <div ref={containerRef} style={{ height: "220vh" }}>
      <section className="sticky top-0 h-screen bg-[#08090A] flex items-center">
        <div className="px-20 md:px-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-20 items-start">

            <h2 className="font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug self-start mt-0" style={{ fontSize: "clamp(18px, 1.5vw, 26px)" }}>
              A step closer to digital independence
            </h2>

            <div className="flex flex-col gap-10" style={{ fontSize: "clamp(22px, 2vw, 54px)", lineHeight: "1.3", maxWidth: "900px" }}>
              <Sentence scrollYProgress={scrollYProgress} start={s0Start} end={s0End}>
                <span className="font-medium tracking-[-0.02em] text-[#F8FAFC]">
                  Our role is to ensure that national systems, from financial rails to data exchange, are world-class, secure, and remain firmly under local sovereign control.
                </span>
              </Sentence>

              <Sentence scrollYProgress={scrollYProgress} start={s1Start} end={s1End}>
                <span className="font-medium tracking-[-0.02em] text-[#F8FAFC]">
                  A seychellois future, built by{" "}
                  <GoldSpan scrollYProgress={scrollYProgress} start={s1Start} end={s1End}>
                    seychellois people
                  </GoldSpan>
                  .
                </span>
              </Sentence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

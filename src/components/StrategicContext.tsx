"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const sentences = [
  "The transition to a fully digital economy is a landmark moment for our nation's autonomy.",
  "Our role is to ensure that national systems, from financial rails to data exchange, are world-class, secure, and remain firmly under local jurisdictional control.",
  "A seychellois future, built by seychellois people.",
];

// Shared colour keyframe builder
function buildColour(index: number, total: number, scrollYProgress: MotionValue<number>) {
  const transitions = total - 1;
  const transitionWidth = 0.15;

  const inputRange: number[] = [0];
  const outputRange: string[] = [index === 0 ? "#F8FAFC" : "#363C48"];

  for (let t = 0; t < transitions; t++) {
    const mid = (t + 0.5) / transitions;
    const fadeStart = mid - transitionWidth / 2;
    const fadeEnd   = mid + transitionWidth / 2;

    if (index === t) {
      inputRange.push(fadeStart, fadeEnd);
      outputRange.push("#F8FAFC", "#363C48");
    } else if (index === t + 1) {
      inputRange.push(fadeStart, fadeEnd);
      outputRange.push("#363C48", "#F8FAFC");
    } else {
      inputRange.push(fadeStart, fadeEnd);
      outputRange.push(outputRange[outputRange.length - 1], outputRange[outputRange.length - 1]);
    }
  }

  inputRange.push(1);
  outputRange.push(outputRange[outputRange.length - 1]);

  return useTransform(scrollYProgress, inputRange, outputRange);
}

function Sentence({
  text,
  index,
  total,
  scrollYProgress,
}: {
  text: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const color = buildColour(index, total, scrollYProgress);

  return (
    <motion.p
      style={{ color, fontSize: "42px", lineHeight: "52px" }}
      className="font-semibold tracking-[-0.02em]"
    >
      {text}
    </motion.p>
  );
}


export default function StrategicContext() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const containerHeight = `${sentences.length * 60}vh`;

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="mt-24">
      <section className="sticky top-0 h-screen bg-[#08090A] border-t border-white/[0.06] flex items-center">
        <div className="px-20 md:px-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-20 items-start">

            <h2 className="font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug text-[20px] md:text-[22px]">
              A step closer to digital independence
            </h2>

            <div className="flex flex-col gap-6" style={{ maxWidth: "800px" }}>
              {sentences.map((sentence, i) => (
                <Sentence
                  key={i}
                  text={sentence}
                  index={i}
                  total={sentences.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

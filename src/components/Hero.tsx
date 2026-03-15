"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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

function SignalLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Each line: slight diagonal angle, spans full width + overshoot
    const LINE_DEFS = [
      { yFrac: 0.08, slope: 0.04 },
      { yFrac: 0.18, slope: -0.03 },
      { yFrac: 0.28, slope: 0.06 },
      { yFrac: 0.38, slope: -0.02 },
      { yFrac: 0.48, slope: 0.05 },
      { yFrac: 0.58, slope: -0.04 },
      { yFrac: 0.68, slope: 0.03 },
      { yFrac: 0.78, slope: -0.06 },
      { yFrac: 0.88, slope: 0.02 },
      { yFrac: 0.95, slope: -0.03 },
    ];

    type Signal = {
      lineIndex: number;
      t: number;       // 0..1 progress along the line
      speed: number;
      tailLen: number; // fraction of line length for tail
      dir: 1 | -1;
    };

    // Seed each line with 1–2 staggered signals
    const signals: Signal[] = LINE_DEFS.flatMap((_, i) =>
      Array.from({ length: 1 + (i % 3 === 0 ? 1 : 0) }, (__, k) => ({
        lineIndex: i,
        t: (k * 0.5 + Math.random() * 0.4) % 1,
        speed: 0.0008 + Math.random() * 0.0012,
        tailLen: 0.12 + Math.random() * 0.1,
        dir: (Math.random() > 0.3 ? 1 : -1) as 1 | -1,
      }))
    );

    const getLinePoints = (def: typeof LINE_DEFS[0]) => {
      const w = canvas.width;
      const h = canvas.height;
      const y0 = def.yFrac * h;
      const x1 = -w * 0.05;
      const y1 = y0 - def.slope * w * 0.05;
      const x2 = w * 1.05;
      const y2 = y0 + def.slope * w * 1.05;
      return { x1, y1, x2, y2 };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Static faint lines
      for (const def of LINE_DEFS) {
        const { x1, y1, x2, y2 } = getLinePoints(def);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = "rgba(212,185,150,0.07)";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Signals
      for (const sig of signals) {
        const def = LINE_DEFS[sig.lineIndex];
        const { x1, y1, x2, y2 } = getLinePoints(def);

        const head = sig.t;
        const tail = Math.max(0, head - sig.tailLen);

        const hx = lerp(x1, x2, head);
        const hy = lerp(y1, y2, head);
        const tx = lerp(x1, x2, tail);
        const ty = lerp(y1, y2, tail);

        // Gradient tail
        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "rgba(212,185,150,0)");
        grad.addColorStop(0.6, "rgba(212,185,150,0.18)");
        grad.addColorStop(1, "rgba(212,185,150,0.7)");

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bright head dot
        ctx.beginPath();
        ctx.arc(hx, hy, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,185,150,1)";
        ctx.fill();

        // Soft glow around head
        const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 8);
        glow.addColorStop(0, "rgba(212,185,150,0.25)");
        glow.addColorStop(1, "rgba(212,185,150,0)");
        ctx.beginPath();
        ctx.arc(hx, hy, 8, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Advance
        sig.t += sig.speed * sig.dir;
        if (sig.t > 1 + sig.tailLen) sig.t = -sig.tailLen;
        if (sig.t < -sig.tailLen) sig.t = 1 + sig.tailLen;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 75%, transparent 100%)",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      className="relative pt-14 pb-48 overflow-hidden"
      style={{ background: "#08090A" }}
    >

      <SignalLines />

      {/* Text content */}
      <div className="relative z-10 px-20 md:px-32">

        <motion.h1
          className="text-[36px] md:text-[64px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[40px] md:leading-[68px] mt-32"
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

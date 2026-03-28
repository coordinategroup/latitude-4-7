"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const lines = [
  "Empowering the Seychelles in".split(" "),
  "its digital independence.".split(" "),
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

function HUDOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* SVG grid — 100px squares, gold at 5% */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern id="hud-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D4B996" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hud-grid)" opacity="0.05"/>
      </svg>

      {/* Corner brackets — desktop only */}
      <div className="hidden md:block absolute top-8 left-8 w-8 h-8">
        <div className="absolute top-0 left-0 w-full h-px bg-[#D4B996]/50"/>
        <div className="absolute top-0 left-0 w-px h-full bg-[#D4B996]/50"/>
      </div>
      <div className="hidden md:block absolute top-8 right-8 w-8 h-8">
        <div className="absolute top-0 right-0 w-full h-px bg-[#D4B996]/50"/>
        <div className="absolute top-0 right-0 w-px h-full bg-[#D4B996]/50"/>
      </div>
      <div className="hidden md:block absolute bottom-8 left-8 w-8 h-8">
        <div className="absolute bottom-0 left-0 w-full h-px bg-[#D4B996]/50"/>
        <div className="absolute bottom-0 left-0 w-px h-full bg-[#D4B996]/50"/>
      </div>
      <div className="hidden md:block absolute bottom-8 right-8 w-8 h-8">
        <div className="absolute bottom-0 right-0 w-full h-px bg-[#D4B996]/50"/>
        <div className="absolute bottom-0 right-0 w-px h-full bg-[#D4B996]/50"/>
      </div>
    </div>
  );
}

function HeroGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 68;
    const ROW_H = SPACING * (Math.sqrt(3) / 2);

    type Edge = { ax: number; ay: number; bx: number; by: number };
    let edges: Edge[] = [];

    const draw = () => {
      edges = [];
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const cols = Math.ceil(canvas.width / SPACING) + 4;
      const rows = Math.ceil(canvas.height / ROW_H) + 4;

      const nodeMap: { x: number; y: number }[][] = [];
      for (let r = -2; r < rows; r++) {
        nodeMap[r + 2] = [];
        for (let c = -2; c < cols; c++) {
          nodeMap[r + 2][c + 2] = {
            x: c * SPACING + (r % 2 !== 0 ? SPACING / 2 : 0),
            y: r * ROW_H,
          };
        }
      }

      for (let r = -2; r < rows - 1; r++) {
        for (let c = -2; c < cols - 1; c++) {
          const n = nodeMap[r + 2][c + 2];
          const right = nodeMap[r + 2][c + 3];
          const drOffset = r % 2 === 0 ? 0 : 1;
          const dr = nodeMap[r + 3]?.[c + 2 + drOffset];
          const dlOffset = r % 2 === 0 ? -1 : 0;
          const dl = nodeMap[r + 3]?.[c + 2 + dlOffset];
          if (right) edges.push({ ax: n.x, ay: n.y, bx: right.x, by: right.y });
          if (dr)    edges.push({ ax: n.x, ay: n.y, bx: dr.x,    by: dr.y });
          if (dl)    edges.push({ ax: n.x, ay: n.y, bx: dl.x,    by: dl.y });
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(212,185,150,0.06)";
      for (const e of edges) {
        ctx.beginPath();
        ctx.moveTo(e.ax, e.ay);
        ctx.lineTo(e.bx, e.by);
        ctx.stroke();
      }
    };

    draw();
    window.addEventListener("resize", draw);

    return () => {
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        maskImage: [
          "linear-gradient(to right, transparent 0%, black 38%, black 92%, transparent 100%)",
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        ].join(", "),
        maskComposite: "intersect",
        WebkitMaskImage: [
          "linear-gradient(to right, transparent 0%, black 38%, black 92%, transparent 100%)",
          "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        ].join(", "),
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100dvh] bg-black">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/images/References/Latitude_Cover.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "contrast(1.1) brightness(0.8) saturate(0.9)" }}
      />

      {/* Tint overlay */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />

      {/* HUD overlay — grid + corner brackets */}
      <HUDOverlay />

      {/* Animated node grid */}
      <HeroGrid />

      {/* Heading + subtext + button — bottom left */}
      <div className="absolute bottom-0 left-0 flex flex-col items-start px-6 pb-28 md:px-32 md:pb-24">
        <motion.h1
          className="font-medium text-[#F8FAFC] tracking-[-0.02em] text-left text-[26px] md:text-[42px] lg:text-[52px] 3xl:text-[80px] leading-[1.1]"
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          animate="visible"
        >
          {lines.map((lineWords, li) => (
            <span key={li} className="md:block">
              {lineWords.map((w, wi) => (
                <span key={wi} className="inline-block mr-[0.25em]">{w}</span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="mt-4"
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          animate="visible"
        >
          <p className="text-[15px] md:text-[20px] text-[#F8FAFC]/85 leading-relaxed max-w-xl text-left">
            Providing the digital governance and independent oversight needed to build a resilient digital economy.
          </p>
        </motion.div>

        <motion.div
          style={{ marginTop: "clamp(32px, 8vh, 80px)" }}
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
        >
          <a
            href="/sovereign-architecture"
            className="px-8 py-3 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 hover:translate-x-px transition-all duration-300"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            LEARN_MORE
          </a>
        </motion.div>
      </div>

      {/* Coordinates — bottom right with flicker dot */}
      <motion.div
        variants={fadeUp}
        custom={0.35}
        initial="hidden"
        animate="visible"
        className="absolute bottom-28 md:bottom-16 right-0 px-6 md:px-32 flex items-center gap-2.5"
      >
        <span className="flicker w-1.5 h-1.5 rounded-full bg-[#D4B996]/70 shrink-0" />
        <span
          className="text-[10px] text-[#D4B996]/60 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          4.6753&deg; S, 55.4491&deg; E
        </span>
      </motion.div>

    </section>
  );
}

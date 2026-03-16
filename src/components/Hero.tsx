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

function NodeGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const SPACING = 72;
    const ROW_H = SPACING * (Math.sqrt(3) / 2); // ~62px

    // Build isometric grid nodes
    type Node = { x: number; y: number; phase: number };
    type Edge = { ax: number; ay: number; bx: number; by: number };
    type Pulse = { ax: number; ay: number; bx: number; by: number; t: number; speed: number };

    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let pulses: Pulse[] = [];

    const build = () => {
      nodes = [];
      edges = [];
      pulses = [];

      const cols = Math.ceil(canvas.width / SPACING) + 4;
      const rows = Math.ceil(canvas.height / ROW_H) + 4;

      // Place nodes in isometric (triangular) grid
      for (let r = -2; r < rows; r++) {
        for (let c = -2; c < cols; c++) {
          const x = c * SPACING + (r % 2 !== 0 ? SPACING / 2 : 0);
          const y = r * ROW_H;
          nodes.push({ x, y, phase: Math.random() * Math.PI * 2 });
        }
      }

      const cols2 = cols;
      // Build edges: right, down-right, down-left for each node
      for (let r = -2; r < rows - 1; r++) {
        for (let c = -2; c < cols2 - 1; c++) {
          const idx = (r + 2) * cols2 + (c + 2);
          const node = nodes[idx];
          if (!node) continue;

          // Right neighbour
          const rIdx = idx + 1;
          if (nodes[rIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[rIdx].x, by: nodes[rIdx].y });
          }

          // Down-right neighbour
          const drOffset = r % 2 === 0 ? 0 : 1;
          const drIdx = idx + cols2 + drOffset;
          if (nodes[drIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[drIdx].x, by: nodes[drIdx].y });
          }

          // Down-left neighbour
          const dlOffset = r % 2 === 0 ? -1 : 0;
          const dlIdx = idx + cols2 + dlOffset;
          if (nodes[dlIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[dlIdx].x, by: nodes[dlIdx].y });
          }
        }
      }

      // Seed pulses — pick random edges
      for (let i = 0; i < 18; i++) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        if (!e) continue;
        pulses.push({
          ax: e.ax, ay: e.ay,
          bx: e.bx, by: e.by,
          t: Math.random(),
          speed: 0.004 + Math.random() * 0.006,
        });
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      build();
    };
    resize();
    window.addEventListener("resize", resize);

    const TAIL = 0.35; // tail length as fraction of edge

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      // Draw edges (faint static rails)
      ctx.lineWidth = 0.5;
      for (const e of edges) {
        ctx.beginPath();
        ctx.moveTo(e.ax, e.ay);
        ctx.lineTo(e.bx, e.by);
        ctx.strokeStyle = "rgba(212,185,150,0.07)";
        ctx.stroke();
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = 0.1 + 0.1 * Math.sin(time + n.phase);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,185,150,${pulse})`;
        ctx.fill();
      }

      // Draw pulses traveling along edges
      for (const p of pulses) {
        const head = p.t;
        const tail = Math.max(0, head - TAIL);

        const hx = p.ax + (p.bx - p.ax) * head;
        const hy = p.ay + (p.by - p.ay) * head;
        const tx = p.ax + (p.bx - p.ax) * tail;
        const ty = p.ay + (p.by - p.ay) * tail;

        // Gradient tail
        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "rgba(212,185,150,0)");
        grad.addColorStop(1, "rgba(212,185,150,0.65)");
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Bright head dot
        ctx.beginPath();
        ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,185,150,0.95)";
        ctx.fill();

        // Advance — when done, jump to a new random edge
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          const e = edges[Math.floor(Math.random() * edges.length)];
          if (e) {
            p.ax = e.ax; p.ay = e.ay;
            p.bx = e.bx; p.by = e.by;
            p.speed = 0.004 + Math.random() * 0.006;
          }
        }
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
      className="relative pt-14 pb-24 overflow-hidden"
      style={{ background: "#08090A" }}
    >

      <NodeGrid />

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

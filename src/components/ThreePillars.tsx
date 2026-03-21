"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    title: "Sovereign Independence",
    description:
      "Ensuring that national digital solutions remain independent, neutral, and fully under local control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "National Standards",
    description:
      "Designing the frameworks that allow banking and government systems to talk to each other securely.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="5"  cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="6"  r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 12h4m2-4.27L17 8M13 16.27L17 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Institutional Oversight",
    description:
      "Providing independent digital audits and risk assessments for ministers, boards, and regulatory bodies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

function PillarGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const SPACING = 72;
    const ROW_H = SPACING * (Math.sqrt(3) / 2);

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

      for (let r = -2; r < rows; r++) {
        for (let c = -2; c < cols; c++) {
          const x = c * SPACING + (r % 2 !== 0 ? SPACING / 2 : 0);
          const y = r * ROW_H;
          nodes.push({ x, y, phase: Math.random() * Math.PI * 2 });
        }
      }

      const cols2 = cols;
      for (let r = -2; r < rows - 1; r++) {
        for (let c = -2; c < cols2 - 1; c++) {
          const idx = (r + 2) * cols2 + (c + 2);
          const node = nodes[idx];
          if (!node) continue;

          const rIdx = idx + 1;
          if (nodes[rIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[rIdx].x, by: nodes[rIdx].y });
          }

          const drOffset = r % 2 === 0 ? 0 : 1;
          const drIdx = idx + cols2 + drOffset;
          if (nodes[drIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[drIdx].x, by: nodes[drIdx].y });
          }

          const dlOffset = r % 2 === 0 ? -1 : 0;
          const dlIdx = idx + cols2 + dlOffset;
          if (nodes[dlIdx]) {
            edges.push({ ax: node.x, ay: node.y, bx: nodes[dlIdx].x, by: nodes[dlIdx].y });
          }
        }
      }

      for (let i = 0; i < 12; i++) {
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

    const TAIL = 0.35;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;

      ctx.lineWidth = 0.5;
      for (const e of edges) {
        ctx.beginPath();
        ctx.moveTo(e.ax, e.ay);
        ctx.lineTo(e.bx, e.by);
        ctx.strokeStyle = "rgba(212,185,150,0.07)";
        ctx.stroke();
      }

      for (const n of nodes) {
        const pulse = 0.1 + 0.1 * Math.sin(time + n.phase);
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,185,150,${pulse})`;
        ctx.fill();
      }

      for (const p of pulses) {
        const head = p.t;
        const tail = Math.max(0, head - TAIL);

        const hx = p.ax + (p.bx - p.ax) * head;
        const hy = p.ay + (p.by - p.ay) * head;
        const tx = p.ax + (p.bx - p.ax) * tail;
        const ty = p.ay + (p.by - p.ay) * tail;

        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        grad.addColorStop(0, "rgba(212,185,150,0)");
        grad.addColorStop(1, "rgba(212,185,150,0.65)");
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(212,185,150,0.95)";
        ctx.fill();

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
      className="absolute inset-y-0 right-0 w-3/4 h-full pointer-events-none"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}

export default function ThreePillars() {
  return (
    <section className="relative bg-[#08090A] py-32 border-t border-white/[0.06] overflow-hidden">

      <PillarGrid />

      <div className="relative z-10 px-16 md:px-24">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <h2 className="text-[36px] md:text-[36.8px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-tight">
            Core areas of oversight
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/40 hidden md:block">
            Pillars
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl p-8 flex flex-col gap-6 bg-[#16181D] border border-white/[0.08]"
            >
              {/* Icon with sand tint */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#D4B996]/10 text-[#D4B996]">
                {pillar.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-[#F8FAFC] tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="text-[#939DB8] text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

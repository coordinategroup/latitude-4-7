"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────
   SVG 1: Strategic Alignment — Isometric pillar with dashed orbit ring
   ───────────────────────────────────────────────────────────────────────── */
function PillarSVG({ hovered }: { hovered: boolean }) {
  // Ellipse perimeter ≈ 223px; dasharray period = 14px → animate by -14 per loop
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
      {/* Outer plinth outline */}
      <polygon
        points="100,137 158,160 100,182 42,160"
        stroke="#D4B996"
        strokeWidth="0.7"
        strokeOpacity="0.20"
        fill="none"
      />

      {/* Pillar — left face */}
      <motion.polygon
        points="64,74 100,91 100,167 64,150"
        stroke="#D4B996"
        strokeWidth="1"
        strokeOpacity="0.65"
        animate={{ fill: hovered ? "rgba(212,185,150,0.09)" : "rgba(212,185,150,0.03)" }}
        transition={{ duration: 0.5 }}
      />

      {/* Pillar — right face */}
      <motion.polygon
        points="136,74 100,91 100,167 136,150"
        stroke="#D4B996"
        strokeWidth="1"
        strokeOpacity="0.65"
        animate={{ fill: hovered ? "rgba(212,185,150,0.06)" : "rgba(212,185,150,0.02)" }}
        transition={{ duration: 0.5 }}
      />

      {/* Pillar — top face */}
      <motion.polygon
        points="100,57 136,74 100,91 64,74"
        stroke="#D4B996"
        strokeWidth="1.1"
        strokeOpacity="0.9"
        animate={{ fill: hovered ? "rgba(212,185,150,0.20)" : "rgba(212,185,150,0.08)" }}
        transition={{ duration: 0.5 }}
      />

      {/* Orbit ring — marching dashes */}
      <motion.ellipse
        cx="100"
        cy="74"
        rx="48"
        ry="21"
        stroke="#D4B996"
        strokeWidth="0.85"
        strokeDasharray="8 6"
        fill="none"
        style={{ transformOrigin: "100px 74px" }}
        animate={{
          strokeDashoffset: hovered ? [0, -14] : 0,
          opacity: hovered ? 0.65 : 0.18,
        }}
        transition={
          hovered
            ? {
                strokeDashoffset: {
                  duration: 0.35,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: { duration: 0.4 },
              }
            : { opacity: { duration: 0.4 } }
        }
      />

      {/* Centre dot */}
      <motion.circle
        cx="100"
        cy="74"
        r="3"
        style={{ transformOrigin: "100px 74px" }}
        animate={{
          fill: hovered ? "#D4B996" : "rgba(212,185,150,0.40)",
          scale: hovered ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SVG 2: Data Integrity — Stacked isometric layers that expand on hover
   ───────────────────────────────────────────────────────────────────────── */
// Rendered bottom-first so upper layers paint over lower ones (correct z-order)
const LAYERS = [
  { cy: 150, offset: 16 },
  { cy: 128, offset: 8 },
  { cy: 106, offset: 0, isMid: true },
  { cy: 84, offset: -8 },
  { cy: 62, offset: -16 },
];
const LW = 52; // half-width of top diamond
const LD = 21; // half-depth of top diamond
const LT = 9;  // visible side thickness

function LayersSVG({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
      {LAYERS.map((layer, i) => {
        const { cy, offset, isMid } = layer;
        return (
          <motion.g
            key={i}
            animate={{ y: hovered ? offset : 0 }}
            transition={{
              duration: 0.55,
              delay: i * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Left face */}
            <polygon
              points={`${100 - LW},${cy} 100,${cy + LD} 100,${cy + LD + LT} ${100 - LW},${cy + LT}`}
              stroke="#D4B996"
              strokeWidth="0.75"
              strokeOpacity="0.55"
              fill="rgba(212,185,150,0.03)"
            />
            {/* Right face */}
            <polygon
              points={`${100 + LW},${cy} 100,${cy + LD} 100,${cy + LD + LT} ${100 + LW},${cy + LT}`}
              stroke="#D4B996"
              strokeWidth="0.75"
              strokeOpacity="0.55"
              fill="rgba(212,185,150,0.04)"
            />
            {/* Top face */}
            <polygon
              points={`100,${cy - LD} ${100 + LW},${cy} 100,${cy + LD} ${100 - LW},${cy}`}
              stroke="#D4B996"
              strokeWidth={isMid ? 1.1 : 0.9}
              strokeOpacity={isMid ? 1 : 0.65}
              fill={isMid ? "rgba(212,185,150,0.15)" : "rgba(212,185,150,0.05)"}
            />
            {/* Inner ellipse detail on centre layer */}
            {isMid && (
              <ellipse
                cx="100"
                cy={cy}
                rx="16"
                ry="7"
                stroke="#D4B996"
                strokeWidth="0.7"
                fill="none"
                opacity="0.55"
              />
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SVG 3: Partnership Compliance — Grid of nodes, rails light up on hover
   ───────────────────────────────────────────────────────────────────────── */
const ROWS = [62, 100, 138];
const COLS = [38, 100, 162];

type Seg = { x1: number; y1: number; x2: number; y2: number };

// Build segments: 6 horizontal + 6 vertical
const SEGMENTS: Seg[] = [
  // Horizontal
  ...ROWS.flatMap((y) =>
    COLS.slice(0, -1).map((x, i) => ({ x1: x, y1: y, x2: COLS[i + 1], y2: y }))
  ),
  // Vertical
  ...COLS.flatMap((x) =>
    ROWS.slice(0, -1).map((y, i) => ({ x1: x, y1: y, x2: x, y2: ROWS[i + 1] }))
  ),
];

function RailsSVG({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
      {/* Rails */}
      {SEGMENTS.map((seg, i) => {
        const len = Math.hypot(seg.x2 - seg.x1, seg.y2 - seg.y1);
        return (
          <motion.line
            key={i}
            x1={seg.x1}
            y1={seg.y1}
            x2={seg.x2}
            y2={seg.y2}
            stroke="#D4B996"
            strokeWidth="0.9"
            strokeDasharray={len}
            animate={{
              strokeDashoffset: hovered ? 0 : len,
              opacity: hovered ? 0.65 : 0.14,
            }}
            transition={{
              strokeDashoffset: { duration: 0.35, delay: i * 0.045, ease: "easeOut" },
              opacity: { duration: 0.25, delay: i * 0.045 },
            }}
          />
        );
      })}

      {/* Nodes at every intersection */}
      {ROWS.flatMap((y, ri) =>
        COLS.map((x, ci) => {
          const idx = ri * 3 + ci;
          const isCentre = ri === 1 && ci === 1;
          return (
            <motion.circle
              key={idx}
              cx={x}
              cy={y}
              r={isCentre ? 5 : 3.5}
              style={{ transformOrigin: `${x}px ${y}px` }}
              animate={{
                fill: hovered ? "#D4B996" : "rgba(212,185,150,0.28)",
                opacity: hovered ? (isCentre ? 1 : 0.8) : 0.28,
                scale: hovered ? (isCentre ? 1.4 : 1.15) : 1,
              }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            />
          );
        })
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Tilt Card
   ───────────────────────────────────────────────────────────────────────── */
type IllustrationComponent = (props: { hovered: boolean }) => React.JSX.Element;

interface CardProps {
  fig: string;
  title: string;
  description: string;
  Illustration: IllustrationComponent;
  className?: string;
}

function Card({ fig, title, description, Illustration, className }: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative flex flex-col overflow-hidden h-full ${className ?? ""}`}
    >
        {/* FIG label */}
        <div className="px-6 pt-6">
          <span className="font-mono text-[14px] tracking-[0.22em] text-[#D4B996]/45 uppercase">
            {fig}
          </span>
        </div>

        {/* Illustration */}
        <div className="flex items-center justify-center px-6 py-6" style={{ height: "280px" }}>
          <Illustration hovered={hovered} />
        </div>

        {/* Text */}
        <div className="px-6 py-6 flex flex-col gap-2.5">
          <h3 className="text-[20px] font-semibold text-[#F8FAFC] tracking-[-0.02em]">
            {title}
          </h3>
          <p className="text-[16px] leading-relaxed text-[#8a8f98]">
            {description}
          </p>
        </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   Section
   ───────────────────────────────────────────────────────────────────────── */
const cards: CardProps[] = [
  {
    fig: "FIG 0.1",
    title: "Sovereign Independence",
    description:
      "Ensuring that national digital solutions remain neutral; autonomous; and fully under local control.",
    Illustration: PillarSVG,
  },
  {
    fig: "FIG 0.2",
    title: "Unified Technology",
    description:
      "Creating a cohesive framework where banking and government systems communicate with total security.",
    Illustration: LayersSVG,
  },
  {
    fig: "FIG 0.3",
    title: "Partnership Compliance",
    description:
      "Supporting international digital collaborations to ensure they align with the highest national standards.",
    Illustration: RailsSVG,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#08090A] py-32 border-t border-white/[0.06]">
      <div className="px-20 md:px-32">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <h2 className="text-[40px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15] max-w-2xl">
            Defining the standards<br />of national digital governance
          </h2>
          <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98] hidden md:block">
            Strategic framework
          </span>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {cards.map((card) => (
            <Card key={card.fig} {...card} className="flex-1" />
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function SovereignIllustration() {
  return (
    <div className="w-[320px] h-[320px]">
      <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">

        {/* Outer plinth outline */}
        <polygon
          points="100,137 158,160 100,182 42,160"
          stroke="#292929"
          strokeWidth="0.7"
          strokeOpacity="0.15"
          fill="none"
        />

        {/* Pillar — left face */}
        <motion.polygon
          points="64,74 100,91 100,167 64,150"
          stroke="#292929"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={{ fill: ["rgba(41,41,41,0.03)", "rgba(41,41,41,0.08)", "rgba(41,41,41,0.03)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pillar — right face */}
        <motion.polygon
          points="136,74 100,91 100,167 136,150"
          stroke="#292929"
          strokeWidth="1"
          strokeOpacity="0.5"
          animate={{ fill: ["rgba(41,41,41,0.02)", "rgba(41,41,41,0.06)", "rgba(41,41,41,0.02)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Pillar — top face */}
        <motion.polygon
          points="100,57 136,74 100,91 64,74"
          stroke="#292929"
          strokeWidth="1.1"
          strokeOpacity="0.7"
          animate={{ fill: ["rgba(41,41,41,0.08)", "rgba(41,41,41,0.18)", "rgba(41,41,41,0.08)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit ring — marching dashes */}
        <motion.ellipse
          cx="100"
          cy="74"
          rx="48"
          ry="21"
          stroke="#C48C59"
          strokeWidth="0.85"
          strokeDasharray="8 6"
          fill="none"
          style={{ transformOrigin: "100px 74px" }}
          animate={{
            strokeDashoffset: [0, -14],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            strokeDashoffset: { duration: 0.8, repeat: Infinity, ease: "linear" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Centre dot — pulse */}
        <motion.circle
          cx="100"
          cy="74"
          r="3"
          style={{ transformOrigin: "100px 74px" }}
          animate={{
            fill: ["rgba(196,140,89,0.6)", "rgba(196,140,89,1)", "rgba(196,140,89,0.6)"],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

      </svg>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

const LAYERS = [
  { cy: 150, offset: 16 },
  { cy: 128, offset: 8 },
  { cy: 106, offset: 0, isMid: true },
  { cy: 84, offset: -8 },
  { cy: 62, offset: -16 },
];
const LW = 52;
const LD = 21;
const LT = 9;

export default function AnimatedGraphic() {
  return (
    <div className="w-[320px] h-[320px]">
      <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className="w-full h-full">
        {LAYERS.map((layer, i) => {
          const { cy, offset, isMid } = layer;
          return (
            <motion.g
              key={i}
              animate={{ y: [0, offset * 0.6, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Left face */}
              <polygon
                points={`${100 - LW},${cy} 100,${cy + LD} 100,${cy + LD + LT} ${100 - LW},${cy + LT}`}
                stroke="#292929"
                strokeWidth="0.75"
                strokeOpacity="0.5"
                fill="rgba(41,41,41,0.03)"
              />
              {/* Right face */}
              <polygon
                points={`${100 + LW},${cy} 100,${cy + LD} 100,${cy + LD + LT} ${100 + LW},${cy + LT}`}
                stroke="#292929"
                strokeWidth="0.75"
                strokeOpacity="0.5"
                fill="rgba(41,41,41,0.04)"
              />
              {/* Top face */}
              <motion.polygon
                points={`100,${cy - LD} ${100 + LW},${cy} 100,${cy + LD} ${100 - LW},${cy}`}
                stroke={isMid ? "#C48C59" : "#292929"}
                strokeWidth={isMid ? 1.1 : 0.9}
                strokeOpacity={isMid ? 0.8 : 0.5}
                animate={{ fill: isMid
                  ? ["rgba(196,140,89,0.10)", "rgba(196,140,89,0.20)", "rgba(196,140,89,0.10)"]
                  : ["rgba(41,41,41,0.04)", "rgba(41,41,41,0.08)", "rgba(41,41,41,0.04)"]
                }}
                transition={{ duration: 4, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

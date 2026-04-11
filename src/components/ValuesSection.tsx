"use client";

import { useState } from "react";

const values = [
  {
    index: "01",
    name: "Integrity",
    description: "We say what we mean and do what we say. No ambiguity in our advice, no small print in our engagements.",
  },
  {
    index: "02",
    name: "Independence",
    description: "We have no infrastructure to sell and no vendor relationships to protect. Our only interest is the right outcome for the institution.",
  },
  {
    index: "03",
    name: "Impact",
    description: "We measure success by what changes, not what gets delivered. Reports don't move nations forward. Results do.",
  },
];

/* ── Integrity: shield with checkmark that draws and redraws ── */
function IntegrityIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      <path
        d="M20 4 L33 9 L33 21 C33 29 20 36 20 36 C20 36 7 29 7 21 L7 9 Z"
        stroke="#D4B996"
        strokeWidth="1.2"
        strokeOpacity={active ? 1 : 0.35}
        style={{ transition: "stroke-opacity 0.4s ease" }}
      />
      <path
        d="M13 20 L17.5 24.5 L27 15"
        stroke="#D4B996"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="22"
        style={{
          strokeDashoffset: active ? undefined : 22,
          animation: active ? "drawCheck 2s ease-in-out infinite" : "none",
        }}
      />
      <style>{`
        @keyframes drawCheck {
          0%   { stroke-dashoffset: 22; }
          55%  { stroke-dashoffset: 0; }
          85%  { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 22; }
        }
      `}</style>
    </svg>
  );
}

/* ── Independence: padlock shackle that opens and closes ── */
function IndependenceIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      {/* Lock body */}
      <rect
        x="9" y="19" width="22" height="17" rx="2"
        stroke="#D4B996"
        strokeWidth="1.2"
        strokeOpacity={active ? 1 : 0.35}
        style={{ transition: "stroke-opacity 0.4s ease" }}
      />
      {/* Keyhole */}
      <circle cx="20" cy="27" r="2.5" stroke="#D4B996" strokeWidth="1" strokeOpacity={active ? 0.8 : 0.25} />
      {/* Shackle — animates up when open */}
      <path
        d="M13 19 L13 13 C13 8 27 8 27 13 L27 19"
        stroke="#D4B996"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity={active ? 1 : 0.35}
        style={{
          animation: active ? "unlock 2.4s ease-in-out infinite" : "none",
          transformOrigin: "20px 19px",
          transition: "stroke-opacity 0.4s ease",
        }}
      />
      <style>{`
        @keyframes unlock {
          0%   { transform: translateY(0); }
          40%  { transform: translateY(-6px); }
          65%  { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </svg>
  );
}

/* ── Impact: radar rings expanding from centre ── */
function ImpactIcon({ active }: { active: boolean }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
      {/* Centre dot */}
      <circle cx="20" cy="20" r="2.5" fill="#D4B996" fillOpacity={active ? 1 : 0.35} style={{ transition: "fill-opacity 0.4s ease" }} />
      {/* Ring 1 */}
      <circle
        cx="20" cy="20" r="7"
        stroke="#D4B996" strokeWidth="1"
        style={{
          transformOrigin: "20px 20px",
          animation: active ? "ripple 2s ease-out infinite" : "none",
          opacity: active ? undefined : 0.2,
        }}
      />
      {/* Ring 2 */}
      <circle
        cx="20" cy="20" r="7"
        stroke="#D4B996" strokeWidth="1"
        style={{
          transformOrigin: "20px 20px",
          animation: active ? "ripple 2s ease-out 0.6s infinite" : "none",
          opacity: active ? undefined : 0.12,
        }}
      />
      {/* Ring 3 */}
      <circle
        cx="20" cy="20" r="7"
        stroke="#D4B996" strokeWidth="1"
        style={{
          transformOrigin: "20px 20px",
          animation: active ? "ripple 2s ease-out 1.2s infinite" : "none",
          opacity: active ? undefined : 0.06,
        }}
      />
      <style>{`
        @keyframes ripple {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

const icons = [IntegrityIcon, IndependenceIcon, ImpactIcon];

export default function ValuesSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="w-full">
      {values.map((val, i) => {
        const isOpen = open === i;
        const Icon = icons[i];
        return (
          <div
            key={val.index}
            className="border-t border-white/[0.08] cursor-default"
            onMouseEnter={() => setOpen(i)}
          >
            <div className="flex items-center gap-10 py-7">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase w-8 shrink-0"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {val.index}
              </span>
              <div className="flex items-center gap-5 flex-1">
                <h3
                  className="text-[36px] md:text-[44px] font-medium tracking-[-0.02em] leading-none"
                  style={{
                    color: isOpen ? "#F8FAFC" : "rgba(248,250,252,0.2)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {val.name}
                </h3>
                <Icon active={isOpen} />
              </div>
            </div>

            <div
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? "120px" : "0px",
                transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p className="text-[15px] text-[#8a8f98] leading-[1.85] pb-8 pl-[72px] max-w-2xl">
                {val.description}
              </p>
            </div>
          </div>
        );
      })}
      <div className="border-t border-white/[0.08]" />
    </div>
  );
}

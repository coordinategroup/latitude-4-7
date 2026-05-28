"use client";

import { reOpenCookieSettings } from "./CookieBanner";

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function CookieSettingsButton() {
  return (
    <button
      onClick={reOpenCookieSettings}
      className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase cursor-pointer bg-transparent border-none p-0"
      style={monoStyle}
    >
      Cookie Settings
    </button>
  );
}

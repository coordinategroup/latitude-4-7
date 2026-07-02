"use client";

import { reOpenCookieSettings } from "./CookieBanner";

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function CookieSettingsButton() {
  return (
    <button
      onClick={reOpenCookieSettings}
      className="text-[13px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
    >
      Cookie settings
    </button>
  );
}

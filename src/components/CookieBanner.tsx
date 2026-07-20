"use client";

import { useState, useEffect, useCallback } from "react";

const CONSENT_KEY = "l47_cookie_consent";
const CONSENT_EXPIRY_DAYS = 365;

type ConsentValue = "all" | "essential" | null;

function getStoredConsent(): ConsentValue {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.expires && Date.now() > parsed.expires) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return parsed.value ?? null;
  } catch {
    return null;
  }
}

function storeConsent(value: "all" | "essential") {
  const expires = Date.now() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, expires }));
}

const analyticsCallbacks: Array<() => void> = [];

export function onAnalyticsConsent(cb: () => void) {
  analyticsCallbacks.push(cb);
}

export function reOpenCookieSettings() {
  window.dispatchEvent(new CustomEvent("l47:reopen-cookie-banner"));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(true);

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === null) setVisible(true);

    const handler = () => {
      setVisible(true);
      setShowSettings(false);
    };
    window.addEventListener("l47:reopen-cookie-banner", handler);
    return () => window.removeEventListener("l47:reopen-cookie-banner", handler);
  }, []);

  const fireAnalytics = useCallback(() => {
    analyticsCallbacks.forEach((cb) => cb());
    analyticsCallbacks.length = 0;
  }, []);

  const handleAcceptAll = () => {
    storeConsent("all");
    setVisible(false);
    fireAnalytics();
  };

  const handleEssentialOnly = () => {
    storeConsent("essential");
    setVisible(false);
  };

  const handleSaveSettings = () => {
    if (analyticsChecked) {
      storeConsent("all");
      fireAnalytics();
    } else {
      storeConsent("essential");
    }
    setVisible(false);
    setShowSettings(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#FAFAFA] border-t border-black/[0.08]"
    >
      {!showSettings ? (
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32 py-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[13px] text-[#0A0A0B]/55 leading-relaxed flex-1">
            We use a small number of cookies to understand how this site is performing. No tracking, no advertising: just the basics.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleAcceptAll}
              className="px-5 py-2 bg-[#292929] text-white text-[15px] font-medium hover:bg-[#292929]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292929]"
            >
              Accept
            </button>
            <button
              onClick={handleEssentialOnly}
              className="px-5 py-2 border border-black/[0.2] text-[#0A0A0B]/60 text-[15px] font-medium hover:border-black/40 hover:text-[#0A0A0B]/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Essential only
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="text-[12px] text-[#0A0A0B]/40 hover:text-[#0A0A0B]/70 transition-colors underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 px-1"
            >
              Settings
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32 py-6">
          <h2
            className="text-[11px] tracking-[0.22em] text-[#0A0A0B]/40 uppercase mb-5"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Cookie preferences
          </h2>
          <div className="flex flex-col gap-4 mb-6">
            <label className="flex items-start gap-4 cursor-not-allowed">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-0.5 accent-[#292929] opacity-40 cursor-not-allowed"
                aria-label="Essential cookies (always active)"
              />
              <div>
                <p className="text-[13px] font-medium text-[#292929]">
                  Essential cookies{" "}
                  <span className="text-[#0A0A0B]/40 font-normal">(always active)</span>
                </p>
                <p className="text-[12px] text-[#0A0A0B]/40 mt-0.5">Required for the site to function. Cannot be disabled.</p>
              </div>
            </label>
            <label className="flex items-start gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsChecked}
                onChange={(e) => setAnalyticsChecked(e.target.checked)}
                className="mt-0.5 accent-[#292929] cursor-pointer"
                aria-label="Performance and analytics cookies"
              />
              <div>
                <p className="text-[13px] font-medium text-[#292929]">Performance &amp; analytics</p>
                <p className="text-[12px] text-[#0A0A0B]/40 mt-0.5">Anonymised data on how visitors use the site. Helps us improve the experience.</p>
              </div>
            </label>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveSettings}
              className="px-5 py-2 bg-[#292929] text-white text-[15px] font-medium hover:bg-[#292929]/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292929]"
            >
              Save preferences
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="text-[12px] text-[#0A0A0B]/40 hover:text-[#0A0A0B]/70 transition-colors underline underline-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 px-1"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import ValuesSection from "@/components/ValuesSection";

export const metadata: Metadata = {
  title: "Who We Are | Latitude Four Seven",
  description:
    "Latitude Four Seven is a senior digital governance and product leadership consultancy. Strategy at the speed of sovereign change.",
};

const capabilities = [
  {
    index: "01",
    label: "Product Innovation",
    title: "Governance embedded, not bolted on.",
    body: "Good governance doesn't slow things down: it's what makes them work. We advise from the start, so institutions aren't trying to patch compliance onto systems that were never designed to support it.",
  },
  {
    index: "02",
    label: "Sovereign Infrastructure",
    title: "The institution holds the keys.",
    body: "Renting your digital infrastructure from a foreign provider isn't sovereignty: it's dependency. We advise institutions on how to structure ownership, contracts, and data control so that the keys stay where they belong, with the institution.",
  },
  {
    index: "03",
    label: "Governance & Trust",
    title: "Move fast. Stay clean.",
    body: "Compliance and speed aren't opposites: they're a planning problem. We help institutions navigate regulatory requirements without sacrificing momentum, so the right governance is in place before it's demanded.",
  },
];

function CodesignSVG() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
      {/* Left entity */}
      <rect x="8" y="18" width="52" height="64" rx="2" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.03)" />
      {/* Right entity */}
      <rect x="100" y="18" width="52" height="64" rx="2" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.03)" />
      {/* Person circles */}
      <circle cx="28" cy="36" r="6" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.6" />
      <circle cx="132" cy="36" r="6" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.6" />
      {/* Content lines left */}
      <line x1="16" y1="50" x2="50" y2="50" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="16" y1="57" x2="44" y2="57" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="16" y1="64" x2="50" y2="64" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="16" y1="71" x2="40" y2="71" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      {/* Content lines right */}
      <line x1="110" y1="50" x2="144" y2="50" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="110" y1="57" x2="140" y2="57" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="110" y1="64" x2="144" y2="64" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="110" y1="71" x2="136" y2="71" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      {/* Dashed bridge */}
      <line x1="60" y1="50" x2="100" y2="50" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 3" />
      {/* Centre node */}
      <circle cx="80" cy="50" r="7" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.10)" />
      <circle cx="80" cy="50" r="2.5" fill="#D4B996" />
    </svg>
  );
}

function TestingSVG() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
      {/* Device outline */}
      <rect x="48" y="4" width="64" height="102" rx="7" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.03)" />
      {/* Screen area */}
      <rect x="55" y="14" width="50" height="76" rx="2" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.3" fill="rgba(212,185,150,0.04)" />
      {/* UI content lines */}
      <line x1="62" y1="24" x2="98" y2="24" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="62" y1="31" x2="88" y2="31" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="62" y="39" width="36" height="18" rx="1" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.15" fill="rgba(212,185,150,0.05)" />
      {/* Touch ripples */}
      <circle cx="80" cy="68" r="3.5" fill="#D4B996" />
      <circle cx="80" cy="68" r="9" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="80" cy="68" r="16" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.15" />
      {/* Home bar */}
      <line x1="70" y1="99" x2="90" y2="99" stroke="#D4B996" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />
    </svg>
  );
}

function AdoptionSVG() {
  return (
    <svg viewBox="0 0 160 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[200px]">
      {/* Central service node */}
      <circle cx="80" cy="55" r="12" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.10)" />
      <circle cx="80" cy="55" r="4" fill="#D4B996" />
      {/* Outer nodes + connecting lines — varying opacity to suggest adoption spreading */}
      {/* Top */}
      <line x1="80" y1="43" x2="80" y2="16" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="80" cy="11" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.12)" strokeOpacity="0.8" />
      {/* Top right */}
      <line x1="91" y1="46" x2="116" y2="22" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="120" cy="18" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.08)" strokeOpacity="0.6" />
      {/* Right */}
      <line x1="92" y1="57" x2="134" y2="57" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="139" cy="57" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.05)" strokeOpacity="0.4" />
      {/* Bottom right */}
      <line x1="89" y1="65" x2="112" y2="86" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.25" />
      <circle cx="116" cy="90" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.08)" strokeOpacity="0.6" />
      {/* Bottom left */}
      <line x1="71" y1="65" x2="48" y2="86" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="44" cy="90" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.12)" strokeOpacity="0.8" />
      {/* Left */}
      <line x1="68" y1="57" x2="26" y2="57" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.35" />
      <circle cx="21" cy="57" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.14)" strokeOpacity="0.9" />
      {/* Top left */}
      <line x1="69" y1="46" x2="44" y2="22" stroke="#D4B996" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="40" cy="18" r="5" stroke="#D4B996" strokeWidth="1" fill="rgba(212,185,150,0.05)" strokeOpacity="0.4" />
    </svg>
  );
}

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 pt-52 pb-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col gap-8 max-w-4xl">
                <h1 className="text-[42px] md:text-[72px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.04]">
                  Strategy at the speed of sovereign change.
                </h1>
                <p className="text-[18px] md:text-[22px] text-[#8a8f98] leading-[1.6] max-w-2xl">
                  We advise governments and institutions on how to take control of their digital future, before someone else defines it for them.
                </p>
              </div>

              {/* Hero image */}
              <div className="mt-16 relative w-full aspect-[16/7] overflow-hidden">
                <Image
                  src="/images/Who_We_Are/about_image.png"
                  alt="Latitude Four Seven"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ── Two-column intro — white strip ─────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-20 bg-white border-b border-black/[0.08]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="md:pr-16 md:border-r border-black/[0.10]">
                <p className="text-[16px] text-[#3a3a3a] leading-[1.9]">
                  Most nations are more digitally dependent than they realise. Critical systems run on foreign infrastructure, contracts are written in favour of the provider, and the data sits somewhere else entirely. That's not a technology problem: it's a strategic one.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:pl-16">
                <p className="text-[16px] text-[#3a3a3a] leading-[1.9]">
                  We advise governments and institutions on how to change that. From shaping the policy frameworks that govern data ownership, to guiding the decisions that determine which direction to take: we sit at the table where strategy is set, and stay until the right one is clear.
                </p>
              </div>
            </div>
          </section>

          {/* ── The Thesis ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-28 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Left: heading */}
                <h2 className="text-[36px] md:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05]">
                  The Gap<br />is the Risk
                </h2>

                {/* Right: single paragraph */}
                <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                  Old systems aren't just slow: they actively resist the fast, accountable decisions that modern institutions need to make. While others are still in planning, those who move will pull ahead. We're here to close the gap between what a government intends and what actually gets done, before the moment passes.
                </p>

              </div>
            </div>
          </section>

          {/* ── Capabilities ───────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-28 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">

              <div className="flex items-end justify-between pb-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-[28px] md:text-[36px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Three principles. One objective.
                  </h2>
                </div>
              </div>

              <div className="relative w-full aspect-[16/7] overflow-hidden mt-6 mb-12">
                <Image
                  src="/images/Who_We_Are/capabilities_image.png"
                  alt="Latitude Four Seven"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                {capabilities.map((cap) => (
                  <div key={cap.index} className="flex flex-col gap-6 py-10 md:px-10 first:pl-0 last:pr-0">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] tracking-[0.22em] text-[#D4B996] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {cap.index}
                      </span>
                      <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        <span className="text-[#D4B996]">//</span>
                        <span className="text-[#F8FAFC]/70"> {cap.label}</span>
                      </span>
                    </div>
                    <h3 className="text-[20px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-[14px] text-[#8a8f98] leading-[1.85]">
                      {cap.body}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ── Alongside local people ───────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-28 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">

              <div className="mb-16">
                <h2 className="text-[28px] md:text-[40px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15] max-w-xl">
                  Designed with the people it serves.
                </h2>
              </div>

              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">

                {/* Card 1: Co-design */}
                <div className="flex-1 flex flex-col py-10 md:pr-10 md:first:pl-0">
                  <div className="h-[140px] flex items-center">
                    <CodesignSVG />
                  </div>
                  <div className="h-px bg-white/[0.08] my-8" />
                  <span className="text-[10px] tracking-[0.22em] text-[#D4B996] uppercase mb-5 block" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Co-design
                  </span>
                  <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug mb-4">
                    Shaped by those who know it best.
                  </h3>
                  <p className="text-[14px] text-[#8a8f98] leading-[1.85]">
                    We work alongside local teams from the start, not as outside experts imposing a blueprint, but as advisors helping to shape something that fits the context it will live in.
                  </p>
                </div>

                {/* Card 2: Testing */}
                <div className="flex-1 flex flex-col py-10 md:px-10">
                  <div className="h-[140px] flex items-center">
                    <TestingSVG />
                  </div>
                  <div className="h-px bg-white/[0.08] my-8" />
                  <span className="text-[10px] tracking-[0.22em] text-[#D4B996] uppercase mb-5 block" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Testing
                  </span>
                  <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug mb-4">
                    Tested with real people, not assumptions.
                  </h3>
                  <p className="text-[14px] text-[#8a8f98] leading-[1.85]">
                    Every service is tested with the people it is meant to serve, before it goes live. Not just technically, but practically. Does it make sense? Can they use it without guidance?
                  </p>
                </div>

                {/* Card 3: Adoption */}
                <div className="flex-1 flex flex-col py-10 md:pl-10">
                  <div className="h-[140px] flex items-center">
                    <AdoptionSVG />
                  </div>
                  <div className="h-px bg-white/[0.08] my-8" />
                  <span className="text-[10px] tracking-[0.22em] text-[#D4B996] uppercase mb-5 block" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Adoption
                  </span>
                  <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug mb-4">
                    Technology is only useful if people use it.
                  </h3>
                  <p className="text-[14px] text-[#8a8f98] leading-[1.85]">
                    We ensure part of every engagement is about local people understanding what's been built and why. Not dependency on outside experts: genuine capability, built from within.
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* ── The Profile ─────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-28 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

              <div className="flex flex-col gap-8">
                <h2 className="text-[32px] md:text-[44px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.1]">
                  A decade inside UK financial services.
                </h2>
                <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                  Ten years working within some of the largest financial services organisations in the UK, across investments and banking, has given us something most advisors don't have: practical, executable experience from the inside. We know what good digital infrastructure looks like, and what good digital products for citizens look like. Not just building the thing right, but making sure it's the right thing to build.
                </p>
                <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                  We bring those learnings directly to governments and institutions. What took the UK years to figure out doesn't have to be repeated from scratch. For a country like the Seychelles, that means shorter paths to better outcomes, grounded in experience that's already been tested at scale.
                </p>
              </div>

              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/Who_We_Are/integrity_image.png"
                  alt="UK financial services experience"
                  fill
                  className="object-cover object-center"
                />
              </div>

            </div>
          </section>

          {/* ── Our Values ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-28 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">

              <div className="mb-16">
                <h2 className="text-[28px] md:text-[40px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15] max-w-xl">
                  Our values.
                </h2>
              </div>

              <ValuesSection />
            </div>
          </section>

          {/* ── The Closer ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-32 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
              <h2 className="text-[52px] md:text-[88px] font-medium text-[#F8FAFC] tracking-[-0.04em] leading-[1.0] max-w-4xl">
                Set the direction.<br />Before someone else does.
              </h2>
              <p className="text-[16px] text-[#8a8f98] leading-[1.9] max-w-xl">
                We're not the largest consultancy in the room. We're the one that's seen what happens when the largest one leaves. We advise for outcomes, not optics: and we stay until the right direction is set.
              </p>
              <div>
                <a
                  href="mailto:contact@latitudefourseven.com"
                  className="inline-flex items-center gap-3 px-8 py-3.5 text-[11px] tracking-widest text-[#BDAE82] border border-[#BDAE82]/50 hover:border-[#BDAE82] hover:bg-[#BDAE82]/10 transition-all duration-300"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  SECURE BRIEFING
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          {/* ── Status bar ──────────────────────────────────────────────── */}
          <div className="px-6 md:px-20 lg:px-32 py-5 flex items-center gap-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#8a8f98] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                STATUS: STRATEGIC ADVISORY
              </span>
            </div>
            <span className="text-[#8a8f98]/30 text-[10px]">//</span>
            <span className="text-[10px] tracking-[0.18em] text-[#8a8f98]/60 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              OPERATIONAL SEPTEMBER 2028
            </span>
          </div>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Digital Leadership | Latitude Four Seven",
  description:
    "Building the local capability for the Seychelles to lead its own digital transformation — ending revolving-door consultancy for good.",
};

const criteria = [
  {
    index: "01",
    title: "Product-led thinking at the top.",
    body: "Digital transformation does not fail because the technology is wrong. It fails because the people making decisions do not understand what they are deciding. We work with senior leaders in the Republic to build genuine product literacy: not technical depth, but enough to ask the right questions and recognise a bad answer.",
  },
  {
    index: "02",
    title: "Test and learn, not plan and pray.",
    body: "Procurement tends to favour the large, the certain, and the slow. We help the Seychelles build an evidence-based delivery culture where small, testable decisions replace large, irreversible ones. Benefits are demonstrated before scale is committed to. Assumptions are tested before they are baked in.",
  },
  {
    index: "03",
    title: "Brain gain, not brain drain.",
    body: "A transformation delivered entirely by external consultants is not a transformation — it is a revolving door. We work alongside local teams from the start, investing in Seychellois talent so the Republic has the internal expertise to lead, adapt, and improve what has been built, without calling us back every time something changes.",
  },
];

const shifts = [
  { from: "Physical documents", to: "Trusted digital identity" },
  { from: "Cash-first economy", to: "Interoperable digital payments" },
  { from: "Vendor-led decisions", to: "Product-led procurement" },
  { from: "Revolving door consultancy", to: "Local capability and ownership" },
];

const related = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Engineering the independent digital foundation of the Republic.",
    href: "/sovereign-architecture",
  },
  {
    index: "02",
    label: "Governance Frameworks",
    description: "The policy and oversight structures that make technology accountable.",
    href: "/governance-frameworks",
  },
];

export default function DigitalLeadershipPage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
            <Image
              src="/images/Who_We_Are/capabilities_image.png"
              alt="Digital Leadership"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090A]/60 to-transparent" />

            <div className="relative z-10 px-6 md:px-20 lg:px-32 pb-20 max-w-[1400px] mx-auto w-full">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase block mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Capability // 03
              </span>
              <h1 className="text-[40px] md:text-[68px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                The technology is rarely<br />the problem.
              </h1>
              <p className="mt-4 text-[13px] tracking-widest text-[#D4B996]/70 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Building the local capability to lead our own transformation.
              </p>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We advise the Seychelles on building the decision-making culture, product literacy, and local talent that makes transformation stick — and ensures zero knowledge leakage when we leave.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "3", label: "Leadership criteria applied in every engagement" },
                  { stat: "Full", label: "Commitment to the cause" },
                  { stat: "Zero", label: "Knowledge leakage" },
                  { stat: "30/60/90", label: "The framework behind every engagement" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 px-8 py-10 first:pl-0 last:pr-0">
                    <span className="text-[32px] font-medium text-[#D4B996] tracking-[-0.02em]">{item.stat}</span>
                    <span className="text-[13px] text-[#8a8f98] leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The Challenge ───────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    The Challenge
                  </span>
                  <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                    Digital transformation without digital leadership is just expensive IT.
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-[#D4B996]/[0.06] border border-[#D4B996]/25 p-8">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/30 to-transparent" />
                    <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                      The Seychelles does not have a technology problem. It has a revolving door problem. External consultants arrive, build something, and leave — taking the knowledge with them. The cycle repeats.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      The shift from physical documents to digital identity, from cash to interoperable payments, from manual processes to automated services — these are not technology problems. They are change management problems, trust problems, and people problems. The technology is almost always the easy part.
                    </p>
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      What makes the difference is whether the people responsible for a service understand it well enough to improve it, defend it, and explain it to the citizens who use it. That requires investment in Seychellois talent, not just in Seychellois infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Founder's Insight ───────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-16 border-b border-white/[0.06] bg-white">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div>
                  <span
                    className="text-[11px] tracking-[0.22em] text-black/40 uppercase block"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Founder's Insight
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-[22px] md:text-[28px] font-medium text-[#08090A] tracking-[-0.02em] leading-[1.4]">
                    "The Seychelles' digital future should be led by Seychellois people. Our role is to make ourselves unnecessary as quickly as possible. If you leave and nothing works without you, you have not delivered a transformation. You have delivered a dependency."
                  </p>
                  <div className="h-px bg-black/[0.08]" />
                  <span
                    className="text-[12px] text-black/40 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Luke Albest // Founder
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Design Criteria ────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex items-end justify-between pb-12 border-b border-white/[0.08] mb-12">
                <div>
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Design Criteria
                  </span>
                  <h2 className="text-[26px] md:text-[34px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Three things we focus on in every engagement.
                  </h2>
                </div>
                <p className="text-[14px] text-[#8a8f98] leading-[1.75] max-w-xs text-right hidden md:block">
                  Leadership capability is not a soft outcome. It is the condition that determines whether everything else holds once we leave.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
                {criteria.map((p) => (
                  <div key={p.index} className="group relative flex flex-col gap-6 p-10 bg-[#08090A] hover:bg-[#0D0E12] transition-colors duration-300">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4B996]/50 via-[#D4B996]/20 to-transparent" />
                    <span
                      className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {p.index}
                    </span>
                    <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-[#8a8f98] leading-[1.85]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The Shift ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    The Shift
                  </span>
                  <h2 className="text-[32px] md:text-[42px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    From where the Republic is, to where it needs to be.
                  </h2>
                </div>
                <div className="flex flex-col">
                  {shifts.map((s, i) => (
                    <div key={s.from}>
                      {i > 0 && <div className="h-px bg-white/[0.06]" />}
                      <div className="flex items-center gap-6 py-8">
                        <span className="flex-1 text-[15px] text-[#8a8f98] leading-snug">{s.from}</span>
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="shrink-0 text-[#D4B996]/40">
                          <path d="M0 6h22M17 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="flex-1 text-[15px] text-[#F8FAFC] leading-snug text-right">{s.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Related Capabilities ────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-10"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Related Capabilities
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.index}
                    href={item.href}
                    className="group flex items-start justify-between p-10 border border-white/[0.08] hover:border-[#D4B996]/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex flex-col gap-3">
                      <span
                        className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {item.index}
                      </span>
                      <h3 className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug group-hover:text-[#D4B996] transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-[14px] text-[#8a8f98] leading-[1.75]">
                        {item.description}
                      </p>
                    </div>
                    <svg className="shrink-0 mt-1 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
              <div>
                <span
                  className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Engage
                </span>
                <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                  Leadership capability is the outcome, not the assumption.
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                  The best time to build local capability is before the engagement model is set. The second best time is now.
                </p>
                <a
                  href="mailto:contact@latitudefourseven.com"
                  className="shrink-0 px-8 py-3 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  SECURE BRIEFING
                </a>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";

export const metadata: Metadata = {
  title: "Digital Leadership | Latitude Four Seven",
  description:
    "Building the local capability for the Seychelles to lead its own digital transformation — ending revolving-door consultancy for good.",
};

const criteria = [
  {
    index: "01",
    title: "Product-led thinking at the top.",
    body: "Digital transformation doesn't fail because the technology is wrong. It fails because strategy and delivery are too often pulling in different directions. We work with senior leaders to close that gap, building genuine product literacy so the right questions get asked before the wrong decisions get made.",
  },
  {
    index: "02",
    title: "Test and learn, not plan and pray.",
    body: "Procurement tends to favour the large, the certain, and the slow. We help the Seychelles build an evidence-based delivery culture where small, testable decisions replace large, irreversible ones. Benefits are demonstrated before scale is committed to. Assumptions are tested before they are baked in.",
  },
  {
    index: "03",
    title: "Brain gain, not brain drain.",
    body: "Lasting transformation requires local ownership. We work alongside Seychellois teams from the start, investing in the people and institutions that will carry the work forward long after any single engagement is complete.",
  },
];

const shifts = [
  { post: "Trusted digital identity", from: "Physical documents", to: "Currently, citizens navigate public services through paper-based identity systems that are slow to verify and difficult to scale. The shift is to trusted digital identity infrastructure that works across every government service, reducing friction and extending access to all." },
  { post: "Interoperable digital payments", from: "Cash-first economy", to: "Cash dependency limits financial inclusion and creates inefficiency across the economy. The shift is to interoperable digital payment rails built for citizens, businesses, and government — accessible, reliable, and designed for the Seychelles context." },
  { post: "Product-led procurement", from: "Vendor-led decisions", to: "When procurement is led by vendors, the decisions tend to serve the vendor. The shift is to product-led procurement, where outcomes are defined first, requirements flow from those outcomes, and suppliers are held to them." },
  { post: "Local capability and ownership", from: "Revolving door consultancy", to: "External expertise without genuine knowledge transfer leaves institutions no stronger than before. The shift is to engagements structured around building local capability, so the Seychelles is better equipped at the end of every piece of work than it was at the start." },
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
              src="/images/Digital_Leadership/hero_cover.png"
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
              <h1 className="text-[26px] md:text-[42px] lg:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                The technology is rarely<br />the problem
              </h1>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We advise the Seychelles on building the decision-making culture, product literacy, and local talent that makes transformation stick.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "70%", label: "Of digital transformations fail from lack of internal capability" },
                  { stat: "60%", label: "Of government projects require consultant re-engagement within 2 years" },
                  { stat: "3x", label: "Higher return with structured local upskilling" },
                  { stat: "18 mo", label: "Before knowledge loss becomes critical after consultants depart" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 px-8 py-10 first:pl-0 last:pr-0">
                    <span className="text-[32px] font-medium text-[#D4B996] tracking-[-0.02em]">{item.stat}</span>
                    <span className="text-[13px] text-[#C2C7D0] leading-snug">{item.label}</span>
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
                    Digital transformation without digital leadership is just expensive IT
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                    The Seychelles does not have a technology problem. It has a leadership problem. The decisions that shape digital services are too often made without the context, experience, or accountability needed to make them well.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The shift from physical documents to digital identity, from cash to interoperable payments, from manual processes to automated services — these are not technology problems. They are change management problems, trust problems, and people problems. The technology is almost always the easy part.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    What makes the difference is whether the people responsible for a service understand it well enough to improve it, defend it, and explain it to the citizens who use it. That requires investment in Seychellois talent, not just in Seychellois infrastructure.
                  </p>
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
                    Three things we focus on in every engagement
                  </h2>
                </div>
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
                    <p className="text-[14px] text-[#C2C7D0] leading-[1.85]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Founder's Insight ───────────────────────────────────────── */}
          <section className="relative px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06] bg-[#08090A] overflow-hidden">
            {/* Corner brackets */}
            <div className="hidden md:block absolute top-8 left-8 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute top-0 left-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute top-8 right-8 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute top-0 right-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute bottom-8 left-8 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute bottom-0 left-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute bottom-8 right-8 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute bottom-0 right-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-8">
              <p className="text-[22px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.4] max-w-3xl">
                "The Seychelles' digital future should be led by Seychellois people. That is not a nice-to-have. It is the measure against which every engagement should be judged. We are here to build something that lasts, not something that impresses."
              </p>
              <div className="h-px bg-white/[0.08] w-24" />
              <span
                className="text-[12px] text-[#D4B996]/60 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Luke Albest // Founder
              </span>
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
                    From where the Seychelles is, to where it needs to be
                  </h2>
                </div>
                <AccordionGroup items={shifts.map(s => ({ title: s.post, body: s.to }))} />
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
                      <p className="text-[14px] text-[#C2C7D0] leading-[1.75]">
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
                  Leadership capability is the outcome, not the assumption
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Digital Leadership | Latitude Four Seven",
  description:
    "Bringing departments together through robust leadership and interoperability: building the structures that make joined-up government possible.",
};

const criteria = [
  {
    index: "01",
    title: "Leadership that connects, not just directs.",
    body: "The biggest barrier to joined-up government is rarely technical; it is leadership. Departments that optimise for their own objectives rather than shared outcomes create duplication, inconsistency, and citizen frustration. We work with senior leaders to build the shared direction, cross-departmental trust, and product literacy that make collaboration the default.",
  },
  {
    index: "02",
    title: "Test and learn, not plan and pray.",
    body: "Procurement tends to favour the large, the certain, and the slow. We help the Seychelles build an evidence-based delivery culture where small, testable decisions replace large, irreversible ones. Benefits are demonstrated before scale is committed to. Assumptions are tested before they are baked in.",
  },
  {
    index: "03",
    title: "Interoperability by design, not retrofit.",
    body: "Systems that cannot communicate create islands of progress, not transformation. We advise on shared data standards, open integration frameworks, and architecture that allows departments to work from a common foundation, so that progress in one area builds capability across the whole.",
  },
];

const shifts = [
  { post: "Shared digital identity", from: "Siloed verification", to: "Citizens currently navigate public services that verify identity separately, creating friction and inconsistency across departments. The shift is to a shared digital identity infrastructure that works consistently across every government service: one experience, regardless of which department the citizen is dealing with." },
  { post: "Interoperable digital payments", from: "Fragmented payment systems", to: "Fragmented payment systems across departments create duplication, inconsistency, and unnecessary cost. The shift is to interoperable digital payment rails built on shared standards: consistent, reliable, and designed to serve citizens and government as one connected system." },
  { post: "Cross-departmental governance", from: "Siloed procurement", to: "When departments procure independently, without visibility of what others are building, the result is duplication and incompatibility. The shift is to shared procurement standards and cross-departmental governance, so that what one department builds, the whole of government can benefit from." },
  { post: "Local capability and ownership", from: "Revolving door consultancy", to: "External expertise without genuine knowledge transfer leaves institutions no stronger than before. The shift is to engagements structured around building local capability, so the Seychelles is better equipped at the end of every piece of work than it was at the start." },
];

const related = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Advising on procurement and data ownership to keep the Seychelles in control of its digital future.",
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
                We help the Seychelles build the cross-departmental leadership, shared systems, and interoperability frameworks that turn individual digital capabilities into joined-up government.
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
                  <div key={item.label} className="flex flex-col gap-2 px-8 py-10 first:pl-0 last:pr-0 odd:pl-0 md:odd:pl-8 md:first:pl-0">
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
                    Siloed departments cannot deliver joined-up services
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                    The barrier to digital transformation in government is rarely technical. It is structural: departments working in parallel but not together, systems that cannot communicate across agency boundaries, and leadership that cannot see across the whole. Citizens experience this as fragmented, inconsistent services.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The result is duplication: multiple departments solving the same problem differently, procurement decisions made without visibility of what already exists, and data that lives in silos when it should flow. Each department may be making progress, but the citizen sees none of it as joined up.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    We work with leaders across the Seychelles government to build the cross-departmental frameworks, shared technology standards, and interoperability architecture that make joined-up services possible and sustainable.
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
                    The shifts that make joined-up government possible
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
                  Departments that work together serve citizens better
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  The best time to build cross-departmental leadership is before the silos become structural. The second best time is now.
                </p>
                <SecureBriefingButton
                  className="shrink-0 px-8 py-3 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                />
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

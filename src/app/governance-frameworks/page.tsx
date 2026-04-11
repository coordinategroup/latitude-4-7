import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Governance Frameworks | Latitude Four Seven",
  description:
    "Securing the Seychelles' digital future through modern policy, trust, and regulatory structures built for the world as it is today.",
};

const criteria = [
  {
    index: "01",
    title: "Legislation that reflects today.",
    body: "The Seychelles cannot govern 2026 digital services with laws written in 2004. We advise on updating data protection, KYC, AML, and digital identity legislation so the legal framework is in the same decade as the technology it governs.",
  },
  {
    index: "02",
    title: "Oversight with teeth.",
    body: "A regulator that cannot audit the systems it oversees is not a regulator — it is a letterhead. We help the Republic build oversight structures with genuine technical authority: the tools, the access rights, and the mandate to hold digital systems to account.",
  },
  {
    index: "03",
    title: "Compliance built in, not bolted on.",
    body: "Compliance is not just for banks and multinationals. It is what a responsible government owes its citizens. We advise on embedding compliance into the architecture of public services from day one, so it is never an afterthought and never a retrofit.",
  },
];

const coverage = [
  { value: "Data Protection", label: "Citizens' data governed by laws written for the digital age" },
  { value: "KYC & AML", label: "Modern identity verification and anti-money laundering frameworks that meet international standards" },
  { value: "Audit Rights", label: "Regulators with genuine technical access and authority" },
  { value: "Digital Identity Law", label: "Legal frameworks that recognise and protect digital identity across all public services" },
];

const related = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Engineering the independent digital foundation of the Republic.",
    href: "/sovereign-architecture",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Building the local capability to lead transformation from within.",
    href: "/digital-leadership",
  },
];

export default function GovernanceFrameworksPage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
            <Image
              src="/images/Who_We_Are/capabilities_image.png"
              alt="Governance Frameworks"
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
                Capability // 02
              </span>
              <h1 className="text-[40px] md:text-[68px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                Rules written for the world<br />as it actually is.
              </h1>
              <p className="mt-4 text-[13px] tracking-widest text-[#D4B996]/70 uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Securing our digital future through modern policy and trust.
              </p>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We advise the Seychelles on building governance frameworks that reflect 2026 reality: updated legislation, clear oversight, and compliance built in from the ground up.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "4", label: "Coverage areas every framework must address" },
                  { stat: "Full", label: "Commitment to the cause" },
                  { stat: "Zero", label: "Trust deficit" },
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
                    The laws have not kept up. The technology has not waited.
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-[#D4B996]/[0.06] border border-[#D4B996]/25 p-8">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/30 to-transparent" />
                    <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                      The Seychelles is operating digital services under legislation that was not written for them. KYC processes, AML obligations, and data protection rules are being applied to systems that those rules were never designed to govern.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      The result is regulators who lack the tools to audit the systems they oversee, and citizens with no clear legal rights over their own digital identity. That is not a minor compliance gap. It is a structural trust deficit that digital adoption cannot survive.
                    </p>
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      The Seychelles has a chance most nations do not: to build governance frameworks from a clean slate, informed by what has worked and failed elsewhere. That opportunity has a window. We help the Republic use it well.
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
                    "Trust is the primary currency of any digital system. Citizens will not adopt services they do not believe are protected. And you cannot build that trust with a rulebook that was written before the internet existed."
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
                    Three things every governance framework must do.
                  </h2>
                </div>
                <p className="text-[14px] text-[#8a8f98] leading-[1.75] max-w-xs text-right hidden md:block">
                  Not aspirations. The minimum standard for a framework we would put our name to.
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

          {/* ── Coverage Areas ──────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Minimum Standard
                  </span>
                  <h2 className="text-[32px] md:text-[42px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Where governance must reach.
                  </h2>
                </div>
                <div className="flex flex-col">
                  <div className="bg-white/[0.03] border border-white/[0.08] p-8 mb-4">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      A governance framework that only covers some of the Republic's digital services is not a framework — it is a patchwork. These are the four areas every national digital governance structure must address.
                    </p>
                  </div>
                  {coverage.map((item, i) => (
                    <div key={item.value}>
                      {i > 0 && <div className="h-px bg-white/[0.06]" />}
                      <div className="flex flex-col gap-2 py-8">
                        <span className="text-[18px] font-medium text-[#D4B996] tracking-[-0.01em]">
                          {item.value}
                        </span>
                        <span className="text-[14px] text-[#8a8f98] leading-snug">
                          {item.label}
                        </span>
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
                  Governance built for now. Designed to last.
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                  The best time to shape the rules is before the systems are built. The second best time is now.
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

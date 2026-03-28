import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Sovereign Architecture | Latitude Four Seven",
  description:
    "Designing national digital systems that remain under full local sovereign control. Latitude Four Seven's approach to sovereign infrastructure for the Seychelles.",
};

const principles = [
  {
    index: "01",
    title: "Control Without Dependency",
    body: "Sovereign architecture begins with a simple question: who holds the keys? Too many national digital systems operate on infrastructure owned, operated, and ultimately controlled by external providers. We design systems where the state holds the administrative authority, the data residency, and the contractual leverage — not the vendor.",
  },
  {
    index: "02",
    title: "Resilience by Design",
    body: "Resilience is not a feature to be added after the architecture is drawn. It is the first design constraint. Systems built for sovereign contexts must function under conditions of geopolitical pressure, supply chain disruption, and vendor withdrawal. We design for those conditions from the first line of the specification.",
  },
  {
    index: "03",
    title: "Interoperability Without Exposure",
    body: "A sovereign system that cannot communicate with global financial infrastructure is an island, not an asset. We design architectures that participate fully in international data exchange and payment rails without creating backdoor dependencies or surrendering jurisdictional control over the data that flows through them.",
  },
];

const pillars = [
  { value: "Data Residency", label: "All primary data stored and governed within national jurisdiction" },
  { value: "Key Sovereignty", label: "Cryptographic control retained by the state, not the vendor" },
  { value: "Audit Rights", label: "Full, unmediated access to system logs and infrastructure state" },
];

export default function SovereignArchitecturePage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 pt-32 pb-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                Capability // 01
              </span>
              <h2 className="mt-5 text-[36px] md:text-[62px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.08] max-w-5xl">
                Architecting systems that answer to one authority.
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                  <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                    Sovereignty is not a procurement category. It is an architectural commitment made at the point of design, encoded into every system boundary, every access control, and every data residency decision. By the time a system is live, the opportunity to make it truly sovereign has already passed or been preserved.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                  <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                    We work with governments and institutions at the point where those decisions are being made — not retrospectively. Our architecture work begins with a sovereignty audit of the existing estate and produces a phased migration plan that moves the institution toward full local control without disrupting live services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── The Problem ────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    The Problem
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Digital tenancy is not digital sovereignty.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-[#D4B996]/[0.06] border border-[#D4B996]/25 rounded-[4px] p-8">
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-[4px] bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/30 to-transparent" />
                    <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.45]">
                      Most national digital systems are built on infrastructure the state does not control, governed by contracts written in another jurisdiction's interest.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      Cloud-first mandates, driven by procurement convenience and vendor sales cycles, have created a generation of national digital infrastructure that is functionally dependent on a small number of foreign hyperscalers. When those relationships are healthy, the arrangement is invisible. When they are not — whether through commercial dispute, geopolitical pressure, or regulatory change — the exposure becomes acute and the options narrow rapidly.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      The Seychelles digital programme is being built to a different specification. Every infrastructure decision is evaluated against a sovereign control matrix before procurement begins. The question is not which provider offers the best SLA. The question is which architecture preserves the most optionality for the state if that provider relationship changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Principles ─────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-14 border-b border-white/[0.08] mb-10">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    Design Principles
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[36px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15] max-w-xl">
                    Three principles. Non-negotiable.
                  </h3>
                </div>
                <p className="text-[15px] text-[#8a8f98] leading-[1.75] max-w-sm hidden md:block">
                  These are not aspirational statements. They are design constraints applied to every system we touch, at every layer of the stack.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {principles.map((p) => (
                  <div
                    key={p.index}
                    className="group relative flex flex-col gap-6 p-10 bg-white/[0.03] border border-white/[0.08] rounded-[4px] hover:border-[#D4B996]/40 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-[4px] bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/20 to-transparent" />
                    <span className="font-mono text-[12px] tracking-[0.22em] text-[#D4B996]/60 uppercase">
                      {p.index}
                    </span>
                    <h4 className="text-[18px] font-semibold text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-[15px] text-[#8a8f98] leading-[1.85]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Sovereignty Pillars ─────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    Sovereignty Pillars
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    The minimum viable sovereignty standard.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      Every system we design is assessed against three minimum conditions. These are not gold-standard aspirations — they are the floor below which we consider a system to be architecturally compromised from a sovereignty perspective, regardless of its technical performance or commercial efficiency.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pillars.map((pillar) => (
                      <div key={pillar.value} className="flex flex-col gap-3 bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                        <span className="text-[18px] font-semibold text-[#D4B996] tracking-[-0.02em] leading-snug">
                          {pillar.value}
                        </span>
                        <span className="text-[13px] text-[#8a8f98] leading-snug">
                          {pillar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    Engage
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Sovereignty is a design decision, not a procurement one.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      If your institution is about to make an infrastructure decision that will define its digital posture for the next decade, that conversation should happen before the RFP is issued.
                    </p>
                    <a
                      href="mailto:contact@latitudefourseven.com"
                      className="shrink-0 text-[13px] bg-white text-[#08090A] px-5 py-2 rounded-[4px] font-medium hover:bg-white/90 transition-colors"
                    >
                      Secure briefing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

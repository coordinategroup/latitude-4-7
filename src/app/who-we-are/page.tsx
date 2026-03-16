import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Who We Are | Latitude Four Seven",
  description:
    "Latitude Four Seven is a senior digital governance and product leadership consultancy. Strategy at the speed of sovereign change.",
};

const capabilities = [
  {
    index: "01",
    title: "Product & Service Innovation",
    body: "Visionary policy does not become market-ready infrastructure by accident. It becomes infrastructure because someone with product instincts sat at the table when the mandate was written. We ideate, build, and scale national-level digital stacks that foster domestic fintech growth: from concept through to live service, with governance embedded at every stage rather than bolted on at the end.",
  },
  {
    index: "02",
    title: "Sovereign Infrastructure Strategy",
    body: "Digital tenancy is not digital sovereignty. Too many institutions operate on infrastructure they do not control, governed by contracts they do not fully understand, in jurisdictions that do not share their interests. We move institutions beyond that dependency model: establishing true data sovereignty where the institution, not the provider, holds the keys to the financial ledger.",
  },
  {
    index: "03",
    title: "Digital Governance & Trust",
    body: "Regulatory compliance and product agility are not opposites. They are a design problem. We navigate the regulatory perimeter with precision, designing systems that satisfy central bank mandates while preserving the delivery velocity that modern product teams require. The result is institutions that move fast and stay clean.",
  },
];

const stats = [
  { value: "10+", label: "Years in senior product and governance roles" },
  { value: "Tier 1", label: "UK financial institutions and regulatory bodies" },
  { value: "4.7°S", label: "Embedded presence in the Seychelles digital programme" },
];

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 pt-32 pb-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                Who We Are
              </span>
              <h2 className="mt-5 text-[36px] md:text-[62px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.08] max-w-5xl">
                Strategy at the speed of sovereign change.
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                  <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                    Institutional resilience is no longer a readiness posture. It is an act of continuous reinvention. The organisations that survive the next decade of digital disruption will not be those that maintained their existing architecture most carefully. They will be those that rebuilt it, on their own terms, before they were forced to.
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                  <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                    Sovereign digital architecture is not a one-time transformation programme. It is an operating philosophy: one that treats data infrastructure as a geopolitical asset, treats governance as a product discipline, and treats the gap between policy ambition and technical delivery as the primary risk to be managed. We exist to close that gap.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── The Provocation ────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    The Provocation
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    The disruption dividend.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  {/* Callout card */}
                  <div className="relative bg-[#D4B996]/[0.06] border border-[#D4B996]/25 rounded-[4px] p-8">
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-[4px] bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/30 to-transparent" />
                    <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.45]">
                      The gap between legacy governance and digital-first autonomy is the primary risk to national financial infrastructure in 2026.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      Legacy systems are not simply slow. They are structurally opposed to the kind of rapid, accountable decision-making that modern financial infrastructure demands. Central banks are issuing digital currency frameworks. Regulators are demanding real-time reporting. Fintech entrants are compressing the timeline for every incumbent. The institutions that respond with another three-year transformation roadmap will not survive the wait.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      The disruption dividend is not an abstract concept. It is the measurable advantage that accrues to the institution that acts with clarity and speed while its peers are still in discovery. Capturing it requires a different kind of partner: one who has operated at this intersection before, who understands what is politically feasible and technically executable, and who does not need eighteen months to get up to speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Capabilities Framework ──────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-14 border-b border-white/[0.08] mb-10">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    Capabilities
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[36px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15] max-w-xl">
                    Three capabilities. One operating thesis.
                  </h3>
                </div>
                <p className="text-[15px] text-[#8a8f98] leading-[1.75] max-w-sm hidden md:block">
                  Each capability is designed to interlock. Sovereignty without governance is exposure. Governance without innovation is stasis. Innovation without infrastructure is theatre.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {capabilities.map((cap) => (
                  <div
                    key={cap.index}
                    className="group relative flex flex-col gap-6 p-10 bg-white/[0.03] border border-white/[0.08] rounded-[4px] hover:border-[#D4B996]/40 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-[4px] bg-gradient-to-r from-[#D4B996]/60 via-[#D4B996]/20 to-transparent" />
                    <span className="font-mono text-[12px] tracking-[0.22em] text-[#D4B996]/60 uppercase">
                      {cap.index}
                    </span>
                    <h4 className="text-[18px] font-semibold text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {cap.title}
                    </h4>
                    <p className="text-[15px] text-[#8a8f98] leading-[1.85]">
                      {cap.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Engagement Model ────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div className="md:sticky md:top-32">
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    Engagement Model
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Direct ministerial and institutional engagement.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      A decade of operating at the intersection of high-stakes product design and national policy has produced a working method that consultancies do not teach. We have sat in rooms where the decisions were not hypothetical. Where the central bank governor was not a stakeholder in a RACI matrix, but a principal whose confidence in the programme determined whether it proceeded. Where the engineering floor was not a delivery unit to be managed, but a co-author of the architecture.
                    </p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      Our engagement model is direct. We do not subcontract the senior work to junior teams once the contract is signed. The same expertise that closes the engagement is the expertise that delivers it. We operate at C-suite and ministerial level because that is where digital transformation is won or lost: not in the Jira backlog, but in the conversation that determines what the backlog is allowed to contain.
                    </p>
                  </div>

                  {/* Stat cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                    {stats.map((stat) => (
                      <div key={stat.value} className="flex flex-col gap-3 bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                        <span className="text-[40px] font-medium text-[#D4B996] tracking-[-0.03em] leading-none">
                          {stat.value}
                        </span>
                        <span className="text-[13px] text-[#8a8f98] leading-snug">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── The Bottom Line ────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-12 md:gap-16 items-start">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                    The Bottom Line
                  </span>
                  <h3 className="mt-4 text-[28px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Build the rails. Not the excuses for why they cannot be built.
                  </h3>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      In a world of constant digital flux, the most dangerous strategy is the one that remains tethered to the shore. The institutions that will define the next era of sovereign finance are not waiting for the perfect conditions. They are building the rails for the journey ahead, with partners who have already laid track elsewhere and know what the terrain demands.
                    </p>
                  </div>
                  <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-[4px] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <p className="text-[16px] text-[#8a8f98] leading-[1.9]">
                      We are not the largest consultancy in the room. We are the one that has seen what happens when the largest consultancy leaves. We build for permanence, not for the engagement review.
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

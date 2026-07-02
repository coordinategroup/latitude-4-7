import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Souvren Architecture | Souvren",
  description:
    "Designing the digital ecosystem of the Seychelles: how services, infrastructure, and shared foundations are built to work together as one.",
};

const criteria = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Designed as a whole, not assembled in parts",
    description: "Architecture designed from the outside in, starting with the experience it needs to deliver.",
    checklist: [
      "Shared data models across all services",
      "Common design standards applied estate-wide",
      "Reusable infrastructure every service builds on",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 12h4m2-4.5-4 3m4 3.5-4-3" />
      </svg>
    ),
    title: "Interoperable by design, not by integration",
    description: "Connectivity built into the architecture from the start, not bolted on after the fact.",
    checklist: [
      "Shared APIs and open data standards",
      "Design patterns for frictionless communication",
      "Integration eliminated before it becomes debt",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a9 9 0 1 0 9 9" /><polyline points="16 3 21 3 21 8" /><path d="M21 3l-9 9" />
      </svg>
    ),
    title: "Built to evolve without starting over",
    description: "Architecture decisions made today determine how easy tomorrow's requirements will be.",
    checklist: [
      "Modular, extensible service design",
      "Components replaceable without rebuilding foundations",
      "Scales without accumulating technical debt",
    ],
  },
];

const pillars = [
  { value: "Ecosystem Thinking", label: "Before any individual service is designed, the broader ecosystem it will live in must be understood. We advise on mapping the full digital estate, including existing services, shared infrastructure, data flows, and dependencies, so that every new decision is made with the whole in view." },
  { value: "Shared Foundations", label: "Shared design systems, common data standards, and reusable infrastructure components reduce duplication and accelerate delivery across the estate. We advise on building foundations that every service can build on, rather than ones that every service has to rebuild." },
  { value: "Interoperability", label: "Services that are genuinely interoperable share data, standards, and functionality without friction. We advise on the API strategies, open data standards, and integration patterns that allow every part of the digital estate to communicate and work as a connected whole rather than a collection of isolated products." },
  { value: "Longevity by Design", label: "The most expensive digital estates are the ones that were never designed to last. We advise on architecture decisions made with longevity in mind: open standards, clear documentation, and systems that a future team can build on rather than inherit and regret." },
];

export default function SovereignArchitecturePage() {
  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">

            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

            <div className="flex flex-col gap-6 max-w-4xl pb-16">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
                One ecosystem, built to work as one
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                We advise on how the digital estate is designed, connected, and built: interoperable services, shared foundations, and an architecture that works as one rather than a collection of isolated parts.
              </p>
            </div>
          </section>

          {/* ── Hero image ─────────────────────────────────────────────── */}
          <div className="pb-28">
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src="/images/Sovereign_Architecture/capabilities_image.png"
                alt="Sovereign Architecture"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── The Challenge ───────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 pb-16">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:max-w-[520px] shrink-0">
                <span className="text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase block mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  The Challenge
                </span>
                <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.2]" style={{ fontFamily: "var(--font-instrument)" }}>
                  Disconnected parts cannot form a coherent whole
                </h2>
              </div>
              <div className="flex flex-col gap-6 mt-6 md:mt-0 md:w-1/2 md:ml-auto md:pr-16">
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  Most digital estates are not designed as ecosystems. They are assembled: one service here, one platform there, built by different teams at different times with different assumptions. The result is a fragmented estate where integration is always expensive, consistency is always elusive, and the user always pays the price.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  The real cost is not the integration work itself. It is the ceiling it places on what can be built next. Every new service that has to work around what already exists inherits its constraints, its technical debt, and its limitations. The estate stops growing and starts accumulating.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  We advise on how to design the digital ecosystem intentionally: shared foundations, connected services, and an architecture that makes it easier to build the next thing than it was to build the last.
                </p>
              </div>
            </div>
          </section>

          {/* ── Design Criteria ────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-16 pb-8">
            <div className="mb-12">
              <span className="text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase block mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Design Criteria
              </span>
              <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.15]" style={{ fontFamily: "var(--font-instrument)" }}>
                How we approach the digital ecosystem
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {criteria.map((p) => (
                <div key={p.title} className="flex flex-col gap-6 p-8 border border-black/[0.08]">
                  <div className="text-[#C48C59]">
                    {p.icon}
                  </div>
                  <h3 className="text-[22px] font-medium text-[#292929] tracking-[-0.02em] leading-snug" style={{ fontFamily: "var(--font-instrument)" }}>
                    {p.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 m-0">
                    {p.description}
                  </p>
                  <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                    {p.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[15px] lg:text-[16px] text-[#0A0A0B]/55 leading-snug">
                        <span className="mt-[5px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── Founder's Insight ───────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-36 pb-8">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <p className="text-[22px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.4]" style={{ fontFamily: "var(--font-instrument)" }}>
                "A digital ecosystem designed as a collection of separate projects will always behave like one. The question to ask at the start is not what does this service need. It is what does the whole need, and how does this service contribute to it."
              </p>
              <div className="h-px bg-black/[0.08] w-24" />
              <span className="text-[12px] text-[#0A0A0B]/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Luke Albest // Founder
              </span>
            </div>
          </section>

          {/* ── Minimum Standard ───────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-44 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-64 items-start">
              <div>
                <span className="text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase block mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Minimum Standard
                </span>
                <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.15]" style={{ fontFamily: "var(--font-instrument)" }}>
                  What every ecosystem decision should achieve
                </h2>
              </div>
              <AccordionGroup items={pillars.map(p => ({ title: p.value, body: p.label }))} />
            </div>
          </section>

          {/* ── Closer ──────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-36 pb-24">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                The ecosystem you design today determines what you can build tomorrow
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                The best time to design the digital estate as a coherent ecosystem is at the start. The second best time is now.
              </p>
              <SecureBriefingButton
                className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Contact
              </SecureBriefingButton>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

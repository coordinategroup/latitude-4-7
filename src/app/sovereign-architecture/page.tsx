import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Sovereign Architecture | Latitude Four Seven",
  description:
    "Designing the digital ecosystem of the Seychelles: how services, infrastructure, and shared foundations are built to work together as one.",
};

const criteria = [
  {
    index: "01",
    title: "Designed as a whole, not assembled in parts.",
    body: "An ecosystem designed from the outside in, starting with the experience it needs to deliver, produces fundamentally different architecture than one assembled service by service. We advise on how to approach the digital estate as a coherent whole: shared data models, common design standards, and infrastructure that every service can build on.",
  },
  {
    index: "02",
    title: "Interoperable by design, not by integration.",
    body: "Integration is what you do when services were never designed to connect. True interoperability means building that connectivity into the architecture from the start: shared APIs, open data standards, and design patterns that allow every part of the ecosystem to communicate without friction.",
  },
  {
    index: "03",
    title: "Built to evolve without starting over.",
    body: "The architecture decisions made today determine how easy or how painful tomorrow's requirements will be. We advise on ecosystem design that is modular and extensible: where individual components can be updated, replaced, or scaled without rebuilding the foundations they sit on.",
  },
];

const pillars = [
  { value: "Ecosystem Thinking", label: "Before any individual service is designed, the broader ecosystem it will live in must be understood. We advise on mapping the full digital estate, including existing services, shared infrastructure, data flows, and dependencies, so that every new decision is made with the whole in view." },
  { value: "Shared Foundations", label: "Shared design systems, common data standards, and reusable infrastructure components reduce duplication and accelerate delivery across the estate. We advise on building foundations that every service can build on, rather than ones that every service has to rebuild." },
  { value: "Interoperability", label: "Services that are genuinely interoperable share data, standards, and functionality without friction. We advise on the API strategies, open data standards, and integration patterns that allow every part of the digital estate to communicate and work as a connected whole rather than a collection of isolated products." },
  { value: "Longevity by Design", label: "The most expensive digital estates are the ones that were never designed to last. We advise on architecture decisions made with longevity in mind: open standards, clear documentation, and systems that a future team can build on rather than inherit and regret." },
];

const related = [
  {
    index: "02",
    label: "Experience Design",
    description: "End-to-end digital experience creation, from discovery and research through to delivery and iteration.",
    href: "/governance-frameworks",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Building the cross-sector leadership and local expertise that creates unified digital experiences.",
    href: "/digital-leadership",
  },
];

export default function SovereignArchitecturePage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
            <Image
              src="/images/Sovereign_Architecture/capabilities_image.png"
              alt="Sovereign Architecture"
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
                Capability // 01
              </span>
              <h1 className="text-[26px] md:text-[42px] lg:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                One ecosystem. Built to work as one.
              </h1>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We advise on how the digital estate is designed, connected, and built: interoperable services, shared foundations, and an architecture that works as one rather than a collection of isolated parts.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "70%", label: "Of digital services fail within 3 years due to architecture that cannot scale" },
                  { stat: "5x", label: "Higher cost to redesign a system than to design it correctly from the outset" },
                  { stat: "3x", label: "More value delivered when services are connected by design rather than integrated after the fact" },
                  { stat: "40%", label: "Of digital budgets spent integrating systems that should have been designed to connect" },
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
                    Disconnected parts cannot form a coherent whole
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                    Most digital estates are not designed as ecosystems. They are assembled: one service here, one platform there, built by different teams at different times with different assumptions. The result is a fragmented estate where integration is always expensive, consistency is always elusive, and the user always pays the price.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The real cost is not the integration work itself. It is the ceiling it places on what can be built next. Every new service that has to work around what already exists inherits its constraints, its technical debt, and its limitations. The estate stops growing and starts accumulating.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    We advise on how to design the digital ecosystem intentionally: shared foundations, connected services, and an architecture that makes it easier to build the next thing than it was to build the last.
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
                    How we approach the digital ecosystem
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
                "A digital ecosystem designed as a collection of separate projects will always behave like one. The question to ask at the start is not what does this service need. It is what does the whole need, and how does this service contribute to it."
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

          {/* ── Minimum Standard ───────────────────────────────────────── */}
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
                    What every ecosystem decision should achieve
                  </h2>
                </div>
                <AccordionGroup items={pillars.map(p => ({ title: p.value, body: p.label }))} />
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
                  The ecosystem you design today determines what you can build tomorrow
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  The best time to design the digital estate as a coherent ecosystem is at the start. The second best time is now.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Experience Design | Latitude Four Seven",
  description:
    "End-to-end digital experience creation, from discovery and user research through to prototyping, testing, and live delivery.",
};

const criteria = [
  {
    index: "01",
    title: "Start with the user, not the solution.",
    body: "Understanding the problem before committing to a solution is the most valuable thing a product team can do. We run structured discovery programmes, including user interviews, behavioural research, and service mapping, that ensure every design decision is grounded in real user needs rather than internal assumptions.",
  },
  {
    index: "02",
    title: "Prototype early. Test often.",
    body: "The fastest way to validate an idea is to put something in front of real users before any significant build has begun. We design and test prototypes at every stage of the process, surfacing issues early when they are cheap to fix and building confidence in what gets built.",
  },
  {
    index: "03",
    title: "Manage the product, not just the project.",
    body: "Delivery does not end at launch. The products and services that succeed are the ones with a clear product owner, a roadmap that responds to evidence, and a team structured to iterate continuously. We help organisations build the product management capability to do exactly that.",
  },
];

const coverage = [
  { value: "Discovery & User Research", label: "We run structured discovery programmes that define the problem space before any solution is committed to. User interviews, behavioural analysis, and service mapping give design and product teams the evidence they need to make the right decisions from the start." },
  { value: "Service Design & Prototyping", label: "We design end-to-end service journeys and build testable prototypes that validate ideas before development begins. Every touchpoint is considered as part of a coherent whole, not designed in isolation." },
  { value: "Usability Testing", label: "We test with real users at every stage of the design process, not just before launch. Structured usability sessions surface friction, confusion, and drop-off points early, when they are still cheap to address, and give teams the confidence to ship." },
  { value: "Product Management & Iteration", label: "We help organisations establish the product management frameworks, prioritisation processes, and measurement models that keep digital services improving after launch. Good products are never done; they are continuously understood and refined." },
];

const related = [
  {
    index: "01",
    label: "Sovereign Architecture",
    description: "Designing the digital ecosystem: how every service, system, and shared foundation connects and works as one.",
    href: "/sovereign-architecture",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Cross-sector leadership, local upskilling, and aligned teams that make transformation stick.",
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
              src="/images/Governance_Frameworks/hero_image.png"
              alt="Experience Design"
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
              <h1 className="text-[26px] md:text-[42px] lg:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                From discovery to delivery,<br />by design
              </h1>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We guide the end-to-end creation of digital products and services, from understanding user needs through to live, tested, and continuously improving experiences.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "2x", label: "Faster adoption when discovery is completed before build begins" },
                  { stat: "75%", label: "Of digital product failures traced back to skipping the discovery phase" },
                  { stat: "5x", label: "Return on investment from structured usability testing before launch" },
                  { stat: "3x", label: "More likely to iterate successfully with a product management framework in place" },
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
                    Most digital products are built before the problem is understood
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                    The most common cause of digital product failure is not poor engineering. It is starting in the wrong place. Teams move to build before they have validated the problem, designed for the wrong users, or optimised for delivery speed rather than the experience that determines whether anyone uses it.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The result is products that work technically but fail in practice: services that users cannot navigate, journeys that drop off at the critical moment, and roadmaps full of features nobody asked for. The cost is not just budget. It is the trust of every user who tried and gave up.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    We guide organisations through a structured, end-to-end design and delivery process: from the earliest discovery work through to launch, iteration, and the ongoing product management that keeps services improving over time.
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
                "The difference between a digital product that works and one that fails is almost never the technology. It is whether anyone bothered to understand the user before they started building."
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

          {/* ── Coverage Areas ──────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Our Approach
                  </span>
                  <h2 className="text-[32px] md:text-[42px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Our end-to-end design and delivery process
                  </h2>
                </div>
                <AccordionGroup items={coverage.map(c => ({ title: c.value, body: c.label }))} />
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
                  Good digital products start with the right process
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  The best time to establish a design and delivery process is before the first line of code is written. The second best time is now.
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

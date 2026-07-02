import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Experience Design | Souvren",
  description:
    "End-to-end digital experience creation, from discovery and user research through to prototyping, testing, and live delivery.",
};

const criteria = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
    title: "Start with the user, not the solution",
    description: "Understanding the problem before committing to a solution is the most valuable thing a product team can do.",
    checklist: [
      "User interviews and behavioural research",
      "Service mapping before any design begins",
      "Every decision grounded in real user needs",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="5" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "Prototype early, test often",
    description: "The fastest way to validate an idea is to put something in front of real users before any significant build has begun.",
    checklist: [
      "Prototypes at every stage of the process",
      "Issues surfaced early when they are cheap to fix",
      "Confidence in what gets built before it gets built",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Manage the product, not just the project",
    description: "Delivery does not end at launch. The products that succeed have a clear owner, a roadmap, and a team that iterates continuously.",
    checklist: [
      "Product owner and roadmap in place from the start",
      "Iteration driven by evidence, not assumption",
      "Capability to keep improving after launch",
    ],
  },
];

const coverage = [
  { value: "Discovery & User Research", label: "We run structured discovery programmes that define the problem space before any solution is committed to. User interviews, behavioural analysis, and service mapping give design and product teams the evidence they need to make the right decisions from the start." },
  { value: "Service Design & Prototyping", label: "We design end-to-end service journeys and build testable prototypes that validate ideas before development begins. Every touchpoint is considered as part of a coherent whole, not designed in isolation." },
  { value: "Usability Testing", label: "We test with real users at every stage of the design process, not just before launch. Structured usability sessions surface friction, confusion, and drop-off points early, when they are still cheap to address, and give teams the confidence to ship." },
  { value: "Product Management & Iteration", label: "We help organisations establish the product management frameworks, prioritisation processes, and measurement models that keep digital services improving after launch. Good products are never done; they are continuously understood and refined." },
];

export default function GovernanceFrameworksPage() {
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
                From discovery to delivery, by design
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                We guide the end-to-end creation of digital products and services, from understanding user needs through to live, tested, and continuously improving experiences.
              </p>
            </div>
          </section>

          {/* ── Hero image ─────────────────────────────────────────────── */}
          <div className="pb-28">
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src="/images/Governance_Frameworks/design-experience.jpg"
                alt="Experience Design"
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
                  Most digital products are built before the problem is understood
                </h2>
              </div>
              <div className="flex flex-col gap-6 mt-6 md:mt-0 md:w-1/2 md:ml-auto md:pr-16">
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  The most common cause of digital product failure is not poor engineering. It is starting in the wrong place. Teams move to build before they have validated the problem, designed for the wrong users, or optimised for delivery speed rather than the experience that determines whether anyone uses it.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  The result is products that work technically but fail in practice: services that users cannot navigate, journeys that drop off at the critical moment, and roadmaps full of features nobody asked for. The cost is not just budget. It is the trust of every user who tried and gave up.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  We guide organisations through a structured, end-to-end design and delivery process: from the earliest discovery work through to launch, iteration, and the ongoing product management that keeps services improving over time.
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
                Three things we focus on in every engagement
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
                "The difference between a digital product that works and one that fails is almost never the technology. It is whether anyone bothered to understand the user before they started building."
              </p>
              <div className="h-px bg-black/[0.08] w-24" />
              <span className="text-[12px] text-[#0A0A0B]/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Luke Albest // Founder
              </span>
            </div>
          </section>

          {/* ── Our Approach ────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-44 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-64 items-start">
              <div>
                <span className="text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase block mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Our Approach
                </span>
                <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.15]" style={{ fontFamily: "var(--font-instrument)" }}>
                  Our end-to-end design and delivery process
                </h2>
              </div>
              <AccordionGroup items={coverage.map(c => ({ title: c.value, body: c.label }))} />
            </div>
          </section>

          {/* ── Closer ──────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-36 pb-24">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Good digital products start with the right process
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                The best time to establish a design and delivery process is before the first line of code is written. The second best time is now.
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

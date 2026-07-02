import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Digital Leadership | Souvren",
  description:
    "Building the cross-sector leadership, local expertise, and shared frameworks that create unified digital experiences across public institutions and private enterprise.",
};

const criteria = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4m0 0-5 6m5-6 5 6" />
      </svg>
    ),
    title: "Leadership that connects, not just directs",
    description: "The biggest barrier to joined-up services is rarely technical. It is leadership that optimises for its own objectives rather than shared outcomes.",
    checklist: [
      "Shared direction built across departments",
      "Cross-sector trust established from the top",
      "Product literacy embedded in senior leadership",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Skills built in, not brought in",
    description: "Lasting digital transformation requires internal capability, not permanent external dependency.",
    checklist: [
      "Local teams skilled and confident to own the work",
      "Knowledge transfer structured into every engagement",
      "Capability that compounds long after we leave",
    ],
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="6" height="10" rx="1" /><rect x="9" y="3" width="6" height="14" rx="1" /><rect x="16" y="10" width="6" height="7" rx="1" />
      </svg>
    ),
    title: "Ways of working that scale across teams",
    description: "The way teams work together determines the quality of what they build.",
    checklist: [
      "Collaborative practices embedded across functions",
      "Shared rituals that keep teams aligned",
      "Decisions made at the right level without bottlenecks",
    ],
  },
];

const shifts = [
  { post: "Aligned teams, not parallel ones", to: "When departments and organisations work in parallel rather than together, the result is duplicated effort, inconsistent decisions, and digital experiences that feel fragmented to the people using them. We work with leadership teams to build the shared direction, cross-functional trust, and collaborative working practices that make alignment the default rather than the exception." },
  { post: "Upskilling that outlasts the engagement", to: "External expertise without genuine knowledge transfer leaves organisations no stronger than before. We structure every engagement around building the skills and confidence of local teams: so that the people doing the work understand it, own it, and can continue to develop it long after we have left." },
  { post: "Embedding product thinking across teams", to: "Many organisations still operate with a project mindset: defined scope, fixed budget, delivery date, done. We help teams make the shift to product thinking: continuous iteration, evidence-based decisions, and a culture of learning that keeps services improving over time rather than stalling after launch." },
  { post: "Leadership capable of leading digital change", to: "Digital transformation fails when leadership cannot champion it with confidence. We work directly with senior leaders to build the product literacy, digital fluency, and decision-making frameworks they need to lead transformation from the front, not just sponsor it from a distance." },
];

export default function DigitalLeadershipPage() {
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
                The technology is rarely the problem
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                We help organisations build the cross-sector leadership, shared systems, and local expertise that turn individual digital capabilities into unified experiences across public institutions and private enterprise.
              </p>
            </div>
          </section>

          {/* ── Hero image ─────────────────────────────────────────────── */}
          <div className="pb-28">
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src="/images/Digital_Leadership/hero_cover.png"
                alt="Digital Leadership"
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
                  Siloed departments, misaligned teams, and skills gaps stall transformation
                </h2>
              </div>
              <div className="flex flex-col gap-6 mt-6 md:mt-0 md:w-1/2 md:ml-auto md:pr-16">
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  The barrier to digital transformation is rarely technical. It is structural: teams working without shared direction, leadership that cannot see across the whole, and organisations investing in tools without investing in the people who need to use them. Users experience this as fragmented, inconsistent services.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  The result is stalled momentum: talented people pulling in different directions, external consultants solving problems that local teams could own, and digital programmes that deliver on paper but fail to embed. Each team may be making progress, but without alignment it rarely adds up to transformation.
                </p>
                <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                  We work with leaders across the Seychelles to build the cross-sector alignment, local capability, and ways of working that make joined-up services possible, sustainable, and led from within.
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
                "The Seychelles' digital future should be led by Seychellois people. That is not a nice-to-have. It is the measure against which every engagement should be judged. We are here to build something that lasts, not something that impresses."
              </p>
              <div className="h-px bg-black/[0.08] w-24" />
              <span className="text-[12px] text-[#0A0A0B]/40 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Luke Albest // Founder
              </span>
            </div>
          </section>

          {/* ── The Shift ──────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-44 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-64 items-start">
              <div>
                <span className="text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase block mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  The Shift
                </span>
                <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.15]" style={{ fontFamily: "var(--font-instrument)" }}>
                  How we build aligned, capable organisations
                </h2>
              </div>
              <AccordionGroup items={shifts.map(s => ({ title: s.post, body: s.to }))} />
            </div>
          </section>

          {/* ── Closer ──────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-36 pb-24">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Organisations that work together deliver better experiences
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                The best time to build cross-sector leadership and local capability is before the silos become structural. The second best time is now.
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

const steps = [
  {
    number: "Step 1",
    title: "Onboard",
    summary: "We embed within your organisation to understand its strategic objectives, existing systems, and operational context.",
    bullets: [
      "Assess existing digital architecture and infrastructure",
      "Map current experience design practices and service delivery",
      "Evaluate leadership capability and digital governance maturity",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
    ),
  },
  {
    number: "Step 2",
    title: "Observe",
    summary: "We conduct an independent assessment of your digital landscape, identifying gaps, risks, and opportunities.",
    bullets: [
      "Identify gaps in sovereign architecture and system design",
      "Review digital services and experiences against best practice",
      "Assess leadership structures and institutional digital capability",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="9" ry="5.5" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    number: "Step 3",
    title: "Action",
    summary: "We design and implement targeted interventions, from architecture decisions to leadership frameworks, that move the organisation forward.",
    bullets: [
      "Design and implement sovereign architecture solutions",
      "Apply experience design frameworks to key services and products",
      "Build leadership capacity through targeted programmes and frameworks",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    number: "Step 4",
    title: "Value",
    summary: "We measure outcomes against agreed benchmarks and ensure sustainable capability remains within your organisation.",
    bullets: [
      "Track outcomes across architecture, experience, and leadership",
      "Validate improvements in service delivery and system integrity",
      "Confirm leadership sustainability and knowledge transfer",
    ],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#08090A] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="px-4 md:px-[51px] lg:px-[56px] pt-36 pb-44">

      {/* Section header */}
      <div className="max-w-3xl flex flex-col gap-8 mb-24">
        <span
          className="text-[12px] tracking-[0.22em] uppercase text-[#F8FAFC]"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Process
        </span>
        <h2
          className="m-0 font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]"
          style={{ fontFamily: "var(--font-instrument)" }}
        >
          How we work with government and private organisations
        </h2>
        <p className="m-0 text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#F8FAFC]/55">
          A structured four-stage engagement model designed to build lasting digital capability, not dependency.
        </p>
      </div>

      {/* Four step cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-6 p-8 bg-white/[0.04] border border-white/[0.08]">

            {/* Icon */}
            <div className="text-[#C48C59]">
              {step.icon}
            </div>

            {/* Step number + title */}
            <div className="flex flex-col gap-2">
              <span
                className="text-[10px] tracking-[0.22em] uppercase text-[#F8FAFC]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {step.number}
              </span>
              <h3
                className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug"
              >
                {step.title}
              </h3>
            </div>

            {/* Summary */}
            <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#F8FAFC]/55 m-0">
              {step.summary}
            </p>

            {/* Bullets */}
            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
              {step.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-[15px] lg:text-[16px] text-[#F8FAFC]/55 leading-snug">
                  <span className="mt-[5px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      </div>
    </section>
  );
}

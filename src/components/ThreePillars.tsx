const pillars = [
  {
    title: "Sovereign Independence",
    description:
      "Ensuring that national digital solutions remain independent, neutral, and fully under local control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "National Standards",
    description:
      "Designing the frameworks that allow banking and government systems to talk to each other securely.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <circle cx="5"  cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="6"  r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 12h4m2-4.27L17 8M13 16.27L17 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Institutional Oversight",
    description:
      "Providing independent digital audits and risk assessments for ministers, boards, and regulatory bodies.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
        <path
          d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ThreePillars() {
  return (
    <section className="bg-[#08090A] py-32 border-t border-white/[0.06]">
      <div className="px-16 md:px-24">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-12">
          <h2 className="text-[36px] md:text-[36.8px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-tight">
            Core areas of oversight
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/40 hidden md:block">
            Pillars
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl p-8 flex flex-col gap-6 bg-[#16181D] border border-white/[0.08]"
            >
              {/* Icon with sand tint */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#D4B996]/10 text-[#D4B996]">
                {pillar.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-[#F8FAFC] tracking-[-0.02em]">
                  {pillar.title}
                </h3>
                <p className="text-[#939DB8] text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

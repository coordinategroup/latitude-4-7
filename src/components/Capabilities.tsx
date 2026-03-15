const columns = [
  [
    "User Research & Behavioural Analytics",
    "Service Design & Journey Mapping",
    "Design Systems & Visual Identity",
    "UX Audits & Ecosystem Mapping",
  ],
  [
    "Vision Setting & Validation",
    "Roadmap Development & Prioritisation",
    "Business Strategy & ROI Modelling",
    "Market & Competitor Analysis",
  ],
  [
    "Technical Scoping & Requirements",
    "Leadership Stakeholder Management",
    "Product Governance & Risk Management",
    "Performance Analytics & Success Metrics",
  ],
];

export default function Capabilities() {
  return (
    <section className="bg-[#08090A] py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-0">
          <h2 className="text-[36px] md:text-[36.8px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-tight max-w-sm">
            Demonstrating value at every stage of your product lifecycle
          </h2>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/40 hidden md:block">
            Capabilities
          </span>
        </div>

        {/* Grid with fine column dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {columns.map((col, ci) => (
            <ul key={ci} className="flex flex-col py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              {col.map((item) => (
                <li
                  key={item}
                  className="text-[15px] text-[#939DB8] font-medium border-b border-white/[0.06] py-4 last:border-0 hover:text-[#F8FAFC] transition-colors duration-200 cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>

      </div>
    </section>
  );
}

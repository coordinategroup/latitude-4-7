const areas = [
  {
    id: "01",
    title: "Strategy",
    description:
      "Translating government and enterprise objectives into clear product roadmaps. We align vision, stakeholder priorities, and business strategy into a plan your teams can execute against.",
  },
  {
    id: "02",
    title: "Velocity",
    description:
      "Unblocking delivery and restoring momentum across complex multi-team programmes. We lead sprints, clear dependencies, and get your product shipping at pace.",
  },
  {
    id: "03",
    title: "Leadership",
    description:
      "Senior product and digital leadership embedded directly in your organisation. We provide the bandwidth to govern, decide, and inspire without the hiring overhead.",
  },
  {
    id: "04",
    title: "Data",
    description:
      "Building the analytics and behavioural foundations that let your team learn fast and iterate with confidence. From instrumentation through to insight.",
  },
  {
    id: "05",
    title: "Capability",
    description:
      "Upskilling your in-house teams in research, design systems, product governance, and service design so value outlasts the engagement.",
  },
];

export default function FocusAreas() {
  return (
    <section id="services" className="bg-[#08090A] py-32">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-10 border-b border-white/[0.08] mb-0">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/50">
            What we do
          </span>
          <p className="text-[14pt] md:text-[16pt] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug md:text-right md:max-w-md">
            A product consultancy that brings people together to translate
            objectives into outcomes
          </p>
        </div>

        {/* Numbered editorial list */}
        <div className="flex flex-col">
          {areas.map((area) => (
            <div
              key={area.id}
              className="group grid grid-cols-1 md:grid-cols-[64px_280px_1fr] gap-4 md:gap-12 py-10 border-b border-white/[0.08] last:border-0 -mx-6 px-6 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="text-xs font-mono text-[#D4B996] tracking-widest pt-1">
                {area.id}
              </span>
              <h3 className="text-[28px] font-medium text-[#F8FAFC] tracking-[-0.02em]">
                {area.title}
              </h3>
              <p className="text-[#939DB8] text-[14pt] md:text-[16pt] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

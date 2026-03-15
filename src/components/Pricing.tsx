const allFeatures = [
  "Board Level Steering",
  "Governance & Policy",
  "Roadmap Validation",
  "Stakeholder Alignment",
  "Embedded Team Leadership",
  "Design & UX Steering",
  "Evidence Based Strategy",
  "Service Performance Review",
  "Rapid Go-to-Market",
  "Crisis Management",
];

const tiers = [
  {
    name: "Strategic Advisor",
    tagline:
      "High-level steering for Ministers and Executives. Focused on policy, governance, and long-term digital roadmaps.",
    includedCount: 4,
    featured: false,
    cta: "Book Introduction",
    ctaStyle: "default",
  },
  {
    name: "Embedded Leadership",
    tagline:
      "Embedded support. We provide the senior bandwidth to lead internal teams, unblock delivery, and restore momentum.",
    includedCount: 7,
    featured: false,
    cta: "Book Introduction",
    ctaStyle: "default",
  },
  {
    name: "Project Stabilisation",
    tagline:
      "A high-impact, time-boxed engagement designed to stabilise a delayed or unstable project, from idea to full launch.",
    includedCount: 10,
    featured: true,
    cta: "Book Introduction",
    ctaStyle: "sand",
  },
];

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7.5L5.5 11L12 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 3l8 8M11 3l-8 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#08090A] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#939DB8]/40 mb-3">
            Packages
          </p>
          <h2 className="text-[36px] md:text-[36.8px] font-bold text-[#F8FAFC] tracking-[-0.02em]">
            A unique solution to meet your specific needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {tiers.map((tier) => {
            const isFeatured = tier.featured;
            return (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col gap-7 bg-[#16181D] ${
                  isFeatured ? "border border-[#D4B996]/30" : "border border-white/[0.08]"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[28px] font-bold tracking-[-0.02em] text-[#F8FAFC]">
                    {tier.name}
                  </h3>
                  <p className="text-[14pt] md:text-[16pt] leading-relaxed text-[#939DB8]">
                    {tier.tagline}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex flex-col gap-3 flex-1">
                  {allFeatures.map((feature, i) => {
                    const included = i < tier.includedCount;
                    return (
                      <li key={feature} className="flex items-center gap-3">
                        <span className={included ? "text-[#D4B996]" : "text-[#F8FAFC]/20"}>
                          {included ? <CheckIcon /> : <CrossIcon />}
                        </span>
                        <span className={`text-sm ${included ? "text-[#F8FAFC]/85" : "text-[#F8FAFC]/25"}`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full text-center py-4 rounded-full font-semibold text-sm transition-colors ${
                    tier.ctaStyle === "sand"
                      ? "bg-[#D4B996] text-[#08090A] hover:bg-[#C4A882]"
                      : "bg-white/[0.06] text-[#F8FAFC] hover:bg-white/[0.10] border border-white/[0.08]"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const studies = [
  {
    label: "Research",
    outcome: "Digital adoption patterns in small island economies",
    image: "/images/Homepage/feature_article_1.jpg",
    href: "#",
    textColor: "text-[#F8FAFC]",
    overlay: "bg-black/30 group-hover:bg-black/45",
    imageScale: "",
    imagePosition: "object-center",
  },
  {
    label: "Research",
    outcome: "Measuring trust in national digital infrastructure",
    image: "/images/Homepage/feature_article_2.png",
    href: "#",
    textColor: "text-[#F8FAFC]",
    overlay: "bg-black/30 group-hover:bg-black/45",
    imageScale: "",
    imagePosition: "object-center",
  },
  {
    label: "Perspective",
    outcome: "The case for sovereign control of financial data",
    image: "/images/Homepage/feature_article_3.png",
    href: "#",
    textColor: "text-[#F8FAFC]",
    overlay: "bg-black/30 group-hover:bg-black/45",
    imageScale: "",
    imagePosition: "object-top",
  },
  {
    label: "Perspective",
    outcome: "Restoring public trust in national digital institutions",
    image: "/images/Homepage/feature_article_4.png",
    href: "#",
    textColor: "text-[#F8FAFC]",
    overlay: "bg-black/30 group-hover:bg-black/45",
    imageScale: "",
    imagePosition: "object-center",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#08090A] py-16">
      <div className="px-20 md:px-32">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {studies.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="relative overflow-hidden min-h-[498px] flex flex-col group cursor-pointer"
            >
              {/* Background image */}
              <Image
                src={s.image}
                alt={s.label}
                fill
                className={`object-cover transition-transform duration-700 ${s.imageScale} ${s.imagePosition} group-hover:scale-105`}
              />

              {/* Tint overlay — deepens on hover */}
              <div className={`absolute inset-0 ${s.overlay} transition-colors duration-500`} />

              {/* Label + heading — top-left */}
              <div className="relative z-10 flex flex-col gap-[14px] pl-8 pr-4 pt-10 pb-0 flex-1">
                <span className={`text-[13px] font-semibold uppercase tracking-widest ${s.textColor}`}>
                  {s.label}
                </span>
                <h3 className={`text-[26px] font-medium ${s.textColor} tracking-[-0.02em] leading-snug`}>
                  {s.outcome}
                </h3>
              </div>

              {/* Read label — appears on hover, bottom-left */}
              <div className="relative z-10 px-10 pb-10 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className={`text-[20px] font-semibold ${s.textColor}`}>Read</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={s.textColor}>
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

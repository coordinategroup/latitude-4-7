import Link from "next/link";

export default function Frameworks() {
  return (
    <section className="bg-[#FAFAFA] px-4 md:px-[51px] lg:px-[56px] pt-0 pb-24 md:pb-36">
      <span
        className="block text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B] mb-16"
        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
      >
        Frameworks
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Sovereign Architecture */}
        <div className="flex flex-col gap-8 pb-8 sm:pb-0">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>01</span>
            <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
              Souvren Architecture
            </h2>
          </div>
          <div className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 max-w-[420px]">
            <p className="m-0">Design digital ecosystems as one connected whole: shared foundations, interoperable services, and architecture that grows with the nation rather than constraining it.</p>
            <p className="m-0 mt-6">A fully owned solution that keeps sovereignty where it belongs.</p>
          </div>
          <Link
            href="/sovereign-architecture"
            className="self-start inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300 mt-auto"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Learn more
          </Link>
        </div>

        {/* Experience Design */}
        <div className="flex flex-col gap-8 py-8 sm:py-0">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>02</span>
            <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
              Experience Design
            </h2>
          </div>
          <div className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 max-w-[420px]">
            <p className="m-0">Human-centred service design, rigorous usability testing, and disciplined product management structures that put people at the centre of every decision.</p>
            <p className="m-0 mt-6">Drive confident adoption across public institutions and private organisations.</p>
          </div>
          <Link
            href="/experience-design"
            className="self-start inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300 mt-auto"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Learn More
          </Link>
        </div>

        {/* Digital Leadership */}
        <div className="flex flex-col gap-8 pt-8 sm:pt-0">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>03</span>
            <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
              Digital Leadership
            </h2>
          </div>
          <div className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 max-w-[520px]">
            <p className="m-0">Embedded cross-sector leadership, targeted local upskilling, and shared governance frameworks that equip organisations to own and sustain their digital transformation, building capability from within and not dependency on external expertise.</p>
            <p className="m-0 mt-6">Enabling Seychelles to lead its own digital future.</p>
          </div>
          <Link
            href="/digital-leadership"
            className="self-start inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300 mt-auto"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}

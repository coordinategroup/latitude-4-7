import Image from "next/image";

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.08] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="px-6 md:px-20 lg:px-32 pt-16 md:pt-32 pb-0">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-16 pb-12 md:pb-20">

          {/* Column 1: Identity + Group blurb */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/Logos/Logo_inverted.png"
              alt="Latitude 4.7"
              width={140}
              height={40}
              className="object-contain object-left"
            />
            <p className="text-[13px] font-light text-black leading-[1.75]">
              Latitude 4.7 is a strategic advisory unit of the Coordinate Group. For product management and advisory, visit{" "}
              <a href="#" className="text-[#C48C59] hover:text-[#b37a48] transition-colors duration-200 underline underline-offset-2">
                Longitude 5.5
              </a>
              .
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-black/30">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase" style={monoStyle}>
                CAPABILITIES
              </a>
              <a href="/research-and-perspectives" className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase" style={monoStyle}>
                RESEARCH &amp; PERSPECTIVES
              </a>
              <a href="/who-we-are" className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase" style={monoStyle}>
                WHO WE ARE
              </a>
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-black/30">
              Resources
            </span>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase" style={monoStyle}>
                AGENCY ONBOARDING
              </a>
              <a href="#" className="text-[13px] tracking-widest text-black/60 hover:text-black transition-colors duration-200 uppercase" style={monoStyle}>
                INSTITUTIONAL REGISTRY
              </a>
            </nav>
          </div>

        </div>

      </div>

      {/* Large bleed wordmark */}
      <div className="overflow-hidden -mx-[calc((100vw-100%)/2)]">
        <p className="font-medium text-black/[0.06] leading-none tracking-[-0.03em] whitespace-nowrap" style={{ fontSize: "25vw" }}>
          LATITUDE
        </p>
      </div>

      {/* Full-width divider */}
      <div className="border-t border-black/[0.08] -mx-[calc((100vw-100%)/2)]" />

      {/* Bottom bar */}
      <div className="px-6 md:px-20 lg:px-32 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span className="text-[12px] text-black/40 font-mono tracking-widest">
          4.6753<span className="text-[#C48C59]">&deg;</span>S &nbsp;/&nbsp; 55.4920<span className="text-[#C48C59]">&deg;</span>E
        </span>
        <span className="text-[12px] text-black/40">
          &copy; 2028 Latitude Four Seven
        </span>
      </div>

    </footer>
  );
}

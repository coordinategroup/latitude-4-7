import Image from "next/image";
import CookieSettingsButton from "./CookieSettingsButton";

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-black/[0.08]">
      <div className="px-4 md:px-[51px] lg:px-[56px] pt-16 md:pt-32 pb-0">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-16 pb-12 md:pb-20">

          {/* Column 1: Identity + Group blurb */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/Logos/souvren_logo.svg"
              alt="Souvren"
              width={106}
              height={18}
              className="object-contain object-left"
            />
            <p className="text-[14px] text-[#0A0A0B]/60 leading-[1.75]">
              Souvren is a strategic advisory unit of The Coordinate Group.
            </p>
          </div>

          {/* Column 2: Frameworks */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]" style={monoStyle}>
              Frameworks
            </span>
            <nav className="flex flex-col gap-3">
              <a href="/sovereign-architecture" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Sovereign Architecture
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a href="/experience-design" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Experience Design
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a href="/digital-leadership" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Digital Leadership
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </nav>
          </div>

          {/* Column 3: About Us */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]" style={monoStyle}>
              About us
            </span>
            <nav className="flex flex-col gap-3">
              <a href="/research-and-perspectives" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Research &amp; Perspectives
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a href="/who-we-are" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Who we are
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a href="/leadership" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Leadership
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a href="/partners" className="group relative self-start text-[15px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
                Partnerships
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#292929] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </nav>
          </div>

        </div>

      </div>

      {/* Large bleed wordmark */}
      <div className="overflow-hidden">
        <p className="font-medium text-black/[0.06] leading-none tracking-[-0.03em] whitespace-nowrap" style={{ fontSize: "25vw" }}>
          SOUVREN
        </p>
      </div>

      {/* Full-width divider */}
      <div className="border-t border-black/[0.08]" />

      {/* Bottom bar */}
      <div className="px-4 md:px-[51px] lg:px-[56px] py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span className="text-[12px] text-[#0A0A0B]/40 tracking-widest" style={monoStyle}>
          4.6753<span className="text-[#C48C59]">&deg;</span>S &nbsp;/&nbsp; 55.4920<span className="text-[#C48C59]">&deg;</span>E
        </span>
        <div className="flex flex-wrap items-center gap-6">
          <a href="/privacy" className="text-[13px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
            Privacy
          </a>
          <a href="/terms" className="text-[13px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
            Terms
          </a>
          <a href="/accessibility" className="text-[13px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
            Accessibility
          </a>
          <a href="/cookies" className="text-[13px] text-[#0A0A0B]/60 hover:text-[#0A0A0B] transition-colors duration-200">
            Cookies
          </a>
          <CookieSettingsButton />
        </div>
        <span className="text-[12px] text-[#0A0A0B]/40">
          &copy; Souvren {new Date().getFullYear()}
        </span>
      </div>

    </footer>
  );
}

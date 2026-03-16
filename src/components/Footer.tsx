import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#08090A] border-t border-white/[0.06]">
      <div className="px-20 md:px-32 py-20">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-white/[0.06]">

          {/* Column 1: Identity */}
          <div className="flex flex-col gap-6">
            <Image
              src="/images/Logos/latitude_logo.png"
              alt="Latitude 4.7"
              width={140}
              height={40}
              className="object-contain object-left opacity-70"
            />
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]/50">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors duration-200">
                Capabilities
              </a>
              <a href="/research" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors duration-200">
                Research &amp; Perspectives
              </a>
              <a href="#" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors duration-200">
                Who We Are
              </a>
            </nav>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]/50">
              Resources
            </span>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors duration-200">
                Agency Onboarding
              </a>
              <a href="#" className="text-[13px] text-[#8a8f98] hover:text-[#F8FAFC] transition-colors duration-200">
                Institutional Registry
              </a>
            </nav>
          </div>

          {/* Column 4: The Group */}
          <div className="flex flex-col gap-5">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]/50">
              The Group
            </span>
            <p className="text-[13px] text-[#8a8f98]/70 leading-[1.75]">
              Latitude 4.7 is a strategic advisory unit of the Coordinate Group. For product management and advisory, visit{" "}
              <a href="#" className="text-[#D4B996]/70 hover:text-[#D4B996] transition-colors duration-200 underline underline-offset-2">
                Longitude 5.5
              </a>
              .
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8">
          <span className="text-[12px] text-[#8a8f98] font-mono tracking-widest">
            4.6753<span className="text-[#D4B996]">&deg;</span>S &nbsp;/&nbsp; 55.4920<span className="text-[#D4B996]">&deg;</span>E
          </span>
          <span className="text-[12px] text-[#8a8f98]">
            &copy; 2028 Latitude Four Seven
          </span>
        </div>

      </div>
    </footer>
  );
}

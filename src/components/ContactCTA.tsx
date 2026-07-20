"use client";

import { useState } from "react";
import SecureBriefingModal from "./SecureBriefingModal";

export default function ContactCTA() {
  const [briefingOpen, setBriefingOpen] = useState(false);
  return (
    <section id="contact" className="bg-[#FAFAFA] pt-16 md:pt-24 pb-24 md:pb-52">

      <div className="px-4 md:px-[51px] lg:px-[56px] flex flex-col items-center text-center gap-6">
        <h2 className="text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] font-medium text-[#08090A] tracking-[-0.02em] leading-[1.15]" style={{ fontFamily: "var(--font-instrument)" }}>
          Begin engagement
        </h2>
        <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4] max-w-xl">
          For institutional stakeholders, governing bodies, and private organisations requiring independent technical oversight and strategic alignment.
        </p>
        <div className="mt-2">
          <button
            onClick={() => setBriefingOpen(true)}
            className="inline-flex items-center h-9 px-8 rounded-full text-[15px] font-medium text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300"
          >
            Contact
          </button>
          <SecureBriefingModal isOpen={briefingOpen} onClose={() => setBriefingOpen(false)} />
        </div>
      </div>

    </section>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Leadership | Latitude Four Seven",
  description:
    "The people behind Latitude Four Seven.",
};

const team = [
  {
    name: "Luke Albest",
    role: "Founder",
    bio: "Ten years inside UK financial services, two years in Hong Kong, and two years in mainland China, with a background in product management and product design. Luke's work has always centred on the same challenge: weaving business and government requirements into digital services that actually work for the people who use them. He founded Latitude Four Seven to bring that experience directly to governments building their digital future.",
    image: "/images/Leaders/1770897725876.jpg",
    linkedin: "https://www.linkedin.com/in/lukealbest/",
  },
  {
    name: "Ian Jordan",
    role: "Senior Adviser",
    bio: "More than thirty years in senior product leadership, advisory, and venture building roles. Ian is trusted by executive teams to shape strategy, resolve ambiguity, and improve decision-making in complex, regulated organisations. He specialises in platform and portfolio strategy, product operating model design, and governance, bringing a calm, pragmatic voice to organisations that need clearer direction and decisions that stick.",
    image: "/images/Leaders/Ian_Profile.jpg",
    linkedin: "https://www.linkedin.com/in/ianjordan/",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 pt-52 pb-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                About Us
              </span>
              <h1 className="text-[42px] md:text-[72px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.04] max-w-3xl">
                The people shaping real digital change
              </h1>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#C2C7D0] leading-[1.7] max-w-2xl">
                Founder-led, with a network of senior advisers who bring specialist expertise across digital transformation, governance, and institutional strategy.
              </p>
            </div>
          </section>

          {/* ── Team ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="flex flex-col gap-8 items-start p-10 bg-[#08090A]"
                >
                  {/* Image */}
                  <div className="relative shrink-0 w-[160px] aspect-[3/4] overflow-hidden bg-white/[0.03]">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/[0.04]" />
                    )}
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col gap-5 pt-1">
                    <div>
                      <h2 className="text-[22px] md:text-[26px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.1]">
                        {person.name}
                      </h2>
                      <span
                        className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase mt-3 block"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {person.role}
                      </span>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-[11px] tracking-[0.14em] text-[#C2C7D0]/50 hover:text-[#D4B996] transition-colors duration-200 uppercase"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>
                    <div className="h-px bg-white/[0.06] w-12" />
                    <p className="text-[14px] text-[#C2C7D0] leading-[1.9]">
                      {person.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
              <div>
                <span
                  className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Engage
                </span>
                <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                  Work with us
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  If you are working on a national digital programme and want to understand how we can help, get in touch.
                </p>
                <a
                  href="mailto:contact@latitudefourseven.com"
                  className="shrink-0 px-8 py-3 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  SECURE BRIEFING
                </a>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

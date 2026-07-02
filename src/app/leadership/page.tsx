import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import SecureBriefingButton from "@/components/SecureBriefingButton";

export const metadata: Metadata = {
  title: "Leadership | Souvren",
  description:
    "The people behind Souvren.",
};

type TeamMember = {
  name: string;
  role: string;
  bio: string[];
  image: string;
  linkedin: string;
  imagePosition?: string;
  imageScale?: string;
};

const team: TeamMember[] = [
  {
    name: "Luke Albest",
    role: "Founder",
    bio: [
      "Eight years inside UK financial services, two years in Hong Kong, and two years in mainland China, with a background in product management and product design.",
      "Luke's work has always centred on the same challenge: weaving business and government requirements into digital services that actually work for the people who use them. He founded Souvren to bring that experience directly to government and businesses building their digital future.",
    ],
    image: "/images/Leaders/1770897725876.jpg",
    linkedin: "https://www.linkedin.com/in/lukealbest/",
  },
  {
    name: "Ian Jordan",
    role: "Senior Adviser",
    bio: [
      "More than thirty years in senior product leadership, advisory, and venture building roles. Ian is trusted by executive teams to shape strategy, resolve ambiguity, and improve decision-making in complex, regulated organisations.",
      "He specialises in platform and portfolio strategy, product operating model design, and governance, bringing a calm, pragmatic voice to organisations that need clearer direction and decisions that stick.",
    ],
    image: "/images/Leaders/Ian_Profile.jpg",
    linkedin: "https://www.linkedin.com/in/ianjordan/",
  },
  {
    name: "Rebecca Coleman",
    role: "Senior Adviser",
    bio: [
      "A career leading UX design and research at the highest levels of financial services, with deep experience shaping experience strategy across global markets.",
      "She combines a strategic lens for shaping client-led ambition with over a decade of experience in senior product and design leadership. Rebecca advises on experience design and operational change, helping organisations shift from product-first delivery to joined-up, human-centric outcomes.",
    ],
    image: "/images/Leaders/Bec_Profile.jpg",
    linkedin: "https://www.linkedin.com/in/rebecca-coleman-3318b027/",
  },
  {
    name: "Oliver Lane",
    role: "Senior Adviser",
    bio: [
      "A founder and CEO with a career spanning product strategy, transformation, and delivery across financial services, media, and technology.",
      "He brings a founder's instinct for building from the ground up alongside deep experience navigating large, regulated organisations. Oliver advises on product strategy and digital transformation, helping institutions move from intent to execution.",
    ],
    image: "/images/Leaders/Oliver_Profile.jpg",
    linkedin: "https://www.linkedin.com/in/oliver-lane1/",
  },
  {
    name: "Mohamed Ait Si Brahim",
    role: "Senior Adviser",
    bio: [
      "A Chief Technology Officer with twenty-five years of experience in technical leadership and software engineering across the full product lifecycle.",
      "He specialises in cloud adoption and delivering innovative products within highly regulated environments. Mohamed advises on resilient, cost-effective architecture and transformational change, helping boards bridge the gap between complex engineering and pragmatic, category-defining delivery.",
    ],
    image: "/images/Leaders/Mo_Profile.jpg",
    linkedin: "https://www.linkedin.com/in/maitsibrahim/",
  },
  {
    name: "Hakeem Mothe",
    role: "Senior Adviser",
    bio: [
      "A Seychelles-based businessman with deep roots in the local economy, spanning import and export trade and real estate. Hakeem brings a grounded understanding of how commerce, community, and culture intersect in the islands.",
      "He advises on local market dynamics and citizen needs, helping ensure that the digital programmes we support are designed with the people they serve firmly in mind.",
    ],
    image: "/images/Leaders/hakeem_profile.jpg",
    imagePosition: "center 5%",
    imageScale: "scale-[1.4]",
    linkedin: "",
  },
];

export default function LeadershipPage() {
  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">

            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

            <div className="flex flex-col gap-6 max-w-4xl pb-16">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
                The people shaping real digital change
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-4xl">
                Founder-led, with a network of senior advisers who bring specialist expertise across digital transformation, governance, and institutional strategy.
              </p>
            </div>
          </section>

          {/* ── Team ───────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-16 pb-36">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
              {team.map((person, i) => (
                <div key={i} className="flex flex-col gap-6">

                  {/* Image + name/role/linkedin */}
                  <div className="flex items-start gap-4">
                    <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 bg-[#E8E4DE]">
                      {person.image && (
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          className={`object-cover ${person.imageScale ?? ""}`}
                          style={{ objectPosition: person.imagePosition ?? "center top" }}
                          sizes="128px"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-1 pt-1">
                      <h2 className="text-[17px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.2]" style={{ fontFamily: "var(--font-instrument)" }}>
                        {person.name}
                      </h2>
                      <span className="text-[11px] tracking-[0.22em] text-[#C48C59] uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {person.role}
                      </span>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-1 text-[11px] tracking-[0.14em] text-[#0A0A0B]/40 hover:text-[#0A0A0B] transition-colors duration-200 uppercase"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/[0.08]" />

                  {/* Bio */}
                  <div className="flex flex-col gap-4">
                    {person.bio.map((para, pi) => (
                      <p key={pi} className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.4]">
                        {para}
                      </p>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* ── Closer ─────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8 pb-32">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Work with the team
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                If you are working on a national digital programme and want to understand how we can help, get in touch.
              </p>
              <SecureBriefingButton
                className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Contact
              </SecureBriefingButton>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

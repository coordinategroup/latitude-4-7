import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";
import SecureBriefingButton from "@/components/SecureBriefingButton";
import EmbeddedIllustration from "@/components/EmbeddedIllustration";
import FractionalIllustration from "@/components/FractionalIllustration";
import OversightIllustration from "@/components/OversightIllustration";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type CaseStudy = {
  _id: string;
  title: string;
  industry: string;
  slug: { current: string };
  coverImage?: { asset: { _id: string; url: string }; alt?: string };
  clientLogo?: { asset: { _id: string; url: string }; alt?: string };
};

const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(publishedAt desc) [0..2] {
    _id, title, industry, slug,
    coverImage { asset->{ _id, url }, alt },
    clientLogo { asset->{ _id, url }, alt }
  }
`;

export const metadata: Metadata = {
  title: "Partners | Souvren",
  description:
    "Souvren works with a select number of public and private sector leaders as a long-term strategic partner, embedded in the decisions that shape where an organisation is heading.",
};

const FAQ_ITEMS = [
  {
    title: "What does a Souvren partnership look like in practice?",
    body: "It depends on the engagement type, but in all cases Souvren operates as an active participant in decision-making, not an outside observer. That means being present in the work, not delivering reports about it.",
  },
  {
    title: "How many organisations do you work with at one time?",
    body: "A small number, deliberately. Limiting capacity is how we ensure the quality and depth of engagement that long-term partnerships require. We are not a volume business.",
  },
  {
    title: "Do you work with both public and private sector organisations?",
    body: "Yes. Souvren works across both, including government agencies, public institutions, financial services organisations, and private businesses navigating digital transition. The challenges differ; the approach is consistent.",
  },
  {
    title: "Is this relevant outside of the Seychelles?",
    body: "Souvren is based in the Seychelles and has a particular focus on the region's digital future. That context shapes our work, but the disciplines we apply are not unique to geography.",
  },
];


const ENGAGEMENT = [
  {
    tag: "Embedded Partnership",
    title: "Aligning strategy to what actually gets built",
    body: [
      "In most organisations the distance between a board decision and what engineering actually delivers is wider than anyone admits. Souvren sits in that space.",
      "We operate inside the organisation's decision-making as a senior digital presence, present where direction is set and accountable for translating it into something that can actually be built.",
      "Not an adviser brought in after the fact. Not a report delivered from the outside. A partner in the room.",
    ],
  },
  {
    tag: "Fractional Leadership",
    title: "Senior digital leadership without the permanent overhead",
    body: [
      "Not every organisation needs a full-time Chief Digital Officer. Many need exactly that function without the cost, the permanence, or the politics of a senior hire.",
      "Souvren provides senior digital leadership on a structured basis, stepping into the decisions that need that level of experience and stepping back as internal capability grows.",
      "The commitment is real. The overhead is not.",
    ],
  },
  {
    tag: "Strategic Oversight",
    title: "An independent senior voice at the governance table",
    body: [
      "Boards and governing bodies need someone who can challenge the direction being set, not just validate it.",
      "Souvren provides that independent senior digital perspective for organisations that have governance responsibility over digital decisions but lack the internal expertise to scrutinise them properly.",
      "We bring the experience to ask the right questions, pressure-test the answers, and provide the confidence that comes from having seen this at scale before.",
    ],
  },
];

export default async function PartnersPage() {
  const caseStudies = await client.fetch<CaseStudy[]>(CASE_STUDIES_QUERY);

  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ─────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">
            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />
            <h1
              className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.25] max-w-3xl mb-6"
              style={{ fontFamily: "var(--font-instrument)" }}
            >
              The organisations that lead their digital future do not do it alone
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-xl mb-10">
              Souvren works with a select number of public and private sector leaders as a long-term strategic partner, embedded in the decisions that shape where an organisation is heading.
            </p>
            <div className="pb-16">
              <SecureBriefingButton
                className="inline-flex items-center h-10 px-7 rounded-full text-[15px] font-medium text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300"
              >
                Begin a conversation
              </SecureBriefingButton>
            </div>
          </section>

          {/* ── Hero image ───────────────────────────────────────────── */}
          <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[52vh]">
            <Image
              src="/images/Partners/partners_cover.png"
              alt="Partners"
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={100}
              priority
            />
          </div>


          {/* ── Engagement rows ───────────────────────────────────────── */}
          <section id="how-we-engage" className="px-4 md:px-[51px] lg:px-[56px] pt-32 lg:pt-40 pb-20 lg:pb-24">
            <div className="flex flex-col gap-0 lg:gap-20">
              {ENGAGEMENT.map((e, i) => {
                const isInverted = i % 2 !== 0;
                return (
                  <div
                    key={e.title}
                    className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-10"
                  >
                    {/* Text block */}
                    <div
                      className={`p-6 lg:p-20 flex flex-col justify-center bg-[#FAFAFA] ${isInverted ? "md:order-2" : "md:order-1"} ${i === 2 ? "pt-20 lg:pt-20" : ""} ${i === 1 ? "pb-0 lg:pb-20" : ""}`}
                    >
                      <span
                        className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B] mb-6"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {e.tag}
                      </span>
                      <h2
                        className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-snug lg:leading-[1.2] text-[27px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] mb-8"
                        style={{ fontFamily: "var(--font-instrument)" }}
                      >
                        {e.title}
                      </h2>
                      <div className="flex flex-col gap-4">
                        {e.body.map((para, idx) => (
                          <p key={idx} className="text-[16px] lg:text-[17px] leading-[1.65] text-[#0A0A0B]/55">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Illustration */}
                    <div
                      className={`relative aspect-square ${isInverted ? "md:order-1" : "md:order-2"}`}
                    >
                      {i === 0 && <EmbeddedIllustration />}
                      {i === 1 && <FractionalIllustration />}
                      {i === 2 && <OversightIllustration />}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Why partner with us ──────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8 md:pt-24 lg:pt-32 pb-20 lg:pb-28">
            <span
              className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B] block mb-12"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Why partner with us
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[20px] lg:text-[22px] font-medium text-[#292929] tracking-[-0.02em] leading-snug"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Experience across the sectors that matter
                </h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.7] text-[#0A0A0B]/55">
                  Souvren draws on a network of senior advisers who have led digital transformation across government, financial services, and large institutions. That experience shapes every engagement, bringing the judgement that only comes from having delivered this at scale, in organisations where the stakes were real.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[20px] lg:text-[22px] font-medium text-[#292929] tracking-[-0.02em] leading-snug"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Every specialism, when you need it
                </h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.7] text-[#0A0A0B]/55">
                  We lead on product, design, and change. Where a specific discipline is needed, whether engineering, data, security, or any other skill, we bring in our most trusted specialists. You get the right expertise for the challenge, not a generalist team stretched to cover ground it does not know.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h3
                  className="text-[20px] lg:text-[22px] font-medium text-[#292929] tracking-[-0.02em] leading-snug"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Built in Mahé, here to stay
                </h3>
                <p className="text-[15px] lg:text-[16px] leading-[1.7] text-[#0A0A0B]/55">
                  Souvren was born in the Seychelles and built to remain here. We are not a consultancy that delivers and departs. We are invested in what gets built, in being present long enough to see results, and in the relationships that make the work last.
                </p>
              </div>

            </div>
          </section>

          {/* ── Case Studies ─────────────────────────────────────────── */}
          {caseStudies.length > 0 && (
            <div className="px-4 md:px-[51px] lg:px-[56px] pt-12 md:pt-16 pb-10 md:pb-16">
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Case Studies
                </span>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center h-9 px-8 rounded-full text-[15px] font-medium text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                >
                  Read more
                </Link>
              </div>
              <div className="flex overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {caseStudies.map((study) => (
                  <div key={study._id} className="relative flex-none w-[82vw] snap-start flex flex-col justify-between p-8 h-[552px] sm:w-auto sm:flex-1 sm:h-[807px] xl:h-[664px] overflow-hidden">
                    {study.coverImage?.asset?.url ? (
                      <Image
                        src={urlFor(study.coverImage).width(900).height(1200).url()}
                        alt={study.coverImage.alt ?? study.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#292929]" />
                    )}
                    <div className="absolute inset-0 bg-[#0A0A0B]/40" />
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-6">
                        {study.clientLogo?.asset?.url ? (
                          <Image
                            src={study.clientLogo.asset.url}
                            alt={study.clientLogo.alt ?? study.title}
                            width={120}
                            height={28}
                            className="object-contain object-left h-7 w-auto"
                          />
                        ) : (
                          <span
                            className="text-[10px] uppercase tracking-widest text-white"
                            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                          >
                            {study.industry}
                          </span>
                        )}
                        <p className="text-[24px] font-medium text-white leading-snug max-w-[85%]">
                          {study.title}
                        </p>
                      </div>
                      <Link
                        href={`/case-studies/${study.slug.current}`}
                        className="self-start inline-flex items-center h-9 px-6 rounded-full text-[15px] font-medium text-white border border-white/40 hover:border-white transition-all duration-300"
                      >
                        Read
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── FAQ ──────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 lg:pt-24 pb-36 lg:pb-48">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <div>
                <h2
                  className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-snug lg:leading-[1.2] text-[27px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px] mb-4"
                  style={{ fontFamily: "var(--font-instrument)" }}
                >
                  Common questions
                </h2>
                <p className="text-[15px] text-[#0A0A0B]/50 leading-[1.65]">
                  If something is not covered here, a conversation is the best place to start.
                </p>
              </div>
              <div className="lg:col-span-2">
                <AccordionGroup items={FAQ_ITEMS} />
              </div>
            </div>
          </section>

          {/* ── Dark CTA ──────────────────────────────────────────────── */}
          <section className="bg-[#110F0F] px-4 md:px-[51px] lg:px-[56px] py-24 lg:py-32">
            <div className="max-w-2xl">
              <h2
                className="m-0 font-medium text-[#F9F9F9] tracking-[-0.02em] leading-[1.2] text-[27px] md:text-[32px] lg:text-[40px] min-[1700px]:!text-[48px] mb-5"
                style={{ fontFamily: "var(--font-instrument)" }}
              >
                A small number of partnerships. A long-term commitment to each
              </h2>
              <p className="text-[16px] lg:text-[17px] text-white/40 leading-[1.6] mb-8">
                Souvren works with a limited number of organisations at any one time, taking on only a handful of new partnerships each year. If you are leading through a digital transition and want a senior partner in the work, we should have a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <SecureBriefingButton
                  className="inline-flex items-center justify-center h-11 px-8 rounded-full text-[15px] font-medium text-[#110F0F] bg-[#F9F9F9] hover:bg-white transition-all duration-300"
                >
                  Begin a conversation
                </SecureBriefingButton>
                <a
                  href="/who-we-are"
                  className="inline-flex items-center justify-center h-11 px-8 rounded-full text-[15px] font-medium text-white/60 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  Learn about us
                </a>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

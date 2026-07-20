import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import SecureBriefingButton from "@/components/SecureBriefingButton";
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
  title: "Who We Are | Souvren",
  description:
    "Souvren is a senior digital governance and product leadership consultancy. Strategy at the speed of sovereign change.",
};



export default async function WhoWeArePage() {
  const caseStudies = await client.fetch<CaseStudy[]>(CASE_STUDIES_QUERY);

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
                Strategy at the speed of sovereign change
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                We advise governments, institutions, and private organisations on how to build, connect, and lead their digital future.
              </p>
            </div>
          </section>

          {/* ── Hero image ─────────────────────────────────────────────── */}
          <div className="pb-28">
            <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
              <Image
                src="/images/Who_We_Are/about_image.png"
                alt="Souvren"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── Intro ──────────────────────────────────────────────────── */}
          <div className="px-4 md:px-[51px] lg:px-[56px] pt-12 pb-36">
            <div className="max-w-3xl flex flex-col gap-12">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-snug lg:leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Most organisations are further from their digital potential than they realise. Not a technology problem, but a strategic one
              </h2>
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55">
                <p className="m-0">
                  We advise public institutions and private organisations on how to change that. From designing the digital ecosystem that connects everything together, to building the experiences users actually need, to developing the local capability to lead it all from within: we sit at the table where strategy is set, and stay until the right direction is clear.
                </p>
              </div>
            </div>
          </div>


          {/* ── Case Studies ───────────────────────────────────────────── */}
          {caseStudies.length > 0 && (
            <div className="px-4 md:px-[51px] lg:px-[56px] pb-36">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
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
                  <div key={study._id} className="relative flex-none w-[82vw] snap-start flex flex-col justify-between p-8 h-[552px] sm:w-auto sm:flex-1 sm:h-[888px] xl:h-[730px] overflow-hidden">
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
                          <span className="text-[10px] uppercase tracking-widest text-white" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                            {study.industry}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-5">
                        <p className="text-[24px] font-medium text-white leading-snug max-w-[85%]">
                          {study.title}
                        </p>
                        <Link
                          href={`/case-studies/${study.slug.current}`}
                          className="self-start inline-flex items-center h-9 px-6 rounded-full text-[15px] font-medium text-white border border-white/40 hover:border-white transition-all duration-300"
                        >
                          Read
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── The Profile ─────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-0 pb-16">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Experience drawn from every sector
              </h2>
              <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                Souvren is a new consultancy. We are not a firm with decades of institutional history. What we bring is something different: a team and adviser network whose individual careers span financial services, public sector, hospitality, technology, and regulated industries. That experience was not built here. It was built before, inside the organisations that set the standard in each field, and carried into Souvren by the people who lived it.
              </p>
              <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] text-[#0A0A0B]/55 leading-[1.4]">
                That breadth is deliberate. Digital transformation in government and institutions rarely follows a single industry playbook. We draw on the right career experience for the challenge at hand, and that means having advisers who have led it across many different contexts.
              </p>

              <div className="flex flex-col items-center gap-10 pt-8">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[48px] md:text-[64px] font-medium text-[#292929] tracking-[-0.03em] leading-none" style={{ fontFamily: "var(--font-instrument)" }}>5</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#0A0A0B]/50" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Awards won</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[48px] md:text-[64px] font-medium text-[#292929] tracking-[-0.03em] leading-none" style={{ fontFamily: "var(--font-instrument)" }}>18</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#0A0A0B]/50" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Projects completed</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[48px] md:text-[64px] font-medium text-[#292929] tracking-[-0.03em] leading-none" style={{ fontFamily: "var(--font-instrument)" }}>£5.4m</span>
                  <span className="text-[12px] uppercase tracking-[0.18em] text-[#0A0A0B]/50" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Cost saving</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Image mosaic ───────────────────────────────────────────── */}
          <div className="pb-28 overflow-hidden">
            <div className="relative left-1/2 -translate-x-1/2 w-[130vw]">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/Who_We_Are/mosaic_1.jpg" alt="" fill className="object-cover object-center" sizes="50vw" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/Who_We_Are/mosaic_2.jpg" alt="" fill className="object-cover object-center" sizes="50vw" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/Who_We_Are/mosaic_3.jpg" alt="" fill className="object-cover object-center" sizes="50vw" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/Who_We_Are/mosaic_4.jpg" alt="" fill className="object-cover object-center" sizes="50vw" />
                </div>
              </div>
            </div>
          </div>


          {/* ── The Closer ──────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-16 pb-32">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Set the direction<br />before someone else does
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                We're not the largest consultancy in the room. We're the one that's seen what happens when the largest one leaves. We advise for outcomes, not optics: and we stay until the right direction is set.
              </p>
              <SecureBriefingButton
                className="inline-flex items-center h-9 px-8 rounded-full text-[15px] font-medium text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
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

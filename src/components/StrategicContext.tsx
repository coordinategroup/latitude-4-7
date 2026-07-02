import Image from "next/image";
import Link from "next/link";
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

const QUERY = `
  *[_type == "caseStudy"] | order(publishedAt desc) [0..2] {
    _id, title, industry, slug,
    coverImage { asset->{ _id, url }, alt },
    clientLogo { asset->{ _id, url }, alt }
  }
`;

export default async function StrategicContext() {
  const caseStudies = await client.fetch<CaseStudy[]>(QUERY);
  return (
    <section className="bg-[#FAFAFA]">

      {/* A digital-first Seychelles */}
      <div className="px-4 md:px-[51px] lg:px-[56px] pt-20 md:pt-28 pb-24 md:pb-36">
        <div className="max-w-3xl flex flex-col gap-6 md:ml-[50%] md:mr-[102px] lg:mr-[112px]">

          <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-snug lg:leading-[1.2] text-[27px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
            A digital-first Seychelles
          </h2>

          <div className="flex flex-col gap-6 text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55">
            <p className="m-0">
              We advise on how to build thoughtful digital systems, establish the standards for exceptional digital experiences, and develop the leadership and teams needed to sustain them.
            </p>

            <p className="m-0">
              Together, we position the Seychelles as a forward-thinking destination for public services and private enterprise.
            </p>

            <p className="m-0">
              A seychellois future, built by seychellois people.
            </p>
          </div>

          <a
            href="/who-we-are"
            className="self-start inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-white bg-[#110F0F] hover:bg-[#2a2828] transition-all duration-300"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Learn More
          </a>

        </div>
      </div>

      {/* Case Studies row */}
      <div className="px-4 md:px-[51px] lg:px-[56px] pb-20 md:pb-36">
        <div className="flex items-center justify-between mb-6">
          <span
            className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Case Studies
          </span>
          <Link
            href="/case-studies"
            className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Read more
          </Link>
        </div>
        <div className="flex overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {caseStudies.map((study) => (
            <div key={study._id} className="relative flex-none w-[82vw] snap-start flex flex-col justify-between p-8 h-[552px] sm:w-auto sm:flex-1 sm:h-[807px] xl:h-[664px] overflow-hidden">
              {/* Background image */}
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
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#0A0A0B]/40" />

              {/* Content */}
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

                <div>
                  <Link
                    href={`/case-studies/${study.slug.current}`}
                    className="self-start inline-flex items-center h-9 px-6 rounded-full text-[11px] tracking-widest uppercase text-white border border-white/40 hover:border-white transition-all duration-300"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Read
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

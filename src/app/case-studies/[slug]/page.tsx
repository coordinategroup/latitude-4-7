import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

// ─── Types ───────────────────────────────────────────────────────────────────

type SanityImage = { asset: { _ref: string }; alt?: string; hotspot?: object };

type MoreStudy = {
  _id: string;
  title: string;
  industry: string;
  slug: { current: string };
  coverImage?: { asset: { _id: string; url: string }; alt?: string };
  clientLogo?: { asset: { _id: string; url: string }; alt?: string };
};

type CaseStudy = {
  title: string;
  industry: string;
  slug: { current: string };
  coverImage?: SanityImage;
  overview?: PortableTextBlock[];
  observations?: PortableTextBlock[];
  image1?: SanityImage;
  challenge?: PortableTextBlock[];
  methodology?: PortableTextBlock[];
  image2?: SanityImage;
  approach?: PortableTextBlock[];
  image4?: SanityImage;
  solution?: PortableTextBlock[];
  image3?: SanityImage;
  outcomes?: PortableTextBlock[];
  moreStudies?: MoreStudy[];
};

// ─── GROQ ─────────────────────────────────────────────────────────────────────

const QUERY = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    title,
    industry,
    slug,
    coverImage { asset, alt, hotspot },
    overview,
    observations,
    image1 { asset, alt, hotspot },
    challenge,
    methodology,
    image2 { asset, alt, hotspot },
    approach,
    image4 { asset, alt, hotspot },
    solution,
    image3 { asset, alt, hotspot },
    outcomes,
    "moreStudies": *[_type == "caseStudy" && slug.current != $slug] | order(publishedAt desc) [0..2] {
      _id, title, industry, slug,
      coverImage { asset->{ _id, url }, alt },
      clientLogo { asset->{ _id, url }, alt }
    }
  }
`;

// ─── Portable Text components ─────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] md:text-[18px] text-[#0A0A0B] leading-[1.5] m-0">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug mt-10 mb-4" style={{ fontFamily: "var(--font-instrument)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[20px] font-medium text-[#292929] tracking-[-0.01em] leading-snug mt-8 mb-3" style={{ fontFamily: "var(--font-instrument)" }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#C48C59] pl-6 my-6 text-[18px] font-medium text-[#292929] leading-snug italic" style={{ fontFamily: "var(--font-instrument)" }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="flex flex-col gap-2 mt-0 mb-4 pl-0 list-none">{children}</ul>,
    number: ({ children }) => <ol className="flex flex-col gap-2 my-4 pl-5">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[16px] md:text-[18px] text-[#0A0A0B] leading-[1.5]">
        <span className="mt-[13px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" />
        <div className="flex-1">{children}</div>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[16px] md:text-[18px] text-[#0A0A0B] leading-[1.5]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#292929]">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#292929] underline underline-offset-2 hover:text-[#C48C59] transition-colors"
      >
        {children}
      </a>
    ),
  },
};

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "caseStudy" && defined(slug.current)]{ slug }`
  );
  return slugs.map((s) => ({ slug: s.slug.current }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await client.fetch<Pick<CaseStudy, "title" | "industry"> | null>(
    `*[_type == "caseStudy" && slug.current == $slug][0]{ title, industry }`,
    { slug }
  );
  if (!cs) return {};
  return {
    title: `${cs.title} | Souvren`,
    description: `${cs.industry} case study by Souvren.`,
  };
}

// ─── Full-width image helper ───────────────────────────────────────────────────

function FullWidthImage({ image, alt }: { image: SanityImage; alt?: string }) {
  if (!image?.asset?._ref) return null;
  return (
    <div className="py-16">
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src={urlFor(image).width(1920).height(1080).url()}
          alt={alt ?? ""}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await client.fetch<CaseStudy | null>(QUERY, { slug });
  if (!cs) notFound();

  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">
            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

            <div className="flex flex-col gap-4 max-w-4xl pb-6">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
                {cs.title}
              </h1>
            </div>
          </section>

          {/* ── Cover image ──────────────────────────────────────────────── */}
          {cs.coverImage && (
            <div className="pb-20">
              <div className="flex justify-end px-4 md:px-[51px] lg:px-[56px] mb-3">
                <span className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  {cs.industry}
                </span>
              </div>
              <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
                <Image
                  src={urlFor(cs.coverImage).width(1920).height(1080).url()}
                  alt={cs.coverImage.alt ?? cs.title}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          )}

          {/* ── Overview / Observations ───────────────────────────────────── */}
          {(cs.overview || cs.observations) && (
            <section className="px-4 md:px-16 pt-20 pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-40">
                {cs.overview && (
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-8" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      Overview
                    </span>
                    <div className="flex flex-col gap-4">
                      <PortableText value={cs.overview} components={ptComponents} />
                    </div>
                  </div>
                )}
                {cs.observations && (
                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-8" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      Observations
                    </span>
                    <div className="flex flex-col gap-4">
                      <PortableText value={cs.observations} components={ptComponents} />
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── Image 1 ──────────────────────────────────────────────────── */}
          {cs.image1 && <FullWidthImage image={cs.image1} alt={cs.image1.alt} />}

          {/* ── The Brief ─────────────────────────────────────────────────── */}
          {cs.challenge && (
            <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 pb-8">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-4 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                The Brief
              </span>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                <PortableText value={cs.challenge} components={ptComponents} />
              </div>
            </section>
          )}

          {/* ── Methodology ───────────────────────────────────────────────── */}
          {cs.methodology && (
            <section className="px-4 md:px-[51px] lg:px-[56px] pt-8 pb-20">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-4 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                Methodology
              </span>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                <PortableText value={cs.methodology} components={ptComponents} />
              </div>
            </section>
          )}

          {/* ── Image 2 ──────────────────────────────────────────────────── */}
          {cs.image2 && <FullWidthImage image={cs.image2} alt={cs.image2.alt} />}

          {/* ── The Approach ──────────────────────────────────────────────── */}
          {cs.approach && (
            <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 pb-20">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-4 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                The Approach
              </span>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                <PortableText value={cs.approach} components={ptComponents} />
              </div>
            </section>
          )}

          {/* ── Image 4 ──────────────────────────────────────────────────── */}
          {cs.image4 && <FullWidthImage image={cs.image4} alt={cs.image4.alt} />}

          {/* ── The Solution ──────────────────────────────────────────────── */}
          {cs.solution && (
            <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 pb-20">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-4 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                The Solution
              </span>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                <PortableText value={cs.solution} components={ptComponents} />
              </div>
            </section>
          )}

          {/* ── Image 3 ──────────────────────────────────────────────────── */}
          {cs.image3 && <FullWidthImage image={cs.image3} alt={cs.image3.alt} />}

          {/* ── The Outcomes ──────────────────────────────────────────────── */}
          {cs.outcomes && (
            <section className="px-4 md:px-[51px] lg:px-[56px] pt-20 pb-36">
              <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B] mb-4 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                The Outcomes
              </span>
              <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                <PortableText value={cs.outcomes} components={ptComponents} />
              </div>
            </section>
          )}

          {/* ── More Case Studies ─────────────────────────────────────────── */}
          {cs.moreStudies && cs.moreStudies.length > 0 && (
            <section className="border-t border-black/[0.08] py-20 px-4 md:px-[51px] lg:px-[56px]">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  More Case Studies
                </h2>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-16">
                {cs.moreStudies.map((study) => (
                  <Link
                    key={study._id}
                    href={`/case-studies/${study.slug.current}`}
                    className="flex flex-col group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#292929]/5">
                      {study.coverImage?.asset?.url ? (
                        <Image
                          src={urlFor(study.coverImage).width(900).height(675).url()}
                          alt={study.coverImage.alt ?? study.title}
                          fill
                          quality={90}
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#292929]/5" />
                      )}
                    </div>
                    <div className="flex flex-col gap-4 pt-8">
                      {study.clientLogo?.asset?.url ? (
                        <Image
                          src={study.clientLogo.asset.url}
                          alt={study.clientLogo.alt ?? study.title}
                          width={120}
                          height={20}
                          className="object-contain object-left h-5 w-auto"
                        />
                      ) : (
                        <span className="text-[10px] uppercase tracking-widest text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {study.industry}
                        </span>
                      )}
                      <h3 className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug max-w-[90%]" style={{ fontFamily: "var(--font-instrument)" }}>
                        {study.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

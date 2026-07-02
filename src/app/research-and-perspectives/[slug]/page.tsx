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
import ResearchLedger, { type LedgerEntry } from "@/components/ResearchLedger";

// ─── Types ──────────────────────────────────────────────────────────────────

type Author = {
  name: string;
  jobTitle?: string;
  linkedIn?: string;
  profileImage?: { asset: { _ref: string } };
};

type RelatedPost = {
  _id: string;
  type: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  readingTime?: number;
  mainImage?: { asset: { _ref: string }; hotspot?: object };
};

type CompanyFactsheet = {
  founded?: number;
  coreTechnology?: string;
  keyProduct?: string;
  primaryInvestors?: string[];
};

type Post = {
  type: "Research" | "Perspective" | "Spotlight";
  title: string;
  subheading?: string;
  slug: { current: string };
  readingTime?: number;
  publishedAt: string;
  mainImage?: { asset: { _ref: string }; hotspot?: object };
  secondaryImage?: { asset: { _ref: string }; alt?: string; hotspot?: object };
  body?: PortableTextBlock[];
  author?: Author;
  companyFactsheet?: CompanyFactsheet;
  relatedContent?: RelatedPost[];
  researchLedger?: LedgerEntry[];
  morePosts?: {
    _id: string;
    type: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage?: { asset: { _id: string; url: string }; hotspot?: object };
  }[];
};

// ─── GROQ ────────────────────────────────────────────────────────────────────

const POST_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    type,
    title,
    subheading,
    slug,
    readingTime,
    publishedAt,
    mainImage,
    secondaryImage,
    body,
    author {
      name,
      jobTitle,
      linkedIn,
      profileImage
    },
    companyFactsheet {
      founded,
      coreTechnology,
      keyProduct,
      primaryInvestors
    },
    relatedContent[]-> {
      _id,
      type,
      title,
      slug,
      publishedAt,
      readingTime,
      mainImage
    },
    researchLedger[] {
      _key,
      sourceTitle,
      leadInstitution,
      keyDataPoint,
      year,
      link,
      categoryTag
    },
    "morePosts": *[_type == "post" && type == ^.type && slug.current != $slug] | order(publishedAt desc) [0..2] {
      _id, type, title, slug, publishedAt,
      mainImage { asset->{ _id, url }, hotspot }
    }
  }
`;

const ALL_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(ALL_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post: Post | null = await client.fetch(POST_QUERY, { slug });
  if (!post) return {};
  return {
    title: `${post.title} | Souvren`,
    description: post.subheading,
  };
}

// ─── Portable Text components ─────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/70 leading-[1.9] mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[32px] md:text-[42px] font-medium text-[#292929] tracking-[-0.03em] leading-[1.05] mt-12 mb-4" style={{ fontFamily: "var(--font-instrument)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug mt-10 mb-3" style={{ fontFamily: "var(--font-instrument)" }}>
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[18px] font-medium text-[#292929] mt-8 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#C48C59] pl-6 my-8 text-[18px] italic text-[#0A0A0B]/60 leading-relaxed">
        {children}
      </blockquote>
    ),
    caption: ({ children }) => (
      <p className="text-[11px] text-[#0A0A0B]/40 italic leading-[1.7] mb-4 mt-2">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-6 pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-[#0A0A0B] text-[16px] leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[16px] text-[#0A0A0B]/70 leading-relaxed">
        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[16px] text-[#0A0A0B]/70 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#292929]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-[#0A0A0B]/70">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-[14px] text-[#C48C59] bg-black/[0.04] px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#C48C59] underline underline-offset-2 hover:text-[#C48C59]/70 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    statBlock: ({ value }) => (
      <aside className="my-10 bg-black/[0.02] border border-black/[0.08] p-8 flex flex-col gap-3">
        <span className="text-[64px] font-medium text-[#C48C59] tracking-[-0.03em] leading-none">
          {value.value}
        </span>
        <p className="text-[15px] text-[#0A0A0B]/70 leading-[1.75]">
          {value.description}
        </p>
        {value.source && (
          <span className="text-[12px] text-[#0A0A0B]/40 mt-1">
            {value.source}
          </span>
        )}
      </aside>
    ),
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10">
          <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
            <Image
              src={urlFor(value).width(1920).height(1080).url()}
              alt={value.alt ?? ""}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-[13px] text-[#0A0A0B]/40 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post: Post | null = await client.fetch(POST_QUERY, { slug });

  if (!post) notFound();

  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
      <main className="bg-[#FAFAFA] min-h-screen">

        {/* ── Article Hero ─────────────────────────────────────────────── */}
        <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">
          <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            {post.type}
          </span>

          <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

          <div className="flex flex-col gap-6 max-w-4xl pb-16">
            <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
              {post.title}
            </h1>
            {post.subheading && (
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                {post.subheading}
              </p>
            )}
          </div>
        </section>

        {/* ── Cover Image (secondary if uploaded, else primary) ────────── */}
        {(post.secondaryImage?.asset || post.mainImage?.asset) && (
          <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden h-[60vh] md:h-[80vh] lg:h-[90vh]">
            <Image
              src={urlFor(post.secondaryImage?.asset ? post.secondaryImage : post.mainImage!).url()}
              alt={post.secondaryImage?.alt ?? post.title}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
              priority
            />
          </div>
        )}

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <section className="px-4 md:px-[51px] lg:px-[280px] xl:px-[400px] max-w-[1932px] mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 items-start">

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-8">

              {/* Author card */}
              {post.author && (
                <div className="border border-black/[0.08] p-6 flex flex-col gap-3">
                  {post.author.profileImage?.asset ? (
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-black/[0.06]">
                      <Image
                        src={urlFor(post.author.profileImage).width(128).height(128).url()}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-black/[0.06] flex items-center justify-center text-[20px] font-medium text-[#0A0A0B]/40">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-[15px] font-medium text-[#292929]">{post.author.name}</span>
                  {post.author.jobTitle && (
                    <span className="text-[13px] text-[#0A0A0B]/55 leading-snug">{post.author.jobTitle}</span>
                  )}
                  {post.author.linkedIn && (
                    <a
                      href={post.author.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] text-[#C48C59] hover:text-[#A8703E] transition-colors mt-1"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              )}

              {/* Company Factsheet — Spotlight only */}
              {post.type === "Spotlight" && post.companyFactsheet && (
                <div className="border border-[#C48C59]/20 bg-[#C48C59]/[0.03] p-6 flex flex-col gap-4">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#C48C59]/60" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    Company Factsheet
                  </span>
                  <div className="flex flex-col gap-3">
                    {post.companyFactsheet.founded && (
                      <div className="flex justify-between items-center border-b border-black/[0.06] pb-3">
                        <span className="text-[13px] text-[#0A0A0B]/55">Founded</span>
                        <span className="text-[13px] font-medium text-[#292929]">{post.companyFactsheet.founded}</span>
                      </div>
                    )}
                    {post.companyFactsheet.coreTechnology && (
                      <div className="flex flex-col gap-1 border-b border-black/[0.06] pb-3">
                        <span className="text-[13px] text-[#0A0A0B]/55">Core Technology</span>
                        <span className="text-[13px] font-medium text-[#292929] leading-snug">{post.companyFactsheet.coreTechnology}</span>
                      </div>
                    )}
                    {post.companyFactsheet.keyProduct && (
                      <div className="flex flex-col gap-1 border-b border-black/[0.06] pb-3">
                        <span className="text-[13px] text-[#0A0A0B]/55">Key Product</span>
                        <span className="text-[13px] font-medium text-[#292929] leading-snug">{post.companyFactsheet.keyProduct}</span>
                      </div>
                    )}
                    {post.companyFactsheet.primaryInvestors && post.companyFactsheet.primaryInvestors.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <span className="text-[13px] text-[#0A0A0B]/55">Primary Investors</span>
                        <div className="flex flex-col gap-1.5">
                          {post.companyFactsheet.primaryInvestors.map((investor) => (
                            <span key={investor} className="text-[13px] font-medium text-[#292929]">
                              {investor}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Article details */}
              <div className="border border-black/[0.08] p-6 flex flex-col gap-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Article Details
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-[#0A0A0B]/55">Type</span>
                    <span className="text-[13px] text-[#292929]">{post.type}</span>
                  </div>
                  {post.publishedAt && (
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] text-[#0A0A0B]/55">Published</span>
                      <span className="text-[13px] text-[#292929]">{formatDate(post.publishedAt)}</span>
                    </div>
                  )}
                  {post.readingTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] text-[#0A0A0B]/55">Reading time</span>
                      <span className="text-[13px] text-[#292929]">{post.readingTime} min</span>
                    </div>
                  )}
                </div>
              </div>

            </aside>

            {/* Article body */}
            <article className="w-full">
              {post.body && <PortableText value={post.body} components={ptComponents} />}
            </article>

          </div>
        </section>

        {/* ── Research Ledger ──────────────────────────────────────────── */}
        {post.researchLedger && post.researchLedger.length > 0 && (
          <div className="px-4 md:px-[51px] lg:px-[280px] xl:px-[400px] max-w-[1932px] mx-auto">
            <ResearchLedger entries={post.researchLedger} />
          </div>
        )}

        {/* ── More Posts ────────────────────────────────────────────────── */}
        {(post.morePosts && post.morePosts.length > 0) && (
          <section className="border-t border-black/[0.08] py-20 px-4 md:px-[51px] lg:px-[56px]">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                More {post.type}
              </h2>
              <Link
                href="/research-and-perspectives"
                className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                View all
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-16">
              {post.morePosts.map((related) => (
                <Link
                  key={related._id}
                  href={`/research-and-perspectives/${related.slug.current}`}
                  className="group flex flex-col overflow-hidden"
                >
                  {related.mainImage?.asset && (
                    <div className="relative aspect-[8/9] overflow-hidden bg-[#292929]/5">
                      <Image
                        src={urlFor(related.mainImage).width(900).height(1012).url()}
                        alt={related.title}
                        fill
                        quality={90}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-5 pt-8">
                    <span className="text-[10px] uppercase tracking-widest text-[#292929]/80" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {related.type}
                    </span>
                    <h3 className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug max-w-[90%]" style={{ fontFamily: "var(--font-instrument)" }}>
                      {related.title}
                    </h3>
                    {related.publishedAt && (
                      <span className="text-[12px] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {formatDate(related.publishedAt)}
                      </span>
                    )}
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

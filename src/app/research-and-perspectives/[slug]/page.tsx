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
  body?: PortableTextBlock[];
  author?: Author;
  companyFactsheet?: CompanyFactsheet;
  relatedContent?: RelatedPost[];
  researchLedger?: LedgerEntry[];
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
    body,
    author {
      name,
      jobTitle,
      linkedIn
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
    title: `${post.title} | Latitude Four Seven`,
    description: post.subheading,
  };
}

// ─── Portable Text components ─────────────────────────────────────────────────

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] text-[#F8FAFC] leading-[1.9] mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-[54px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[28px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug mt-10 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-[18px] font-medium text-[#F8FAFC] mt-8 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#D4B996] pl-6 my-8 text-[18px] italic text-[#F8FAFC]/70 leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-2 mb-6 pl-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-[#F8FAFC] text-[16px] leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[16px] text-[#F8FAFC] leading-relaxed">
        <span className="mt-[9px] w-1 h-1 rounded-full bg-[#D4B996] shrink-0" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[16px] text-[#F8FAFC] leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#F8FAFC]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-[#F8FAFC]/80">{children}</em>,
    code: ({ children }) => (
      <code className="font-mono text-[14px] text-[#D4B996] bg-white/[0.05] px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#D4B996] underline underline-offset-2 hover:text-[#D4B996]/70 transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    statBlock: ({ value }) => (
      <aside className="my-10 bg-white/[0.04] border border-white/[0.08] p-8 flex flex-col gap-3">
        <span className="text-[64px] font-medium text-[#D4B996] tracking-[-0.03em] leading-none">
          {value.value}
        </span>
        <p className="text-[15px] text-[#F8FAFC] leading-[1.75]">
          {value.description}
        </p>
        {value.source && (
          <span className="text-[12px] text-[#8a8f98] mt-1">
            {value.source}
          </span>
        )}
      </aside>
    ),
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-[13px] text-[#8a8f98]/60 text-center">
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
    <>
      <Header />
      <PageFadeIn>
      <main className="bg-[#08090A] min-h-screen">

        {/* ── Article Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-16 border-b border-white/[0.06]">
          <div className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto">

            {/* Type label */}
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#D4B996]">
              {post.type}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-[32px] md:text-[54px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
              {post.title}
            </h1>

            {/* Subheading */}
            {post.subheading && (
              <p className="mt-5 text-[18px] md:text-[22px] text-[#F8FAFC] leading-[1.6] max-w-3xl">
                {post.subheading}
              </p>
            )}

            {/* Meta row */}
            <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              {/* Author */}
              {post.author && (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-medium text-[#F8FAFC]">
                      {post.author.name}
                    </span>
                    {post.author.linkedIn && (
                      <a
                        href={post.author.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-[#8a8f98] hover:text-[#D4B996] transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  {post.author.jobTitle && (
                    <span className="text-[13px] text-[#8a8f98]">{post.author.jobTitle}</span>
                  )}
                </div>
              )}

              {/* Date + Reading time */}
              <div className="flex items-center gap-6 text-[13px] text-[#8a8f98]">
                {post.publishedAt && (
                  <span>{formatDate(post.publishedAt)}</span>
                )}
                {post.readingTime && (
                  <>
                    <span className="w-px h-3 bg-white/20" />
                    <span>{post.readingTime} min read</span>
                  </>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ── Main Image ───────────────────────────────────────────────── */}
        {post.mainImage?.asset && (
          <div className="relative w-full aspect-[21/9] overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(1800).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent" />
          </div>
        )}

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <section className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">

            {/* Article body */}
            <article className="max-w-[720px]">
              {post.body && <PortableText value={post.body} components={ptComponents} />}
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-8 pt-1">

              {/* Author card */}
              {post.author && (
                <div className="border border-white/[0.06] p-6 flex flex-col gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8a8f98]/50">
                    Author
                  </span>
                  <span className="text-[15px] font-medium text-[#F8FAFC]">{post.author.name}</span>
                  {post.author.jobTitle && (
                    <span className="text-[13px] text-[#8a8f98] leading-snug">{post.author.jobTitle}</span>
                  )}
                  {post.author.linkedIn && (
                    <a
                      href={post.author.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[13px] text-[#D4B996]/70 hover:text-[#D4B996] transition-colors mt-1"
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
                <div className="border border-[#D4B996]/20 bg-[#D4B996]/[0.03] p-6 flex flex-col gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D4B996]/60">
                    Company Factsheet
                  </span>
                  <div className="flex flex-col gap-3">
                    {post.companyFactsheet.founded && (
                      <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                        <span className="text-[13px] text-[#8a8f98]">Founded</span>
                        <span className="text-[13px] font-medium text-[#F8FAFC]">{post.companyFactsheet.founded}</span>
                      </div>
                    )}
                    {post.companyFactsheet.coreTechnology && (
                      <div className="flex flex-col gap-1 border-b border-white/[0.05] pb-3">
                        <span className="text-[13px] text-[#8a8f98]">Core Technology</span>
                        <span className="text-[13px] font-medium text-[#F8FAFC] leading-snug">{post.companyFactsheet.coreTechnology}</span>
                      </div>
                    )}
                    {post.companyFactsheet.keyProduct && (
                      <div className="flex flex-col gap-1 border-b border-white/[0.05] pb-3">
                        <span className="text-[13px] text-[#8a8f98]">Key Product</span>
                        <span className="text-[13px] font-medium text-[#F8FAFC] leading-snug">{post.companyFactsheet.keyProduct}</span>
                      </div>
                    )}
                    {post.companyFactsheet.primaryInvestors && post.companyFactsheet.primaryInvestors.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <span className="text-[13px] text-[#8a8f98]">Primary Investors</span>
                        <div className="flex flex-col gap-1.5">
                          {post.companyFactsheet.primaryInvestors.map((investor) => (
                            <span key={investor} className="text-[13px] font-medium text-[#F8FAFC]">
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
              <div className="border border-white/[0.06] p-6 flex flex-col gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8a8f98]/50">
                  Article Details
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[13px] text-[#8a8f98]">Type</span>
                    <span className="text-[13px] text-[#F8FAFC]">{post.type}</span>
                  </div>
                  {post.publishedAt && (
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] text-[#8a8f98]">Published</span>
                      <span className="text-[13px] text-[#F8FAFC]">{formatDate(post.publishedAt)}</span>
                    </div>
                  )}
                  {post.readingTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-[13px] text-[#8a8f98]">Reading time</span>
                      <span className="text-[13px] text-[#F8FAFC]">{post.readingTime} min</span>
                    </div>
                  )}
                </div>
              </div>

            </aside>
          </div>
        </section>

        {/* ── Research Ledger ──────────────────────────────────────────── */}
        {post.researchLedger && post.researchLedger.length > 0 && (
          <div className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto">
            <ResearchLedger entries={post.researchLedger} />
          </div>
        )}

        {/* ── Related Content ───────────────────────────────────────────── */}
        {post.relatedContent && post.relatedContent.length > 0 && (
          <section className="border-t border-white/[0.06] py-20">
            <div className="px-6 md:px-20 lg:px-32 max-w-[1400px] mx-auto">

              <div className="flex items-end justify-between mb-10">
                <h2 className="text-[28px] font-medium text-[#F8FAFC] tracking-[-0.02em]">
                  Related Content
                </h2>
                <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98] hidden md:block">
                  Research &amp; Perspectives
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.relatedContent.map((related) => (
                  <Link
                    key={related._id}
                    href={`/research-and-perspectives/${related.slug.current}`}
                    className="group relative overflow-hidden flex flex-col min-h-[320px] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
                  >
                    {/* Image */}
                    {related.mainImage?.asset && (
                      <div className="relative h-[180px] overflow-hidden shrink-0">
                        <Image
                          src={urlFor(related.mainImage).width(800).url()}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex flex-col flex-1 gap-3 p-6">
                      <span className="text-[12px] font-semibold uppercase tracking-widest text-[#D4B996]">
                        {related.type}
                      </span>
                      <h3 className="text-[18px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug">
                        {related.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-[13px] text-[#8a8f98]">
                          {related.publishedAt ? formatDate(related.publishedAt) : ""}
                        </span>
                        {related.readingTime && (
                          <span className="text-[13px] text-[#8a8f98]">
                            {related.readingTime} min
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Read arrow — appears on hover */}
                    <div className="absolute bottom-6 right-6 flex items-center gap-1.5 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-[13px] font-semibold text-[#F8FAFC]">Read</span>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="text-[#F8FAFC]" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

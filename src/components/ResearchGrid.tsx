"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  _id: string;
  type: string;
  title: string;
  subheading?: string;
  slug: { current: string };
  publishedAt?: string;
  mainImage?: { asset: { _id: string; url: string }; alt?: string };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

const PAGE_SIZE = 10;

export default function ResearchGrid({ posts }: { posts: Post[] }) {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const types = Array.from(new Set(posts.map((p) => p.type).filter(Boolean)));
  const filtered = activeType ? posts.filter((p) => p.type === activeType) : posts;
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  function handleTypeChange(type: string | null) {
    setActiveType(type);
    setPage(0);
  }

  return (
    <section className="px-4 md:px-[51px] lg:px-[56px] py-12">

      {/* ── Filters ──────────────────────────────────────────────────── */}
      {types.length > 0 && (
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#0A0A0B] shrink-0" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            Filter
          </span>
          {types.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeChange(activeType === type ? null : type)}
              className={`px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase border transition-all duration-200 ${
                activeType === type
                  ? "border-[#C48C59] text-[#C48C59] bg-[#C48C59]/[0.06]"
                  : "border-black/20 text-[#0A0A0B] hover:border-black/40"
              }`}
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {type}
            </button>
          ))}
          {activeType && (
            <button
              onClick={() => handleTypeChange(null)}
              className="ml-1 text-[11px] text-[#0A0A0B]/50 hover:text-[#0A0A0B] transition-colors duration-200"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {paginated.map((post) => (
            <Link
              key={post._id}
              href={`/research-and-perspectives/${post.slug.current}`}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[8/9] overflow-hidden bg-[#292929]/5">
                {post.mainImage?.asset?.url ? (
                  <Image
                    src={urlFor(post.mainImage).width(900).height(1350).url()}
                    alt={post.mainImage.alt ?? post.title}
                    fill
                    quality={90}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#292929]/5" />
                )}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-5 pt-8">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] uppercase tracking-widest text-[#292929]/80"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {post.type}
                  </span>
                  {post.publishedAt && (
                    <span className="text-[12px] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {formatDate(post.publishedAt)}
                    </span>
                  )}
                </div>
                <h3 className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug max-w-[90%]" style={{ fontFamily: "var(--font-instrument)" }}>
                  {post.title}
                </h3>
                {post.subheading && (
                  <p className="text-[14px] text-[#0A0A0B]/55 leading-[1.6] max-w-[85%]">
                    {post.subheading}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      ) : null}

      {/* ── Pagination ────────────────────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-4 py-2 text-[11px] uppercase tracking-[0.15em] border border-black/20 text-[#0A0A0B] hover:border-black/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-9 h-9 text-[11px] border transition-all duration-200 ${
                page === i
                  ? "border-[#C48C59] text-[#C48C59] bg-[#C48C59]/[0.06]"
                  : "border-black/20 text-[#0A0A0B] hover:border-black/40"
              }`}
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-4 py-2 text-[11px] uppercase tracking-[0.15em] border border-black/20 text-[#0A0A0B] hover:border-black/40 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Next
          </button>
        </div>
      )}

      {filtered.length === 0 && (
        <div className="py-24 flex flex-col items-center gap-3 text-center">
          <span className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            No articles match
          </span>
          <p className="text-[14px] text-[#0A0A0B]/55">Try clearing a filter.</p>
        </div>
      )}

    </section>
  );
}

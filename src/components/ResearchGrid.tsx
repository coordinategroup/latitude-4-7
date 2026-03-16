"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type Post = {
  _id: string;
  type: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { _id: string; url: string }; alt?: string };
};

export default function ResearchGrid({ posts }: { posts: Post[] }) {
  const [activeType, setActiveType] = useState<string | null>(null);

  const types = Array.from(new Set(posts.map((p) => p.type).filter(Boolean)));

  const filtered = posts.filter((p) => {
    if (activeType && p.type !== activeType) return false;
    return true;
  });

  const toggle = (
    value: string,
    active: string | null,
    set: (v: string | null) => void
  ) => set(active === value ? null : value);

  return (
    <section className="px-20 md:px-32 py-12">

      {/* ── Filters ──────────────────────────────────────────────────── */}
      <div className="flex flex-col gap-5 mb-12 border-b border-white/[0.06] pb-10">

        {/* Type */}
        {types.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#8a8f98]/50 w-12 shrink-0">
              Type
            </span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => toggle(type, activeType, setActiveType)}
                className={`px-4 py-1.5 text-[12px] font-medium tracking-wide border transition-all duration-200 ${
                  activeType === type
                    ? "border-[#D4B996] text-[#D4B996] bg-[#D4B996]/[0.08]"
                    : "border-white/[0.10] text-[#8a8f98] hover:border-white/30 hover:text-[#F8FAFC]"
                }`}
              >
                {type}
              </button>
            ))}

            {activeType && (
              <button
                onClick={() => { setActiveType(null); }}
                className="ml-2 text-[12px] font-medium text-[#F8FAFC] hover:text-[#F8FAFC]/50 transition-colors duration-200"
              >
                Clear
              </button>
            )}
          </div>
        )}

      </div>

      {/* ── Grid ─────────────────────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map((post) => (
            <Link
              key={post._id}
              href={`/research/${post.slug.current}`}
              className="relative overflow-hidden min-h-[498px] flex flex-col group cursor-pointer"
            >
              {post.mainImage?.asset?.url ? (
                <Image
                  src={urlFor(post.mainImage).width(600).height(750).url()}
                  alt={post.mainImage.alt ?? post.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 bg-white/[0.03]" />
              )}

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />

              <div className="relative z-10 pl-8 pr-4 pt-10 pb-0 flex-1">
                <h3 className="text-[26px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug">
                  {post.title}
                </h3>
              </div>

              <div className="relative z-10 px-8 pb-8 flex items-center justify-between">
                <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#F8FAFC] bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  {post.type}
                </span>
                <div className="flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[15px] font-semibold text-[#F8FAFC]">Read</span>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-24 flex flex-col items-center gap-3 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
            No articles match
          </span>
          <p className="text-[14px] text-[#8a8f98]">
            Try clearing a filter.
          </p>
        </div>
      )}

    </section>
  );
}

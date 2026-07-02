"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

type CaseStudyCard = {
  _id: string;
  title: string;
  industry: string;
  slug: { current: string };
  publishedAt?: string;
  coverImage?: { asset: { _id: string; url: string }; alt?: string };
  clientLogo?: { asset: { _id: string; url: string }; alt?: string };
};

const PAGE_SIZE = 10;

export default function CaseStudiesGrid({ studies }: { studies: CaseStudyCard[] }) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(studies.length / PAGE_SIZE);
  const paginated = studies.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className="px-4 md:px-[51px] lg:px-[56px] pb-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-16 md:gap-y-24">
        {paginated.map((study) => (
          <Link
            key={study._id}
            href={`/case-studies/${study.slug.current}`}
            className="flex flex-col group cursor-pointer"
          >
            {/* Cover image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#292929]/5">
              {study.coverImage?.asset?.url ? (
                <Image
                  src={urlFor(study.coverImage).width(900).height(675).url()}
                  alt={study.coverImage.alt ?? study.title}
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
                <span
                  className="text-[10px] uppercase tracking-widest text-[#C48C59]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {study.industry}
                </span>
              )}
              <h3
                className="text-[24px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-snug max-w-[90%]"
                style={{ fontFamily: "var(--font-instrument)" }}
              >
                {study.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

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
    </section>
  );
}

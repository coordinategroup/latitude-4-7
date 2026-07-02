"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

export type SpotlightArticle = {
  _id: string;
  category?: string;
  title: string;
  subheading?: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: { asset: { _id: string; url: string }; alt?: string };
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });
}

export default function NewsInsights({ articles }: { articles: SpotlightArticle[] }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!articles.length) return null;

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + articles.length) % articles.length);
  };

  const article = articles[current];

  return (
    <section className="bg-[#FAFAFA] py-16 md:py-32">
      <div className="px-4 md:px-[51px] lg:px-[56px]">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <span
            className="block text-[12px] tracking-[0.22em] text-[#0A0A0B] uppercase"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            Spotlight
          </span>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[#292929]/50" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              {String(current + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 flex items-center justify-center border border-[#292929]/20 hover:border-[#292929]/50 transition-colors"
              aria-label="Previous article"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2.5L4.5 7 9 11.5" stroke="#292929" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              className="w-9 h-9 flex items-center justify-center border border-[#292929]/20 hover:border-[#292929]/50 transition-colors"
              aria-label="Next article"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2.5L9.5 7 5 11.5" stroke="#292929" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={article._id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] border border-[#292929]/10 overflow-hidden"
          >
            {/* Left: text */}
            <div className="flex flex-col justify-between p-6 md:p-12 gap-8 md:gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  {article.category && (
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-[#292929]/50">
                      {article.category}
                    </span>
                  )}
                  <span className="text-[13px] text-[#292929]/50 ml-auto">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
                <h3 className="text-[22px] md:text-[28px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.2]">
                  {article.title}
                </h3>
                {article.subheading && (
                  <p className="text-[15px] text-[#292929]/60 leading-[1.6]">
                    {article.subheading}
                  </p>
                )}
              </div>
              <Link
                href={`/research-and-perspectives/${article.slug.current}`}
                className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300 w-fit"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Read more
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[240px] md:min-h-[380px] overflow-hidden">
              {article.mainImage?.asset?.url ? (
                <Image
                  src={urlFor(article.mainImage).width(900).height(700).url()}
                  alt={article.mainImage.alt ?? article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-[#292929]/5" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

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
    <section className="bg-[#08090A] py-24 border-t border-white/[0.06]">
      <div className="px-20 md:px-32">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
            Spotlight
          </span>
          {/* Nav arrows */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#8a8f98] font-mono">
              {String(current + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 flex items-center justify-center border border-white/[0.12] hover:border-white/30 transition-colors"
              aria-label="Previous article"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2.5L4.5 7 9 11.5" stroke="#F8FAFC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(1)}
              className="w-9 h-9 flex items-center justify-center border border-white/[0.12] hover:border-white/30 transition-colors"
              aria-label="Next article"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2.5L9.5 7 5 11.5" stroke="#F8FAFC" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
            className="grid grid-cols-1 md:grid-cols-[1fr_1fr] border border-white/[0.08] overflow-hidden"
          >
            {/* Left: text */}
            <div className="flex flex-col justify-between p-12 gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[14px] tracking-[0.22em] text-[#D4B996]/45 uppercase">
                    {String(current + 1).padStart(2, "0")}
                  </span>
                  {article.category && (
                    <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                      {article.category}
                    </span>
                  )}
                  <span className="text-[13px] text-[#8a8f98] ml-auto">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>
                <h3 className="text-[28px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                  {article.title}
                </h3>
                {article.subheading && (
                  <p className="text-[15px] text-[#8a8f98] leading-[1.8]">
                    {article.subheading}
                  </p>
                )}
              </div>
              <Link
                href={`/research/${article.slug.current}`}
                className="flex items-center gap-2 text-[15px] font-medium text-[#F8FAFC] hover:text-[#F8FAFC]/70 transition-colors w-fit"
              >
                Read article
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative min-h-[420px] overflow-hidden">
              {article.mainImage?.asset?.url ? (
                <Image
                  src={urlFor(article.mainImage).width(900).height(700).url()}
                  alt={article.mainImage.alt ?? article.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-white/[0.03]" />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

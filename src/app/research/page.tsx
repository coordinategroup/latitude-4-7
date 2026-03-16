import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearchGrid from "@/components/ResearchGrid";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Research & Perspectives | Latitude Four Seven",
  description:
    "Independent analysis, governance research, and perspectives on digital sovereignty, national infrastructure, and institutional transformation in the Seychelles and beyond.",
};

const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    type,
    title,
    slug,
    mainImage {
      asset->{ _id, url },
      alt
    }
  }
`;

export default async function ResearchPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <>
      <Header />
      <main className="bg-[#08090A] min-h-screen">

        {/* ── Page header ──────────────────────────────────────────────── */}
        <section className="px-20 md:px-32 pt-24 pb-16 border-b border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
                Research &amp; Perspectives
              </span>
              <h1 className="text-[40px] md:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.1] max-w-2xl">
                Analysing the digital future of small island states.
              </h1>
            </div>
            <p className="text-[15px] text-[#8a8f98] leading-[1.8] max-w-sm md:text-right">
              Independent research, governance perspectives, and strategic insights on national digital transformation.
            </p>
          </div>
        </section>

        {posts.length > 0 ? (
          <ResearchGrid posts={posts} />
        ) : (
          <section className="px-20 md:px-32 py-40 flex flex-col items-center gap-4 text-center">
            <span className="text-[12px] font-semibold uppercase tracking-widest text-[#8a8f98]">
              No articles yet
            </span>
            <p className="text-[16px] text-[#8a8f98] max-w-sm leading-relaxed">
              Research and perspectives will appear here once published in the Studio.
            </p>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}

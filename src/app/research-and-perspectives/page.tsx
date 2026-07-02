import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResearchGrid from "@/components/ResearchGrid";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Research & Perspectives | Souvren",
  description:
    "Independent analysis, governance research, and perspectives on digital sovereignty, national infrastructure, and institutional transformation in the Seychelles and beyond.",
};

const POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    type,
    title,
    subheading,
    slug,
    publishedAt,
    mainImage {
      asset->{ _id, url },
      alt
    }
  }
`;

export default async function ResearchPage() {
  const posts = await client.fetch(POSTS_QUERY);

  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <main className="bg-[#FAFAFA] min-h-screen">

        {/* ── Page header ──────────────────────────────────────────────── */}
        <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">

          <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

          <div className="flex flex-col gap-6 max-w-3xl pb-16">
            <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
              Analysing the digital future of small island states
            </h1>
            <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4]">
              Independent research, governance perspectives, and strategic insights on national digital transformation.
            </p>
          </div>
        </section>

        {posts.length > 0 ? (
          <ResearchGrid posts={posts} />
        ) : (
          <section className="px-4 md:px-[51px] lg:px-[56px] py-40 flex flex-col items-center gap-4 text-center">
            <span className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              No articles yet
            </span>
            <p className="text-[16px] text-[#0A0A0B]/55 max-w-sm leading-relaxed">
              Research and perspectives will appear here once published in the Studio.
            </p>
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}

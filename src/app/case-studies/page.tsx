import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import { client } from "@/sanity/lib/client";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Case Studies | Souvren",
  description:
    "A selection of engagements from across financial services, public sector, and hospitality — work completed before and during the founding of Souvren.",
};

const QUERY = `
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    industry,
    slug,
    publishedAt,
    coverImage {
      asset->{ _id, url },
      alt
    },
    clientLogo {
      asset->{ _id, url },
      alt
    }
  }
`;

type CaseStudyCard = {
  _id: string;
  title: string;
  industry: string;
  slug: { current: string };
  publishedAt?: string;
  coverImage?: { asset: { _id: string; url: string }; alt?: string };
  clientLogo?: { asset: { _id: string; url: string }; alt?: string };
};

export default async function CaseStudiesPage() {
  const studies = await client.fetch<CaseStudyCard[]>(QUERY);

  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">

            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

            <div className="flex flex-col gap-6 max-w-4xl pb-16">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
                Who we've worked with
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                A selection of engagements drawn from across our team, spanning financial services, public sector, and hospitality. Work that shaped our thinking long before Souvren existed.
              </p>
            </div>
          </section>

          {/* ── Grid ─────────────────────────────────────────────────────── */}
          {studies.length > 0 ? (
            <CaseStudiesGrid studies={studies} />
          ) : (
            <section className="px-4 md:px-[51px] lg:px-[56px] py-40 flex flex-col items-center gap-4 text-center">
              <span className="text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]/40" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                No case studies yet
              </span>
              <p className="text-[16px] text-[#0A0A0B]/55 max-w-sm leading-relaxed">
                Case studies will appear here once published in the Studio.
              </p>
            </section>
          )}

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

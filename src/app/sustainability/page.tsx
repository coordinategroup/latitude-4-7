import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import SecureBriefingButton from "@/components/SecureBriefingButton";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Sustainability | Souvren",
  description:
    "Making conscious decisions today so that the children of tomorrow inherit a digital world built with care.",
};

const pillars = [
  {
    index: "01",
    label: "Souvren Maturity",
    body: "Ensuring data stays locally resident to protect digital autonomy. Sovereignty is not a destination: it is a discipline maintained through every architectural decision.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v8c0 7.2 5.2 13.9 12 15.5C23.8 29.9 28 23.2 28 16V8L16 3z" stroke="#A28E73" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    index: "02",
    label: "Lean Performance",
    body: "Cutting software bloat to reduce costs and energy use. Intentional, minimal systems outperform bloated enterprise software on every measure that matters: speed, cost, and reliability.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="4,24 11,14 17,18 24,8 28,12" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="8" r="2" fill="#A28E73" fillOpacity="0.4" stroke="#A28E73" strokeWidth="1" />
      </svg>
    ),
  },
  {
    index: "03",
    label: "Strategic Agility",
    body: "Providing the decision-making framework for the Seychelles' digital evolution. Agility is not speed for its own sake: it is the capacity to change direction without losing ground.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#A28E73" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="2" fill="#A28E73" />
        <line x1="16" y1="5" x2="16" y2="9" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="23" x2="16" y2="27" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="5" y1="16" x2="9" y2="16" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="23" y1="16" x2="27" y2="16" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="16" x2="21" y2="11" stroke="#A28E73" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ARTICLE_QUERY = `
  *[_type == "post" && slug.current == "inheriting-the-future-why-sustainability-is-a-sovereign-duty"][0] {
    _id, type, title, slug,
    mainImage { asset->{ _id, url }, alt }
  }
`;

export default async function SustainabilityPage() {
  notFound();
  const article = await client.fetch(ARTICLE_QUERY);
  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">

            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />

            <div className="flex flex-col gap-6 max-w-4xl pb-16">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={{ fontFamily: "var(--font-instrument)" }}>
                Conscious digital leadership for the generations ahead
              </h1>
              <p className="text-[18px] lg:text-[22px] text-[#0A0A0B]/55 leading-[1.4] max-w-3xl">
                Making conscious decisions today so that the children of tomorrow inherit a digital world built with care.
              </p>
            </div>
          </section>

          {/* ── Hero image ─────────────────────────────────────────────── */}
          <div className="px-4 md:px-[51px] lg:px-[56px] pb-28">
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src="/images/Sustainability/sustainability_image.jpg"
                alt="Sustainability"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* ── The Philosophy ──────────────────────────────────────────── */}
          <div className="px-4 md:px-[51px] lg:px-[56px] pt-24 pb-56">
            <div className="max-w-3xl flex flex-col gap-12 ml-[50%] mr-4 md:mr-[102px] lg:mr-[112px]">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-snug lg:leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Sustainability is a byproduct of good engineering
              </h2>
              <div className="flex flex-col gap-6 text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55">
                <p className="m-0">We build lean, intentional systems that avoid the waste of traditional enterprise software, reducing both energy demand and operational costs. The most sustainable digital infrastructure is the infrastructure that was designed correctly from the outset: modular, minimal, and built to last beyond the contract that funded it.</p>
                <p className="m-0">For small island states like the Seychelles, this is not an abstract principle. Every unnecessary dependency, every oversized platform, and every piece of technical debt has a direct cost: in budget, in energy, and in the political capital required to undo it.</p>
              </div>
            </div>
          </div>

          {/* ── Featured Article ────────────────────────────────────────── */}
          {article && (
            <div className="px-4 md:px-[51px] lg:px-[56px] pb-28">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] tracking-[0.22em] uppercase text-[#0A0A0B]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Research &amp; Perspectives
                </span>
              </div>
              <Link
                href={`/research-and-perspectives/${article.slug.current}`}
                className="group relative flex overflow-hidden aspect-[21/7]"
              >
                {article.mainImage?.asset?.url && (
                  <Image
                    src={urlFor(article.mainImage).width(1600).url()}
                    alt={article.mainImage.alt ?? article.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-[#0A0A0B]/40" />
                <div className="relative z-10 flex flex-col justify-between p-8 md:p-12 w-full">
                  <span className="text-[10px] uppercase tracking-widest text-white" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{article.type}</span>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[24px] md:text-[32px] font-medium text-white tracking-[-0.02em] leading-snug max-w-2xl" style={{ fontFamily: "var(--font-instrument)" }}>{article.title}</h3>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-widest uppercase text-white/70" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      Read
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── Three Pillars ──────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] pb-28">
            <div className="flex flex-col divide-y divide-black/[0.08]">

              {/* Row 1: image left, text right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 py-16 md:py-24">
                <div className="relative aspect-[4/3] bg-[#E8E4DE] overflow-hidden md:pr-44">
                  <div className="absolute inset-0 bg-[#D8D3CB]" />
                </div>
                <div className="flex flex-col gap-8 pt-10 md:pt-0 md:pl-44 justify-center max-w-[800px]">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{pillars[0].index}</span>
                  <h3 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                    {pillars[0].label}
                  </h3>
                  <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 m-0">{pillars[0].body}</p>
                </div>
              </div>

              {/* Row 2: text left, image right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 py-16 md:py-24">
                <div className="flex flex-col gap-8 pb-10 md:pb-0 md:pr-44 justify-center order-2 md:order-1 max-w-[800px]">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{pillars[1].index}</span>
                  <h3 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                    {pillars[1].label}
                  </h3>
                  <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 m-0">{pillars[1].body}</p>
                </div>
                <div className="relative aspect-[4/3] bg-[#E8E4DE] overflow-hidden order-1 md:order-2 md:pl-44">
                  <div className="absolute inset-0 bg-[#CCC7BF]" />
                </div>
              </div>

              {/* Row 3: image left, text right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 py-16 md:py-24">
                <div className="relative aspect-[4/3] bg-[#E8E4DE] overflow-hidden md:pr-44">
                  <div className="absolute inset-0 bg-[#D4CEC6]" />
                </div>
                <div className="flex flex-col gap-8 pt-10 md:pt-0 md:pl-44 justify-center max-w-[800px]">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-[#C48C59]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{pillars[2].index}</span>
                  <h3 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                    {pillars[2].label}
                  </h3>
                  <p className="text-[16px] md:text-[18px] min-[1700px]:!text-[21px] leading-[1.4] text-[#0A0A0B]/55 m-0">{pillars[2].body}</p>
                </div>
              </div>

            </div>
          </section>


          {/* ── Closer ─────────────────────────────────────────────────── */}
          <section className="px-4 md:px-[51px] lg:px-[56px] py-32">
            <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
              <h2 className="m-0 font-medium text-[#292929] tracking-[-0.02em] leading-[1.2] text-[24px] md:text-[24px] lg:text-[26px] xl:text-[35px] min-[1700px]:!text-[40px]" style={{ fontFamily: "var(--font-instrument)" }}>
                Build something that lasts
              </h2>
              <p className="text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.6]">
                If your institution is building digital infrastructure that needs to outlast any single administration, we would like to talk.
              </p>
              <SecureBriefingButton
                className="inline-flex items-center h-9 px-8 rounded-full text-[11px] tracking-widest uppercase text-[#110F0F] border border-[#292929]/30 hover:border-[#292929]/60 transition-all duration-300"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Contact
              </SecureBriefingButton>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

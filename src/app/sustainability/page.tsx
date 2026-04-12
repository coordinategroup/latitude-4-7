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
  title: "Sustainability | Latitude Four Seven",
  description:
    "Engineering high-performance digital ecosystems that prioritise efficiency and long-term viability.",
};

const pillars = [
  {
    index: "01",
    label: "Sovereign Maturity",
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
  const article = await client.fetch(ARTICLE_QUERY);
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 pt-52 pb-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex flex-col gap-8 max-w-4xl">
                <span
                  className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  About Us
                </span>
                <h1 className="text-[26px] md:text-[42px] lg:text-[52px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.04]">
                  Strategic Sustainability & Operational Integrity
                </h1>
                <p className="text-[18px] md:text-[22px] text-[#C2C7D0] leading-[1.6] max-w-2xl">
                  Engineering high-performance digital ecosystems that prioritise efficiency and long-term viability.
                </p>
              </div>

              {/* Cover image */}
              <div className="mt-16 relative w-full aspect-[16/7] overflow-hidden">
                <Image
                  src="/images/Sustainability/sustainability_cover.jpg"
                  alt="Sustainability"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </section>

          {/* ── The Philosophy ──────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    The Philosophy
                  </span>
                  <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                    Sustainability as a product of good engineering
                  </h2>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-[18px] md:text-[20px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-[1.6]">
                    Sustainability is a byproduct of good engineering.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    We build lean, intentional systems that avoid the waste of traditional enterprise software, reducing both energy demand and operational costs. The most sustainable digital infrastructure is the infrastructure that was designed correctly from the outset: modular, minimal, and built to last beyond the contract that funded it.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    For small island states like the Seychelles, this is not an abstract principle. Every unnecessary dependency, every oversized platform, and every piece of technical debt has a direct cost: in budget, in energy, and in the political capital required to undo it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Featured Article ────────────────────────────────────────── */}
          {article && (
            <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
              <div className="max-w-[1400px] mx-auto">
                <span
                  className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block mb-10"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Research &amp; Perspectives
                </span>
                <Link
                  href={`/research-and-perspectives/${article.slug.current}`}
                  className="group flex flex-col md:flex-row gap-0 border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-300 overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-[40%] h-[240px] md:h-auto overflow-hidden bg-white/[0.03] shrink-0">
                    {article.mainImage?.asset?.url ? (
                      <Image
                        src={urlFor(article.mainImage).width(800).url()}
                        alt={article.mainImage.alt ?? article.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-white/[0.04]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-between gap-6 p-8 md:p-10 bg-[#0E1012] flex-1">
                    <div className="flex flex-col gap-4">
                      {article.type && (
                        <span
                          className="text-[11px] tracking-[0.22em] text-[#A28E73] uppercase"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {article.type}
                        </span>
                      )}
                      <h3 className="text-[22px] md:text-[26px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-snug">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-[#A28E73]">
                      <span className="text-[11px] tracking-widest uppercase" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        Read
                      </span>
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          )}

          {/* ── The Three Pillars ───────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex items-end justify-between pb-12 border-b border-white/[0.08] mb-12">
                <div>
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Three Pillars
                  </span>
                  <h2 className="text-[26px] md:text-[34px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    The foundations of sustainable digital governance
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
                {pillars.map((p) => (
                  <div
                    key={p.index}
                    className="group relative flex flex-col gap-6 p-10 bg-[#08090A] hover:bg-[#0D0E12] transition-colors duration-300"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#A28E73]/50 via-[#A28E73]/20 to-transparent" />
                    <div className="flex items-start justify-between">
                      {p.icon}
                      <span
                        className="text-[11px] tracking-[0.22em] text-[#A28E73] uppercase"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {p.index}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {p.label}
                    </h3>
                    <p className="text-[14px] text-[#C2C7D0] leading-[1.85]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The Entity ──────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    The Entity
                  </span>
                  <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                    Professional foundations for sovereign work
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[18px] md:text-[20px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-[1.6]">
                    Latitude 4.7 is a specialist arm of The Coordinate Group.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The Coordinate Group is the intended registered entity for our operations once active. This structure ensures that our strategic work is backed by a professional foundation of international compliance and risk management.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    Governments and institutions we work with can engage with confidence: the advice is specialist, the structure is sound, and the accountability is clear.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
              <div>
                <span
                  className="text-[11px] tracking-[0.22em] text-[#A28E73]/60 uppercase block mb-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Engage
                </span>
                <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                  Build something that lasts
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  If your institution is building digital infrastructure that needs to outlast any single administration, we would like to talk.
                </p>
                <SecureBriefingButton
                  className="shrink-0 px-8 py-3 text-[11px] tracking-widest text-[#A28E73] border border-[#A28E73]/50 hover:border-[#A28E73] hover:bg-[#A28E73]/10 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  INITIATE SECURE BRIEFING
                </SecureBriefingButton>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

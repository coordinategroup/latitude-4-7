import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";
import AccordionGroup from "@/components/AccordionGroup";

export const metadata: Metadata = {
  title: "Sovereign Architecture | Latitude Four Seven",
  description:
    "Engineering the independent digital foundation of the Republic of the Seychelles.",
};

const criteria = [
  {
    index: "01",
    title: "Control Without Dependency",
    body: "Sovereign architecture begins with a simple question: who holds the keys? Too many national digital systems run on infrastructure owned and controlled by external providers. We advise on structures where we hold administrative authority, data residency, and contractual leverage — not the vendor.",
  },
  {
    index: "02",
    title: "Resilience by Design",
    body: "Resilience is not a feature added after the architecture is drawn. It is the first design constraint. Systems built for the Seychelles must function under conditions of geopolitical pressure, supply chain disruption, and vendor withdrawal. We design for those conditions from the first line of the specification.",
  },
  {
    index: "03",
    title: "Interoperability Without Exposure",
    body: "A sovereign system that cannot connect to global financial infrastructure is an island, not an asset. We advise on architectures that participate fully in international data exchange and payment rails without creating backdoor dependencies or surrendering jurisdictional control over the data that flows through them.",
  },
];

const pillars = [
  { value: "Data Residency", label: "Wherever data is stored, its governance and control must remain with the Seychelles. Physical location is secondary to who holds authority over it. We advise on structures that make this enforceable, not just contractual." },
  { value: "Key Sovereignty", label: "We hold the access rights, not the vendor who built the system. If a relationship with a provider ends, full administrative control of every system must remain intact. That is a design requirement, not a negotiation point." },
  { value: "Audit Rights", label: "Full, unmediated access to system logs and infrastructure state at any time. A system that cannot be independently audited cannot be trusted, and trust is the foundation of any public digital service." },
  { value: "Vendor Neutrality", label: "Architecture decisions must be made in the national interest, not the vendor's. No single provider should hold structural leverage over critical national systems. We advise on procurement and design that keeps those options genuinely open." },
];

const related = [
  {
    index: "02",
    label: "Governance Frameworks",
    description: "The policy and oversight structures that make technology accountable.",
    href: "/governance-frameworks",
  },
  {
    index: "03",
    label: "Digital Leadership",
    description: "Building the local capability to lead transformation from within.",
    href: "/digital-leadership",
  },
];

export default function SovereignArchitecturePage() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen">

          {/* ── Hero ───────────────────────────────────────────────────── */}
          <section className="relative h-[85vh] min-h-[600px] flex items-end overflow-hidden">
            <Image
              src="/images/Who_We_Are/capabilities_image.png"
              alt="Sovereign Architecture"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-[#08090A]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090A]/60 to-transparent" />

            <div className="relative z-10 px-6 md:px-20 lg:px-32 pb-20 max-w-[1400px] mx-auto w-full">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase block mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Capability // 01
              </span>
              <h1 className="text-[40px] md:text-[68px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.05] max-w-4xl">
                Own the infrastructure.<br />Own the future
              </h1>
              <p className="mt-6 text-[17px] md:text-[20px] text-[#F8FAFC]/70 leading-[1.7] max-w-2xl">
                We advise the Seychelles on how to build digital systems it actually controls — not rents from providers who can reprice, restrict, or walk away.
              </p>
            </div>
          </section>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <section className="border-y border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
                {[
                  { stat: "68%", label: "Of developing nations critically dependent on a single foreign vendor" },
                  { stat: "$3.2M", label: "Average cost to exit a locked-in government system" },
                  { stat: "3x", label: "Longer to exit a dependency than to enter one" },
                  { stat: "40%", label: "Lower total cost of ownership with sovereign architecture" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 px-8 py-10 first:pl-0 last:pr-0">
                    <span className="text-[32px] font-medium text-[#D4B996] tracking-[-0.02em]">{item.stat}</span>
                    <span className="text-[13px] text-[#C2C7D0] leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The Challenge ───────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    The Challenge
                  </span>
                  <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                    Digital tenancy is not digital sovereignty
                  </h2>
                </div>
                <div className="relative bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col gap-6">
                  <p className="text-[20px] md:text-[22px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.5]">
                    Too much of the Seychelles' digital infrastructure is built on a spaghetti stack of dependencies, with data that technically belongs to a foreign provider. That is not sovereignty. That is a subscription.
                  </p>
                  <div className="h-px bg-white/[0.06]" />
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The risk is rarely the well-known platforms. It is the smaller, specialist vendors who sell bespoke systems, retain the proprietary architecture, and leave us with no realistic way to switch, audit, or self-serve. The contract ends and the keys go with them.
                  </p>
                  <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                    The Seychelles programme is being built differently. Before any procurement decision is made, we ask a simple question: if this relationship breaks down tomorrow, where do we go from here? That question changes what gets bought, and how.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Design Criteria ────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex items-end justify-between pb-12 border-b border-white/[0.08] mb-12">
                <div>
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Design Criteria
                  </span>
                  <h2 className="text-[26px] md:text-[34px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    Built to these standards, or not at all
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
                {criteria.map((p) => (
                  <div key={p.index} className="group relative flex flex-col gap-6 p-10 bg-[#08090A] hover:bg-[#0D0E12] transition-colors duration-300">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4B996]/50 via-[#D4B996]/20 to-transparent" />
                    <span
                      className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {p.index}
                    </span>
                    <h3 className="text-[19px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[14px] text-[#C2C7D0] leading-[1.85]">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Founder's Insight ───────────────────────────────────────── */}
          <section className="relative px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06] bg-[#08090A] overflow-hidden">
            {/* Corner brackets */}
            <div className="hidden md:block absolute top-8 left-8 w-8 h-8">
              <div className="absolute top-0 left-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute top-0 left-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute top-8 right-8 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute top-0 right-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute bottom-8 left-8 w-8 h-8">
              <div className="absolute bottom-0 left-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute bottom-0 left-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="hidden md:block absolute bottom-8 right-8 w-8 h-8">
              <div className="absolute bottom-0 right-0 w-full h-px bg-[#D4B996]/50" />
              <div className="absolute bottom-0 right-0 w-px h-full bg-[#D4B996]/50" />
            </div>
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-8">
              <p className="text-[22px] md:text-[32px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.4] max-w-3xl">
                "The question is never whether a country can afford to build its own future. It's whether they can afford not to. The cost of dependency compounds over time, and the moment you realise you are exposed is rarely the moment you still have leverage to change it."
              </p>
              <div className="h-px bg-white/[0.08] w-24" />
              <span
                className="text-[12px] text-[#D4B996]/60 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Luke Albest // Founder
              </span>
            </div>
          </section>

          {/* ── Minimum Standard ───────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
                <div className="md:sticky md:top-32">
                  <span
                    className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    Minimum Standard
                  </span>
                  <h2 className="text-[32px] md:text-[42px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.15]">
                    What every sovereign system must deliver
                  </h2>
                </div>
                <AccordionGroup items={pillars.map(p => ({ title: p.value, body: p.label }))} />
              </div>
            </div>
          </section>

          {/* ── Related Capabilities ────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24 border-b border-white/[0.06]">
            <div className="max-w-[1400px] mx-auto">
              <span
                className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-10"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Related Capabilities
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map((item) => (
                  <Link
                    key={item.index}
                    href={item.href}
                    className="group flex items-start justify-between p-10 border border-white/[0.08] hover:border-[#D4B996]/40 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex flex-col gap-3">
                      <span
                        className="text-[11px] tracking-[0.22em] text-[#D4B996] uppercase"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {item.index}
                      </span>
                      <h3 className="text-[22px] font-medium text-[#F8FAFC] tracking-[-0.01em] leading-snug group-hover:text-[#D4B996] transition-colors duration-300">
                        {item.label}
                      </h3>
                      <p className="text-[14px] text-[#C2C7D0] leading-[1.75]">
                        {item.description}
                      </p>
                    </div>
                    <svg className="shrink-0 mt-1 text-[#D4B996] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ────────────────────────────────────────────────────── */}
          <section className="px-6 md:px-20 lg:px-32 py-24">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[28%_1fr] gap-12 md:gap-20 items-start">
              <div>
                <span
                  className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-4"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Engage
                </span>
                <h2 className="text-[26px] md:text-[30px] font-medium text-[#F8FAFC] tracking-[-0.02em] leading-[1.2]">
                  Sovereignty is a design decision, not a procurement one
                </h2>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.08] p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <p className="text-[16px] text-[#C2C7D0] leading-[1.9]">
                  The best time to get this right is before a vendor is chosen. The second best time is now.
                </p>
                <a
                  href="mailto:contact@latitudefourseven.com"
                  className="shrink-0 px-8 py-3 text-[11px] tracking-widest text-[#D4B996] border border-[#D4B996]/50 hover:border-[#D4B996] hover:bg-[#D4B996]/10 transition-all duration-300 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  SECURE BRIEFING
                </a>
              </div>
            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

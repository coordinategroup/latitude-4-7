import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Accessibility Statement | Souvren",
  description: "Our commitment to digital accessibility and the standards we work to on this website.",
};

const mono = { fontFamily: "var(--font-jetbrains-mono)" };
const instrument = { fontFamily: "var(--font-instrument)" };

export default function Accessibility() {
  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <PageFadeIn>
        <main className="bg-[#FAFAFA] min-h-screen">

          <section className="px-4 md:px-[51px] lg:px-[56px] pt-8">
            <span className="block text-[12px] uppercase tracking-[0.22em] text-[#0A0A0B]" style={mono}>
              Legal
            </span>
            <div className="h-[120px] sm:h-[200px] lg:h-[300px]" />
            <div className="flex flex-col gap-4 max-w-4xl pb-16">
              <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-medium text-[#292929] tracking-[-0.02em] leading-[1.3]" style={instrument}>
                Accessibility Statement
              </h1>
            </div>
          </section>

          <section className="px-4 md:px-[51px] lg:px-[56px] pb-36">
            <div className="max-w-[720px] flex flex-col gap-12 text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.7]">

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>Our commitment</h2>
                <p>Souvren is committed to ensuring digital accessibility for everyone, regardless of ability or technology. We aim to make this website as accessible as possible by following the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>Measures we have taken</h2>
                <p className="mb-6">We have integrated the following practices into the site to ensure a usable experience for all visitors:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Clear hierarchy:</span> Logical heading structures to assist screen readers and assistive technologies.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Readability:</span> Font choices and colour contrasts that meet AA standards for legibility.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Keyboard navigation:</span> The site is fully navigable via keyboard for those who do not use a mouse.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Responsive design:</span> Consistent functionality and clarity across mobile, tablet, and desktop views.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>Current status</h2>
                <p>This website is designed to be compliant with WCAG 2.1 Level AA. We regularly review the site to ensure that new content remains accessible and that any issues are addressed promptly.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>Feedback &amp; contact</h2>
                <p className="mb-4">Accessibility is an ongoing process. If you find any part of this website difficult to use or encounter any barriers, please reach out to us via the contact details on the website.</p>
                <p>We take all feedback seriously and will work to resolve any issues as quickly as possible to ensure the site works for everyone.</p>
              </div>

            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Accessibility Statement | Latitude Four Seven",
  description: "Our commitment to digital accessibility and the standards we work to on this website.",
};

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function Accessibility() {
  return (
    <>
      <Header />
      <PageFadeIn>
        <main className="bg-[#08090A] min-h-screen px-6 md:px-20 lg:px-32 py-32">
          <div className="max-w-[720px] mx-auto">

            <span
              className="text-[11px] tracking-[0.22em] text-[#D4B996]/60 uppercase block mb-6"
              style={monoStyle}
            >
              Legal
            </span>
            <h1 className="text-[32px] md:text-[42px] font-medium text-[#F8FAFC] tracking-[-0.03em] leading-[1.1] mb-16">
              Accessibility Statement
            </h1>

            <div className="flex flex-col gap-12 text-[15px] text-[#C2C7D0] leading-[1.9]">

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">Our commitment</h2>
                <p>Latitude Four Seven is committed to ensuring digital accessibility for everyone, regardless of ability or technology. We aim to make this website as accessible as possible by following the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">Measures we have taken</h2>
                <p className="mb-4">We have integrated the following practices into the site to ensure a usable experience for all visitors:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li><span className="text-[#F8FAFC] font-medium">Clear hierarchy:</span> Logical heading structures to assist screen readers and assistive technologies.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Readability:</span> Font choices and colour contrasts that meet AA standards for legibility.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Keyboard navigation:</span> The site is fully navigable via keyboard for those who do not use a mouse.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Responsive design:</span> Consistent functionality and clarity across mobile, tablet, and desktop views.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">Current status</h2>
                <p>This website is designed to be compliant with WCAG 2.1 Level AA. We regularly review the site to ensure that new content remains accessible and that any issues are addressed promptly.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">Feedback &amp; contact</h2>
                <p className="mb-4">Accessibility is an ongoing process. If you find any part of this website difficult to use or encounter any barriers, please reach out to us via the contact details on the website.</p>
                <p>We take all feedback seriously and will work to resolve any issues as quickly as possible to ensure the site works for everyone.</p>
              </div>

            </div>
          </div>
        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Privacy Statement | Souvren",
  description: "How Souvren collects, uses, and protects your personal data.",
};

const mono = { fontFamily: "var(--font-jetbrains-mono)" };
const instrument = { fontFamily: "var(--font-instrument)" };

export default function Privacy() {
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
                Privacy Statement
              </h1>
            </div>
          </section>

          <section className="px-4 md:px-[51px] lg:px-[56px] pb-36">
            <div className="max-w-[720px] flex flex-col gap-12 text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.7]">

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>1. Introduction</h2>
                <p>This Privacy Statement explains how Souvren (referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the organisation&rdquo;) collects, uses, and protects your data. Souvren is a strategic advisory unit of the Coordinate Group, based in the Seychelles. We are committed to protecting your privacy and ensuring that any personal information we handle is done so in a transparent and secure manner.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>2. The data we collect</h2>
                <p className="mb-6">We only collect the minimum amount of information necessary to provide our services or respond to your enquiries. This typically includes:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Contact information:</span> Name, email address, and organisation when you reach out or submit a briefing request via the website.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Professional details:</span> Your role, department, or institution where relevant to the advisory engagement.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Technical data:</span> Basic analytics via cookies (if accepted) to help us understand how visitors use the site.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>3. How we use your information</h2>
                <p className="mb-6">Your data is used strictly for professional purposes, including:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Responding to your enquiries or briefing requests.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Managing our advisory engagements and delivering strategic governance services.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Complying with legal and regulatory obligations.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>4. Legal basis for processing</h2>
                <p className="mb-6">We process your data under the following legal bases:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Contractual necessity:</span> To carry out the work we have agreed upon.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Legitimate interests:</span> To respond to your messages and improve the website experience.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Legal obligation:</span> To meet regulatory or reporting requirements.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>5. International data transfers</h2>
                <p>Souvren is incorporated and operates in the Seychelles. When you interact with us, your data may be processed in the Seychelles. We ensure that appropriate safeguards are in place to maintain a level of protection consistent with UK and EU data protection standards.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>6. Data retention</h2>
                <p>We only keep your personal data for as long as is necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>7. Your rights</h2>
                <p className="mb-6">Depending on your location, you have rights regarding your personal data, including the right to:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Request access to the data we hold about you.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Request that we correct or delete your data.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Object to or restrict the processing of your data.</span></li>
                </ul>
                <p className="mt-6">To exercise any of these rights, please contact us via the website.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>8. Updates to this statement</h2>
                <p>We may update this Privacy Statement from time to time to reflect changes in our practice or for legal reasons. The latest version will always be available on this page.</p>
              </div>

            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

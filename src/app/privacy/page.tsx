import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Privacy Statement | Latitude Four Seven",
  description: "How Latitude Four Seven collects, uses, and protects your personal data.",
};

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function Privacy() {
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
              Privacy Statement
            </h1>

            <div className="flex flex-col gap-12 text-[15px] text-[#C2C7D0] leading-[1.9]">

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">1. Introduction</h2>
                <p>This Privacy Statement explains how Latitude Four Seven (referred to as &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;the organisation&rdquo;) collects, uses, and protects your data. Latitude Four Seven is a strategic advisory unit of the Coordinate Group, based in the Seychelles. We are committed to protecting your privacy and ensuring that any personal information we handle is done so in a transparent and secure manner.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">2. The data we collect</h2>
                <p className="mb-4">We only collect the minimum amount of information necessary to provide our services or respond to your enquiries. This typically includes:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li><span className="text-[#F8FAFC] font-medium">Contact information:</span> Name, email address, and organisation when you reach out or submit a briefing request via the website.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Professional details:</span> Your role, department, or institution where relevant to the advisory engagement.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Technical data:</span> Basic analytics via cookies (if accepted) to help us understand how visitors use the site.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">3. How we use your information</h2>
                <p className="mb-4">Your data is used strictly for professional purposes, including:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li>Responding to your enquiries or briefing requests.</li>
                  <li>Managing our advisory engagements and delivering strategic governance services.</li>
                  <li>Complying with legal and regulatory obligations.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">4. Legal basis for processing</h2>
                <p className="mb-4">We process your data under the following legal bases:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li><span className="text-[#F8FAFC] font-medium">Contractual necessity:</span> To carry out the work we have agreed upon.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Legitimate interests:</span> To respond to your messages and improve the website experience.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Legal obligation:</span> To meet regulatory or reporting requirements.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">5. International data transfers</h2>
                <p>Latitude Four Seven is incorporated and operates in the Seychelles. When you interact with us, your data may be processed in the Seychelles. We ensure that appropriate safeguards are in place to maintain a level of protection consistent with UK and EU data protection standards.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">6. Data retention</h2>
                <p>We only keep your personal data for as long as is necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">7. Your rights</h2>
                <p className="mb-4">Depending on your location, you have rights regarding your personal data, including the right to:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li>Request access to the data we hold about you.</li>
                  <li>Request that we correct or delete your data.</li>
                  <li>Object to or restrict the processing of your data.</li>
                </ul>
                <p className="mt-4">To exercise any of these rights, please contact us via the website.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">8. Updates to this statement</h2>
                <p>We may update this Privacy Statement from time to time to reflect changes in our practice or for legal reasons. The latest version will always be available on this page.</p>
              </div>

            </div>
          </div>
        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Terms & Conditions | Souvren",
  description: "Terms and conditions governing the use of the Souvren website and advisory services.",
};

const mono = { fontFamily: "var(--font-jetbrains-mono)" };
const instrument = { fontFamily: "var(--font-instrument)" };

export default function Terms() {
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
                Terms &amp; Conditions
              </h1>
            </div>
          </section>

          <section className="px-4 md:px-[51px] lg:px-[56px] pb-36">
            <div className="max-w-[720px] flex flex-col gap-12 text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.7]">

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>1. Introduction</h2>
                <p>These Terms &amp; Conditions govern the use of the Souvren website and the advisory services provided by Souvren, a strategic advisory unit of the Coordinate Group. By using this website or engaging our services, you agree to these terms in full.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>2. Nature of service</h2>
                <p>We provide strategic advisory services in digital governance, sovereign architecture, and digital leadership for governments and public institutions. All engagements are conducted on an institutional basis. Souvren operates as an independent advisory unit and not as an agent or employee of any client institution.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>3. Engagement structure</h2>
                <p>Our advisory services are provided through the Coordinate Group and are structured to reflect the institutional nature of our client relationships. Specific terms of engagement, scope, and deliverables for each advisory programme will be set out in a separate Statement of Work or engagement agreement agreed with the relevant institution.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>4. Intellectual property</h2>
                <p className="mb-6">Unless otherwise agreed in a specific Statement of Work:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>All pre-existing methodologies, frameworks, and tools developed by Souvren remain the property of the Coordinate Group.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span>Any specific work product created for a client during a paid engagement will be transferred to the client upon full settlement of the relevant fees.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>5. Professional liability</h2>
                <p>We provide expert advisory services based on extensive experience in digital governance and public sector transformation. Final decisions and implementation remain with the client institution. Souvren is not liable for any indirect or consequential loss arising from the use of our advice. Our total liability under any engagement is limited to the fees paid for that specific programme of work.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>6. Confidentiality</h2>
                <p>We respect the sensitive nature of government operations and national digital infrastructure. Any non-public information shared during an engagement will be kept strictly confidential and used only for the purpose of delivering the agreed advisory services.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>7. Website content</h2>
                <p>The content on this website is for general information only and does not constitute professional, legal, or financial advice. We reserve the right to update or change the content and these terms at any time without notice.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>8. Governing law</h2>
                <p>These terms and any engagement through Souvren are governed by the laws of the Seychelles. Any disputes will be subject to the exclusive jurisdiction of the courts of the Seychelles, unless otherwise agreed in writing for a specific engagement.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>9. Contact</h2>
                <p>If you have any questions regarding these terms, please contact us via the website.</p>
              </div>

            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Terms & Conditions | Latitude Four Seven",
  description: "Terms and conditions governing the use of the Latitude Four Seven website and advisory services.",
};

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function Terms() {
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
              Terms &amp; Conditions
            </h1>

            <div className="flex flex-col gap-12 text-[15px] text-[#C2C7D0] leading-[1.9]">

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">1. Introduction</h2>
                <p>These Terms &amp; Conditions govern the use of the Latitude Four Seven website and the advisory services provided by Latitude Four Seven, a strategic advisory unit of the Coordinate Group. By using this website or engaging our services, you agree to these terms in full.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">2. Nature of service</h2>
                <p>We provide strategic advisory services in digital governance, sovereign architecture, and digital leadership for governments and public institutions. All engagements are conducted on an institutional basis. Latitude Four Seven operates as an independent advisory unit and not as an agent or employee of any client institution.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">3. Engagement structure</h2>
                <p>Our advisory services are provided through the Coordinate Group and are structured to reflect the institutional nature of our client relationships. Specific terms of engagement, scope, and deliverables for each advisory programme will be set out in a separate Statement of Work or engagement agreement agreed with the relevant institution.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">4. Intellectual property</h2>
                <p className="mb-4">Unless otherwise agreed in a specific Statement of Work:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li>All pre-existing methodologies, frameworks, and tools developed by Latitude Four Seven remain the property of the Coordinate Group.</li>
                  <li>Any specific work product created for a client during a paid engagement will be transferred to the client upon full settlement of the relevant fees.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">5. Professional liability</h2>
                <p>We provide expert advisory services based on extensive experience in digital governance and public sector transformation. Final decisions and implementation remain with the client institution. Latitude Four Seven is not liable for any indirect or consequential loss arising from the use of our advice. Our total liability under any engagement is limited to the fees paid for that specific programme of work.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">6. Confidentiality</h2>
                <p>We respect the sensitive nature of government operations and national digital infrastructure. Any non-public information shared during an engagement will be kept strictly confidential and used only for the purpose of delivering the agreed advisory services.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">7. Website content</h2>
                <p>The content on this website is for general information only and does not constitute professional, legal, or financial advice. We reserve the right to update or change the content and these terms at any time without notice.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">8. Governing law</h2>
                <p>These terms and any engagement through Latitude Four Seven are governed by the laws of the Seychelles. Any disputes will be subject to the exclusive jurisdiction of the courts of the Seychelles, unless otherwise agreed in writing for a specific engagement.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">9. Contact</h2>
                <p>If you have any questions regarding these terms, please contact us via the website.</p>
              </div>

            </div>
          </div>
        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

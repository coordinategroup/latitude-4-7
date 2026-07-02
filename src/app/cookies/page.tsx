import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Cookie Policy | Souvren",
  description: "How Souvren uses cookies on this website.",
};

const mono = { fontFamily: "var(--font-jetbrains-mono)" };
const instrument = { fontFamily: "var(--font-instrument)" };

export default function CookiePolicy() {
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
                Cookie Policy
              </h1>
            </div>
          </section>

          <section className="px-4 md:px-[51px] lg:px-[56px] pb-36">
            <div className="max-w-[720px] flex flex-col gap-12 text-[16px] md:text-[18px] text-[#0A0A0B]/55 leading-[1.7]">

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>1. What are cookies?</h2>
                <p>Cookies are small text files placed on your device to help the website function correctly and to provide us with basic information on how the site is being used.</p>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>2. How we use cookies</h2>
                <p className="mb-6">We use cookies for the following purposes:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Essential cookies:</span> These are necessary for the website to run. They allow you to move around the site and use its features.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Performance &amp; analytics:</span> These help us understand how visitors interact with the site so we can improve the experience. This data is anonymised.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>3. Your choices</h2>
                <p className="mb-6">When you first visit the site, you will see a banner asking for your consent to use non-essential cookies. You can choose to:</p>
                <ul className="flex flex-col gap-3 list-none pl-0">
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Accept:</span> Enable all features and analytics.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Essential only:</span> Only essential cookies will be used.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-[11px] w-1 h-1 rounded-full bg-[#C48C59] shrink-0" /><span><span className="font-medium text-[#292929]">Settings:</span> Customise your preferences.</span></li>
                </ul>
              </div>

              <div>
                <h2 className="text-[18px] font-medium text-[#292929] tracking-[-0.01em] mb-4" style={instrument}>4. Managing cookies</h2>
                <p>You can change your preferences at any time by clicking the Cookie Settings link in the footer of this website. Additionally, most web browsers allow you to control cookies through their settings.</p>
              </div>

            </div>
          </section>

        </main>
      </PageFadeIn>
      <Footer />
    </div>
  );
}

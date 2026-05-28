import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageFadeIn from "@/components/PageFadeIn";

export const metadata: Metadata = {
  title: "Cookie Policy | Latitude Four Seven",
  description: "How Latitude Four Seven uses cookies on this website.",
};

const monoStyle = { fontFamily: "var(--font-jetbrains-mono)" };

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>

            <div className="flex flex-col gap-12 text-[15px] text-[#C2C7D0] leading-[1.9]">

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">1. What are cookies?</h2>
                <p>Cookies are small text files placed on your device to help the website function correctly and to provide us with basic information on how the site is being used.</p>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">2. How we use cookies</h2>
                <p className="mb-4">We use cookies for the following purposes:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li><span className="text-[#F8FAFC] font-medium">Essential cookies:</span> These are necessary for the website to run. They allow you to move around the site and use its features.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Performance &amp; analytics:</span> These help us understand how visitors interact with the site so we can improve the experience. This data is anonymised.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">3. Your choices</h2>
                <p className="mb-4">When you first visit the site, you will see a banner asking for your consent to use non-essential cookies. You can choose to:</p>
                <ul className="flex flex-col gap-2 pl-5 list-disc">
                  <li><span className="text-[#F8FAFC] font-medium">Accept:</span> Enable all features and analytics.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Essential only:</span> Only essential cookies will be used.</li>
                  <li><span className="text-[#F8FAFC] font-medium">Settings:</span> Customise your preferences.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[16px] font-medium text-[#F8FAFC] mb-3">4. Managing cookies</h2>
                <p>You can change your preferences at any time by clicking the Cookie Settings link in the footer of this website. Additionally, most web browsers allow you to control cookies through their settings.</p>
              </div>

            </div>
          </div>
        </main>
      </PageFadeIn>
      <Footer />
    </>
  );
}

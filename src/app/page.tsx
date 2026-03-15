import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrategicContext from "@/components/StrategicContext";
import NewsInsights from "@/components/NewsInsights";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Authority from "@/components/Authority";
import Clients from "@/components/Clients";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
<StrategicContext />
        <CaseStudies />
        <Experience />
        <NewsInsights />
        <Authority />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

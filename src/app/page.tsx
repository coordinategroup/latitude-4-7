import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrategicContext from "@/components/StrategicContext";
import Frameworks from "@/components/Frameworks";
import CaseStudies from "@/components/CaseStudies";
import HowWeWork from "@/components/HowWeWork";
import ResearchRow from "@/components/ResearchRow";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <div className="mx-auto w-full max-w-[1932px]">
      <Header />
      <Hero />
      <main>
        <StrategicContext />
        <Frameworks />
        <ResearchRow />
        <HowWeWork />
        <CaseStudies />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StrategicContext from "@/components/StrategicContext";
import NewsInsights from "@/components/NewsInsights";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Authority from "@/components/Authority";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import type { SpotlightArticle } from "@/components/NewsInsights";

const SPOTLIGHT_QUERY = `
  *[_type == "post" && type == "Spotlight"] | order(publishedAt desc) [0..3] {
    _id,
    category,
    title,
    subheading,
    slug,
    publishedAt,
    mainImage {
      asset->{ _id, url },
      alt
    }
  }
`;

export default async function Home() {
  const spotlightArticles: SpotlightArticle[] = await client.fetch(SPOTLIGHT_QUERY);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <StrategicContext />
        <CaseStudies />
        <Experience />
        <NewsInsights articles={spotlightArticles} />
        <Authority />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

import { Hero } from "@/components/Hero";
import Layout from "@/components/Layout";
import  BioSection  from "@/components/sections/BioSection"
import  OfferSection  from "@/components/sections/OfferSection"


export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <BioSection />
      <OfferSection />
      {/* Additional content can go here */}
    </Layout>
  );
}

import { Hero } from "@/components/Hero";
// import Layout from "@/components/Layout";
import BioSection from "@/components/sections/BioSection";
import OfferSection from "@/components/sections/OfferSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";

export default function HomePage() {
  return (
    // <Layout>
    <>
    <Hero />
      <section className="bg-gradient-to-b from-white via-indigo-50 to-indigo-100 text-foreground">
        <BioSection />
        <TestimonialSection />
      </section>
      <OfferSection />
    </>
    // </Layout>
  );
}

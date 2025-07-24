import { Hero } from "@/components/Hero";
import Layout from "@/components/Layout";
import  Section1  from "@/components/sections/Section-1"
import  Section2  from "@/components/sections/Section-2"
import  Section3  from "@/components/sections/Section-3"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      {/* Additional content can go here */}
    </Layout>
  );
}

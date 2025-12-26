import Hero from "@/components/Hero";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import MathTuitionProgrammes from "@/components/MathTuitionProgrammes";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";
import FAQs from "@/components/FAQs";
import { faqsData } from "@/data/faqsData";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatSetsUsApart />
      <MathTuitionProgrammes />
      <Testimonials />
      <GoogleReviews />
    </main>
  );
}

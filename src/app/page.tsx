import Hero from "@/components/Hero";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import MathTuitionProgrammes from "@/components/MathTuitionProgrammes";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";

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

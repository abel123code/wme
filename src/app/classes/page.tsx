// Server Component: Renders static content on the server
// This reduces initial JS bundle size and improves performance
import PageHero from "@/components/PageHero";
import ClassesSection from "./ClassesSection";

export default function ClassesPage() {
  return (
    <main className="relative bg-white">
      <PageHero 
        title="Our Science & Math Classes" 
        image="/classes-hero.JPG"
        imageAlt="Classes hero background"
        imagePosition="classes-hero-position"
      />

      {/* Client Component handles all interactive state and modal rendering */}
      <ClassesSection />
    </main>
  );
}

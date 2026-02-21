import FAQs from "@/components/FAQs";
import PageHero from "@/components/PageHero";
import { faqsData } from "@/data/faqsData";

// FAQs data extracted to separate file for better dev compile time
export default function FAQsPage() {
  return (
    <main className="relative bg-white">
      <PageHero 
        title="FAQs"
        image="/hero-image-2.avif"
        imageAlt="FAQs hero background"
        subtitle="Find answers to common questions about our classes and programmes."
      />
      <FAQs faqs={faqsData} />
    </main>
  );
}

import FAQs from "@/components/FAQs";
import PageHero from "@/components/PageHero";
import { faqsData } from "@/data/faqsData";

// FAQs data extracted to separate file for better dev compile time
export default function FAQsPage() {
  return (
    <main className="relative bg-white">
      <PageHero 
        image="/faq-banner.jpg"
        imageAlt="FAQs banner"
        showOverlay={false}
      />
      <FAQs faqs={faqsData} />
    </main>
  );
}

/**
 * Reviews Page
 * 
 * Displays all Google Business Profile reviews.
 * 
 * SETUP:
 * ======
 * 1. Visit /api/gbp/connect to start OAuth flow
 * 2. Complete Google consent
 * 3. Copy refresh_token to .env.local as GOOGLE_REFRESH_TOKEN
 * 4. Restart dev server
 * 5. Visit /api/gbp/sync to fetch and cache reviews
 * 6. Visit /reviews to see this page
 */

import ReviewsSection from "@/components/ReviewsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Reviews | Wondrous Mind Education Centre",
  description: "See what our students and parents say about Wondrous Mind Education Centre",
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <PageHero 
          title="Our Reviews" 
          image="/team-picture.JPG"
          imageAlt="Reviews hero background"
          subtitle="See what students and parents have to say about their experience at Wondrous Mind Education Centre"
        />

        {/* Reviews Section */}
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}


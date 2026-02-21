import EnrollBanner from "@/components/EnrollBanner";
import PageHero from "@/components/PageHero";
import TestimonialGallery from "@/components/TestimonialGallery";
import { testimonialStats } from "@/data/testimonialsData";

export default function TestimonialsPage() {
  return (
    <main className="relative bg-white">
      <PageHero
        title="Testimonials"
        subtitle="Families share how our classes build confidence, clarity, and results."
        image="/hero-image-2.avif"
        imageAlt="Happy students in class"
      />

      <section className="py-16 bg-[#F6F8FC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-[#012DE8]">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[#334155]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <TestimonialGallery />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <EnrollBanner />
      </section>
    </main>
  );
}

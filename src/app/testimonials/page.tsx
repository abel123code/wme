import EnrollBanner from "@/components/EnrollBanner";
import PageHero from "@/components/PageHero";
import { testimonialStats, testimonials } from "@/data/testimonialsData";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#012DE8]">
                      {testimonial.name}
                    </p>
                    <span className="text-xs font-semibold text-[#64748B]">
                      {testimonial.role}
                    </span>
                  </div>
                  <p className="mt-4 text-[#334155] leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#E83789]">
                    {testimonial.result}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <EnrollBanner />
      </section>
    </main>
  );
}

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { timelineItems } from "@/data/ourStoryData";

export default function OurStoryPage() {
  return (
    <main className="relative bg-white scroll-smooth">
      <PageHero
        title="Our Story"
        subtitle="From a single classroom to a thriving learning community, each chapter reflects our commitment to students."
        image="/hero-image-2.avif"
        imageAlt="Students and teachers collaborating"
      />

      <section className="py-16 bg-[#F6F8FC]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div
                className="absolute left-4 top-0 h-full w-1 bg-[#E8ECFF] md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              />

              <ol className="space-y-12">
                {timelineItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <li
                      key={`${item.year}-${item.title}`}
                      className="relative md:grid md:grid-cols-2 md:gap-x-16"
                    >
                      <span
                        className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full bg-[#012DE8] ring-4 ring-white md:left-1/2"
                        aria-hidden="true"
                      />

                      <ScrollReveal
                        delay={index * 120}
                        className={`pl-12 md:pl-0 ${
                          isLeft
                            ? "md:col-start-1 md:pr-12 md:text-right"
                            : "md:col-start-2 md:pl-12"
                        }`}
                      >
                        <article className="bg-white rounded-2xl border-l-4 border-l-[#012DE8] border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow">
                          {/* Large Year Display + Tag (stacked, same start) */}
                          <div
                            className={`flex flex-col items-start gap-2 ${
                              isLeft ? "md:items-end" : ""
                            }`}
                          >
                            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#012DE8] to-[#00D6FF] bg-clip-text text-transparent">
                              <time>{item.year}</time>
                            </p>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E8ECFF] text-[#012DE8]">
                              {item.tag}
                            </span>
                          </div>

                          {/* Decorative underline */}
                          <div
                            className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#012DE8] to-[#00D6FF] ${
                              isLeft ? "md:ml-auto" : ""
                            }`}
                          />

                          <h3
                            className={`mt-4 text-xl font-bold text-gray-900 ${
                              isLeft ? "md:text-right" : ""
                            }`}
                          >
                            {item.title}
                          </h3>

                          <p
                            className={`mt-3 text-[#334155] leading-relaxed ${
                              isLeft ? "md:text-right" : ""
                            }`}
                          >
                            {item.description}
                          </p>

                          {/* Stats/Highlights Row */}
                          <div
                            className={`mt-6 flex flex-wrap gap-3 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            {item.highlights.map((highlight) => (
                              <div
                                key={highlight.label}
                                className="bg-[#E8ECFF] rounded-xl px-4 py-3 text-center min-w-[80px]"
                              >
                                <p className="text-lg font-bold text-[#012DE8]">
                                  {highlight.value}
                                </p>
                                <p className="text-xs text-[#64748B] mt-0.5">
                                  {highlight.label}
                                </p>
                              </div>
                            ))}
                          </div>
                        </article>
                      </ScrollReveal>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

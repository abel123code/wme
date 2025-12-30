import Image from "next/image";
import PageHero from "@/components/PageHero";
import { timelineItems } from "@/data/ourStoryData";

export default function OurStoryPage() {
  return (
    <main className="relative bg-white scroll-smooth">
      <PageHero
        title="Our Story"
        subtitle="From a single classroom to a thriving learning community, each chapter reflects our commitment to students."
        image="/team-picture.JPG"
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

                      <div
                        className={`pl-12 md:pl-0 ${
                          isLeft
                            ? "md:col-start-1 md:pr-12 md:text-right"
                            : "md:col-start-2 md:pl-12"
                        }`}
                      >
                        <article className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div
                            className={`flex flex-wrap items-center gap-3 ${
                              isLeft ? "md:justify-end" : ""
                            }`}
                          >
                            <p className="text-2xl font-bold text-[#012DE8]">
                              <time>{item.year}</time>
                            </p>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E8ECFF] text-[#012DE8]">
                              {item.tag}
                            </span>
                          </div>

                          <h3
                            className={`mt-3 text-xl font-bold text-gray-900 ${
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

                          <div className="mt-5">
                            <div className="relative h-40 w-full overflow-hidden rounded-xl bg-[#E8ECFF]">
                              <Image
                                src={item.image}
                                alt={`${item.title} milestone`}
                                fill
                                sizes="(max-width: 768px) 100vw, 520px"
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </article>
                      </div>
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

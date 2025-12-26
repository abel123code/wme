"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { FAQItemSkeleton } from "./Skeletons";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface FAQsProps {
  faqs: FAQItem[];
  loading?: boolean;
}

export default function FAQs({ faqs, loading = false }: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <FAQItemSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 rounded-lg transition-colors flex items-center justify-between ${
                  openIndex === index
                    ? "bg-[#012DE8] text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                <span className="font-bold text-base sm:text-lg pr-4">
                  {faq.question}
                </span>
                {/* Icon */}
                <div className="shrink-0">
                  {openIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="bg-white p-5 border-l-4 border-[#012DE8]">
                  <div className="text-gray-700 leading-relaxed">
                    {typeof faq.answer === "string" ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                </div>
              )}
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}


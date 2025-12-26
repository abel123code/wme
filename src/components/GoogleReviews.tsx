"use client";

import Link from "next/link";
import Image from "next/image";
import { reviews } from "@/data/reviewsData";
import type { Review } from "@/data/reviewsData";

// Google Reviews URL
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Wondrous+Mind+Education+Centre+Reviews";

// Reviews data extracted to separate file for better dev compile time

// Convert star rating string to number
function getStarCount(rating: string): number {
  const ratingMap: { [key: string]: number } = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
  };
  return ratingMap[rating] || 5;
}

export default function GoogleReviews() {
  // Take first 10 reviews for the carousel
  const displayReviews = reviews.slice(0, 10);

  return (
    <section className="relative py-14 bg-[#E8ECFF] overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Google Reviews
        </h2>

        {/* Reviews Container - Auto-scrolling */}
        <div className="relative overflow-hidden pb-6">
          <div className="flex gap-6 animate-scroll-right" style={{ width: 'max-content' }}>
            {[...displayReviews, ...displayReviews].map((review, index) => (
              <a
                key={`${review.reviewId}-${index}`}
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer block"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    {review.reviewer.profilePhotoUrl ? (
                      <Image
                        src={review.reviewer.profilePhotoUrl}
                        alt={review.reviewer.displayName}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#012DE8] to-[#E83789] flex items-center justify-center text-white font-bold">
                        {review.reviewer.displayName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-[#334155]">{review.reviewer.displayName}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(getStarCount(review.starRating))].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 fill-yellow-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Google Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-[#334155] text-sm leading-relaxed line-clamp-4">
                  {review.comment}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-block bg-[#012DE8] hover:bg-[#021FB8] text-white font-semibold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-md"
          >
            View More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
}

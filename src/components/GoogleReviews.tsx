"use client";

import Link from "next/link";

// Google Reviews URL
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Wondrous+Mind+Education+Centre+Reviews";

interface Review {
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string | null;
  };
  starRating: string;
  comment: string;
  createTime?: string;
  updateTime?: string;
}

// Hardcoded reviews
const reviews: Review[] = [
  {
    reviewId: "1",
    reviewer: { displayName: "Miki Teang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "I highly recommend Ms. Nicky for science tuition. She has been incredibly dedicated and effective in helping my child improve. My child’s performance improved dramatically, going from AL4 to AL1 under her guidance. Ms. Nicky goes above and beyond by offering extra lessons on Sundays to address any weak areas, all without any additional charge.",
  },
  {
    reviewId: "2",
    reviewer: { displayName: "wen wen", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is very responsible and familiar with the MOE curriculum and PSLE exam format. She can grasp the key points quickly and guide students effectively.",
  },
  {
    reviewId: "3",
    reviewer: { displayName: "ZY", profilePhotoUrl: null },
    starRating: "FIVE",
    comment: "I love it cuz why not.",
  },
  {
    reviewId: "4",
    reviewer: { displayName: "Abby Oh Musical Journey", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A small but great tuition centre. The teachers here will put in extra hours before exams to ensure the students are ready.",
  },
  {
    reviewId: "5",
    reviewer: { displayName: "Ken Koh", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My boy started in March with Wondrous Mind. He went from AL6 to AL1 for maths and Science for PSLE. The teachers are very good!",
  },
  {
    reviewId: "6",
    reviewer: { displayName: "Leanne Yong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Wondrous Mind Education Centre has been a wonderful enrichment centre for my two primary school boys. The teachers are dedicated and supportive.",
  },
  {
    reviewId: "7",
    reviewer: { displayName: "Madeline Koh", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "It is the BEST tuition centre we have ever come across. We are very grateful to Teacher Nicky and Caroline for their dedication and guidance.",
  },
  {
    reviewId: "8",
    reviewer: { displayName: "teresa leong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Jeslyn really goes the extra mile, especially during O-Level exam periods, with extensive lessons and strong support.",
  },
  {
    reviewId: "9",
    reviewer: { displayName: "sujuan liu", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "我的孩子从5年前就跟着Miss Nicky开始补课，受益良多。两位老师经验丰富、细心周到，孩子在O Level化学取得了A1，真心推荐。",
  },
  {
    reviewId: "10",
    reviewer: { displayName: "D L", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is an excellent, effective and extremely dedicated teacher who truly cares about her students.",
  },
  {
    reviewId: "11",
    reviewer: { displayName: "c cl", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A big shout out to Miss Pearly and Miss Nicky for their dedication and guidance in helping my girl achieve AL1 in science.",
  },
  {
    reviewId: "12",
    reviewer: { displayName: "y24K3nz", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Wondrous Mind is fun and helps you do better. I went from failing to straight As. It’s like Harry Potter with Asian teaching.",
  },
  {
    reviewId: "13",
    reviewer: { displayName: "Jasmyn Lee", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Very good tuition centre. Miss Jeslyn and Miss Carol are super kind, understanding and patient. Highly recommend!",
  },
  {
    reviewId: "14",
    reviewer: { displayName: "claudia Ang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Great tuition centre with kind and understanding teachers that teach very well.",
  },
  {
    reviewId: "15",
    reviewer: { displayName: "Kaeden Chong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "I've been with this tuition centre for 4 years. Very promising and delivers good results. Teachers are excellent.",
  },
  {
    reviewId: "16",
    reviewer: { displayName: "Fat Bear", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Sent my girls for primary school science tuition and they achieved beyond expectations for PSLE grading.",
  },
  {
    reviewId: "17",
    reviewer: { displayName: "Emelda Pay Qian Xi (Chijstcs)", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My experience here for 2 years was very memorable. I joined with weak grades and improved significantly over time.",
  },
  {
    reviewId: "18",
    reviewer: { displayName: "Ivy Ng", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My family is really thankful that our paths crossed with Wondrous Mind and Teacher Nicky. She made science interesting and effective.",
  },
  {
    reviewId: "19",
    reviewer: { displayName: "Raine Chong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "My son’s confidence in Math and Science shot up after attending Ms Nicky’s lessons. Very thankful for the guidance.",
  },
  {
    reviewId: "20",
    reviewer: { displayName: "Warren Ng", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "A big thank you to Wondrous Mind and Teacher Nicky for helping my daughter achieve AL1 in her PSLE.",
  },
  {
    reviewId: "21",
    reviewer: { displayName: "Tommy Yee", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Both Teacher Carol and Teacher Nicky are great teachers. They showed patience and provided dedicated guidance.",
  },
  {
    reviewId: "22",
    reviewer: { displayName: "Juliet Ang", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Teacher Nicky is just amazing. My son joined only 3.5 months before PSLE and enjoyed her lessons very much.",
  },
  {
    reviewId: "23",
    reviewer: { displayName: "Jennifer Khong", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "This is an amazing tuition centre. Miss Carol brought my daughter from AL6 to AL1 within 6 months. Very grateful.",
  },
  {
    reviewId: "24",
    reviewer: { displayName: "Rajavelu Govindarajan", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Dedicated teachers who genuinely care about student outcomes and progress.",
  },
  {
    reviewId: "25",
    reviewer: { displayName: "Sophie Tian", profilePhotoUrl: null },
    starRating: "FIVE",
    comment:
      "Da best science tuition. Helped me improve my science a lot!",
  },
];


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
                      <img
                        src={review.reviewer.profilePhotoUrl}
                        alt={review.reviewer.displayName}
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

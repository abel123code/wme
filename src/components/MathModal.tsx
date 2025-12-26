"use client";

import { useEffect } from "react";
import EnrollBanner from "./EnrollBanner";

interface MathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MathModal({ isOpen, onClose }: MathModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4">
      <div className="relative w-full max-w-6xl my-8 bg-[var(--accent-pink-light)] rounded-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Math Header */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#012DE8] mb-2 sm:mb-4">
              Primary 3 - 6
            </h3>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E83789]">
              MATH
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pb-8">
          {/* Three Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Interest Development */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 text-[#E83789]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="20" y="15" width="60" height="70" rx="5" />
                  <line x1="30" y1="30" x2="70" y2="30" />
                  <line x1="30" y1="40" x2="70" y2="40" />
                  <line x1="30" y1="50" x2="70" y2="50" />
                  <line x1="30" y1="60" x2="70" y2="60" />
                  <line x1="30" y1="70" x2="70" y2="70" />
                  <circle cx="35" cy="30" r="2" fill="currentColor" />
                  <circle cx="35" cy="40" r="2" fill="currentColor" />
                  <circle cx="35" cy="50" r="2" fill="currentColor" />
                  <circle cx="35" cy="60" r="2" fill="currentColor" />
                  <circle cx="35" cy="70" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#012DE8]">
                Interest Development
              </h3>
              <p className="text-[#334155] leading-relaxed">
                We tend to take interest and enjoyment in learning mathematics as we believe that your child learns best when they are enjoying the lesson. We include puzzles and games in our lessons. We tend to ask a lot of questions to sharpen your child's mathematical thinking and develop critical thinking in your child.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 text-[#E83789]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="20" y="20" width="60" height="60" rx="3" />
                  <line x1="20" y1="50" x2="80" y2="50" />
                  <line x1="50" y1="20" x2="50" y2="80" />
                  <text x="35" y="40" fontSize="20" fill="currentColor" strokeWidth="0">2×2</text>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#012DE8]">
                Problem Solving
              </h3>
              <p className="text-[#334155] leading-relaxed">
                We target on problem solving using simpler and easy to understand methods. We also believe that every child can learn! We will encourage every child to try more than one method and use the method that suits their understanding. We want to make sure that we understand your child's strengths and weaknesses, and what is working for your child and what is not.
              </p>
            </div>

            {/* Up-to-date Syllabus */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 text-[#E83789]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 30 35 Q 35 25 50 28 Q 65 25 70 35 Q 68 50 50 55 Q 32 50 30 35 Z" />
                  <line x1="20" y1="65" x2="80" y2="65" strokeWidth="3" />
                  <line x1="20" y1="75" x2="80" y2="75" strokeWidth="3" />
                  <line x1="20" y1="85" x2="80" y2="85" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#012DE8]">
                Up-to-date Syllabus
              </h3>
              <p className="text-[#334155] leading-relaxed">
                We are constantly updating ourselves with the latest MOE syllabus. We have invested a lot of time to craft our materials to develop confidence of using mathematics and critical thinking towards mathematics for your child. Our materials are also crafted to fully prepare your child for examinations. Regular checkpoints are assigned to assess your child's understanding of the mathematics concept. In any case that we feel that your child needs help, we will be here to help.
              </p>
            </div>
          </div>

          {/* Enroll Banner */}
          <EnrollBanner />
        </div>
      </div>
    </div>
  );
}

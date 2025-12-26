"use client";

import { useEffect } from "react";
import Image from "next/image";
import EnrollBanner from "./EnrollBanner";

interface SecMathModalProps {
  isOpen: boolean;
  onClose: () => void;
  image1?: string;
  image2?: string;
  image3?: string;
}

// Sections data moved outside component to prevent recreation on every render
const sections = [
  {
    title: "Proactive Curriculum & Headstart",
    content:
      "Our teachers guide students through topics ahead of school lessons, helping them gain early familiarity with key concepts and build confidence in class.",
  },
  {
    title: "Targeted Practice & Problem-Solving",
    content:
      "Guided practice, worksheets, and homework reinforce learning while developing analytical skills and strategies for complex questions.",
  },
  {
    title: "Exam Preparation & Confidence",
    content:
      "As assessments approach, focused mock exams and past-year papers build time management, exam stamina, and confidence to perform under pressure.",
  },
];

export default function SecMathModal({ 
  isOpen, 
  onClose,
  image1 = 's1-4_Math/sec1-4math1.JPG',
  image2 = 's1-4_Math/sec1-4math2.JPG',
  image3 = 's1-4_Math/sec1-4math3.JPG'
}: SecMathModalProps) {
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

        {/* Header */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#012DE8] mb-2 sm:mb-4">
              Sec 1 - 4
            </h3>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E83789]">
              MATH
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#012DE8] mt-2">
              A Math / E Math
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pb-8">
          {/* Three Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => {
              const images = [image1, image2, image3];
              const imageSrc = images[index];
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md flex flex-col"
                >
                  {/* Title - fixed height for alignment */}
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-4 min-h-[56px] flex items-center justify-center">
                    {section.title}
                  </h4>

                  {/* Image - fixed height */}
                  <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden relative shrink-0">
                    {imageSrc ? (
                      <Image
                        src={`/${imageSrc}`}
                        alt={section.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-300">
                        <span className="text-gray-400 text-sm">Image placeholder</span>
                      </div>
                    )}
                  </div>

                  {/* Content - flex-grow to fill remaining space */}
                  <p className="text-[var(--text-body)] text-sm md:text-base leading-relaxed grow">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Enroll Banner */}
          <EnrollBanner />
        </div>
      </div>
    </div>
  );
}


"use client";

import { useEffect } from "react";
import EnrollBanner from "./EnrollBanner";

interface SecScienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    title: "Pre-Covered Notes & Worksheets",
    content:
      "We introduce topics ahead of school using our in-house notes, then assign worksheets with commonly tested questions to reinforce understanding and build problem-solving skills.",
  },
  {
    title: "Homework & Checkpoint Tests",
    content:
      "Homework is assigned each lesson and reviewed next class to ensure mastery. Topic-end checkpoints test comprehension and exam readiness.",
  },
  {
    title: "Revisions & Exam Readiness",
    content:
      "Dedicated revision sessions consolidate knowledge, strengthen weak areas, and build confidence, ensuring students are fully prepared for exams.",
  },
];

export default function SecScienceModal({ isOpen, onClose }: SecScienceModalProps) {
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
      <div className="relative w-full max-w-6xl my-8 bg-[var(--accent-cyan-light)] rounded-3xl shadow-2xl">
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
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#00D6FF]">
              SCIENCE
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#012DE8] mt-2">
              Pure Chem / Combined Chem
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pb-8">
          {/* Three Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md flex flex-col"
              >
                {/* Title - fixed height for alignment */}
                <h4 className="text-lg md:text-xl font-bold text-gray-900 text-center mb-4 min-h-[56px] flex items-center justify-center">
                  {section.title}
                </h4>

                {/* Image Placeholder - fixed height */}
                <div className="w-full h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 flex-shrink-0">
                  <span className="text-gray-400 text-sm">Image placeholder</span>
                </div>

                {/* Content - flex-grow to fill remaining space */}
                <p className="text-[var(--text-body)] text-sm md:text-base leading-relaxed flex-grow">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Enroll Banner */}
          <EnrollBanner />
        </div>
      </div>
    </div>
  );
}


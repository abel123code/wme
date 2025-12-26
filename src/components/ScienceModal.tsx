"use client";

import { useEffect } from "react";
import Image from "next/image";
import EnrollBanner from "./EnrollBanner";

interface ScienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScienceModal({ isOpen, onClose }: ScienceModalProps) {
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

        {/* Science Header */}
        <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#012DE8] mb-2 sm:mb-4">
              Primary 3 - 6
            </h3>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#00D6FF]">
              SCIENCE
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 pb-8">
          {/* Hands on experiments section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#012DE8]">
              Hands on experiments
            </h2>
            <p className="text-center text-[#334155] max-w-4xl mx-auto mb-8 leading-relaxed">
              To ignite children's interest in learning, we engage them with hands-on activities which help them to understand the potential gaps between theory and practice bringing questions to life. It also helps in developing students' experimental skills and techniques at identifying aims, coming up with conclusions and understanding of science data.
            </p>

            {/* Experiment Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/experiment-1.jpg"
                  alt="Students doing experiments"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/experiment-2.jpg"
                  alt="Students doing experiments"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/experiment-3.jpg"
                  alt="Students doing experiments"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Method and Syllabus Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* The Proven Method */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 text-[#00D6FF]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="50" cy="30" r="8" />
                  <ellipse cx="50" cy="70" rx="25" ry="15" />
                  <line x1="50" y1="38" x2="50" y2="55" />
                  <path d="M 35 55 Q 50 45 65 55" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#012DE8]">
                The Proven Method (C.E.R)
              </h3>
              <p className="text-[#334155] leading-relaxed">
                By using mnemonics and acronyms, we make remembering science concepts and keywords easier! With our proven method of answering science open-ended questions known as C.E.R (Claim, Evidence and Reasoning), students can achieve a more complete answers helping them score in open-ended questions.
              </p>
            </div>

            {/* Up-to-date Syllabus */}
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 text-[#00D6FF]">
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
                We are constantly updating ourselves with the latest MOE syllabus and have invested a lot of time and effort to craft our materials to be exam-orientated and up to date with the current examination trends. Regular checkpoints are assigned to assess your child's understanding of the science concept and answering techniques. Consultations classes may also be arranged by teachers for weaker students outside of regular class time to help them brush up on the subject.
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

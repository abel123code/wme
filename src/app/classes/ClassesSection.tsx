"use client";

// Client Component: Handles all interactive state and modal logic
// This separation allows the parent page to be a Server Component,
// reducing initial JS bundle size and hydration cost
import { useState } from "react";
import ScienceModal from "@/components/ScienceModal";
import MathModal from "@/components/MathModal";
import SecScienceModal from "@/components/SecScienceModal";
import SecMathModal from "@/components/SecMathModal";
import ScheduleSection from "./ScheduleSection";

interface ScheduleData {
  academicYear: string;
  primaryScheduleImage: any;
  primaryScheduleAlt: string;
  secondaryScheduleImage: any;
  secondaryScheduleAlt: string;
  calendarPdf: {
    asset: {
      url: string;
    };
    filename?: string;
  };
}

interface ClassesSectionProps {
  scheduleData?: ScheduleData | null;
}

export default function ClassesSection({ scheduleData }: ClassesSectionProps) {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      {/* Our Classes Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Our Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Science Card */}
          <button
            onClick={() => setOpenModal("science")}
            className="bg-[#E6FBFF] rounded-2xl p-8 flex flex-col items-center justify-center h-[200px] hover:shadow-xl hover:border-2 hover:border-[#00D6FF] transition-all cursor-pointer border-2 border-transparent"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#012DE8] mb-2">
              Primary 3 - 6
            </h3>
            <p className="text-4xl font-bold text-[#00D6FF]">SCIENCE</p>
          </button>

          {/* Math Card */}
          <button
            onClick={() => setOpenModal("math")}
            className="bg-[#FDE8F1] rounded-2xl p-8 flex flex-col items-center justify-center h-[200px] hover:shadow-xl hover:border-2 hover:border-[#E83789] transition-all cursor-pointer border-2 border-transparent"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#012DE8] mb-2">
              Primary 3 - 6
            </h3>
            <p className="text-4xl font-bold text-[#E83789]">MATH</p>
          </button>

          {/* Secondary Science Card */}
          <button
            onClick={() => setOpenModal("secScience")}
            className="bg-[#E6FBFF] rounded-2xl p-8 flex flex-col items-center justify-center h-[200px] hover:shadow-xl hover:border-2 hover:border-[#00D6FF] transition-all cursor-pointer border-2 border-transparent"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#012DE8] mb-2">
              Secondary 1 - 4
            </h3>
            <p className="text-3xl md:text-4xl font-bold text-[#00D6FF] text-center leading-tight">
              SCIENCE<br />
              <span className="text-2xl md:text-3xl">Pure Chem / Combined Chem</span>
            </p>
          </button>

          {/* Secondary Math Card */}
          <button
            onClick={() => setOpenModal("secMath")}
            className="bg-[#FDE8F1] rounded-2xl p-8 flex flex-col items-center justify-center h-[200px] hover:shadow-xl hover:border-2 hover:border-[#E83789] transition-all cursor-pointer border-2 border-transparent"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#012DE8] mb-2">
              Secondary 1 - 4
            </h3>
            <p className="text-3xl md:text-4xl font-bold text-[#E83789] text-center leading-tight">
              MATH<br />
              <span className="text-2xl md:text-3xl">A Math / E Math</span>
            </p>
          </button>
        </div>
      </div>

      {/* Schedule Sections */}
      <ScheduleSection scheduleData={scheduleData || null} />

      {/* Render only the active modal instead of all modals upfront */}
      {/* This reduces initial render cost and JS bundle size */}
      {openModal === "science" && (
        <ScienceModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
        />
      )}

      {openModal === "math" && (
        <MathModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
        />
      )}

      {openModal === "secScience" && (
        <SecScienceModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
        />
      )}

      {openModal === "secMath" && (
        <SecMathModal
          isOpen={true}
          onClose={() => setOpenModal(null)}
        />
      )}
    </>
  );
}


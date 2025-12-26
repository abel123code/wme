"use client";

import { useState } from "react";
import Image from "next/image";
import ScienceModal from "@/components/ScienceModal";
import MathModal from "@/components/MathModal";
import SecScienceModal from "@/components/SecScienceModal";
import SecMathModal from "@/components/SecMathModal";
import PageHero from "@/components/PageHero";

export default function ClassesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="relative bg-white">
      <PageHero 
        title="Our Science & Math Classes" 
        image="/classes-hero.JPG"
        imageAlt="Classes hero background"
        imagePosition="classes-hero-position"
      />

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          AY2026 Class Schedule
        </h2>
        {/* Primary Science & Math Schedule */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("primary")}
            className="w-full bg-[#012DE8] text-white p-6 text-center hover:bg-[#021FB8] transition-colors relative rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Primary Science & Math schedule
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
              <div
                className={`w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-[#012DE8] transition-transform ${
                  openSection === "primary" ? "rotate-180" : ""
                }`}
              ></div>
            </div>
          </button>
          {openSection === "primary" && (
            <div className="bg-white p-6 rounded-lg flex justify-center items-center -mt-2">
              <Image
                src="/primary-schedule.png"
                alt="Primary Schedule"
                width={1400}
                height={800}
                className="w-2/3 h-auto"
              />
            </div>
          )}
        </div>

        {/* Secondary Science & Math Schedule */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("secondary")}
            className="w-full bg-[#012DE8] text-white p-6 text-center hover:bg-[#021FB8] transition-colors relative rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Secondary Science & Math schedule
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
              <div
                className={`w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-[#012DE8] transition-transform ${
                  openSection === "secondary" ? "rotate-180" : ""
                }`}
              ></div>
            </div>
          </button>
          {openSection === "secondary" && (
            <div className="bg-white p-6 rounded-lg flex justify-center items-center">
              <Image
                src="/sec-schedule.png"
                alt="Secondary Schedule"
                width={1400}
                height={800}
                className="w-2/3 h-auto border-0"
              />
            </div>
          )}
        </div>

        {/* AY 2026 Calendar */}
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-6 mt-6 text-gray-900">
          AY2026 Calendar
        </h2>
        <div className="mb-6">
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Academic Year 2026 Calendar.pdf';
              link.download = 'Academic Year 2026 Calendar.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="w-full bg-[#012DE8] text-white p-6 text-center hover:bg-[#021FB8] transition-colors relative rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Click Here To Download
            </h2>
          </button>
        </div>
        </div>
      </div>

      {/* Science Modal */}
      <ScienceModal
        isOpen={openModal === "science"}
        onClose={() => setOpenModal(null)}
      />

      {/* Math Modal */}
      <MathModal
        isOpen={openModal === "math"}
        onClose={() => setOpenModal(null)}
      />

      {/* Secondary Science Modal */}
      <SecScienceModal
        isOpen={openModal === "secScience"}
        onClose={() => setOpenModal(null)}
      />

      {/* Secondary Math Modal */}
      <SecMathModal
        isOpen={openModal === "secMath"}
        onClose={() => setOpenModal(null)}
      />
      
    </main>
  );
}


"use client";

import Image from "next/image";
import { useState } from "react";
import ScienceModal from "@/components/ScienceModal";
import MathModal from "@/components/MathModal";

export default function ClassesPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main className="relative bg-white">
      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[75vh] bg-[#3B4FDF] flex items-center justify-center">
        {/* Blue Monster Decoration */}
        <div className="absolute bottom-0 left-4 lg:left-8 w-64 h-64 lg:w-[400px] lg:h-[400px] z-0">
          <Image
            src="/blue-monster.png"
            alt="Blue Monster"
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            Our Science & Math Classes
          </h1>
        </div>
      </div>

      {/* Our Classes Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Classes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Science Card */}
          <button
            onClick={() => setOpenModal("science")}
            className="bg-[#A4E4F4] rounded-2xl p-8 flex flex-col items-center justify-center h-[350px] hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0D4F5C] mb-2">
              Primary 3 - 6, Secondary 1-4
            </h3>
            <p className="text-6xl md:text-7xl font-bold text-[#6DD0F0] my-6">SCIENCE</p>
            <div className="w-32 h-32 mt-auto">
              <Image
                src="/blue-monster.png"
                alt="Science"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </button>

          {/* Math Card */}
          <button
            onClick={() => setOpenModal("math")}
            className="bg-[#F4C4E4] rounded-2xl p-8 flex flex-col items-center justify-center h-[350px] hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#8B4F8B] mb-2">
              Primary 3 - 6, Secondary 1-4
            </h3>
            <p className="text-6xl md:text-7xl font-bold text-[#FF8FD0] my-6">MATH</p>
            <div className="w-32 h-32 mt-auto">
              <Image
                src="/science-element-1.png"
                alt="Math"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Schedule Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
        {/* Primary Science & Math Schedule */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("primary")}
            className="w-full bg-[#0D4F5C] text-white p-6 text-center hover:bg-[#0A3D47] transition-colors relative rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Primary Science & Math schedule
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
              <div
                className={`w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-[#0D4F5C] transition-transform ${
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
            className="w-full bg-[#0D4F5C] text-white p-6 text-center hover:bg-[#0A3D47] transition-colors relative rounded-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Secondary Science & Math schedule
            </h2>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
              <div
                className={`w-0 h-0 border-l-20 border-l-transparent border-r-20 border-r-transparent border-t-20 border-t-[#0D4F5C] transition-transform ${
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
      
    </main>
  );
}


"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/image";

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

interface ScheduleSectionProps {
  scheduleData: ScheduleData | null;
}

export default function ScheduleSection({ scheduleData }: ScheduleSectionProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!scheduleData) {
    return null;
  }

  const primaryImageUrl = scheduleData.primaryScheduleImage
    ? urlFor(scheduleData.primaryScheduleImage).width(1400).url()
    : null;

  const secondaryImageUrl = scheduleData.secondaryScheduleImage
    ? urlFor(scheduleData.secondaryScheduleImage).width(1400).url()
    : null;

  const calendarPdfUrl = scheduleData.calendarPdf?.asset?.url || null;
  const calendarFilename = scheduleData.calendarPdf?.filename || 'Academic Year Calendar.pdf';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          {scheduleData.academicYear} Class Schedule
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
          {openSection === "primary" && primaryImageUrl && (
            <div className="bg-white p-6 rounded-lg flex justify-center items-center mt-2">
              <Image
                src={primaryImageUrl}
                alt={scheduleData.primaryScheduleAlt}
                width={1400}
                height={2000}
                sizes="(max-width: 768px) 100vw, 66vw"
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
          {openSection === "secondary" && secondaryImageUrl && (
            <div className="bg-white p-6 rounded-lg flex justify-center items-center">
              <Image
                src={secondaryImageUrl}
                alt={scheduleData.secondaryScheduleAlt}
                width={1400}
                height={2000}
                sizes="(max-width: 768px) 100vw, 66vw"
                className="w-2/3 h-auto border-0"
              />
            </div>
          )}
        </div>

        {/* AY Calendar */}
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-6 mt-6 text-gray-900">
          {scheduleData.academicYear} Calendar
        </h2>
        <div className="mb-6">
          <button
            onClick={() => {
              if (calendarPdfUrl) {
                const link = document.createElement('a');
                link.href = calendarPdfUrl;
                link.download = calendarFilename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }}
            disabled={!calendarPdfUrl}
            className="w-full bg-[#012DE8] text-white p-6 text-center hover:bg-[#021FB8] transition-colors relative rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Click Here To Download
            </h2>
          </button>
        </div>
      </div>
    </div>
  );
}

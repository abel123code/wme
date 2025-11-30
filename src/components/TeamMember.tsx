"use client";

import Image from "next/image";
import { useState } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  image1: string;
  image2: string;
  tagline?: string;
  qualifications?: string[];
  imagePosition?: string;
  onReadMore?: () => void;
}

export default function TeamMember({ 
  name, 
  role, 
  image1, 
  image2,
  tagline,
  qualifications,
  imagePosition = "center",
  onReadMore
}: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col sm:flex-row p-6 gap-6 h-full">
        {/* Image Section */}
        <div className="relative w-full sm:w-48 aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[350px] rounded-2xl overflow-hidden shrink-0">
          <Image
            src={image1}
            alt={`${name} - ${role}`}
            fill
            style={{ objectPosition: imagePosition }}
            className={`object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <Image
            src={image2}
            alt={`${name} - ${role}`}
            fill
            style={{ objectPosition: imagePosition }}
            className={`object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col py-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-base font-semibold text-gray-900">{role}</span>
          </div>

          {tagline && (
            <div className="mb-4 bg-yellow-50 rounded-lg p-3 border-l-4 border-yellow-400">
              <p className="text-gray-800 text-sm italic font-medium">
                "{tagline}"
              </p>
            </div>
          )}

          {qualifications && qualifications.length > 0 && (
            <div className="flex-1 mb-4">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                Accolades
              </h4>
              <ul className="space-y-2">
                {qualifications.map((qual, index) => (
                  <li key={index} className="text-gray-700 text-sm leading-relaxed flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            onClick={onReadMore}
            className="text-[#4A90E2] font-medium hover:underline self-start"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}


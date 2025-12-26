"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  qualifications?: string[];
  imagePosition?: string;
  onReadMore?: () => void;
}

export default function TeamMember({ 
  name, 
  role, 
  image,
  qualifications,
  imagePosition = "center",
  onReadMore
}: TeamMemberProps) {
  return (
    <div
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full"
    >
      <div className="flex flex-col sm:flex-row p-4 sm:p-5 gap-4 h-full">
        {/* Image Section */}
        <div className="relative w-full sm:w-40 aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[250px] rounded-2xl overflow-hidden shrink-0">
          <Image
            src={image}
            alt={`${name} - ${role}`}
            fill
            style={{ objectPosition: imagePosition }}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col py-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#012DE8] mb-2">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#E8ECFF]">
            <svg className="w-5 h-5 shrink-0 text-[#012DE8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-base font-semibold text-[#334155]">{role}</span>
          </div>

          {qualifications && qualifications.length > 0 && (
            <div className="flex-1 mb-3">
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wide mb-1.5">
                Accolades
              </h4>
              <ul className="space-y-1.5">
                {qualifications.map((qual, index) => (
                  <li key={index} className="text-[#334155] text-sm leading-relaxed flex items-start gap-2">
                    <svg className="w-4 h-4 text-[#00D6FF] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
            className="text-[#012DE8] font-medium hover:underline self-start"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}


"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ImageSkeleton } from "./Skeletons";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  qualifications?: string[];
  imagePosition?: string;
  onReadMore?: () => void;
  priority?: boolean;
}

export default function TeamMember({ 
  name, 
  role, 
  image,
  qualifications,
  imagePosition = "center",
  onReadMore,
  priority = false
}: TeamMemberProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve after animation triggers to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Start animation slightly before element enters viewport
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="flex flex-col sm:flex-row p-4 sm:p-5 gap-4 h-full">
        {/* Image Section */}
        <div className="relative w-full sm:w-40 aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[250px] rounded-2xl overflow-hidden shrink-0">
          {imageLoading && (
            <div className="absolute inset-0">
              <ImageSkeleton aspectRatio="aspect-[3/4] sm:aspect-auto" />
            </div>
          )}
          <Image
            src={image}
            alt={`${name} - ${role}`}
            fill
            sizes="(max-width: 640px) 100vw, 160px"
            priority={priority}
            style={{ objectPosition: imagePosition }}
            className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
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


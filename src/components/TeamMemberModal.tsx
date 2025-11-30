"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface TeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  bio: string[];
  tiktokVideoId?: string;
}

export default function TeamMemberModal({
  isOpen,
  onClose,
  name,
  role,
  image,
  qualifications,
  bio,
  tiktokVideoId,
}: TeamMemberModalProps) {
  const [tiktokLoading, setTiktokLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      if (tiktokVideoId) {
        setTiktokLoading(true);
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, tiktokVideoId]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-3xl w-full max-h-[90vh] overflow-y-auto relative ${tiktokVideoId ? 'max-w-6xl' : 'max-w-4xl'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* Image Section */}
          <div className="relative w-48 sm:w-56 lg:w-80 h-64 sm:h-72 lg:h-auto mx-auto lg:mx-0 rounded-2xl overflow-hidden shrink-0">
            <Image
              src={image}
              alt={`${name} - ${role}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#FF8B8B] mb-3">
              {name}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="text-lg font-semibold text-gray-900">{role}</span>
            </div>

            {/* Qualifications */}
            <div className="mb-6 space-y-2">
              {qualifications.map((qual, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <span className="text-gray-700">{qual}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* TikTok Embed */}
          {tiktokVideoId && (
            <div className="shrink-0 w-full lg:w-[325px] relative min-h-[500px]">
              {/* Loading UI */}
              {tiktokLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-2xl z-10">
                  <div className="w-10 h-10 border-4 border-gray-300 border-t-[#FF8B8B] rounded-full animate-spin mb-3"></div>
                  <span className="text-gray-500 text-sm">Loading TikTok...</span>
                </div>
              )}
              <iframe
                src={`https://www.tiktok.com/embed/v2/${tiktokVideoId}`}
                className="w-full h-[500px] rounded-2xl"
                allowFullScreen
                allow="encrypted-media"
                onLoad={() => setTiktokLoading(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


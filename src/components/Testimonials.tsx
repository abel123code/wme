"use client";

import { useState } from "react";
import { videos } from "@/data/videosData";

// Videos data extracted to separate file for better dev compile time

export default function Testimonials() {
  const [loadingStates, setLoadingStates] = useState<boolean[]>([true, true, true]);

  const handleVideoLoad = (index: number) => {
    setLoadingStates(prev => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          The Wondrous Mind Experience
        </h2>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{video.title}</h3>

              {/* TikTok Video */}
              <div className="w-full rounded-2xl overflow-hidden relative" style={{ minHeight: '740px' }}>
                {loadingStates[index] && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10 rounded-2xl">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mb-3"></div>
                    <span className="text-gray-500 text-sm">Loading video...</span>
                  </div>
                )}
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${video.videoId}`}
                  className="w-full h-[740px]"
                  style={{ overflow: 'hidden' }}
                  allowFullScreen
                  allow="encrypted-media"
                  scrolling="no"
                  onLoad={() => handleVideoLoad(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


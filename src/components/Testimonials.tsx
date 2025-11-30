"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl space-y-24">
        
        {/* What Our Students Say */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* TikTok Video */}
          <div className="flex justify-center">
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@wondrousmindeducation/video/7413258740314524946" 
              data-video-id="7413258740314524946" 
              style={{ maxWidth: '605px', minWidth: '325px' }}
            >
              <section>
                <a 
                  target="_blank" 
                  title="@wondrousmindeducation" 
                  href="https://www.tiktok.com/@wondrousmindeducation?refer=embed"
                  rel="noopener noreferrer"
                >
                  @wondrousmindeducation
                </a>
              </section>
            </blockquote>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FF6B6B]">What Our</span><br />
              <span className="text-[#FF6B6B]">Students Say</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Discover firsthand experiences from our Maythematics students as they share their learning journey, progress, and how our programmes have helped them achieve their academic goals with confidence.
            </p>
            
            <Link
              href="#testimonials"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
            >
              See more testimonials
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* The Maythematics Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#FF6B6B]">The Wondrous Mind</span><br />
              <span className="text-[#FF6B6B]">Experience</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Step into the daily journey of a student at Wondrous Mind and discover how our unique approach and teaching methods make learning engaging — and why students genuinely look forward to every class.
            </p>
            
            <Link
              href="#programme"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors group"
            >
              Check out our programme
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* TikTok Video */}
          <div className="flex justify-center order-1 lg:order-2">
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@wondrousmindeducation/video/7448139951562181909" 
              data-video-id="7448139951562181909" 
              style={{ maxWidth: '605px', minWidth: '325px' }}
            >
              <section>
                <a 
                  target="_blank" 
                  title="@wondrousmindeducation" 
                  href="https://www.tiktok.com/@wondrousmindeducation?refer=embed"
                  rel="noopener noreferrer"
                >
                  @wondrousmindeducation
                </a>
              </section>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}


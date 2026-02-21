"use client";
import Image from "next/image";

const images = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  src: `/testimonial/${i + 1}.avif`,
}));

export default function TestimonialGallery() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((img) => (
        <div
          key={img.id}
          className="mb-4 break-inside-avoid rounded-xl overflow-hidden
                     hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <Image
            src={img.src}
            alt={`Testimonial ${img.id}`}
            width={600}
            height={800}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

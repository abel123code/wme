import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/team-picture.JPG"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[45%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-white animate-fadeInUp">
          Helping Primary & Secondary Students learn{" "}
          <br />
          <span className="text-[#1e06d6]">Math</span>{" "}
          & <span className="text-[#f8f007f2]">Science</span>{" "}
          with <span>clarity</span>,{" "}
          and confidence
        </h1>

        <Link
          href="/classes"
          className="inline-block bg-[#FFB703] hover:bg-[#FFA500] text-gray-900 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg animate-fadeInUp animation-delay-300"
        >
          Discover our classes
        </Link>
      </div>
    </section>
  );
}


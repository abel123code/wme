import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-image-2.avif"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image-position"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 text-center pt-36">
        {/* <h1 className="text-base sm:text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-white animate-fadeInUp">
          Helping Primary & Secondary Students
          <br />
          learn <span className="text-[#00D6FF]">Math</span> & <span className="text-[#E83789]">Science</span>
          <br />
          with <span>clarity</span>, and confidence
        </h1> */}
        <h1 className="text-base sm:text-2xl md:text-2xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-white animate-fadeInUp">
          Helping Primary & Secondary Students <br />
          learn Math & Science <br />
          with clarity and confidence
        </h1>

        <Link
          href="/classes"
          className="inline-block bg-[#012DE8] hover:bg-[#021FB8] text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg animate-fadeInUp animation-delay-300"
        >
          Discover our classes
        </Link>
      </div>
    </section>
  );
}


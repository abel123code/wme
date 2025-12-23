import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-900/40"
        style={{ backgroundImage: 'url(/hero-image.jpg)', backgroundPosition: 'center -45%'}}
      >
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <h1 className="text-[40px] font-bold leading-tight mb-8 text-white animate-fadeInUp">
          Helping Primary & Secondary Students learn{" "}
          <br />
          <span className="text-[#1e06d6]">Math</span>{" "}
          & <span className="text-[#f8f007f2]">Science</span>{" "}
          with <span>clarity</span>,{" "}
          and confidence
        </h1>

        <Link
          href="/classes"
          className="inline-block bg-[#FFB703] hover:bg-[#FFA500] text-gray-900 font-bold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg animate-fadeInUp animation-delay-300"
        >
          Discover our classes
        </Link>
      </div>
    </section>
  );
}


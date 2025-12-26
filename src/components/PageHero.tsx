import Image from "next/image";

interface PageHeroProps {
  title?: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  subtitle?: string;
  showOverlay?: boolean;
}

export default function PageHero({
  title,
  image,
  imageAlt,
  imagePosition = "hero-image-position",
  subtitle,
  showOverlay = true,
}: PageHeroProps) {
  return (
    <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || `${title || "Page"} hero background`}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${imagePosition}`}
        />
        {showOverlay && <div className="absolute inset-0 bg-gray-900/40"></div>}
      </div>

      {/* Hero Content */}
      {(title || subtitle) && (
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-white/80 text-center mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}


import Image from "next/image";

export default function EnrollBanner() {
  return (
    <div className="bg-[#012DE8] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mt-12 max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between relative overflow-hidden min-h-[160px] sm:min-h-[180px] gap-3 sm:gap-4">
      {/* Character - Bottom Left */}
      <div className="absolute bottom-[5px] left-[-5px] sm:left-[-10px] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <Image
          src="/octopus.png"
          alt="Blue Monster"
          width={160}
          height={160}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="text-white z-10 ml-20 sm:ml-28 md:ml-36 lg:ml-44 text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
          Discover The Wondrous Mind Experience
        </h3>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-2 sm:mb-0">
          Enrol Now & Unlock Learning Success
        </p>
        <a 
          href="https://wondrousmind.edulabs.sg/trial_student"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#012DE8] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors inline-block z-10 shrink-0 sm:hidden mt-2"
        >
          Register Here!
        </a>
      </div>
      <a 
        href="https://wondrousmind.edulabs.sg/trial_student"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#012DE8] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-colors hidden sm:inline-block z-10 shrink-0"
      >
        Register Here!
      </a>
    </div>
  );
}


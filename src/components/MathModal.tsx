import Image from "next/image";

interface MathModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MathModal({ isOpen, onClose }: MathModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#F4C4E4] w-full h-full overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700 text-4xl font-bold z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center"
        >
          ×
        </button>

        {/* Math Header */}
        <div className="relative p-8 pb-12">
          <div className="flex items-start gap-8">
            <div className="w-64 h-64 shrink-0">
              <Image
                src="/science-element-1.png"
                alt="Math Character"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center pt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#8B4F8B] mb-4">
                Primary 3 - 6
              </h3>
              <p className="text-6xl md:text-8xl font-bold text-[#FF8FD0] leading-none">
                MATH
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white px-8 py-12">
          {/* Three Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Interest Development */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="20" y="15" width="60" height="70" rx="5" />
                  <line x1="30" y1="30" x2="70" y2="30" />
                  <line x1="30" y1="40" x2="70" y2="40" />
                  <line x1="30" y1="50" x2="70" y2="50" />
                  <line x1="30" y1="60" x2="70" y2="60" />
                  <line x1="30" y1="70" x2="70" y2="70" />
                  <circle cx="35" cy="30" r="2" fill="currentColor" />
                  <circle cx="35" cy="40" r="2" fill="currentColor" />
                  <circle cx="35" cy="50" r="2" fill="currentColor" />
                  <circle cx="35" cy="60" r="2" fill="currentColor" />
                  <circle cx="35" cy="70" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Interest Development
              </h3>
              <p className="text-[#0D4F5C] leading-relaxed">
                We tend to take interest and enjoyment in learning mathematics as we believe that your child learns best when they are enjoying the lesson. We include puzzles and games in our lessons. We tend to ask a lot of questions to sharpen your child's mathematical thinking and develop critical thinking in your child.
              </p>
            </div>

            {/* Problem Solving */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="20" y="20" width="60" height="60" rx="3" />
                  <line x1="20" y1="50" x2="80" y2="50" />
                  <line x1="50" y1="20" x2="50" y2="80" />
                  <text x="35" y="40" fontSize="20" fill="currentColor" strokeWidth="0">2×2</text>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Problem Solving
              </h3>
              <p className="text-[#0D4F5C] leading-relaxed">
                We target on problem solving using simpler and easy to understand methods. We also believe that every child can learn! We will encourage every child to try more than one method and use the method that suits their understanding. We want to make sure that we understand your child's strengths and weaknesses, and what is working for your child and what is not.
              </p>
            </div>

            {/* Up-to-date Syllabus */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M 30 35 Q 35 25 50 28 Q 65 25 70 35 Q 68 50 50 55 Q 32 50 30 35 Z" />
                  <line x1="20" y1="65" x2="80" y2="65" strokeWidth="3" />
                  <line x1="20" y1="75" x2="80" y2="75" strokeWidth="3" />
                  <line x1="20" y1="85" x2="80" y2="85" strokeWidth="3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                Up-to-date Syllabus
              </h3>
              <p className="text-[#0D4F5C] leading-relaxed">
                We are constantly updating ourselves with the latest MOE syllabus. We have invested a lot of time to craft our materials to develop confidence of using mathematics and critical thinking towards mathematics for your child. Our materials are also crafted to fully prepare your child for examinations. Regular checkpoints are assigned to assess your child's understanding of the mathematics concept. In any case that we feel that your child needs help, we will be here to help.
              </p>
            </div>
          </div>

          {/* Enroll Now Banner */}
          <div className="bg-[#3B4FDF] rounded-2xl p-8 mt-12 max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32">
                <Image
                  src="/science-element-1.png"
                  alt="Math Character"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Embark on a learning journey
                </h3>
                <p className="text-xl md:text-2xl">
                  Register and enroll today.
                </p>
              </div>
            </div>
            <a 
              href="https://wondrousmind.edulabs.sg/trial_student"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#3B4FDF] px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


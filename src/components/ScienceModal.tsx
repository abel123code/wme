import Image from "next/image";

interface ScienceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ScienceModal({ isOpen, onClose }: ScienceModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-[#A4E4F4] w-full h-full overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-700 text-4xl font-bold z-10 bg-white rounded-full w-12 h-12 flex items-center justify-center"
        >
          ×
        </button>

        {/* Science Header */}
        <div className="relative p-8 pb-12">
          <div className="flex items-start gap-8">
            <div className="w-64 h-64 shrink-0">
              <Image
                src="/blue-monster.png"
                alt="Blue Monster"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 text-center pt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D4F5C] mb-4">
                Primary 3 - 6
              </h3>
              <p className="text-6xl md:text-8xl font-bold text-[#6DD0F0] leading-none">
                SCIENCE
              </p>
            </div>
          </div>
        </div>

        {/* Hands on experiments section */}
        <div className="bg-white px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Hands on experiments
          </h2>
          <p className="text-center text-[#0D4F5C] max-w-5xl mx-auto mb-8 leading-relaxed">
            To ignite children's interest in learning, we engage them with hands-on activities which help them to understand the potential gaps between theory and practice bringing questions to life. It also helps in developing students' experimental skills and techniques at identifying aims, coming up with conclusions and understanding of science data.
          </p>

          {/* Experiment Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto mb-12">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/experiment-1.jpg"
                alt="Students doing experiments"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/experiment-2.jpg"
                alt="Students doing experiments"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/experiment-3.jpg"
                alt="Students doing experiments"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Method and Syllabus Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
            {/* The Proven Method */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="50" cy="30" r="8" />
                  <ellipse cx="50" cy="70" rx="25" ry="15" />
                  <line x1="50" y1="38" x2="50" y2="55" />
                  <path d="M 35 55 Q 50 45 65 55" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                The Proven Method (C.E.R)
              </h3>
              <p className="text-[#0D4F5C] leading-relaxed">
                By using mnemonics and acronyms, we make remembering science concepts and keywords easier! With our proven method of answering science open-ended questions known as C.E.R (Claim, Evidence and Reasoning), students can achieve a more complete answers helping them score in open-ended questions.
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
                We are constantly updating ourselves with the latest MOE syllabus and have invested a lot of time and effort to craft our materials to be exam-orientated and up to date with the current examination trends. Regular checkpoints are assigned to assess your child's understanding of the science concept and answering techniques. Consultations classes may also be arranged by teachers for weaker students outside of regular class time to help them brush up on the subject.
              </p>
            </div>
          </div>

          {/* Enroll Now Banner */}
          <div className="bg-[#3B4FDF] rounded-2xl p-8 mt-12 max-w-5xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32">
                <Image
                  src="/blue-monster.png"
                  alt="Blue Monster"
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


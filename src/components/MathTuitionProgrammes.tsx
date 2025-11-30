import Link from "next/link";

export default function MathTuitionProgrammes() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Math & Science Tuition Programmes
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We offer Primary, Secondary, and Junior College Math/Science Tuition to help students excel with confidence. Our programmes are tailored to each level, focusing on skills, understanding, and exam readiness.
        </p>
        
        <Link
          href="/classes"
          className="inline-block bg-[#FFD966] hover:bg-[#FFC933] text-gray-800 font-semibold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-md"
        >
          Find out more
        </Link>
      </div>
    </section>
  );
}


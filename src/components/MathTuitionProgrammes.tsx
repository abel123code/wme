import Link from "next/link";

export default function MathTuitionProgrammes() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F6F8FC]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#012DE8] mb-6">
          Math & Science Tuition Programmes
        </h2>
        
        <p className="text-lg text-[#334155] mb-8 leading-relaxed">
          We offer Primary and Secondary Math & Science Tuition to help students excel with confidence. Our programmes are tailored to each level, focusing on skills, understanding, and exam readiness.
        </p>
        
        <Link
          href="/classes"
          className="inline-block bg-[#012DE8] hover:bg-[#021FB8] text-white font-semibold text-lg px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-md"
        >
          Find out more
        </Link>
      </div>
    </section>
  );
}


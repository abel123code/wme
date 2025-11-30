import Image from "next/image";

export default function WhatSetsUsApart() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
              What set <span className="text-[#f30578]">us</span> apart?
            </h2>
            
            <div className="space-y-6 text-gray-800 text-lg leading-relaxed">
              <p>
                With only a maximum of 8 students in a class, no one is left behind. 
                Instead of grinding our students with endless worksheets, we captivate 
                their attention and interest in Math and Science with approachable 
                teachers, relevant videos and hands-on activities.
              </p>
              
              <p>
                Many times when the class comes to an end, you hear students saying 
                "so fast?!". Yes, in our class, 2 hours can pass in a breeze and 
                tuition is never a dreadful thing for our students.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/science-element-1.png"
              alt="Science learning illustration"
              width={400}
              height={400}
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


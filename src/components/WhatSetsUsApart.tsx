import Image from 'next/image';

interface WhatSetsUsApartProps {
  image1?: string;
  image2?: string;
  image3?: string;
}

export default function WhatSetsUsApart({ 
  image1 = 'classroom.PNG', 
  image2 = 'hero-image-2.avif', 
  image3 = 'worksheets.JPG' 
}: WhatSetsUsApartProps = {}) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
          Why choose <span className="text-[#E83789]">WME</span>?
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Small classes, Big Engagement */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#012DE8] mb-4 text-center">
              Small Classes, Big Engagement
            </h3>
            {/* Image */}
            <div className="w-full aspect-square bg-[#E8ECFF] rounded-2xl mb-6 overflow-hidden relative">
              {image1 ? (
                <Image
                  src={`/${image1}`}
                  alt="Small Classes, Big Engagement"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#64748B] text-sm">Image</span>
                </div>
              )}
            </div>
            <p className="text-[#334155] leading-relaxed text-justify">
              With a <b>maximum of 8 - 10 students per class</b>, every student gets the attention they need. We spark curiosity in math and science through <b>engaging teachers, relevant videos, and hands on activities</b>. Our classes are so enjoyable that <b>2 hour lessons</b> often end with students saying, &quot;So fast?!&quot;
            </p>
          </div>

          {/* Column 2: Passionate & dedicated teachers */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#012DE8] mb-4 text-center">
              Passionate & dedicated teachers
            </h3>
            {/* Image */}
            <div className="w-full aspect-square bg-[#E8ECFF] rounded-2xl mb-6 overflow-hidden relative">
              {image2 ? (
                <Image
                  src={`/${image2}`}
                  alt="Passionate & dedicated teachers"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover object-center"
                  style={{ objectPosition: '42%' }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#64748B] text-sm">Image</span>
                </div>
              )}
            </div>
            <p className="text-[#334155] leading-relaxed text-justify">
              Our passionate teachers bring math and science to life through <b>clear explanations, real-world examples, and hands on activities</b>. Helping students feel <b>supported, confident, and eager to learn</b>.
            </p>
          </div>

          {/* Column 3: Curriculum design for success */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-[#012DE8] mb-4 text-center">
              Curriculum design for success
            </h3>
            {/* Image */}
            <div className="w-full aspect-square bg-[#E8ECFF] rounded-2xl mb-6 overflow-hidden relative">
              {image3 ? (
                <Image
                  src={`/${image3}`}
                  alt="Curriculum design for success"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#64748B] text-sm">Image</span>
                </div>
              )}
            </div>
            <p className="text-[#334155] leading-relaxed text-justify">
              Our curriculum <b>builds strong foundations</b> in math and science step by step, with <b>targeted worksheets and exercises</b> that complement our interactive lessons. Reinforcing understanding, real-life application, and student confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

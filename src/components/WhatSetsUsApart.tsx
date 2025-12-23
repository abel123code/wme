export default function WhatSetsUsApart() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
          Why choose <span className="text-[#f30578]">WME</span>?
        </h2>

        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Small classes, Big Engagement */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Small Classes, Big Engagement
            </h3>
            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              With a <b>maximum of 8 - 10 students per class</b>, every student gets the attention they need. We spark curiosity in math and science through <b>engaging teachers, relevant videos, and hands on activities</b>. Our classes are so enjoyable that <b>2 hour lessons</b> often end with students saying, &quot;So fast?!&quot;
            </p>
          </div>

          {/* Column 2: Passionate & dedicated teachers */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Passionate & dedicated teachers
            </h3>
            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our passionate teachers bring math and science to life through <b>clear explanations, real-world examples, and hands on activities</b>. Helping students feel <b>supported, confident, and eager to learn</b>.
            </p>
          </div>

          {/* Column 3: Curriculum design for success */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Curriculum design for success
            </h3>
            {/* Image Placeholder */}
            <div className="w-full aspect-square bg-gray-100 rounded-2xl mb-6 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our curriculum <b>builds strong foundations</b> in math and science step by step, with <b>targeted worksheets and exercises</b> that complement our interactive lessons. Reinforcing understanding, real-life application, and student confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

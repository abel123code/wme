import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/team-picture.JPG"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[45%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gray-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
            Contact Us
          </h1>
          <p className="text-white/80 text-center mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Have questions? Drop us a message and we'll get back to you as soon as possible!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600">
                    Ready to start your learning journey? Reach out to us through any of the following channels.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Location */}
                  <a
                    href="https://www.google.com/maps/search/1+Jalan+Anak+Bukit+%2301-01Q+Bukit+Timah+Plaza,+588996/@1.3389493,103.7760806,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#3B4FDF]/30 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#3B4FDF]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#3B4FDF]/20 transition-colors">
                      <svg className="w-6 h-6 text-[#3B4FDF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#3B4FDF] transition-colors">Location</h3>
                      <p className="text-gray-600 text-sm mt-1">1 Jalan Anak Bukit #01-01Q, Bukit Timah Plaza S588996</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:enquiry@wondrousmind.com.sg"
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-[#FF8B8B]/30 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-[#FF8B8B]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FF8B8B]/20 transition-colors">
                      <svg className="w-6 h-6 text-[#FF8B8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-[#FF8B8B] transition-colors">Email</h3>
                      <p className="text-gray-600 text-sm mt-1">enquiry@wondrousmind.com.sg</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://api.whatsapp.com/send?phone=6589518938&text="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md hover:border-green-300 transition-all cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-200 transition-colors">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                      <p className="text-gray-600 text-sm mt-1">+65 8951 8938</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {/* Instagram */}
                    <a 
                      href="https://www.instagram.com/wondrousmindeducation?igsh=MTF5a3luOGVlZ2s0NQ%3D%3D&utm_source=qr" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    {/* TikTok */}
                    <a 
                      href="https://www.tiktok.com/@wondrousmindeducation?_r=1&_t=ZS-92SmsmnCZYP" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </a>
                    {/* Telegram */}
                    <a 
                      href="https://t.me/wondrousmindeducation" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:bg-[#006699] transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Trial Registration Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                  <iframe
                    src="https://wondrousmind.edulabs.sg/trial_student"
                    width="100%"
                    height="600"
                    loading="lazy"
                    style={{ border: 'none', overflow: 'auto' }}
                    title="Trial Class Registration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


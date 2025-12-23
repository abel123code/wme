export default function Footer() {
  return (
    <footer className="bg-[#B8D8D8] text-[#4A4A4A] py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Email */}
          <div>
            <h3 className="font-bold text-lg mb-4">Email</h3>
            <a 
              href="mailto:enquiry@wondrousmind.com.sg" 
              className="text-sm hover:underline"
            >
              enquiry@wondrousmind.com.sg
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="font-bold text-lg mb-4">WhatsApp</h3>
            <a 
              href="https://api.whatsapp.com/send?phone=6589518938&text=" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              +65 8951 8938
            </a>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-bold text-lg mb-4">Address</h3>
            <div className="text-sm space-y-1">
              <p>1 Jalan Anak Bukit #01-01Q</p>
              <p>Bukit Timah Plaza</p>
              <p>Singapore 588996</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <div className="text-sm space-y-1">
              <p>Mon-Fri: 1:00pm - 8:30pm</p>
              <p>Sat-Sun: 9:30am - 5:30pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Media Icons */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-400">
          <div className="flex gap-6">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/wondrousmindeducation?igsh=MTF5a3luOGVlZ2s0NQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@wondrousmindeducation?_r=1&_t=ZS-92SmsmnCZYP"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>

            {/* Telegram Icon */}
            <a
              href="https://t.me/wondrousmindeducation"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-center">
            © 2025 Wondrous Mind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


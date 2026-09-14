import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] pt-36 pb-20 px-6 md:px-12 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/60 font-medium">CONTACT</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mt-2">
              Let’s make something timeless.
            </h1>
            <p className="text-black/70 mt-4 max-w-md">
              Tell us about your celebration, preferred date and vision. We’ll get back to you with availability and package options.
            </p>
          </div>

          <div className="space-y-4 pt-4 text-sm font-medium">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-base">📞</span>
              <a href="tel:+919617266982" className="hover:underline">
                +91 9617266982
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-3">
              <span className="text-base">💬</span>
              <a 
                href="https://wa.me/919617266982" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-700 hover:underline font-semibold"
              >
                WhatsApp available
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-base">✉️</span>
              <a href="mailto:classic9617@gmail.com" className="hover:underline">
                classic9617@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-black/80">
              <span className="text-base">📍</span>
              <span>Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ENQUIRY FORM */}
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-black/5">
          <form className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-black/60 mb-2 font-medium">Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-black/60 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-black/60 mb-2 font-medium">Phone</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number" 
                className="w-full bg-transparent border-b border-black/20 py-2 focus:outline-none focus:border-black transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-black/60 mb-2 font-medium">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your shoot..." 
                className="w-full bg-transparent border border-black/20 rounded-xl p-3 focus:outline-none focus:border-black transition-colors text-sm"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-black/80 transition-all text-xs tracking-wider uppercase"
            >
              Send Enquiry
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
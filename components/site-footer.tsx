import { Instagram, Facebook, Youtube, ArrowUpRight, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function SiteFooter({ settings }: { settings: any }) {
  // --- APNE REAL DETAILS YAHAN REPLACE KAREIN ---
  const myWhatsappNumber = "919617266982"; // Apna country code ke saath number
  const myInstagramUsername = "classicfamilyphotography"; // Apna Insta username (bina @ ke)
  const myFacebookURL = "https://www.facebook.com/yourpagename"; // Apna Facebook Page link
  const myYoutubeURL = "https://www.youtube.com/yourchannelname"; // Apna Youtube Channel link
  // --------------------------------------------------

  return (
    <footer className="site-footer">
      <div className="footer-top shell">
        <div>
          <div className="footer-brand">CLASSIC FAMILY</div>
          <div className="footer-subbrand">PHOTOGRAPHY • BHOPAL</div>
          <p className="footer-copy">Wedding photography, films and portraits with a cinematic, editorial feel.</p>
        </div>
        <div className="footer-nav-col">
          <span className="footer-kicker">Explore</span>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/booking">Book a shoot</a>
        </div>
        <div className="footer-nav-col">
          <span className="footer-kicker">Studio</span>
          <a href="/contact">Contact</a>
          <a href="/admin/login">Studio login</a>
          <span className="footer-contact"><Phone size={14} /> 9617266982</span>
          <span className="footer-contact"><Mail size={14} /> classic9617@gmail.com</span>
          <span className="footer-contact"><MapPin size={14} /> Bhopal, Madhya Pradesh</span>
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© 2026 Classic Family Photography</span>
        <div className="footer-socials">
          <a 
            href={`https://wa.me/${myWhatsappNumber}?text=Hello!%20I%20would%20like%20to%20inquire%20about%20a%20photography%20booking.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="WhatsApp"
            title="WhatsApp Chat"
          >
            {/* Added Green Color & Hover Styling */}
            <MessageCircle size={18} className="text-green-500 hover:opacity-80 transition-opacity" />
          </a>
          <a 
  href="https://www.instagram.com/classic_family_photography?stkn=dWw5Nnc4dHQzamdr" 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label="Instagram"
  title="Instagram Profile"
>
  <Instagram size={18} className="text-pink-600 hover:opacity-80 transition-opacity" />
</a>
          <a 
            href={myFacebookURL} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            title="Facebook Page"
          >
            {/* Added Blue Color Styling */}
            <Facebook size={18} className="text-blue-600 hover:opacity-80 transition-opacity" />
          </a>
          <a 
            href={myYoutubeURL} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="YouTube"
            title="YouTube Channel"
          >
            {/* Added Youtube Red Color Styling */}
            <Youtube size={18} className="text-red-600 hover:opacity-80 transition-opacity" />
          </a>
          {/* Highlighted Booking Button is also active */}
          <a href="/booking" className="footer-book hover:no-underline">Start a conversation <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </footer>
  );
}
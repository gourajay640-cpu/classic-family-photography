import Link from "next/link";

interface SiteHeaderProps {
  logo?: string | null;
}

export default function SiteHeader({ logo }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* TOP LEFT: LOGO IMAGE + STUDIO NAME */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={logo || "/logo.webp"} 
            alt="Classic Family Photography Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wider text-white leading-none">
              CLASSIC FAMILY
            </span>
            <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase mt-0.5">
              PHOTOGRAPHY • BHOPAL
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest text-white/80 uppercase font-medium">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/admin/login" className="hover:text-white transition-colors">Studio Login</Link>
          
          <Link 
            href="/booking" 
            className="bg-white !text-black font-semibold px-5 py-2.5 rounded-full hover:bg-gray-200 transition-all shadow-md text-xs tracking-wider inline-block text-center"
          >
            BOOK YOUR DATE ↗
          </Link>
        </nav>

      </div>
    </header>
  );
}
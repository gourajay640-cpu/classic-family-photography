import Link from 'next/link';

export default function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Uploaded Logo Image */}
      <img 
        src="/uploads/1000523737.webp" 
        alt="Classic Family Photography Logo" 
        className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
      />
      
      {/* Studio Name */}
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-wider text-white leading-none">
          CLASSIC FAMILY
        </span>
        <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase mt-0.5">
          PHOTOGRAPHY • BHOPAL
        </span>
      </div>
    </Link>
  );
}
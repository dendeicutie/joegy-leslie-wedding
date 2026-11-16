import { MailCheck } from 'lucide-react';

export default function Navbar({ onRsvpOpen }) {
  return (
    <nav className="sticky top-0 z-40 bg-[#031A1C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center justify-center p-1.5 border border-[#D4AF37]/40 rounded-full hover:border-[#D4AF37] transition"
        >
          <img
            src="/logowhite.png"
            alt="Joegy & Leslie Monogram"
            className="h-10 w-10 object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center space-x-8 text-xs uppercase tracking-widest font-sans font-medium">
          {['story', 'venues', 'entourage', 'schedule', 'dresscode', 'gifts', 'faq'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              className="text-[#FFFCF7]/80 hover:text-[#FCEABB] transition capitalize"
            >
              {id === 'faq' ? 'FAQ' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        <button
          onClick={onRsvpOpen}
          className="btn-shimmer text-[#031A1C] font-semibold px-5 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition active:scale-95 flex items-center gap-2"
        >
          <MailCheck className="w-4 h-4" />
          <span>RSVP Now</span>
        </button>
      </div>
    </nav>
  );
}
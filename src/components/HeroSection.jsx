import CountdownTimer from './CountdownTimer';

export default function HeroSection({ onRsvpOpen }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0F383B_0%,_#031A1C_60%,_black_100%)] opacity-80 pointer-events-none" />

      {/* Decorative Gold Frame */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 md:p-14 border border-[#D4AF37]/30 rounded-2xl glass-card">
        <div className="inline-block border-b border-[#D4AF37]/50 pb-2 mb-6">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-[#FCEABB] uppercase">
            Save the Date
          </span>
        </div>

        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-normal leading-tight gold-gradient-text my-4">
          Hequibal{' '}
          <span className="font-pinyon text-5xl md:text-7xl text-[#E8C3B9] font-normal lowercase tracking-normal">
            &amp;
          </span>{' '}
          Marquez
        </h1>

        <p className="font-pinyon text-4xl md:text-6xl text-[#FFFCF7]/90 my-4">
          Nuptials
        </p>

        <div className="my-8 flex items-center justify-center gap-4 text-[#FCEABB] font-cinzel tracking-widest text-sm md:text-base">
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
          <span>DECEMBER 22, 2026</span>
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
        </div>

        <CountdownTimer targetDate="2026-12-22T14:00:00" />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={onRsvpOpen}
            className="btn-shimmer text-[#031A1C] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition"
          >
            Confirm Attendance
          </button>
          <a
            href="#venues"
            className="border border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 text-[#FCEABB] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition"
          >
            View Venues
          </a>
        </div>
      </div>
    </section>
  );
}

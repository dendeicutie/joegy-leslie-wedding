import { Gift, Heart } from 'lucide-react';

export default function GiftsSection() {
  return (
    <section id="gifts" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <span className="font-pinyon text-3xl text-[#FCEABB] block">With Gratitude</span>
      <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
        Gift Guide
      </h2>
      <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4 mb-10" />

      <div className="glass-card p-8 md:p-12 rounded-3xl border border-[#D4AF37]/40 relative overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#FCEABB] mx-auto mb-6">
          <Gift className="w-5 h-5" />
        </div>

        <p className="font-cinzel text-sm md:text-base text-[#FCEABB] tracking-[0.15em] uppercase leading-relaxed max-w-2xl mx-auto mb-4">
          Having you celebrate with us is the best gift we could ask for!
        </p>
        <p className="font-sans text-sm md:text-base text-[#FFFCF7]/90 leading-relaxed max-w-xl mx-auto">
          If you would like to give a gift, a contribution to our future fund would mean the world to us.
        </p>

        <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 flex items-center justify-center gap-2 text-xs font-sans tracking-widest text-[#E8C3B9]/90 uppercase">
          <Heart className="w-3.5 h-3.5 text-red-500" />
          <span>Joegy &amp; Leslie</span>
          <Heart className="w-3.5 h-3.5 text-red-500" />
        </div>
      </div>
    </section>
  );
}
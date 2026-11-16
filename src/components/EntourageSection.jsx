const principalSponsors = [
  { groom: 'Mr. Mario Abaluado', bride: 'Mrs. Elizabeth Abaluado' },
  { groom: 'Mr. Rafael R. Robles', bride: 'Mrs. Eden E. Robles' },
  { groom: 'Mr. Narendar D. Diaz', bride: 'Mrs. Maria Isabel Ranella S. Diaz' },
  { groom: 'Mr. Willy F. Hernandez', bride: 'Mrs. Encarnacion H. May' },
  { groom: 'Mr. Perfecto E. Marquez', bride: 'Mrs. Ma. Lourdes M. Marquez' },
  { groom: 'Mr. Reynaldo Embile', bride: 'Mrs. Irene Embile' },
  { groom: 'Mr. Eduardo L. Baylon', bride: 'Mrs. Cielito Margo E. Mirandilla' },
  { groom: 'Mr. Rommel O. Espera', bride: 'Mrs. Grace Espera' },
  { groom: 'Mr. Richard Visperas', bride: 'Ms. Divine D. David' },
  { groom: 'Mr. Eduardo L. Frilles', bride: 'Dr. Geraldine Gay E. Frilles' },
];

export default function EntourageSection() {
  return (
    <section id="entourage" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-pinyon text-3xl text-[#FCEABB] block">Honored Witnesses &amp; Loved Ones</span>
        <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">Bridal Entourage</h2>
        <p className="font-sans text-xs text-[#FCEABB]/80 mt-2 uppercase tracking-widest">Hequibal - Marquez Nuptials</p>
        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
      </div>

      {/* Parents */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-8 rounded-2xl text-center border-t-2 border-t-[#D4AF37]">
          <h3 className="font-cinzel text-xs tracking-[0.2em] text-[#FCEABB] uppercase mb-3">Parents of the Groom</h3>
          <p className="font-playfair text-lg md:text-xl font-bold text-[#FFFCF7]">Mr. Ernesto E. Hequibal</p>
          <p className="font-playfair text-lg md:text-xl font-bold text-[#FFFCF7] mt-1">Mrs. Marilyn F. Visperas</p>
        </div>
        <div className="glass-card p-8 rounded-2xl text-center border-t-2 border-t-[#D4AF37]">
          <h3 className="font-cinzel text-xs tracking-[0.2em] text-[#FCEABB] uppercase mb-3">Parents of the Bride</h3>
          <p className="font-playfair text-lg md:text-xl font-bold text-[#FFFCF7]">Mr. Domingo C. Anciado</p>
          <p className="font-playfair text-lg md:text-xl font-bold text-[#FFFCF7] mt-1">Mrs. Teresita A. Marquez</p>
        </div>
      </div>

      {/* Principal Sponsors */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h3 className="font-cinzel text-xl gold-gradient-text uppercase tracking-widest">Principal Sponsors</h3>
          <p className="font-pinyon text-lg text-[#FFFCF7]/80">To Stand as Principal Witnesses to our Vows</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {principalSponsors.map((pair, idx) => (
            <div key={idx} className="glass-card p-4 rounded-xl flex items-center justify-between border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition">
              <div className="text-left w-1/2 pr-2">
                <p className="font-playfair text-sm text-[#FFFCF7] font-semibold">{pair.groom}</p>
              </div>
              <div className="w-px h-8 bg-[#D4AF37]/30" />
              <div className="text-right w-1/2 pl-2">
                <p className="font-playfair text-sm text-[#FFFCF7] font-semibold">{pair.bride}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Honors */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-center justify-center">
        {[
          { role: 'Best Man', name: 'Kier Joey F. Hequibal' },
          { role: 'Maid of Honor', name: 'Marie Therese C. Marquina' },
          { role: 'Man of Matron', name: 'Ar. Morris V. Tibulan' },
          { role: 'Matron of Honor', name: 'Abby Ruth C. Tibulan' },
        ].map((h, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl border border-[#D4AF37]/30">
            <span className="font-cinzel text-xs text-[#FCEABB] tracking-widest uppercase block mb-2">{h.role}</span>
            <p className="font-playfair text-lg md:text-xl font-bold text-[#FFFCF7]">{h.name}</p>
          </div>
        ))}
      </div>

      {/* Groomsmen & Bridesmaids */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#D4AF37]">
          <h3 className="font-cinzel text-sm tracking-widest text-[#FCEABB] uppercase text-center mb-6">Groomsmen</h3>
          <ul className="space-y-3 text-center">
            {['Jared Sarmiento', 'Isiah Drei M. De Guzman', 'Crisonoah Santos', 'Deus Lorenz S. Launico', 'Adrian G. Hequibal'].map((n, i) => (
              <li key={i} className="font-playfair text-base text-[#FFFCF7] font-medium">{n}</li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#D4AF37]">
          <h3 className="font-cinzel text-sm tracking-widest text-[#FCEABB] uppercase text-center mb-6">Bridesmaids</h3>
          <ul className="space-y-3 text-center">
            {['Melchie Mae E. Salazar', 'Samantha Ysabel M. Nicolas', 'Fiona A. Entac', 'Hanna Sofia Anciado', 'Mylene S. Espera'].map((n, i) => (
              <li key={i} className="font-playfair text-base text-[#FFFCF7] font-medium">{n}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Little Groom & Bride */}
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="glass-card p-6 rounded-2xl text-center border border-[#D4AF37]/30">
          <span className="font-cinzel text-xs text-[#FCEABB] tracking-widest uppercase block mb-2">Little Groom</span>
          <p className="font-playfair text-lg font-bold text-[#FFFCF7]">Isaiah Zayn A. Hequibal</p>
        </div>
        <div className="glass-card p-6 rounded-2xl text-center border border-[#D4AF37]/30">
          <span className="font-cinzel text-xs text-[#FCEABB] tracking-widest uppercase block mb-2">Little Bride</span>
          <p className="font-playfair text-lg font-bold text-[#FFFCF7]">Andreah M. Lapez</p>
        </div>
      </div>

      {/* Bearers & Flower Girls */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="font-cinzel text-xs tracking-widest text-[#FCEABB] uppercase text-center mb-6">Symbol Bearers</h3>
          <div className="space-y-4">
            {[
              { role: 'Ring Bearer', name: 'Kiel Steffan A. Hequibal' },
              { role: 'Coin Bearer', name: 'Kaden Billeus M. Marquez' },
              { role: 'Bible Bearer', name: 'Joshua Benedict M. Nicolas' },
            ].map((b, idx) => (
              <div key={idx} className="text-center">
                <span className="text-xs font-sans text-[#FCEABB]/70 uppercase">{b.role}</span>
                <p className="font-playfair text-base text-[#FFFCF7] font-semibold">{b.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="font-cinzel text-xs tracking-widest text-[#FCEABB] uppercase text-center mb-6">Flower Girls</h3>
          <div className="space-y-4 text-center">
            {['Ciane Avery M. Lapez', 'Elisha Gale A. Salazar', 'Gabriela Fatima Therese La Rosa'].map((n, i) => (
              <p key={i} className="font-playfair text-base text-[#FFFCF7] font-semibold">{n}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

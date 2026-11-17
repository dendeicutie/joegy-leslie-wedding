const events = [
  { time: '1:00 PM', title: 'Guest Assembly', desc: 'Arrival at the Churst' },
  { time: '2:00 PM', title: 'Holy Ceremony', desc: 'Nuptial Mass & Vows' <br> 'Our Lady of Fatima Parish Church' },
  { time: '4:00 PM', title: 'Cocktail Hour', desc: 'Drinks & Appetizers' <br> 'Fynn Boutique Hotel' },
  { time: '5:00 PM', title: 'Grand Reception', desc: 'Dinner, Toast & Party' <br> 'Fynn Boutique Hotel' },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 px-4 bg-[#0F383B]/30 border-y border-[#D4AF37]/20">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-pinyon text-3xl text-[#FCEABB] block">Order of Events</span>
        <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
          Wedding Day Timeline
        </h2>
        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4 mb-12" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {events.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[#D4AF37]/30 flex flex-col items-center">
              <span className="text-xs font-cinzel text-[#FCEABB] tracking-widest uppercase mb-1">{item.time}</span>
              <h3 className="font-playfair text-lg text-[#FFFCF7] font-bold mb-2">{item.title}</h3>
              <p className="text-xs font-sans text-[#FFFCF7]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

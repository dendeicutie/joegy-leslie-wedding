import { Church, Sparkles, MapPin } from 'lucide-react';

export default function VenuesSection({ onVenueClick }) {
  const venues = [
    {
      icon: <Church className="w-6 h-6" />,
      type: 'Holy Matrimony',
      title: 'The Wedding Ceremony',
      time: '2:00 PM | December 22, 2026',
      name: 'Our Lady of Fatima Parish Church',
      desc: 'City Proper, Cavite / Metro Manila Region. Please arrive 1 hour prior to the solemn start of the holy mass.',
      venueData: {
        title: 'Wedding Ceremony',
        name: 'Our Lady of Fatima Parish Church',
        time: '2:00 PM',
        address: 'Poblacion, City Center, Cavite',
        mapQuery: 'Our+Lady+of+Fatima+Parish+Church',
      },
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      type: 'Dinner & Celebration',
      title: 'The Grand Reception',
      time: '5:00 PM | December 22, 2026',
      name: 'Fynn Boutique Hotel',
      desc: 'Grand Ballroom & Gardens. Cocktails, formal dinner, live musical performances, and dancing to follow immediately after ceremony.',
      venueData: {
        title: 'Grand Reception',
        name: 'Fynn Boutique Hotel',
        time: '5:00 PM',
        address: 'Km.17 Emilio Aguinaldo Hwy, Bacoor, Cavite',
        mapQuery: 'Fynn+Boutique+Hotel',
      },
    },
  ];

  return (
    <section id="venues" className="py-20 px-4 bg-[#0F383B]/40 border-y border-[#D4AF37]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-pinyon text-3xl text-[#FCEABB] block">Where We Say I Do</span>
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
            Venues &amp; Locations
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((venue, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-8 border border-[#D4AF37]/30 flex flex-col justify-between hover:border-[#D4AF37]/60 transition group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center text-[#FCEABB] mb-6">
                  {venue.icon}
                </div>
                <span className="text-xs font-cinzel tracking-widest text-[#FCEABB] uppercase">{venue.type}</span>
                <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-[#FFFCF7] my-2">{venue.title}</h3>
                <p className="text-sm font-sans text-[#FCEABB]/90 mb-4 font-medium">{venue.time}</p>
                <p className="text-sm font-sans text-[#FFFCF7]/80 mb-2">
                  <strong className="text-[#FFFCF7]">{venue.name}</strong>
                </p>
                <p className="text-xs font-sans text-[#FFFCF7]/70 leading-relaxed mb-6">{venue.desc}</p>
              </div>
              <button
                onClick={() => onVenueClick(venue.venueData)}
                className="w-full py-3 rounded-xl border border-[#D4AF37]/50 text-[#FCEABB] hover:bg-[#D4AF37] hover:text-[#031A1C] font-semibold text-xs uppercase tracking-widest transition flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>View Map &amp; Directions</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

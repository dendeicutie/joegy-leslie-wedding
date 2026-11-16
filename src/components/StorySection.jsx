export default function StorySection() {
  const timeline = [
    {
      label: 'The First Hello',
      title: 'Where Paths Crossed',
      text: 'It started with a simple spark and late-night conversations that bloomed into a quiet realization that we had found our home in each other.',
      align: 'left',
    },
    {
      label: 'The Adventure',
      title: 'Growing Hand in Hand',
      text: 'Through shared dreams, family celebrations, travels, and countless quiet sunsets, our love grew stronger with every passing year.',
      align: 'right',
    },
    {
      label: 'The Proposal',
      title: 'A Promise for Eternity',
      text: 'Under a canopy of stars and candlelight, the question was asked, tears of joy were wept, and a resounding "YES!" opened the door to forever.',
      align: 'left',
    },
  ];

  return (
    <section id="story" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-pinyon text-3xl text-[#FCEABB] block">Our Chapter of Love</span>
        <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
          Our Journey Together
        </h2>
        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
      </div>

      <div className="relative border-l-2 border-[#D4AF37]/30 ml-4 md:ml-0 space-y-12">
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className={`relative pl-8 md:pl-0 md:flex md:items-center group ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="absolute -left-[9px] top-0 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#031A1C]" />
            <div className={`md:w-1/2 ${item.align === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <span className="text-xs font-cinzel text-[#FCEABB] tracking-widest uppercase">{item.label}</span>
              <h3 className="font-playfair text-2xl text-[#FFFCF7] font-semibold my-1">{item.title}</h3>
              <p className="text-sm font-sans text-[#FFFCF7]/80 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

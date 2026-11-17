export default function StorySection() {
  const timeline = [
  {
    label: 'How Their Forever Began',
    title: 'Just Neighbors',
    text: "Some love stories begin with grand gestures. Others begin quietly, with simple encounters that neither person realizes will one day mean so much. For Leslie and Joegy, it all started when they were just neighbors.\n\nBack then, Leslie's mom would occasionally ask Joegy to run small errands. Around the same time, Joegy would often hang around the neighborhood store where Leslie would stop by to buy snacks. What Leslie didn't know was that Joegy already had his eyes on her—and that perhaps, those frequent visits to the store weren't just a coincidence after all. Little did they know that these ordinary moments would someday become the beginning of their story.",
    align: 'left',
  },
  {
    label: 'Miles Apart',
    title: 'Different Directions',
    text: "As life went on, their paths took different directions. Leslie and her family moved from San Jose, G.M.A., Cavite, to General Trias, Cavite, while Joegy left to work abroad. He tried to keep in touch, but Leslie, caught up in her own world and daily routines, didn't think much of his attempts. At the time, neither could have imagined that life would eventually bring them closer.",
    align: 'right',
  },
  {
    label: '2019',
    title: 'An Unexpected Turn of Events',
    text: "Then came an unexpected turn of events.\n\nAfter a difficult accident, Leslie found herself spending more time at home, with a little more time on her hands than usual. It was during this unexpected pause that she and Joegy finally got the chance to talk and get to know each other better. What began as simple conversations gradually became something they both looked forward to. Sometimes, the most unexpected moments lead us to the people we're meant to meet.\n\n<br>By 2019, just before the world came to a standstill, their casual conversations had grown into a genuine friendship. There were late-night talks, shared laughter, and feelings that slowly began to take shape. But as much as they enjoyed each other's company, life had other plans at the time. Their paths once again went in different directions, and their story was left unfinished.</br>",
    align: 'left',
  },
  {
    label: 'The Right Timing',
    title: 'Finding Their Way Back',
    text: 'But some connections have a way of finding their way back.\n\nLast year, life gave Leslie and Joegy another chance. When they reconnected, it felt surprisingly natural, as though the time apart had never really changed what was there. Only this time, things were different. They were ready to take a chance, embrace what they felt, and see where their hearts would lead them.\n\nAnd perhaps, that was all the timing they needed.',
    align: 'right',
  },
  {
    label: 'This December',
    title: 'Their Favorite Chapter Yet: Forever',
    text: "What once began with neighborhood errands, familiar faces, and a few unnoticed glances had grown into something neither could have imagined back then. Through distance, unexpected detours, and time apart, they found their way back to each other.\n\nNow, with all the chapters that brought them here, Leslie and Joegy are ready to begin their greatest adventure yet—not just as two people who found each other again, but as two hearts choosing each other for a lifetime.\n\nBecause sometimes, love doesn't happen when we expect it to. Sometimes, it takes the long way around. But when two people are meant to find each other, somehow, life has a way of bringing them home.\n\nAnd this December, Leslie and Joegy get to write their favorite chapter yet: Forever.",
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

import FaqAccordion from './FaqAccordion';

const faqItems = [
  {
    q: 'What time should I arrive at the ceremony?',
    a: 'Please plan to arrive at Our Lady of Fatima Parish Church by 1:00 PM (1 hour prior to the ceremony). The holy nuptial mass will start promptly at 2:00 PM.',
  },
  {
    q: 'Can I bring a plus one?',
    a: 'Due to venue capacity restrictions, we are only able to accommodate guests specifically named on your invitation card. Please check your RSVP form for allocated seat counts.',
  },
  {
    q: 'Is there parking available at the venues?',
    a: 'We have ample parking spaces available at the church. However, parking at Fynn Boutique Hotel will be on a first-come, first-served basis. We encourage everyone to arrive early to secure a parking space. Thank you!',
  },
  {
    q: 'Is this an unplugged ceremony?',
    a: 'We invite you to be fully present with us during our holy church ceremony and request that mobile phones remain silenced and stored during solemn vows.',
  },
  {
    q: 'What if I have dietary restrictions or allergies?',
    a: 'Please notify us in your RSVP response so our catering team can prepare a custom meal for you.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-pinyon text-3xl text-[#FCEABB] block">Information for Guests</span>
        <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
      </div>
      <FaqAccordion items={faqItems} />
    </section>
  );
}

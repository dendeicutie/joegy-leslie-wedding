import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="glass-card rounded-xl border border-[#D4AF37]/20 overflow-hidden">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full p-5 text-left font-playfair text-lg text-[#FFFCF7] font-semibold flex justify-between items-center hover:text-[#FCEABB] transition"
          >
            <span>{item.q}</span>
            {openIdx === idx
              ? <ChevronUp className="w-5 h-5 text-[#FCEABB]" />
              : <ChevronDown className="w-5 h-5 text-[#FCEABB]" />
            }
          </button>
          {openIdx === idx && (
            <div className="p-5 pt-0 font-sans text-sm text-[#FFFCF7]/80 leading-relaxed border-t border-[#D4AF37]/10">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

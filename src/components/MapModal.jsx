import { X, MapPin } from 'lucide-react';

export default function MapModal({ venue, onClose }) {
  if (!venue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card-light text-[#031A1C] max-w-lg w-full rounded-2xl p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#031A1C]/60 hover:text-[#031A1C]"
        >
          <X className="w-6 h-6" />
        </button>

        <span className="text-xs font-cinzel text-[#B3924E] font-bold uppercase tracking-widest">
          {venue.title}
        </span>
        <h3 className="font-playfair text-2xl font-bold my-1">{venue.name}</h3>
        <p className="text-xs font-sans text-[#031A1C]/80 mb-4">{venue.address}</p>

        <div className="w-full h-64 bg-[#0F383B]/10 rounded-xl overflow-hidden border border-[#D4AF37]/30 flex flex-col items-center justify-center p-6 text-center">
          <MapPin className="w-12 h-12 text-[#D4AF37] mb-3" />
          <p className="text-sm font-semibold text-[#031A1C]">Interactive Venue Directions</p>
          <p className="text-xs text-[#031A1C]/70 my-2">
            Click below to open live turn-by-turn navigation in Google Maps or Waze.
          </p>
          <a
            href={venue.mapUrl || `https://www.google.com/maps/search/?api=1&query=${venue.mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 btn-shimmer text-[#031A1C] font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-md"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
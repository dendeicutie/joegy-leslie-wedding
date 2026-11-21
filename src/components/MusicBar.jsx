import { Volume2, VolumeX } from 'lucide-react';

export default function MusicBar({ isPlaying, onToggle }) {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 bg-[#0F383B]/90 border border-[#D4AF37]/40 backdrop-blur-md px-4 py-2.5 rounded-full shadow-2xl">
      <button
        onClick={onToggle}
        className="p-2 rounded-full bg-[#D4AF37] text-[#031A1C] hover:bg-[#FCEABB] transition"
        title={isPlaying ? 'Mute Background Music' : 'Play Ambient Music'}
      >
        {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
      </button>
      <span className="text-xs font-sans tracking-wider text-[#FCEABB] hidden sm:inline">
        {isPlaying ? 'Tahanan - El Manu (Piano)' : 'Music Off'}
      </span>
      {isPlaying && (
        <div className="flex gap-1 items-end h-4">
          <span className="w-1 bg-[#FCEABB] h-full animate-pulse" />
          <span className="w-1 bg-[#D4AF37] h-2 animate-bounce" />
          <span className="w-1 bg-[#FCEABB] h-3 animate-pulse" />
        </div>
      )}
    </div>
  );
}

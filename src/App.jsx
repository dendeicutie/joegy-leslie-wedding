import GiftsSection from './components/GiftsSection';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle } from 'lucide-react';

import { audioSynth } from './utils/audioSynth';
import EnvelopeScreen from './components/EnvelopeScreen';
import Navbar from './components/Navbar';
import MusicBar from './components/MusicBar';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import VenuesSection from './components/VenuesSection';
import EntourageSection from './components/EntourageSection';
import ScheduleSection from './components/ScheduleSection';
import DressCodeSection from './components/DressCodeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import RsvpModal from './components/RsvpModal';
import MapModal from './components/MapModal';

export default function App() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [siteRevealed, setSiteRevealed] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    audioSynth.setOnStateChange((playing) => {
      setIsPlayingAudio(playing);
    });
  }, []);

  const handleOpenEnvelope = () => {
    setEnvelopeOpen(true);
    const playing = audioSynth.toggle();
    setIsPlayingAudio(playing);

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FCEABB', '#0F383B', '#FFFFFF'],
    });

    setTimeout(() => {
      setSiteRevealed(true);
    }, 3400);
  };

  const toggleAudio = () => {
    const playing = audioSynth.toggle();
    setIsPlayingAudio(playing);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleVenueClick = (venueData) => {
    setSelectedVenue(venueData);
    setIsMapModalOpen(true);
  };

  if (!siteRevealed) {
    return <EnvelopeScreen envelopeOpen={envelopeOpen} onOpen={handleOpenEnvelope} />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#031A1C] text-[#FFFCF7]">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#D4AF37] text-[#031A1C] px-6 py-3 rounded-xl shadow-2xl font-semibold flex items-center gap-3 animate-bounce">
          <CheckCircle className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      <MusicBar isPlaying={isPlayingAudio} onToggle={toggleAudio} />
      <Navbar onRsvpOpen={() => setIsRsvpOpen(true)} />
      <HeroSection onRsvpOpen={() => setIsRsvpOpen(true)} />
      <StorySection />
      <VenuesSection onVenueClick={handleVenueClick} />
      <EntourageSection />
      <ScheduleSection />
      <DressCodeSection />
      <GiftsSection />
      <FaqSection />
      <Footer />

      {/* Modals */}
      {isRsvpOpen && (
        <RsvpModal onClose={() => setIsRsvpOpen(false)} showToast={showToast} />
      )}
      {isMapModalOpen && selectedVenue && (
        <MapModal venue={selectedVenue} onClose={() => setIsMapModalOpen(false)} />
      )}
    </div>
  );
}
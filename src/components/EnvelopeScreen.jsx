import { useState } from 'react';

export default function EnvelopeScreen({ envelopeOpen, onOpen }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const isOpened = envelopeOpen || isAnimating;

  // Rounded, continuous heart loop centered around "Joegy & Leslie" (220, 150)
  const flightPath =
    'M -90,340 C 30,305 165,265 245,205 C 325,145 290,72 220,118 C 150,72 115,145 195,205 C 265,255 390,120 530,-95';

  const handleSealClick = () => {
    if (isOpened) return;
    setIsAnimating(true);

    // Wait for the 3.2s airplane flight to finish completely before transitioning to the main invitation
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 3400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#031A1C] via-[#0F383B] to-black overflow-hidden px-4">
      {/* Keyframes for drawing the dashed flight trail */}
      <style>{`
        @keyframes drawFlightTrail {
          0% {
            stroke-dashoffset: 1150;
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        .flight-trail-animate {
          stroke-dasharray: 6 6;
          animation: drawFlightTrail 3.2s cubic-bezier(0.35, 0, 0.25, 1) forwards;
        }
      `}</style>

      {/* Background glow blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8C3B9]/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
      </div>

      <div className="text-center max-w-lg w-full flex flex-col items-center z-10 pt-8">
        <p className="font-pinyon text-3xl md:text-4xl text-[#FCEABB] mb-2 animate-bounce">
          You are cordially invited to
        </p>
        <h1 className="font-cinzel text-xl md:text-2xl tracking-[0.2em] text-[#FFFCF7] uppercase mb-32 md:mb-36">
          The Wedding Celebration of
        </h1>

        {/* Envelope Wrapper */}
        <div className="envelope-wrapper w-full max-w-md my-4 relative">
          {/* Animated Airplane & Heart Flight Path Overlay */}
          {isOpened && (
            <svg
              viewBox="0 0 440 300"
              className="absolute -inset-x-12 -inset-y-16 w-[calc(100%+6rem)] h-[calc(100%+8rem)] pointer-events-none z-40 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <filter id="planeGlow" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FCEABB" floodOpacity="0.7" />
                </filter>
              </defs>

              {/* Origin Pin Dot at Lower-Left */}
              <g transform="translate(-90, 340)">
                <circle r="7" fill="none" stroke="#FCEABB" strokeWidth="1.5" opacity="0.85" />
                <circle r="3.2" fill="#FFFCF7" />
              </g>

              {/* Dashed Flight Path with Rounded Heart Loop */}
              <path
                d={flightPath}
                fill="none"
                stroke="#FCEABB"
                strokeWidth="2.2"
                strokeLinecap="round"
                pathLength="1150"
                className="flight-trail-animate"
              />

              {/* Airplane Group Locked to Path & Auto-Rotating Along Tangent */}
              <g filter="url(#planeGlow)">
                {/* Native SVG motion along the exact path with automatic directional banking */}
                <animateMotion
                  dur="3.2s"
                  repeatCount="1"
                  fill="freeze"
                  rotate="auto"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.35 0 0.25 1"
                  path={flightPath}
                />

                {/* Smooth fade-in and fade-out at start/end of flight */}
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.08;0.9;1"
                  dur="3.2s"
                  fill="freeze"
                />

                {/* Detailed Airplane Silhouette Oriented Along +X (Forward Direction) */}
                <path
                  d="M 18,0 C 18,-1.6 15,-2.8 11,-2.8 L 3,-2.8 L -5,-15 L -8.5,-15 L -3.5,-2.8 L -11,-2.8 L -14.5,-7.5 L -17,-7.5 L -15,0 L -17,7.5 L -14.5,7.5 L -11,2.8 L -3.5,2.8 L -8.5,15 L -5,15 L 3,2.8 L 11,2.8 C 15,2.8 18,1.6 18,0 Z"
                  fill="#FFFCF7"
                  transform="scale(1.25)"
                />
              </g>
            </svg>
          )}

          <div
            className={`envelope relative bg-[#0F383B] border-2 border-[#D4AF37]/40 rounded-xl shadow-2xl overflow-visible transition-transform duration-700 ${
              isOpened ? 'scale-105' : 'hover:scale-[1.02]'
            }`}
          >
            {/* Top Flap */}
            <div
              className={`envelope-flap absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#1A5054] to-[#0F383B] border-b-2 border-[#D4AF37]/50 rounded-t-xl flex items-center justify-center ${
                isOpened ? 'open' : ''
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />

            {/* Envelope Body */}
            <div className="p-8 md:p-10 text-center min-h-[260px] flex flex-col justify-center items-center bg-gradient-to-b from-[#0F383B]/90 to-[#031A1C]">
              <div className="border border-[#D4AF37]/30 p-6 rounded-lg w-full bg-[#031A1C]/60 backdrop-blur-md">
                <span className="font-cinzel text-xs tracking-widest text-[#FCEABB] uppercase block mb-1" />
                <h2
                  className={`font-playfair text-2xl md:text-3xl gold-gradient-text font-bold my-2 transition-all duration-1000 delay-500 transform ${
                    isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  Joegy &amp; Leslie
                </h2>
                <p className="font-sans text-xs tracking-widest text-[#FFFCF7]/80 uppercase mt-2" />
              </div>
            </div>

            {/* Wax Seal Button */}
            <div
              className={`absolute top-28 left-1/2 -translate-x-1/2 z-30 transition-all duration-500 ${
                isOpened ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
              }`}
            >
              <button
                onClick={handleSealClick}
                disabled={isOpened}
                className="wax-seal group w-20 h-20 rounded-full bg-gradient-to-tr from-[#8A6D2B] via-[#D4AF37] to-[#FCEABB] p-1 cursor-pointer flex items-center justify-center focus:outline-none transition-transform active:scale-95"
                title="Click to Open Invitation"
              >
                <div className="w-full h-full rounded-full border-2 border-[#031A1C]/40 bg-gradient-to-br from-[#B3924E] to-[#D4AF37] flex items-center justify-center shadow-inner p-2 overflow-hidden">
                  <img
                    src="/logowhite.png"
                    alt="Joegy & Leslie Monogram"
                    className="w-full h-full object-contain brightness-50 contrast-150 drop-shadow-sm pointer-events-none"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs font-sans tracking-widest text-[#FCEABB]/70 uppercase mt-8 animate-pulse">
          ✨ Click wax seal to open ✨
        </p>
      </div>
    </div>
  );
}
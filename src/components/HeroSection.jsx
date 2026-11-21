import CountdownTimer from './CountdownTimer';

export default function HeroSection({ onRsvpOpen }) {
  // Smooth landing curve coming in from the upper-left and settling right beside "Nuptials"
  const landingPath = 'M -150,-85 C -95,-75 -55,-20 0,0';

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 text-center overflow-hidden"
    >
      {/* Keyframes for drawing the dashed landing trail */}
      <style>{`
        @keyframes drawHeroLandingTrail {
          0% {
            stroke-dashoffset: 240;
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.9;
          }
        }

        .hero-landing-trail {
          stroke-dasharray: 5 5;
          animation: drawHeroLandingTrail 1.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0F383B_0%,_#031A1C_60%,_black_100%)] opacity-80 pointer-events-none" />

      {/* Decorative Gold Frame */}
      <div className="relative z-10 max-w-4xl mx-auto p-6 sm:p-8 md:p-14 border border-[#D4AF37]/30 rounded-2xl glass-card">
        <div className="inline-block border-b border-[#D4AF37]/50 pb-2 mb-6">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.3em] text-[#FCEABB] uppercase">
            Save the Date
          </span>
        </div>

        <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-normal leading-tight gold-gradient-text my-4">
          Hequibal{' '}
          <span className="font-pinyon text-5xl md:text-7xl text-[#E8C3B9] font-normal lowercase tracking-normal">
            &amp;
          </span>{' '}
          Marquez
        </h1>

        {/* Responsive Flex Row: Couple Illustration under "Hequibal" + Centered "Nuptials" */}
        <div className="my-2 sm:my-4 flex items-center justify-between gap-2 sm:gap-4">
          {/* Left Slot: Small Couple Illustration directly under "Hequibal" */}
          <div className="flex-1 flex justify-center sm:justify-end pr-1 sm:pr-4">
            <img
              src="/picture.png"
              alt="Joegy and Leslie"
              className="w-20 sm:w-28 md:w-36 h-auto object-contain object-bottom drop-shadow-[0_6px_14px_rgba(0,0,0,0.55)] pointer-events-none select-none -mt-3 sm:-mt-5"
            />
          </div>

          {/* Center Slot: "Nuptials" + Original Landing Plane */}
          <div className="shrink-0 flex justify-center">
            <p className="relative inline-block font-pinyon text-4xl md:text-6xl text-[#FFFCF7]/90">
              Nuptials

              {/* Landing Airplane & Dashed Trail Parked Right Beside "Nuptials" */}
              <svg
                viewBox="-160 -100 190 130"
                className="absolute -right-9 md:-right-12 top-1/2 -translate-y-1/2 w-36 md:w-44 h-24 md:h-28 pointer-events-none overflow-visible"
                aria-hidden="true"
              >
                <defs>
                  <filter id="heroPlaneGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feDropShadow
                      dx="0"
                      dy="2"
                      stdDeviation="2.5"
                      floodColor="#FCEABB"
                      floodOpacity="0.7"
                    />
                  </filter>
                </defs>

                {/* Dashed Landing Trail */}
                <path
                  d={landingPath}
                  fill="none"
                  stroke="#FCEABB"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength="240"
                  className="hero-landing-trail"
                />

                {/* Same Airplane Silhouette Gliding In & Landing */}
                <g filter="url(#heroPlaneGlow)" opacity="0">
                  <animateMotion
                    dur="1.8s"
                    begin="0.25s"
                    repeatCount="1"
                    fill="freeze"
                    rotate="auto"
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.22 1 0.36 1"
                    path={landingPath}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1"
                    keyTimes="0;0.15;1"
                    dur="1.8s"
                    begin="0.25s"
                    fill="freeze"
                  />
                  <path
                    d="M 18,0 C 18,-1.6 15,-2.8 11,-2.8 L 3,-2.8 L -5,-15 L -8.5,-15 L -3.5,-2.8 L -11,-2.8 L -14.5,-7.5 L -17,-7.5 L -15,0 L -17,7.5 L -14.5,7.5 L -11,2.8 L -3.5,2.8 L -8.5,15 L -5,15 L 3,2.8 L 11,2.8 C 15,2.8 18,1.6 18,0 Z"
                    fill="#FFFCF7"
                    transform="scale(0.85)"
                  />
                </g>
              </svg>
            </p>
          </div>

          {/* Right Spacer Slot: Keeps "Nuptials" dead-center on all screen sizes */}
          <div className="flex-1" aria-hidden="true" />
        </div>

        <div className="my-8 flex items-center justify-center gap-4 text-[#FCEABB] font-cinzel tracking-widest text-sm md:text-base">
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
          <span>DECEMBER 22, 2026</span>
          <span className="h-[1px] w-12 bg-[#D4AF37]/50" />
        </div>

        <CountdownTimer targetDate="2026-12-22T14:00:00" />

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={onRsvpOpen}
            className="btn-shimmer text-[#031A1C] font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition"
          >
            Confirm Attendance
          </button>
          <a
            href="#venues"
            className="border border-[#D4AF37]/60 hover:bg-[#D4AF37]/10 text-[#FCEABB] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest transition"
          >
            View Venues
          </a>
        </div>
      </div>
    </section>
  );
}
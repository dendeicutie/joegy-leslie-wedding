import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-xl mx-auto my-6">
      {[
        { label: 'Days', val: timeLeft.days },
        { label: 'Hours', val: timeLeft.hours },
        { label: 'Minutes', val: timeLeft.minutes },
        { label: 'Seconds', val: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="glass-card p-3 md:p-4 rounded-xl text-center border border-gold-primary/30">
          <span className="font-cinzel text-2xl md:text-4xl font-bold text-[#FCEABB] block">
            {String(item.val).padStart(2, '0')}
          </span>
          <span className="text-[10px] md:text-xs font-sans text-[#FFFCF7]/80 uppercase tracking-widest">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

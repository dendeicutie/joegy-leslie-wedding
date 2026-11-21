import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate = '2026-12-22T14:00:00+08:00' }) {
  const parseTargetTime = (dateInput) => {
    if (typeof dateInput === 'string' && !dateInput.includes('+') && !dateInput.endsWith('Z')) {
      const normalized = dateInput.includes('T') ? `${dateInput}+08:00` : `${dateInput}T00:00:00+08:00`;
      return new Date(normalized).getTime();
    }
    return new Date(dateInput).getTime();
  };

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = parseTargetTime(targetDate) - now;

    if (isNaN(distance) || distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-6 max-w-xl mx-auto my-6">
      {[
        { label: 'Days', val: timeLeft.days },
        { label: 'Hours', val: timeLeft.hours },
        { label: 'Minutes', val: timeLeft.minutes },
        { label: 'Seconds', val: timeLeft.seconds },
      ].map((item, idx) => (
        <div
          key={idx}
          className="glass-card px-1 py-2.5 sm:p-3 md:p-4 rounded-xl flex flex-col items-center justify-center text-center border border-gold-primary/30 min-w-0"
        >
          <span className="font-cinzel text-xl sm:text-2xl md:text-4xl font-bold text-[#FCEABB] leading-tight">
            {String(item.val).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs font-sans text-[#FFFCF7]/80 uppercase tracking-wider sm:tracking-widest truncate max-w-full">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
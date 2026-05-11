import React, { useState, useEffect } from 'react';

const CAMP_START = new Date('2026-08-04T09:00:00');

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = CAMP_START.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState<TimeLeft>(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Minutes' },
    { value: time.seconds, label: 'Seconds' },
  ];

  return (
    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', margin: '24px 0' }}>
      {units.map(u => (
        <div
          key={u.label}
          style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', borderRadius: 12, padding: '12px 20px', minWidth: 72, textAlign: 'center' }}
        >
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
            {String(u.value).padStart(2, '0')}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

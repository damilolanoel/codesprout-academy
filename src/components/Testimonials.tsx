import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(i => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setActive(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive(i => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      {/* Stars */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        {'★★★★★'.split('').map((s, i) => (
          <span key={i} style={{ color: '#fbbf24', fontSize: 20, letterSpacing: 2 }}>{s}</span>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32 }}
          className="card"
          style={{ padding: 'clamp(28px, 5vw, 48px)', position: 'relative', textAlign: 'left' }}
        >
          {/* Quote mark */}
          <div style={{ position: 'absolute', top: 24, left: 36, fontSize: 72, color: '#e1f5ee', fontFamily: 'Georgia, serif', lineHeight: 1, userSelect: 'none', fontWeight: 900 }}>
            "
          </div>

          <p style={{ fontSize: '1.12rem', color: '#333', lineHeight: 1.85, fontStyle: 'italic', marginBottom: 28, position: 'relative', zIndex: 1, paddingTop: 20 }}>
            {t.quote}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: t.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, flexShrink: 0, fontFamily: 'Space Grotesk, sans-serif' }}>
              {t.initials}
            </div>
            <div>
              <div style={{ fontWeight: 800, color: '#0f1a14', fontSize: 15 }}>{t.name}</div>
              <div style={{ color: '#777', fontSize: 13 }}>{t.role}</div>
              <div style={{ display: 'inline-block', marginTop: 4, background: t.color + '18', color: t.color, fontSize: 11, fontWeight: 700, padding: '2px 10px', borderRadius: 20 }}>
                {t.programme}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 24 }}>
        <button
          onClick={prev}
          aria-label="Previous"
          style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #1D9E75', background: '#fff', color: '#1D9E75', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}
        >
          ‹
        </button>
        <div style={{ display: 'flex', gap: 8 }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{
                width: i === active ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? '#1D9E75' : '#d1d5db',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid #1D9E75', background: '#fff', color: '#1D9E75', cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}
        >
          ›
        </button>
      </div>
    </div>
  );
}

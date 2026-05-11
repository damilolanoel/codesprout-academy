import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What age range does CodeSprout cater to?',
    a: 'We accept children aged 7 to 17. Our programmes are split into three age-matched tracks: Juniors (7–10), Builders (11–14), and Innovators (14–17), so every child learns at the right pace with peers of similar ability.',
  },
  {
    q: 'Does my child need any prior coding experience?',
    a: 'Absolutely not. All our programmes start from zero. The Juniors track uses visual, block-based coding (Scratch) specifically designed for complete beginners. Even our Innovators track begins with fundamentals before advancing.',
  },
  {
    q: 'What does my child actually build by the end of the programme?',
    a: 'Juniors complete animated stories and simple games. Builders finish a personal website and a small robotics project. Innovators deploy a working web or no-code application they can add to a portfolio. Every child leaves with something real.',
  },
  {
    q: 'What are the class sizes and how often do sessions run?',
    a: 'We cap every class at 15 students to ensure each child gets individual attention. Regular term programmes run once or twice a week. Summer Camp runs Monday–Friday, 9am–2pm, for the full month of August.',
  },
  {
    q: 'How does payment work? Are there instalment options?',
    a: 'Full payment is required to confirm a spot. We accept bank transfer and card payments. Early-bird registrations before June 30 receive a discount on the Summer Camp fee. Contact us to discuss term payment for multi-sibling families.',
  },
  {
    q: 'What happens at the free demo class?',
    a: 'After you register, we invite your child to a free 45-minute taster session. They will work through a mini-project alongside our instructor so you can see exactly how we teach before committing to the full programme. No pressure and no obligation.',
  },
  {
    q: 'Where are classes held?',
    a: 'Our learning centre is based in Lagos. All regular term classes are in-person. We do not currently offer online-only programmes for children — we believe hands-on, in-room learning produces better outcomes for this age group.',
  },
  {
    q: 'Will I get updates on my child\'s progress?',
    a: 'Yes. We send parents a brief progress update every fortnight during term programmes. Summer Camp parents receive daily WhatsApp check-ins. The final project showcase is a family event where children present their work.',
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: '#f0faf5' }}>
      <div className="section">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="tag">Common Questions</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: '#0f1a14', fontFamily: 'Space Grotesk, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: '#555', marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
            Everything parents want to know before enrolling.
          </p>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="card"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', gap: 16 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0f1a14', lineHeight: 1.5, margin: 0 }}>
                  {faq.q}
                </h3>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ width: 24, height: 24, borderRadius: '50%', background: open === i ? '#1D9E75' : '#e1f5ee', color: open === i ? '#fff' : '#1D9E75', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ padding: '0 24px 20px', color: '#555', fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

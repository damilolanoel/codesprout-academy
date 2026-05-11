import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';

interface FAQAccordionProps {
  items?: typeof FAQS;
  limit?: number;
}

export default function FAQAccordion({ items = FAQS, limit }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const displayed = limit ? items.slice(0, limit) : items;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {displayed.map((faq, i) => (
        <div
          key={i}
          className="card card-static"
          style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', border: open === i ? '1.5px solid #1D9E75' : '1px solid #e0ede8', boxShadow: open === i ? '0 0 0 4px rgba(29,158,117,0.07)' : 'none', transition: 'border-color 0.2s, box-shadow 0.2s' }}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '20px 24px', gap: 16 }}>
            <h3 style={{ fontWeight: 700, fontSize: 15, color: '#0f1a14', lineHeight: 1.5, margin: 0, flex: 1 }}>
              {faq.q}
            </h3>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.22 }}
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: open === i ? '#1D9E75' : '#f0faf5',
                color: open === i ? '#fff' : '#1D9E75',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 300,
                flexShrink: 0,
                lineHeight: 1,
              }}
            >
              +
            </motion.div>
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.26 }}
                style={{ overflow: 'hidden' }}
              >
                <p style={{ padding: '0 24px 22px', color: '#555', fontSize: 14, lineHeight: 1.85, margin: 0, borderTop: '1px solid #f0faf5' }}>
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

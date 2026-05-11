import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const G = '#1D9E75';

interface MobileNavProps {
  logo: string;
  cta: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ logo, cta }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // Focus first link when menu opens
      setTimeout(() => {
        const firstLink = menuRef.current?.querySelector('a');
        firstLink?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
      // Return focus to button when menu closes
      buttonRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  const links = [
    { href: '#programmes', label: 'Programmes' },
    { href: '#camp', label: 'Summer Camp' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="flex items-center gap-3 md:hidden">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ width: 24, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ display: 'block', height: 2, background: open ? G : '#333', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} aria-hidden="true" />
          <span style={{ display: 'block', height: 2, background: open ? 'transparent' : '#333', borderRadius: 2, transition: 'all 0.3s' }} aria-hidden="true" />
          <span style={{ display: 'block', height: 2, background: open ? G : '#333', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} aria-hidden="true" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            id="mobile-nav-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#fff', zIndex: 200, display: 'flex', flexDirection: 'column', padding: '24px', overflowY: 'auto' }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, background: G, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🌱</div>
                <span style={{ fontWeight: 800, fontSize: 18, color: '#0f6e56', fontFamily: 'Space Grotesk, sans-serif' }}>{logo}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: '#555', padding: '8px', minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ✕
              </button>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 700, fontSize: 22, padding: '16px 12px', borderBottom: '1px solid #f0faf5', display: 'block', borderRadius: '8px', transition: 'background 0.2s' }}
                  onMouseOver={(e) => (e.currentTarget.style.background = '#f0faf5')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                  onFocus={(e) => (e.currentTarget.style.background = '#f0faf5')}
                  onBlur={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setOpen(false)}
              style={{ background: G, color: '#fff', padding: '16px', borderRadius: 50, fontWeight: 800, fontSize: 16, textDecoration: 'none', textAlign: 'center', marginTop: 24, minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#0f6e56')}
              onMouseOut={(e) => (e.currentTarget.style.background = G)}
            >
              {cta}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;

import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, NAV_LINKS, COLORS } from '../constants';

const G = COLORS.brand;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'transparent' : '#e8f5ef',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
          transition: 'box-shadow 0.25s, border-color 0.25s, background 0.25s',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                background: `linear-gradient(135deg, ${G}, #4ade80)`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              🌱
            </div>
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: 17,
                color: COLORS.brandDark,
                letterSpacing: '-0.02em',
              }}
            >
              {SITE.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map(link => {
              if (link.children) {
                return (
                  <div key={link.label} ref={dropdownRef} style={{ position: 'relative' }}>
                    <button
                      onClick={() => setDropdownOpen(o => !o)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '8px 12px',
                        borderRadius: 8,
                        fontFamily: 'Nunito, sans-serif',
                        fontWeight: 700,
                        fontSize: 14,
                        color: isActive(link.to) ? G : '#444',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={() => setDropdownOpen(true)}
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{
                          transform: dropdownOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
                        }}
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          onMouseLeave={() => setDropdownOpen(false)}
                          style={{
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            background: '#fff',
                            borderRadius: 14,
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                            border: '1px solid #e8f5ef',
                            padding: 8,
                            minWidth: 240,
                            zIndex: 200,
                          }}
                        >
                          {link.children.map(child => (
                            <Link
                              key={child.to}
                              to={child.to}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '10px 14px',
                                borderRadius: 9,
                                textDecoration: 'none',
                                color: '#0f1a14',
                                fontWeight: 700,
                                fontSize: 14,
                                transition: 'background 0.15s',
                              }}
                              onMouseEnter={e =>
                                (e.currentTarget.style.background = '#f0faf5')
                              }
                              onMouseLeave={e =>
                                (e.currentTarget.style.background = 'transparent')
                              }
                            >
                              <span>{child.label}</span>
                              <span
                                style={{
                                  fontSize: 11,
                                  fontWeight: 600,
                                  color: '#888',
                                  background: '#f0f0f0',
                                  padding: '2px 8px',
                                  borderRadius: 10,
                                }}
                              >
                                {child.age}
                              </span>
                            </Link>
                          ))}
                          <div style={{ borderTop: '1px solid #f0faf5', margin: '6px 0' }} />
                          <Link
                            to="/programmes"
                            style={{
                              display: 'block',
                              padding: '10px 14px',
                              borderRadius: 9,
                              textDecoration: 'none',
                              color: G,
                              fontWeight: 700,
                              fontSize: 13,
                            }}
                            onMouseEnter={e =>
                              (e.currentTarget.style.background = '#f0faf5')
                            }
                            onMouseLeave={e =>
                              (e.currentTarget.style.background = 'transparent')
                            }
                          >
                            View all programmes →
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.label === 'Contact') return null;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: 14,
                    color: isActive(link.to) ? G : '#444',
                    position: 'relative',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = G)}
                  onMouseLeave={e =>
                    (e.currentTarget.style.color = isActive(link.to) ? G : '#444')
                  }
                >
                  {link.label}
                  {isActive(link.to) && (
                    <span style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 18, height: 2.5, background: G, borderRadius: 2, display: 'block' }} />
                  )}
                </Link>
              );
            })}
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginLeft: 8 }}>
              Register Now
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: mobileOpen ? (i === 1 ? 'transparent' : G) : '#333',
                  borderRadius: 2,
                  transition: 'all 0.28s',
                  transform:
                    mobileOpen
                      ? i === 0
                        ? 'rotate(45deg) translate(5px, 5px)'
                        : i === 2
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none'
                      : 'none',
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.26 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#fff',
              zIndex: 150,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
            }}
          >
            {/* Mobile header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${G}, #4ade80)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  🌱
                </div>
                <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 17, color: COLORS.brandDark }}>
                  {SITE.name}
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close"
                style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#555' }}
              >
                ✕
              </button>
            </div>

            {/* Mobile links */}
            <nav style={{ flex: 1 }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 0',
                      borderBottom: '1px solid #f0faf5',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: 20,
                      color: isActive(link.to) ? G : '#1a1a1a',
                    }}
                  >
                    {link.label}
                    {link.children && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {link.children && (
                    <div style={{ paddingLeft: 12, paddingBottom: 8 }}>
                      {link.children.map(child => (
                        <Link
                          key={child.to}
                          to={child.to}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: 15,
                            color: '#555',
                          }}
                        >
                          {child.label}
                          <span style={{ fontSize: 11, color: '#aaa', background: '#f0f0f0', padding: '2px 8px', borderRadius: 10 }}>{child.age}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 16 }}>
                Register Now
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', borderRadius: 100, border: '2px solid #25D366', color: '#25D366', fontWeight: 700, fontSize: 15, textDecoration: 'none' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

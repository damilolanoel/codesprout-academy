import { Link } from 'react-router-dom';
import { SITE, COLORS } from '../constants';

const G = COLORS.brand;

const FOOTER_COLS = [
  {
    heading: 'Programmes',
    links: [
      { label: 'Juniors (7–10)', to: '/programmes#juniors' },
      { label: 'Builders (11–14)', to: '/programmes#builders' },
      { label: 'Innovators (14–17)', to: '/programmes#innovators' },
      { label: 'Summer Camp 2026', to: '/summer-camp' },
    ],
  },
  {
    heading: 'Academy',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Approach', to: '/about#approach' },
      { label: 'Our Team', to: '/about#team' },
      { label: 'FAQ', to: '/contact#faq' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: SITE.phone, to: `tel:${SITE.phone}` },
      { label: SITE.email, to: `mailto:${SITE.email}` },
      { label: 'Victoria Island, Lagos', to: '#' },
      { label: 'WhatsApp Us', to: `https://wa.me/${SITE.whatsapp}` },
    ],
  },
];

const SOCIAL = [
  {
    label: 'Instagram',
    href: SITE.social.instagram,
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'Facebook',
    href: SITE.social.facebook,
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    label: 'Twitter',
    href: SITE.social.twitter,
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    href: SITE.social.linkedin,
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Footer() {
  return (
    <footer style={{ background: COLORS.brandDeep, color: 'rgba(255,255,255,0.80)', paddingTop: 64, paddingBottom: 32 }}>
      <div className="container">
        {/* CTA Strip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, paddingBottom: 56, marginBottom: 56, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#fff', marginBottom: 6, lineHeight: 1.25 }}>
              Ready to give your child a head start in tech?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, margin: 0 }}>
              Free demo class — no commitment, no pressure.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Book a Free Demo Class →
          </Link>
        </div>

        {/* Top section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 40, marginBottom: 56 }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${G}, #4ade80)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                🌱
              </div>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff' }}>
                {SITE.name}
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', marginBottom: 24, maxWidth: 220 }}>
              {SITE.tagline}
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.68)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = G;
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18 }}>
                {col.heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.to.startsWith('/') ? (
                      <Link
                        to={link.to}
                        style={{ color: 'rgba(255,255,255,0.82)', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'color 0.2s' }}
                        onMouseOver={e => (e.currentTarget.style.color = '#4ade80')}
                        onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.to}
                        target={link.to.startsWith('https') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ color: 'rgba(255,255,255,0.82)', textDecoration: 'none', fontSize: 14, fontWeight: 600, transition: 'color 0.2s' }}
                        onMouseOver={e => (e.currentTarget.style.color = '#4ade80')}
                        onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0 }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Use'].map(l => (
              <a
                key={l}
                href="#"
                style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, textDecoration: 'none' }}
                onMouseOver={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import FAQAccordion from '../components/FAQAccordion';
import { SITE, FAQS } from '../constants';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const INFO_CARDS = [
  {
    icon: '📍',
    label: 'Our Location',
    lines: [SITE.address],
    sub: 'In-person classes only',
  },
  {
    icon: '📞',
    label: 'Call / WhatsApp',
    lines: [SITE.phone],
    sub: 'Mon–Sat, 8am–6pm',
    href: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`,
    hrefLabel: 'Open WhatsApp',
  },
  {
    icon: '✉️',
    label: 'Email Us',
    lines: [SITE.email],
    sub: 'We reply within 24 hours',
    href: `mailto:${SITE.email}`,
    hrefLabel: 'Send Email',
  },
  {
    icon: '🕐',
    label: 'Office Hours',
    lines: ['Mon – Fri: 8am – 6pm', 'Saturday: 9am – 3pm'],
    sub: 'Walk-ins welcome',
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(140deg, #0a4a38 0%, #0f6e56 40%, #1D9E75 100%)',
          padding: '96px 24px 72px',
          textAlign: 'center',
        }}
      >
        <motion.div {...fade()} style={{ maxWidth: 640, margin: '0 auto' }}>
          <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: 20 }}>
            Get In Touch
          </span>
          <h1
            className="display-lg"
            style={{ color: '#fff', marginBottom: 16, fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Register Your Child or Ask Us Anything
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            Fill in the form below and we'll confirm your spot and call you within 24 hours. Or reach us directly — we're friendly.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section style={{ background: '#f0faf5', padding: '60px 24px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20,
            }}
          >
            {INFO_CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                {...fade(i * 0.08)}
                className="card"
                style={{ padding: '28px 24px', textAlign: 'center' }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, color: '#1D9E75', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
                  {card.label}
                </div>
                {card.lines.map(l => (
                  <p key={l} style={{ fontWeight: 700, fontSize: 15, color: '#1a1a1a', margin: '2px 0' }}>{l}</p>
                ))}
                <p style={{ fontSize: 13, color: '#888', marginTop: 6 }}>{card.sub}</p>
                {card.href && (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ display: 'inline-block', marginTop: 12, fontSize: 13, fontWeight: 700, color: '#1D9E75', textDecoration: 'none' }}
                  >
                    {card.hrefLabel} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" style={{ padding: '80px 24px', background: '#fff' }}>
        <div className="container">
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="pill" style={{ marginBottom: 16 }}>Registration</span>
            <h2 className="display-md" style={{ marginBottom: 12 }}>
              Register Your Child
            </h2>
            <p style={{ color: '#555', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Complete the form and we'll confirm your child's spot and call within 24 hours. A free demo class is included.
            </p>
          </motion.div>

          <motion.div {...fade(0.1)}>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Location banner */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0a4a38 0%, #0f6e56 100%)',
          padding: '60px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -60, right: '8%', width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: '5%', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                  📍
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: '#fff', lineHeight: 1.2 }}>
                    Victoria Island, Lagos
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 2 }}>{SITE.address}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 20 }}>
                {[
                  { icon: '🕐', text: 'Mon–Fri: 8am–6pm' },
                  { icon: '🗓', text: 'Sat: 9am–3pm' },
                  { icon: '🚪', text: 'Walk-ins welcome' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600 }}>
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white"
              style={{ flexShrink: 0 }}
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 24px', background: '#f0faf5' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="pill" style={{ marginBottom: 16 }}>Questions</span>
            <h2 className="display-md" style={{ marginBottom: 12 }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
              Can't find an answer? Call us or send a WhatsApp — we reply fast.
            </p>
          </motion.div>
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section style={{ padding: '72px 24px', background: '#fff', textAlign: 'center' }}>
        <motion.div {...fade()} style={{ maxWidth: 560, margin: '0 auto' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
          <h3 className="display-md" style={{ marginBottom: 12 }}>
            Prefer WhatsApp?
          </h3>
          <p style={{ color: '#555', fontSize: 16, marginBottom: 28, lineHeight: 1.7 }}>
            Message us on WhatsApp and we'll respond within the hour during office hours.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    </div>
  );
}

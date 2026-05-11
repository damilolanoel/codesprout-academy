import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        textAlign: 'center',
        background: 'linear-gradient(160deg, #f0faf5 0%, #fff 60%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: 520 }}
      >
        {/* CSS art 404 */}
        <div style={{ position: 'relative', marginBottom: 40 }}>
          <div
            style={{
              fontSize: 'clamp(6rem, 20vw, 10rem)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 900,
              color: '#e1f5ee',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            404
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: 64,
            }}
          >
            🌱
          </div>
        </div>

        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#0f6e56',
            marginBottom: 16,
          }}
        >
          This page is still sprouting!
        </h1>
        <p style={{ color: '#555', fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
          The page you were looking for doesn't exist or may have been moved. Let's get you back to something useful.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary btn-lg">
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg">
            Contact Us
          </Link>
        </div>

        <div style={{ marginTop: 48, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { to: '/programmes', label: 'Programmes' },
            { to: '/summer-camp', label: 'Summer Camp' },
            { to: '/about', label: 'About Us' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{ color: '#1D9E75', fontWeight: 700, textDecoration: 'none', fontSize: 14 }}
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

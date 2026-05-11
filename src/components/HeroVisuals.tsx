import { motion } from 'framer-motion';

export default function HeroVisuals() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ width: '100%', height: 'auto', minHeight: 300, position: 'relative' }}
    >
      {/* Hero SVG Illustration */}
      <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', maxWidth: '100%' }}>
        <defs>
          <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4ade80', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1D9E75', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="deviceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#e1f5ee', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#b2dfdb', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Decorative shapes */}
        <circle cx="100" cy="80" r="60" fill="url(#codeGrad)" opacity="0.15" />
        <circle cx="700" cy="320" r="80" fill="url(#codeGrad)" opacity="0.1" />

        {/* Laptop/Code Editor */}
        <g>
          {/* Screen */}
          <rect x="150" y="80" width="300" height="200" rx="8" fill="url(#deviceGrad)" stroke="#1D9E75" strokeWidth="3" />
          {/* Stand */}
          <rect x="220" y="280" width="160" height="12" rx="6" fill="#1D9E75" />
          <circle cx="240" cy="292" r="8" fill="#0f6e56" />
          <circle cx="380" cy="292" r="8" fill="#0f6e56" />

          {/* Code lines */}
          <line x1="170" y1="110" x2="420" y2="110" stroke="#1D9E75" strokeWidth="2" opacity="0.8" />
          <line x1="170" y1="135" x2="380" y2="135" stroke="#1D9E75" strokeWidth="2" opacity="0.7" />
          <line x1="170" y1="160" x2="410" y2="160" stroke="#4ade80" strokeWidth="2" opacity="0.8" />
          <line x1="170" y1="185" x2="370" y2="185" stroke="#1D9E75" strokeWidth="2" opacity="0.7" />
          <line x1="170" y1="210" x2="400" y2="210" stroke="#1D9E75" strokeWidth="2" opacity="0.6" />
          <line x1="170" y1="235" x2="360" y2="235" stroke="#4ade80" strokeWidth="2" opacity="0.7" />
          <line x1="170" y1="260" x2="390" y2="260" stroke="#1D9E75" strokeWidth="2" opacity="0.6" />
        </g>

        {/* Student with Laptop */}
        <g>
          {/* Head */}
          <circle cx="550" cy="120" r="25" fill="#f4a261" />
          {/* Body */}
          <rect x="535" y="145" width="30" height="50" rx="4" fill="#2563EB" />
          {/* Arms */}
          <line x1="520" y1="160" x2="500" y2="180" stroke="#f4a261" strokeWidth="6" strokeLinecap="round" />
          <line x1="580" y1="160" x2="600" y2="180" stroke="#f4a261" strokeWidth="6" strokeLinecap="round" />
          {/* Legs */}
          <line x1="540" y1="195" x2="535" y2="240" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
          <line x1="560" y1="195" x2="565" y2="240" stroke="#1a1a1a" strokeWidth="6" strokeLinecap="round" />
          {/* Smile */}
          <path d="M 542 125 Q 550 132 558 125" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>

        {/* Floating code blocks */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <rect x="50" y="200" width="80" height="60" rx="4" fill="#1D9E75" opacity="0.8" />
          <text x="60" y="225" fontSize="12" fill="#fff" fontFamily="monospace" fontWeight="bold">
            {'<code>'}
          </text>
          <text x="60" y="245" fontSize="12" fill="#fff" fontFamily="monospace">
            {'build'}
          </text>
        </motion.g>

        <motion.g
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <rect x="680" y="140" width="80" height="60" rx="4" fill="#4ade80" opacity="0.8" />
          <text x="690" y="165" fontSize="12" fill="#fff" fontFamily="monospace" fontWeight="bold">
            {'create'}
          </text>
          <text x="690" y="185" fontSize="12" fill="#fff" fontFamily="monospace">
            {'deploy'}
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

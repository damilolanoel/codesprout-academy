import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COLORS, WHY_CARDS, PROGRAMMES, CAMP, HOW_IT_WORKS, STUDENT_PROJECTS } from '../constants';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';

const G = COLORS.brand;

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const dur = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          setVal(Math.round((1 - Math.pow(1 - t, 3)) * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── Code editor illustration ──────────────────────────────────────────────────
function CodeIllustration() {
  return (
    <div style={{ position: 'relative', maxWidth: 440 }}>
      {/* Glow */}
      <div style={{ position: 'absolute', inset: -40, background: 'radial-gradient(ellipse at 50% 50%, rgba(29,158,117,0.22) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ background: '#0d1f17', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)', position: 'relative' }}>
        {/* Window chrome */}
        <div style={{ background: '#071310', padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
          <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#27c93f', display: 'block' }} />
          <span style={{ marginLeft: 10, background: '#0d1f17', borderRadius: 5, padding: '3px 12px', fontSize: 11, color: '#4ade80', fontFamily: 'monospace', border: '1px solid rgba(255,255,255,0.08)' }}>
            my-adventure.scratch
          </span>
        </div>
        {/* Code area */}
        <div style={{ padding: '22px 24px', fontFamily: 'monospace', fontSize: 13, lineHeight: 2.0 }}>
          <div><span style={{ color: '#9d7dff' }}>when </span><span style={{ color: '#4ade80' }}>🚩 clicked</span></div>
          <div style={{ paddingLeft: 20 }}><span style={{ color: '#fbbf24' }}>repeat </span><span style={{ color: '#fb7185' }}>10</span></div>
          <div style={{ paddingLeft: 40 }}><span style={{ color: '#60a5fa' }}>move </span><span style={{ color: '#fb7185' }}>5 </span><span style={{ color: '#6b7280' }}>steps</span></div>
          <div style={{ paddingLeft: 40 }}><span style={{ color: '#60a5fa' }}>turn </span><span style={{ color: '#fb7185' }}>15 </span><span style={{ color: '#6b7280' }}>degrees</span></div>
          <div style={{ paddingLeft: 20 }}><span style={{ color: '#fbbf24' }}>end</span></div>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 0' }} />
          <div><span style={{ color: '#9d7dff' }}>say </span><span style={{ color: '#4ade80' }}>"I built this!" </span><span style={{ color: '#6b7280' }}>for 2 secs</span></div>
          <div><span style={{ color: '#9d7dff' }}>play sound </span><span style={{ color: '#4ade80' }}>✨ Victory</span></div>
        </div>
        {/* Status bar */}
        <div style={{ padding: '10px 24px', background: '#071310', display: 'flex', alignItems: 'center', gap: 8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'block', flexShrink: 0, boxShadow: '0 0 8px #4ade80' }} />
          <span style={{ color: '#4ade80', fontSize: 11, fontFamily: 'monospace', fontWeight: 600 }}>✓ Running successfully · 0 errors</span>
        </div>
      </div>
      {/* Floating badges */}
      <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -18, right: -22, background: '#fff', borderRadius: 14, padding: '10px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.16)', display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, fontWeight: 800, color: '#071a12', border: '1px solid #f0faf5' }}>
        <span style={{ fontSize: 18 }}>🏆</span> Project Complete!
      </motion.div>
      <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
        style={{ position: 'absolute', bottom: -18, left: -22, background: '#fff', borderRadius: 14, padding: '10px 18px', boxShadow: '0 8px 32px rgba(0,0,0,0.16)', display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, fontWeight: 800, color: '#071a12', border: '1px solid #f0faf5' }}>
        <span style={{ fontSize: 18 }}>🌱</span> Level 3 Coder
      </motion.div>
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
        style={{ position: 'absolute', top: '42%', right: -32, background: `linear-gradient(135deg, ${G}, #0f6e56)`, borderRadius: 14, padding: '9px 16px', boxShadow: '0 8px 28px rgba(29,158,117,0.45)', display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 800, color: '#fff' }}>
        ✓ 15 Students Max
      </motion.div>
    </div>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-gradient dot-pattern" style={{ padding: '100px 24px 88px', overflow: 'hidden', position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center' }}>
      {/* Decorative radial glows */}
      <div style={{ position: 'absolute', top: '5%', right: '-8%', width: 560, height: 560, background: 'radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-6%', width: 480, height: 480, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '45%', left: '38%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ width: '100%', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', alignItems: 'center', gap: 72 }}>
        {/* Text */}
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.22)', marginBottom: 28, backdropFilter: 'blur(8px)' }}>
              🌱 Lagos's #1 Kids Coding Academy
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="display-xl" style={{ color: '#fff', marginBottom: 26 }}>
            Growing<br />Tomorrow's{' '}
            <span className="text-gradient-light">Builders</span>,<br />
            Today.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.28 }} style={{ fontSize: '1.17rem', color: 'rgba(255,255,255,0.80)', maxWidth: 490, lineHeight: 1.82, marginBottom: 42 }}>
            Hands-on coding & technology programmes for Nigerian children aged 7–17. Real skills. Real confidence. Real future.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}>
            <Link to="/summer-camp" className="btn btn-white btn-lg">
              Join Summer Camp 2026 →
            </Link>
            <Link to="/programmes" className="btn btn-ghost btn-lg">
              Explore Programmes
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
              {[
                { value: 450, suffix: '+', label: 'Students Taught' },
                { value: 3,   suffix: '',  label: 'Age-matched Tracks' },
                { value: 15,  suffix: '',  label: 'Max Class Size' },
                { value: 98,  suffix: '%', label: 'Parent Satisfaction' },
              ].map((s, i) => (
                <div key={s.label} style={{ padding: '0 32px', borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.18)' : 'none', paddingLeft: i === 0 ? 0 : 32 }}>
                  <div style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.1rem)', fontWeight: 900, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1, marginBottom: 5 }}>
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, delay: 0.32 }} className="hidden md:block">
          <CodeIllustration />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why CodeSprout ────────────────────────────────────────────────────────────
function WhySection() {
  const nums = ['01', '02', '03', '04'];
  return (
    <section style={{ background: '#fff' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 68 }}>
          <div className="section-label">Why Us</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>Why CodeSprout?</h2>
          <p style={{ color: '#5a7266', maxWidth: 520, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            We don't just teach coding. We build confident, creative problem-solvers ready for a digital Africa.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {WHY_CARDS.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 22 }}>
                <div style={{ width: 58, height: 58, background: 'linear-gradient(135deg, #e4f9f0, #c8f0e0)', borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>
                  {c.icon}
                </div>
                <span style={{ fontSize: 52, fontWeight: 900, color: '#f0fdf8', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1, userSelect: 'none' }}>
                  {nums[i]}
                </span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 17, color: '#071a12', marginBottom: 10, fontFamily: 'Space Grotesk, sans-serif' }}>
                {c.title}
              </h3>
              <p style={{ color: '#5a7266', fontSize: 14, lineHeight: 1.85, margin: 0 }}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Programmes preview ────────────────────────────────────────────────────────
function ProgrammesSection() {
  return (
    <section style={{ background: '#f5fbf8' }} className="dot-pattern-green">
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 68 }}>
          <div className="section-label">Curriculum</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>Our Programmes</h2>
          <p style={{ color: '#5a7266', maxWidth: 490, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            Three age-matched tracks designed to take kids from curious beginners to confident builders.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: 28 }}>
          {PROGRAMMES.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              style={{ borderRadius: 22, overflow: 'hidden', background: '#fff', border: '1px solid rgba(29,158,117,0.13)', boxShadow: '0 2px 12px rgba(29,158,117,0.07), 0 12px 36px rgba(29,158,117,0.05)', transition: 'transform 0.28s cubic-bezier(0.22,0.61,0.36,1), box-shadow 0.28s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-7px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(29,158,117,0.10), 0 24px 56px rgba(29,158,117,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(29,158,117,0.07), 0 12px 36px rgba(29,158,117,0.05)'; }}>
              {/* Coloured header strip */}
              <div style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}0c)`, padding: '26px 28px 22px', borderBottom: `1px solid ${p.color}20` }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ background: p.color, color: '#fff', fontSize: 10, fontWeight: 800, padding: '4px 12px', borderRadius: 100, textTransform: 'uppercase' as const, letterSpacing: 0.9 }}>
                    Ages {p.ageRange}
                  </span>
                  <div style={{ width: 50, height: 50, background: `${p.color}18`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
                    {p.emoji}
                  </div>
                </div>
                <h3 style={{ fontWeight: 900, fontSize: 20, color: '#071a12', fontFamily: 'Space Grotesk, sans-serif', margin: 0, letterSpacing: '-0.01em' }}>{p.name}</h3>
              </div>
              {/* Body */}
              <div style={{ padding: '22px 28px 28px' }}>
                <p style={{ color: '#7a9484', fontSize: 13, fontStyle: 'italic', marginBottom: 16, lineHeight: 1.6 }}>{p.tagline}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 18 }}>
                  {[`🛠 ${p.tool}`, `⏱ ${p.duration}`].map(tag => (
                    <span key={tag} style={{ background: '#f2f8f5', color: '#3a6652', fontSize: 12, padding: '5px 14px', borderRadius: 100, fontWeight: 700 }}>{tag}</span>
                  ))}
                </div>
                <p style={{ color: '#5a7266', fontSize: 14, lineHeight: 1.78, marginBottom: 24 }}>
                  {p.overview.slice(0, 130)}…
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #f0f0f0' }}>
                  <div>
                    <span style={{ fontWeight: 900, color: p.color, fontSize: 22, fontFamily: 'Space Grotesk' }}>{p.price}</span>
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#bbb', marginLeft: 5 }}>{p.priceNote}</span>
                  </div>
                  <Link to={`/programmes#${p.id}`} style={{ background: `${p.color}14`, color: p.color, fontWeight: 800, fontSize: 13, textDecoration: 'none', padding: '8px 18px', borderRadius: 100, transition: 'background 0.2s' }}>
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/programmes" className="btn btn-secondary btn-lg">View All Programme Details</Link>
        </div>
      </div>
    </section>
  );
}

// ─── Summer Camp banner ────────────────────────────────────────────────────────
function CampBanner() {
  return (
    <section className="camp-gradient grid-pattern" style={{ padding: '88px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: 480, height: 480, background: 'radial-gradient(circle, rgba(29,158,117,0.22) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,440px)', alignItems: 'center', gap: 64 }}>
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', marginBottom: 24 }}>
              🌟 Limited Spots Remaining
            </span>
            <h2 className="display-lg" style={{ color: '#fff', marginBottom: 10 }}>Summer Camp 2026</h2>
            <p style={{ color: '#4ade80', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
              📅 {CAMP.displayRange}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 24 }}>{CAMP.schedule}</p>
            <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 460, lineHeight: 1.85, marginBottom: 36, fontSize: 16 }}>
              A full month of coding, building, and creating. Small classes, daily sessions, and a showcase on the final day — all for one flat fee.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">Register Now — {CAMP.price}</Link>
              <Link to="/summer-camp" className="btn btn-ghost btn-lg">See Full Details</Link>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 16 }}>
              Early-bird: {CAMP.earlyBirdPrice} · Register before {CAMP.earlyBirdDeadline}
            </p>
          </motion.div>

          {/* Right: countdown card */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="glass" style={{ padding: '36px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 8 }}>
                Camp Starts In
              </div>
              <CountdownTimer />
              <div style={{ marginTop: 8, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { icon: '👨‍💻', label: 'Max 15 students' },
                    { icon: '📜', label: 'Certificate included' },
                    { icon: '📦', label: 'All materials provided' },
                    { icon: '📲', label: 'Daily parent updates' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '10px 12px' }}>
                      <span style={{ fontSize: 16 }}>{item.icon}</span>
                      <span style={{ color: 'rgba(255,255,255,0.78)', fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorksSection() {
  return (
    <section style={{ background: '#fff' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 68 }}>
          <div className="section-label">Process</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>How It Works</h2>
          <p style={{ color: '#5a7266', maxWidth: 440, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            From first inquiry to graduation day — here's your child's journey with us.
          </p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <div style={{ position: 'absolute', top: 22, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, #dcf5ec, #1D9E75, #0f6e56, #dcf5ec)', borderRadius: 2, pointerEvents: 'none' }} className="hidden md:block" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, position: 'relative' }}>
            {HOW_IT_WORKS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${G}, #0f6e56)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Grotesk', fontWeight: 900, fontSize: 14, boxShadow: '0 6px 20px rgba(29,158,117,0.38), 0 0 0 6px #fff', flexShrink: 0, zIndex: 1, position: 'relative' }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: 17, color: '#071a12', fontFamily: 'Space Grotesk', marginBottom: 10 }}>{s.title}</h3>
                    <p style={{ color: '#5a7266', fontSize: 14, lineHeight: 1.85, maxWidth: 220, margin: '0 auto' }}>{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#f5fbf8', borderRadius: 100, padding: '14px 28px', border: '1px solid #dcf5ec' }}>
            <span style={{ fontSize: 18 }}>🎁</span>
            <span style={{ fontWeight: 700, fontSize: 14, color: '#0a5c45' }}>First session is a free demo class — no commitment required.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Projects gallery ──────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof STUDENT_PROJECTS[0] }) {
  const visuals: Record<string, React.ReactNode> = {
    game: (
      <div style={{ background: '#0f1020', padding: 14, display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 3, minHeight: 80 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} style={{ paddingBottom: '100%', borderRadius: 2, background: [3,4,5,12,13,14,21,22,29,30].includes(i) ? '#4ade80' : i === 10 ? '#ef4444' : 'rgba(255,255,255,0.04)' }} />
        ))}
      </div>
    ),
    website: (
      <div style={{ background: '#f8f9fc', padding: 14, minHeight: 80 }}>
        <div style={{ background: G, height: 5, borderRadius: 2, marginBottom: 8, width: '55%' }} />
        <div style={{ display: 'flex', gap: 5, marginBottom: 10 }}>
          {[38,25,30].map((w, i) => <div key={i} style={{ height: 3, borderRadius: 2, background: '#d1d5db', width: `${w}%` }} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {[1,2,3,4].map(i => <div key={i} style={{ height: 26, borderRadius: 6, background: i % 2 === 0 ? '#dcf5ec' : '#f0faf5' }} />)}
        </div>
      </div>
    ),
    app: (
      <div style={{ background: '#0f1020', padding: 14, color: '#fff', fontFamily: 'monospace', fontSize: 11, minHeight: 80 }}>
        <div style={{ background: '#2563EB', borderRadius: 7, padding: '7px 10px', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700 }}>Lagos</span><span style={{ color: '#93c5fd' }}>32°C ☀</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#6b7280' }}>
          {['Mon','Tue','Wed','Thu','Fri'].map(d => <div key={d} style={{ textAlign: 'center' }}><div>{d}</div><div style={{ color: '#fbbf24', marginTop: 2 }}>☀</div></div>)}
        </div>
      </div>
    ),
    animation: (
      <div style={{ background: 'linear-gradient(to bottom, #1a2f4a, #4a90d9)', position: 'relative', height: 80, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 10, left: '22%', width: 18, height: 18, background: '#fbbf24', borderRadius: '50%', boxShadow: '0 0 12px #fbbf24' }} />
        {[0.08,0.28,0.55,0.78].map((l, i) => <div key={i} style={{ position: 'absolute', top: 12, left: `${l * 100}%`, width: 10 + i * 5, height: 7, background: 'rgba(255,255,255,0.65)', borderRadius: 10 }} />)}
        <div style={{ position: 'absolute', bottom: 4, left: '42%', fontSize: 24 }}>🚀</div>
      </div>
    ),
    robot: (
      <div style={{ background: '#f0faf5', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 34, height: 28, background: G, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
            <div style={{ width: 7, height: 7, background: '#fff', borderRadius: '50%', boxShadow: '0 0 4px #fff' }} />
            <div style={{ width: 7, height: 7, background: '#fff', borderRadius: '50%', boxShadow: '0 0 4px #fff' }} />
          </div>
          <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <div style={{ width: 9, height: 22, background: '#0f6e56', borderRadius: 4 }} />
            <div style={{ width: 24, height: 18, background: G, borderRadius: 5 }} />
            <div style={{ width: 9, height: 22, background: '#0f6e56', borderRadius: 4 }} />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 10, height: 10, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 6px #4ade80' }} />
            <div style={{ width: 10, height: 10, background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 6px #4ade80' }} />
          </div>
        </div>
      </div>
    ),
    dashboard: (
      <div style={{ background: '#f8f9fc', padding: 12, minHeight: 80 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {[['₦12k', '#1D9E75'],['₦8k', '#2563EB'],['₦4k', '#D97706']].map(([v,c]) => (
            <div key={v} style={{ flex: 1, background: c + '15', borderRadius: 7, padding: '6px', textAlign: 'center' as const }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: c as string }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 30 }}>
          {[58,78,42,92,52,68,36].map((h,i) => (
            <div key={i} style={{ flex: 1, background: i === 3 ? G : '#d1fae5', borderRadius: '3px 3px 0 0', height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
  };

  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ background: '#f5f5f7', padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 5, borderBottom: '1px solid #ebebec' }}>
        {['#ff5f56','#ffbd2e','#27c93f'].map(c => <span key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, display: 'block' }} />)}
        <span style={{ marginLeft: 7, fontSize: 10, color: '#8a8a9a', fontFamily: 'monospace', background: '#fff', padding: '2px 9px', borderRadius: 4, flex: 1, border: '1px solid #ebebec' }}>
          {project.title.toLowerCase().replace(/ /g, '-')}.codesprout.ng
        </span>
      </div>
      <div>{visuals[project.type]}</div>
      <div style={{ padding: '16px 18px' }}>
        <div style={{ fontWeight: 800, fontSize: 14, color: '#071a12', marginBottom: 3 }}>{project.title}</div>
        <div style={{ fontSize: 12, color: '#7a9484', marginBottom: 10, lineHeight: 1.5 }}>{project.description}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 12, color: '#5a7266', fontWeight: 700 }}>{project.student}</span>
          <span style={{ background: project.programmeColor + '15', color: project.programmeColor, fontSize: 10, fontWeight: 800, padding: '3px 10px', borderRadius: 100, textTransform: 'uppercase' as const, letterSpacing: 0.5 }}>
            {project.programme}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsGallery() {
  return (
    <section style={{ background: '#f5fbf8' }} className="dot-pattern-green">
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 68 }}>
          <div className="section-label">Student Work</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>What Our Students Build</h2>
          <p style={{ color: '#5a7266', maxWidth: 490, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            Every child leaves CodeSprout with a real project — something they built, own, and can show the world.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {STUDENT_PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section style={{ background: '#fff' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Reviews</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>What Families Are Saying</h2>
          <p style={{ color: '#5a7266', maxWidth: 450, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            Real stories from Lagos parents and students who've been through our programmes.
          </p>
        </motion.div>
        <Testimonials />
      </div>
    </section>
  );
}

// ─── FAQ preview ───────────────────────────────────────────────────────────────
function FAQPreview() {
  return (
    <section style={{ background: '#f5fbf8' }}>
      <div className="section">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Questions</div>
          <h2 className="display-lg" style={{ color: '#071a12', marginBottom: 16 }}>Common Questions</h2>
          <p style={{ color: '#5a7266', maxWidth: 440, margin: '0 auto', lineHeight: 1.85, fontSize: 16 }}>
            Everything parents want to know before enrolling.
          </p>
        </motion.div>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <FAQAccordion limit={4} />
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/contact" className="btn btn-secondary">See All FAQs</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="dark-gradient dot-pattern" style={{ padding: '104px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(29,158,117,0.14) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-8%', width: 440, height: 440, background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, background: 'linear-gradient(135deg, rgba(29,158,117,0.3), rgba(29,158,117,0.1))', borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 28px', border: '1px solid rgba(29,158,117,0.25)' }}>
            🚀
          </div>
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: 18 }}>
            Ready to Give Your Child<br />a Head Start?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.88, marginBottom: 44, fontSize: 17, maxWidth: 500, margin: '0 auto 44px' }}>
            Join 450+ Lagos families who've chosen CodeSprout Academy. Register today and we'll get back to you within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <Link to="/contact" className="btn btn-primary btn-xl">
              Register Now — It's Free to Start
            </Link>
            <a href={`https://wa.me/2348000000000?text=${encodeURIComponent("Hello! I'd like to find out more about CodeSprout Academy.")}`}
              target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          {/* Trust badges */}
          <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
            {['✓ Free demo class', '✓ No commitment', '✓ 24hr response', '✓ 450+ families trust us'].map(t => (
              <span key={t} style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  useEffect(() => { document.title = 'CodeSprout Academy — Lagos\'s #1 Kids Coding Academy'; }, []);
  return (
    <>
      <HeroSection />
      <WhySection />
      <ProgrammesSection />
      <CampBanner />
      <HowItWorksSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}

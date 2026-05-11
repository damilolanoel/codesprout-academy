import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROGRAMMES, COLORS } from '../constants';


function PageHero() {
  return (
    <section className="hero-gradient dot-pattern" style={{ padding: '96px 24px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', right: '6%', width: 340, height: 340, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-8%', left: '4%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(29,158,117,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="pill" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', marginBottom: 24, display: 'inline-flex' }}>
            Our Curriculum
          </span>
          <h1 className="display-xl" style={{ color: '#fff', marginBottom: 20 }}>
            Our Programmes
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.1rem', maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.78 }}>
            Three age-matched tracks designed to take children from total beginner to confident builder — with real projects at every stage.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ emoji: '🌱', label: 'Juniors', age: '7–10', color: COLORS.juniors }, { emoji: '🔧', label: 'Builders', age: '11–14', color: COLORS.builders }, { emoji: '🚀', label: 'Innovators', age: '14–17', color: COLORS.innovators }].map(p => (
              <a key={p.label} href={`#${p.label.toLowerCase()}`} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', borderRadius: 100, padding: '8px 18px', textDecoration: 'none', color: '#fff', fontSize: 14, fontWeight: 700, transition: 'background 0.2s' }}>
                {p.emoji} {p.label} <span style={{ opacity: 0.65, fontSize: 12 }}>· {p.age}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProgrammeDetail({ programme: p, reverse = false }: { programme: typeof PROGRAMMES[0]; reverse?: boolean }) {
  return (
    <section id={p.id} style={{ background: reverse ? '#f0faf5' : '#fff' }}>
      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: reverse ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: p.color + '18', color: p.color, padding: '6px 16px', borderRadius: 30, fontSize: 13, fontWeight: 700, marginBottom: 20, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              {p.emoji} Ages {p.ageRange}
            </div>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 8 }}>{p.name}</h2>
            <p style={{ color: '#777', fontStyle: 'italic', fontSize: 15, marginBottom: 20 }}>{p.tagline}</p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 28 }}>{p.overview}</p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              {[
                { icon: '🛠', label: p.tool },
                { icon: '⏱', label: p.duration },
                { icon: '📅', label: p.sessionsPerWeek },
              ].map(b => (
                <span key={b.label} style={{ background: p.color + '12', color: p.color, fontSize: 13, padding: '7px 16px', borderRadius: 100, fontWeight: 700, border: `1px solid ${p.color}22` }}>
                  {b.icon} {b.label}
                </span>
              ))}
            </div>

            <div style={{ background: p.color + '10', border: `1px solid ${p.color}30`, borderRadius: 12, padding: 20, marginBottom: 28 }}>
              <div style={{ fontWeight: 700, color: p.color, fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>
                🎓 Final Project
              </div>
              <p style={{ color: '#444', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.finalProject}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f8f8f8', borderRadius: 12, padding: '16px 20px', marginBottom: 24 }}>
              <div>
                <div style={{ fontSize: 11, color: '#999', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>Tuition Fee</div>
                <div style={{ fontSize: 24, fontWeight: 900, color: p.color, fontFamily: 'Space Grotesk, sans-serif' }}>
                  {p.price} <span style={{ fontSize: 13, fontWeight: 600, color: '#999' }}>{p.priceNote}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ background: p.color }}>
                {p.enrolCta}
              </Link>
            </div>
          </motion.div>

          {/* What they learn */}
          <motion.div initial={{ opacity: 0, x: reverse ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: '#0f1a14', marginBottom: 20 }}>
              What {p.name.split(' ').pop()} Learn
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {p.whatTheyLearn.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: p.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 900, marginTop: 1 }}>
                    ✓
                  </div>
                  <p style={{ margin: 0, color: '#444', fontSize: 15, lineHeight: 1.65 }}>{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Week-by-week callout */}
            <div className="card" style={{ marginTop: 32, borderLeft: `4px solid ${p.color}` }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#0f1a14', marginBottom: 8 }}>
                Programme Structure
              </div>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                <strong>Weeks 1–3:</strong> Foundations and first builds.<br />
                <strong>Weeks 4–6:</strong> Core skills deepened through projects.<br />
                <strong>Weeks 7+:</strong> Final project build and refinement.<br />
                <strong>Final Week:</strong> Project showcase for family and peers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section style={{ background: '#f0faf5', padding: '80px 24px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>Compare</span>
          <h2 className="display-md" style={{ color: '#0f1a14' }}>Programme Comparison</h2>
        </motion.div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            <thead>
              <tr style={{ background: '#0f6e56' }}>
                <th style={{ padding: '16px 20px', textAlign: 'left', color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13 }}>Feature</th>
                {PROGRAMMES.map(p => (
                  <th key={p.id} style={{ padding: '16px 20px', textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13 }}>
                    {p.emoji} {p.name.replace('CodeSprout ', '')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Age Range', vals: PROGRAMMES.map(p => p.ageRange) },
                { label: 'Duration', vals: PROGRAMMES.map(p => p.duration) },
                { label: 'Frequency', vals: PROGRAMMES.map(p => p.sessionsPerWeek) },
                { label: 'Primary Tool', vals: PROGRAMMES.map(p => p.tool) },
                { label: 'Tuition', vals: PROGRAMMES.map(p => p.price + '/term') },
                { label: 'Coding Style', vals: ['Visual / Block', 'Text + Physical', 'Text + No-Code'] },
                { label: 'Final Project', vals: ['Scratch Game', 'Website + Robot', 'Deployed App'] },
              ].map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: '1px solid #f0faf5' }}>
                  <td style={{ padding: '14px 20px', fontWeight: 700, fontSize: 13, color: '#444' }}>{row.label}</td>
                  {row.vals.map((v, vi) => (
                    <td key={vi} style={{ padding: '14px 20px', textAlign: 'center', fontSize: 13, color: '#555' }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default function Programmes() {
  useEffect(() => { document.title = 'Our Programmes — CodeSprout Academy'; }, []);

  return (
    <>
      <PageHero />
      {PROGRAMMES.map((p, i) => (
        <ProgrammeDetail key={p.id} programme={p} reverse={i % 2 === 1} />
      ))}
      <ComparisonTable />
      {/* CTA */}
      <section className="dark-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '6%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 240, height: 240, background: 'radial-gradient(circle, rgba(29,158,117,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 28px' }}>
            🤔
          </div>
          <h2 className="display-md" style={{ color: '#fff', marginBottom: 16 }}>Not sure which programme?</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.78 }}>
            Enter your child's age when registering and we'll recommend the right track. Or chat with us on WhatsApp — we're happy to help.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Register Now</Link>
            <a href={`https://wa.me/2348000000000`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

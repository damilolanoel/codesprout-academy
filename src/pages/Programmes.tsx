import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROGRAMMES, COLORS } from '../constants';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

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
            {[
              { emoji: '🌱', label: 'Juniors', age: '7–10', color: COLORS.juniors },
              { emoji: '🔧', label: 'Builders', age: '11–14', color: COLORS.builders },
              { emoji: '🚀', label: 'Innovators', age: '14–17', color: COLORS.innovators },
            ].map(p => (
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

function ProgrammeDetail({ programme: p, index }: { programme: typeof PROGRAMMES[0]; index: number }) {
  const reverse = index % 2 === 1;
  const sectionBg = index === 0 ? '#fff' : index === 1 ? '#f8fdfa' : '#fff';

  return (
    <section id={p.id} style={{ background: sectionBg, position: 'relative', overflow: 'hidden' }}>
      {/* Full-width coloured programme header band */}
      <div style={{ background: `linear-gradient(135deg, ${p.color}20, ${p.color}0c)`, borderTop: `4px solid ${p.color}`, borderBottom: `1px solid ${p.color}18`, padding: '22px 24px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' as const }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, flexShrink: 0, boxShadow: `0 8px 24px ${p.color}44` }}>
            {p.emoji}
          </div>
          <div>
            <div style={{ fontSize: 11, color: p.color, fontWeight: 800, textTransform: 'uppercase' as const, letterSpacing: 1.2, marginBottom: 2 }}>Ages {p.ageRange}</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', color: '#0f1a14', margin: 0, letterSpacing: '-0.02em' }}>{p.name}</h2>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' as const }}>
            {[`🛠 ${p.tool}`, `⏱ ${p.duration}`, `📅 ${p.sessionsPerWeek}`].map(tag => (
              <span key={tag} style={{ background: p.color + '14', color: p.color, fontSize: 12, padding: '6px 14px', borderRadius: 100, fontWeight: 700, border: `1px solid ${p.color}22`, whiteSpace: 'nowrap' as const }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          {/* Info column */}
          <motion.div initial={{ opacity: 0, x: reverse ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p style={{ color: '#777', fontStyle: 'italic', fontSize: 15, marginBottom: 20 }}>{p.tagline}</p>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 28 }}>{p.overview}</p>

            {/* Final project callout */}
            <div style={{ background: p.color + '0d', border: `1px solid ${p.color}28`, borderRadius: 14, padding: '20px 22px', marginBottom: 28 }}>
              <div style={{ fontWeight: 700, color: p.color, fontSize: 13, textTransform: 'uppercase' as const, letterSpacing: 0.5, marginBottom: 10 }}>🎓 Final Project</div>
              <p style={{ color: '#444', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.finalProject}</p>
            </div>

            {/* Price + CTA — colourful gradient box */}
            <div style={{ background: `linear-gradient(135deg, ${p.color}1c, ${p.color}08)`, borderRadius: 18, padding: '22px 26px', border: `1px solid ${p.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' as const }}>
              <div>
                <div style={{ fontSize: 11, color: p.color, fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: 0.5, marginBottom: 4 }}>Tuition Fee</div>
                <div style={{ fontSize: 28, fontWeight: 900, color: p.color, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
                  {p.price} <span style={{ fontSize: 13, fontWeight: 600, color: '#aaa' }}>{p.priceNote}</span>
                </div>
              </div>
              <Link
                to="/contact"
                style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`, color: '#fff', boxShadow: `0 6px 20px ${p.color}40`, fontWeight: 800, borderRadius: 100, padding: '13px 28px', fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Nunito, sans-serif', transition: 'transform 0.2s, box-shadow 0.2s' }}
              >
                {p.enrolCta}
              </Link>
            </div>
          </motion.div>

          {/* What they learn */}
          <motion.div initial={{ opacity: 0, x: reverse ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: '#0f1a14', marginBottom: 22 }}>
              What {p.name.split(' ').pop()} Learn
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {p.whatTheyLearn.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: `linear-gradient(135deg, ${p.color}, ${p.color}bb)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 900, marginTop: 2, boxShadow: `0 4px 12px ${p.color}38` }}>
                    ✓
                  </div>
                  <p style={{ margin: 0, color: '#444', fontSize: 15, lineHeight: 1.65 }}>{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Programme structure */}
            <div className="card" style={{ marginTop: 32, borderLeft: `4px solid ${p.color}`, background: p.color + '06' }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#0f1a14', marginBottom: 10 }}>Programme Structure</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  ['Weeks 1–3', 'Foundations and first builds'],
                  ['Weeks 4–6', 'Core skills deepened through projects'],
                  ['Weeks 7+', 'Final project build and refinement'],
                  ['Final Week', 'Project showcase for family and peers'],
                ].map(([wk, desc]) => (
                  <div key={wk} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                    <span style={{ fontWeight: 800, fontSize: 13, color: p.color, minWidth: 80, flexShrink: 0 }}>{wk}</span>
                    <span style={{ color: '#666', fontSize: 14, lineHeight: 1.5 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <section className="dark-gradient dot-pattern" style={{ padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(29,158,117,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative' }}>
        <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', marginBottom: 16, display: 'inline-flex' }}>Compare</span>
          <h2 className="display-md" style={{ color: '#fff' }}>Programme Comparison</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 12 }}>See how the three tracks stack up side by side.</p>
        </motion.div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: 18, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
            <thead>
              <tr style={{ background: '#0f6e56' }}>
                <th style={{ padding: '18px 22px', textAlign: 'left', color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13 }}>Feature</th>
                {PROGRAMMES.map(p => (
                  <th key={p.id} style={{ padding: '18px 22px', textAlign: 'center', color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13 }}>
                    <span style={{ marginRight: 6 }}>{p.emoji}</span>
                    {p.name.replace('CodeSprout ', '')}
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>Ages {p.ageRange}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Duration', vals: PROGRAMMES.map(p => p.duration) },
                { label: 'Frequency', vals: PROGRAMMES.map(p => p.sessionsPerWeek) },
                { label: 'Primary Tool', vals: PROGRAMMES.map(p => p.tool) },
                { label: 'Tuition', vals: PROGRAMMES.map(p => p.price + '/term') },
                { label: 'Coding Style', vals: ['Visual / Block', 'Text + Physical', 'Text + No-Code'] },
                { label: 'Final Project', vals: ['Scratch Game', 'Website + Robot', 'Deployed App'] },
              ].map((row, ri) => (
                <tr key={ri} style={{ background: ri % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 22px', fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{row.label}</td>
                  {row.vals.map((v, vi) => (
                    <td key={vi} style={{ padding: '14px 22px', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{v}</td>
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
        <ProgrammeDetail key={p.id} programme={p} index={i} />
      ))}
      <ComparisonTable />
      {/* CTA */}
      <section className="hero-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '6%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 240, height: 240, background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div {...fade()}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 28px' }}>
              🤔
            </div>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 16 }}>Not sure which programme?</h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.78 }}>
              Enter your child's age when registering and we'll recommend the right track. Or chat with us on WhatsApp — we're happy to help.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">Register Now</Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TEAM, VALUES, COLORS, SITE } from '../constants';

const G = COLORS.brand;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function About() {
  useEffect(() => { document.title = 'About Us — CodeSprout Academy'; }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-gradient dot-pattern" style={{ padding: '96px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '8%', width: 280, height: 280, background: 'radial-gradient(circle, rgba(29,158,117,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', marginBottom: 24, display: 'inline-flex' }}>
              Our Story
            </span>
            <h1 className="display-xl" style={{ color: '#fff', marginBottom: 20 }}>
              About CodeSprout
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.15rem', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.78 }}>
              We started with 8 kids in a co-working space in Victoria Island. Today, we've helped over 450 Lagos families give their children a head start in the digital economy.
            </p>
            <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {[['450+', 'Students Taught'], ['3', 'Programmes'], ['98%', 'Parent Satisfaction']].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', color: '#4ade80', lineHeight: 1 }}>{val}</div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="dot-pattern-green" style={{ background: 'linear-gradient(160deg, #f5fbf8 0%, #fff 60%, #f0f4ff 100%)' }}>
        <div className="section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div {...fade()}>
              <div className="section-label">Our Story</div>
              <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 20 }}>How CodeSprout Began</h2>
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: 18 }}>
                In 2023, our founder Amara Okonkwo — a software engineer with 8 years of industry experience — noticed something troubling: there were almost no structured, quality technology education programmes for children in Lagos.
              </p>
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: 18 }}>
                She started CodeSprout Academy in a borrowed co-working space in Victoria Island with just 8 children and a single laptop. Within three months, parents were referring friends. Within six months, we had outgrown the space twice.
              </p>
              <p style={{ color: '#555', lineHeight: 1.85 }}>
                Today, CodeSprout Academy is Lagos's most trusted children's coding programme — with over 450 students across three age-matched tracks, a dedicated learning centre, and a team of passionate educators.
              </p>
            </motion.div>

            {/* Vibrant stats 2×2 */}
            <motion.div {...fade(0.1)}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {[
                  { val: '2023', label: 'Year Founded', icon: '📅', gradient: `linear-gradient(135deg, #1D9E75, #0f6e56)` },
                  { val: '450+', label: 'Students Taught', icon: '👧🏾', gradient: `linear-gradient(135deg, #2563EB, #1d4ed8)` },
                  { val: '3', label: 'Programmes', icon: '📚', gradient: `linear-gradient(135deg, #D97706, #b45309)` },
                  { val: '98%', label: 'Would Recommend', icon: '⭐', gradient: `linear-gradient(135deg, #8B5CF6, #7c3aed)` },
                ].map((s, i) => (
                  <motion.div key={s.label} {...fade(i * 0.07)} style={{ background: s.gradient, borderRadius: 22, padding: '28px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: -18, right: -18, width: 72, height: 72, background: 'rgba(255,255,255,0.09)', borderRadius: '50%' }} />
                    <div style={{ position: 'absolute', bottom: -12, left: -12, width: 48, height: 48, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }} />
                    <div style={{ fontSize: 28, marginBottom: 8, position: 'relative' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 34, color: '#fff', lineHeight: 1, position: 'relative' }}>{s.val}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.72)', fontWeight: 700, marginTop: 6, textTransform: 'uppercase' as const, letterSpacing: 0.5, position: 'relative' }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision — dark gradient ── */}
      <section className="dark-gradient dot-pattern" style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(29,158,117,0.16) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '8%', width: 280, height: 280, background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#4ade80' }}>Purpose</div>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 12 }}>Mission & Vision</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
              What we're building and why it matters for Nigeria's digital future.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🎯', label: 'Our Mission', color: G,
                text: "To make high-quality technology education accessible to every Nigerian child — regardless of their starting point — and equip them with skills relevant to Africa's growing digital economy.",
              },
              {
                icon: '🌍', label: 'Our Vision', color: COLORS.builders,
                text: 'A Nigeria where every child has the opportunity to learn to code, to build, and to create — and where the next generation of African tech builders starts their journey in Lagos.',
              },
            ].map((item, i) => (
              <motion.div key={item.label} {...fade(i * 0.15)} className="glass" style={{ padding: '40px 32px', textAlign: 'center' }}>
                <div style={{ width: 76, height: 76, borderRadius: 24, background: `linear-gradient(135deg, ${item.color}45, ${item.color}20)`, border: `1px solid ${item.color}45`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 34, margin: '0 auto 22px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: item.color, marginBottom: 14 }}>{item.label}</h3>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.88 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section id="approach" className="dot-pattern-green" style={{ background: '#f5fbf8' }}>
        <div className="section">
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Pedagogy</div>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Our Approach to Teaching</h2>
            <p style={{ color: '#555', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              How we teach is as important as what we teach. Here's what makes CodeSprout different.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {VALUES.map((v, i) => {
              const palette = [
                { top: G, bg: 'linear-gradient(135deg, #d6f5e9, #b8ecda)' },
                { top: COLORS.builders, bg: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' },
                { top: COLORS.innovators, bg: 'linear-gradient(135deg, #fef3c7, #fde68a)' },
                { top: '#8B5CF6', bg: 'linear-gradient(135deg, #ede9fe, #ddd6fe)' },
              ];
              const c = palette[i];
              return (
                <motion.div key={i} {...fade(i * 0.1)} className="card" style={{ borderTop: `4px solid ${c.top}`, padding: 0, overflow: 'hidden' }}>
                  <div style={{ background: c.bg, padding: '24px 28px 20px' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{v.icon}</div>
                  </div>
                  <div style={{ padding: '20px 28px 28px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 16, color: '#0f1a14', marginBottom: 10 }}>{v.title}</h3>
                    <p style={{ color: '#666', fontSize: 14, lineHeight: 1.78, margin: 0 }}>{v.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team — dark section ── */}
      <section id="team" className="dark-gradient" style={{ padding: '104px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(29,158,117,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '5%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center', color: '#4ade80' }}>The Team</div>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 12 }}>Meet the People Behind CodeSprout</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
              Educators and engineers who are genuinely passionate about how children learn.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {TEAM.map((member, i) => (
              <motion.div key={i} {...fade(i * 0.1)} className="glass" style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ background: `linear-gradient(135deg, ${member.color}40, ${member.color}1a)`, padding: '32px 24px 24px', borderBottom: `1px solid ${member.color}28` }}>
                  <div style={{ position: 'relative', width: 84, height: 84, margin: '0 auto 16px' }}>
                    <div style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: `2px solid ${member.color}55` }} />
                    <div style={{ width: 84, height: 84, borderRadius: '50%', background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 26, fontFamily: 'Space Grotesk, sans-serif' }}>
                      {member.initials}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', marginBottom: 6 }}>{member.name}</h3>
                  <div style={{ display: 'inline-block', background: member.color + '35', color: member.color === '#6B7280' ? '#d1d5db' : member.color, fontWeight: 700, fontSize: 11, padding: '4px 14px', borderRadius: 20, border: `1px solid ${member.color}40` }}>
                    {member.role}
                  </div>
                </div>
                <div style={{ padding: '22px 24px 28px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.8, margin: 0 }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hero-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div {...fade()}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 28px' }}>
              🎓
            </div>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 16 }}>Come and See For Yourself</h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.78 }}>
              Register your child for a free demo class. No commitment, no pressure — just 45 minutes to see how we teach.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">Book a Free Demo Class</Link>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">WhatsApp Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

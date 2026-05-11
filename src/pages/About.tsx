import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TEAM, VALUES, COLORS, SITE } from '../constants';

const G = COLORS.brand;

export default function About() {
  useEffect(() => { document.title = 'About Us — CodeSprout Academy'; }, []);

  return (
    <>
      {/* Hero */}
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

      {/* Our Story */}
      <section style={{ background: '#fff' }}>
        <div className="section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label">Our Story</div>
              <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 20 }}>
                How CodeSprout Began
              </h2>
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: 18 }}>
                In 2023, our founder Amara Okonkwo — a software engineer with 8 years of industry experience — noticed something troubling: there were almost no structured, quality technology education programmes for children in Lagos.
              </p>
              <p style={{ color: '#555', lineHeight: 1.85, marginBottom: 18 }}>
                She started CodeSprout Academy in a borrowed co-working space in Victoria Island with just 8 children and a single laptop. Within three months, parents were referring friends. Within six months, we had outgrown the space twice.
              </p>
              <p style={{ color: '#555', lineHeight: 1.85 }}>
                Today, CodeSprout Academy is Lagos's most trusted children's coding programme — with over 450 students across three age-matched tracks, a dedicated learning centre, and a team of passionate educators who believe every Nigerian child deserves access to technology education.
              </p>
            </motion.div>

            {/* Stats callout */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { val: '2023', label: 'Year Founded', icon: '📅', color: G },
                  { val: '450+', label: 'Students Taught', icon: '👧🏾', color: COLORS.builders },
                  { val: '3', label: 'Programmes', icon: '📚', color: COLORS.innovators },
                  { val: '98%', label: 'Would Recommend', icon: '⭐', color: G },
                ].map(s => (
                  <div key={s.label} className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: s.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, margin: '0 auto 12px' }}>{s.icon}</div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: 28, color: s.color, lineHeight: 1 }}>{s.val}</div>
                    <div style={{ fontSize: 12, color: '#888', fontWeight: 700, marginTop: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ background: '#f0faf5' }}>
        <div className="section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {[
              {
                icon: '🎯',
                label: 'Our Mission',
                color: G,
                text: 'To make high-quality technology education accessible to every Nigerian child — regardless of their starting point — and equip them with skills that are relevant to Africa\'s growing digital economy.',
              },
              {
                icon: '🌍',
                label: 'Our Vision',
                color: COLORS.builders,
                text: 'A Nigeria where every child has the opportunity to learn to code, to build, and to create — and where the next generation of African tech builders starts their journey in Lagos.',
              },
            ].map(item => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg, ${item.color}22, ${item.color}0e)`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 20px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 20, color: item.color, marginBottom: 14 }}>{item.label}</h3>
                <p style={{ color: '#555', fontSize: 15, lineHeight: 1.85 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" style={{ background: '#fff' }}>
        <div className="section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Pedagogy</div>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Our Approach to Teaching</h2>
            <p style={{ color: '#555', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
              How we teach is as important as what we teach. Here's what makes CodeSprout different.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {VALUES.map((v, i) => {
              const colors = [G, COLORS.builders, COLORS.innovators, G];
              const c = colors[i % colors.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card" style={{ borderTop: `3px solid ${c}` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: c + '14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 16, color: '#0f1a14', marginBottom: 10 }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.78, margin: 0 }}>{v.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ background: '#f0faf5' }}>
        <div className="section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The Team</div>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Meet the People Behind CodeSprout</h2>
            <p style={{ color: '#555', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
              Educators and engineers who are genuinely passionate about how children learn.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {TEAM.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card" style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', width: 88, height: 88, margin: '0 auto 20px' }}>
                  <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: `2px solid ${member.color}30`, background: member.color + '08' }} />
                  <div style={{ width: 88, height: 88, borderRadius: '50%', background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 26, fontFamily: 'Space Grotesk, sans-serif', position: 'relative' }}>
                    {member.initials}
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 17, color: '#0f1a14', marginBottom: 4 }}>
                  {member.name}
                </h3>
                <div style={{ display: 'inline-block', background: member.color + '14', color: member.color, fontWeight: 700, fontSize: 12, padding: '3px 12px', borderRadius: 20, marginBottom: 14 }}>{member.role}</div>
                <p style={{ color: '#666', fontSize: 13, lineHeight: 1.78, margin: 0 }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '15%', left: '8%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(29,158,117,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(29,158,117,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 28px' }}>
            🎓
          </div>
          <h2 className="display-md" style={{ color: '#fff', marginBottom: 16 }}>Come and See For Yourself</h2>
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 440, margin: '0 auto 36px', lineHeight: 1.78 }}>
            Register your child for a free demo class. No commitment, no pressure — just 45 minutes to see how we teach.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Demo Class
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

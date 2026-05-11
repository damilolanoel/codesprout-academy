import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAMP, COLORS } from '../constants';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';

const G = COLORS.brand;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const CAMP_FEATURES_GRID = [
  { icon: '🧑‍💻', title: 'Daily Coding Sessions', body: 'Hands-on sessions every morning with expert instructors. No two days are the same.', color: G },
  { icon: '🏆', title: 'Final Day Showcase', body: "Parents are invited to the last day where students present their camp project to the audience.", color: COLORS.innovators },
  { icon: '📜', title: 'Certificate of Completion', body: 'Every student receives a signed certificate from CodeSprout Academy at the end of camp.', color: '#8B5CF6' },
  { icon: '👨‍👩‍👧', title: 'Small Groups (Max 15)', body: 'We cap every group at 15 students so every child gets meaningful attention from instructors.', color: COLORS.builders },
  { icon: '📦', title: 'All Materials Included', body: 'No supplies to buy. Laptops, equipment, and all materials are provided by the Academy.', color: COLORS.innovators },
  { icon: '📲', title: 'Daily Parent Updates', body: 'Short WhatsApp updates sent to parents every afternoon so you always know what your child built today.', color: G },
];

const SCHEDULE_EMOJIS = ['👋', '💻', '☕', '🛠', '🍽', '🎤'];

export default function SummerCamp() {
  useEffect(() => { document.title = 'Summer Camp 2026 — CodeSprout Academy'; }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section className="camp-gradient dot-pattern" style={{ padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: '5%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: '8%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', marginBottom: 20, display: 'inline-flex' }}>
              🌟 Limited Spots Remaining
            </span>
            <h1 className="display-xl" style={{ color: '#fff', marginBottom: 10 }}>
              Summer Camp 2026
            </h1>
            <p style={{ color: '#4ade80', fontWeight: 800, fontSize: 20, marginBottom: 4 }}>
              📅 {CAMP.displayRange}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 4 }}>
              {CAMP.schedule}
            </p>
            <CountdownTimer />
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 520, margin: '0 auto 36px', fontSize: '1.08rem', lineHeight: 1.78 }}>
              A full month of coding, building, and creating. Come as a beginner, leave with a real project you built yourself.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">
                Secure a Spot — {CAMP.price}
              </Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                WhatsApp a Question
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 14 }}>
              Early-bird discount: <strong style={{ color: '#4ade80' }}>{CAMP.earlyBirdPrice}</strong> for registrations before {CAMP.earlyBirdDeadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="dot-pattern-green" style={{ background: 'linear-gradient(180deg, #fff 0%, #f0fdf8 100%)' }}>
        <div className="section">
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>What You Get</span>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Everything Included</h2>
            <p style={{ color: '#555', maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
              One flat fee covers everything. No hidden costs, no extra materials to buy.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {CAMP_FEATURES_GRID.map((f, i) => (
              <motion.div key={i} {...fade(i * 0.08)} className="card" style={{ borderTop: `4px solid ${f.color}`, padding: 0, overflow: 'hidden' }}>
                <div style={{ background: `linear-gradient(135deg, ${f.color}18, ${f.color}08)`, padding: '24px 26px 18px', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `linear-gradient(135deg, ${f.color}30, ${f.color}15)`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 15, color: '#0f1a14', margin: 0 }}>{f.title}</h3>
                </div>
                <div style={{ padding: '16px 26px 24px' }}>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.72, margin: 0 }}>{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Schedule ── */}
      <section className="dark-gradient dot-pattern" style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 320, height: 320, background: 'radial-gradient(circle, rgba(29,158,117,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '5%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
            <motion.div {...fade()}>
              <span className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', marginBottom: 20, display: 'inline-flex' }}>Daily Schedule</span>
              <h2 className="display-md" style={{ color: '#fff', marginBottom: 16 }}>A Typical Camp Day</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 28 }}>
                Every day is structured but flexible. Mornings are focused, afternoons are collaborative. Children never have idle time — but they never feel rushed either.
              </p>
              <div className="glass" style={{ padding: '20px 24px' }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 18 }}>👥</span> Class size
                </div>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, margin: 0 }}>Maximum {CAMP.maxStudents} students per group, divided by age and level.</p>
              </div>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {CAMP.dailySchedule.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: `linear-gradient(135deg, ${G}, #0f6e56)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0, boxShadow: `0 0 0 4px rgba(29,158,117,0.2)` }}>
                        {SCHEDULE_EMOJIS[i]}
                      </div>
                      {i < CAMP.dailySchedule.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: `linear-gradient(to bottom, ${G}80, ${G}20)`, minHeight: 28, margin: '4px 0' }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < CAMP.dailySchedule.length - 1 ? 20 : 0, paddingTop: 4 }}>
                      <div style={{ fontSize: 11, fontWeight: 800, color: G, marginBottom: 3, letterSpacing: 0.5, textTransform: 'uppercase' as const }}>{item.time}</div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: 14 }}>{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who is it for? ── */}
      <section className="dot-pattern-green" style={{ background: 'linear-gradient(160deg, #f5fbf8 0%, #fff 50%, #f0f4ff 100%)' }}>
        <div className="section">
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>Who It's For</span>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Open to Ages 7–17</h2>
            <p style={{ color: '#555', maxWidth: 480, margin: '0 auto', lineHeight: 1.75 }}>
              Summer Camp groups are formed based on age and experience. Every child is placed in the right environment for them.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { age: '7–10', label: 'Juniors Group', tool: 'Scratch', color: COLORS.juniors, emoji: '🌱', desc: 'Visual coding, animations, and games. Great for first-time coders.' },
              { age: '11–14', label: 'Builders Group', tool: 'HTML/CSS', color: COLORS.builders, emoji: '🔧', desc: 'Text-based coding, web projects, and basic robotics.' },
              { age: '14–17', label: 'Innovators Group', tool: 'JavaScript', color: COLORS.innovators, emoji: '🚀', desc: 'App development, APIs, and no-code tools for advanced builders.' },
            ].map(g => (
              <motion.div key={g.age} {...fade()} className="card" style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ background: `linear-gradient(135deg, ${g.color}22, ${g.color}0c)`, padding: '28px 24px 22px', borderBottom: `1px solid ${g.color}20` }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg, ${g.color}, ${g.color}bb)`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, margin: '0 auto 14px', boxShadow: `0 8px 24px ${g.color}40` }}>{g.emoji}</div>
                  <span style={{ background: g.color, color: '#fff', fontSize: 11, fontWeight: 800, padding: '4px 14px', borderRadius: 100 }}>Ages {g.age}</span>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 17, color: '#0f1a14', marginTop: 12, marginBottom: 0 }}>
                    {g.label}
                  </h3>
                </div>
                <div style={{ padding: '20px 24px 28px' }}>
                  <p style={{ color: '#555', fontSize: 14, lineHeight: 1.75, marginBottom: 16 }}>{g.desc}</p>
                  <span style={{ background: g.color + '14', color: g.color, fontSize: 12, padding: '5px 14px', borderRadius: 20, fontWeight: 700 }}>
                    🛠 {g.tool}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="dot-pattern-green" style={{ background: '#f0fdf8', padding: '88px 24px' }}>
        <div className="container">
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>Pricing</span>
            <h2 className="display-md" style={{ color: '#0f1a14' }}>Simple, Transparent Pricing</h2>
          </motion.div>

          <div style={{ maxWidth: 500, margin: '0 auto' }}>
            <motion.div {...fade(0.1)} className="card" style={{ textAlign: 'center', border: `2px solid ${G}`, padding: 0, overflow: 'hidden' }}>
              {/* Header strip */}
              <div style={{ background: `linear-gradient(135deg, ${G}, #0f6e56)`, padding: '22px 28px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 20, marginBottom: 14 }}>
                  Summer Camp 2026
                </div>
                <div style={{ fontSize: 52, fontWeight: 900, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1 }}>
                  {CAMP.price}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginTop: 4, fontSize: 14 }}>per child · full month of August</p>
              </div>

              <div style={{ padding: '28px 32px' }}>
                {/* Early bird */}
                <div style={{ background: '#fff9f0', border: '1px solid #fde68a', borderRadius: 12, padding: '14px 18px', marginBottom: 24 }}>
                  <div style={{ fontWeight: 700, color: '#b45309', fontSize: 14 }}>⚡ Early-Bird Offer</div>
                  <p style={{ color: '#92400e', fontSize: 13, margin: '4px 0 0' }}>
                    Register before {CAMP.earlyBirdDeadline} and pay just <strong>{CAMP.earlyBirdPrice}</strong>.
                  </p>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {CAMP.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#444' }}>
                      <span style={{ width: 20, height: 20, borderRadius: '50%', background: `linear-gradient(135deg, ${G}, #0f6e56)`, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Register for Summer Camp
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="dark-gradient dot-pattern" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(29,158,117,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '5%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="section" style={{ position: 'relative' }}>
          <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', marginBottom: 16, display: 'inline-flex' }}>Testimonials</span>
            <h2 className="display-md" style={{ color: '#fff', marginBottom: 12 }}>What Previous Campers Say</h2>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="camp-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', right: '5%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '8%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div {...fade()}>
            <span className="pill" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', marginBottom: 24, display: 'inline-flex' }}>
              🌟 Limited Spots
            </span>
            <h2 className="display-lg" style={{ color: '#fff', marginBottom: 16 }}>
              Don't Miss Summer Camp 2026
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 480, margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: 1.78 }}>
              Spots fill up fast. Secure your child's place now and get the early-bird rate before {CAMP.earlyBirdDeadline}.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-white btn-lg">Register Now — {CAMP.price}</Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">Ask a Question</a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 18 }}>
              Early-bird price: <strong style={{ color: '#4ade80' }}>{CAMP.earlyBirdPrice}</strong> before {CAMP.earlyBirdDeadline}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CAMP, COLORS } from '../constants';
import CountdownTimer from '../components/CountdownTimer';
import Testimonials from '../components/Testimonials';

// pull a couple of testimonials about camp
const CAMP_FEATURES_GRID = [
  { icon: '🧑‍💻', title: 'Daily Coding Sessions', body: 'Hands-on sessions every morning with expert instructors. No two days are the same.' },
  { icon: '🏆', title: 'Final Day Showcase', body: "Parents are invited to the last day where students present their camp project to the audience." },
  { icon: '📜', title: 'Certificate of Completion', body: 'Every student receives a signed certificate from CodeSprout Academy at the end of camp.' },
  { icon: '👨‍👩‍👧', title: 'Small Groups (Max 15)', body: 'We cap every group at 15 students so every child gets meaningful attention from instructors.' },
  { icon: '📦', title: 'All Materials Included', body: 'No supplies to buy. Laptops, equipment, and all materials are provided by the Academy.' },
  { icon: '📲', title: 'Daily Parent Updates', body: 'Short WhatsApp updates sent to parents every afternoon so you always know what your child built today.' },
];

const G = COLORS.brand;

export default function SummerCamp() {
  useEffect(() => { document.title = 'Summer Camp 2026 — CodeSprout Academy'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="camp-gradient dot-pattern" style={{ padding: '80px 24px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: '5%', width: 320, height: 320, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: -100, left: '8%', width: 260, height: 260, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />

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
              <a href={`https://wa.me/2348000000000`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                WhatsApp a Question
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 14 }}>
              Early-bird discount: <strong style={{ color: '#4ade80' }}>{CAMP.earlyBirdPrice}</strong> for registrations before {CAMP.earlyBirdDeadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ background: '#fff' }}>
        <div className="section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>What You Get</span>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>Everything Included</h2>
            <p style={{ color: '#555', maxWidth: 440, margin: '0 auto', lineHeight: 1.75 }}>
              One flat fee covers everything. No hidden costs, no extra materials to buy.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {CAMP_FEATURES_GRID.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 32, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 15, color: '#0f1a14', marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, margin: 0 }}>{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section style={{ background: '#f0faf5' }}>
        <div className="section">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="pill" style={{ marginBottom: 20, display: 'inline-flex' }}>Daily Schedule</span>
              <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 16 }}>A Typical Camp Day</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: 28 }}>
                Every day is structured but flexible. Mornings are focused, afternoons are collaborative. Children never have idle time — but they never feel rushed either.
              </p>
              <div className="card" style={{ background: G + '0a', border: `1px solid ${G}20` }}>
                <div style={{ fontWeight: 700, color: G, marginBottom: 4 }}>👥 Class size</div>
                <p style={{ color: '#444', fontSize: 14, margin: 0 }}>Maximum {CAMP.maxStudents} students per group, divided by age and level.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {CAMP.dailySchedule.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: i < CAMP.dailySchedule.length - 1 ? 0 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: G, flexShrink: 0, marginTop: 6 }} />
                      {i < CAMP.dailySchedule.length - 1 && (
                        <div style={{ width: 2, flex: 1, background: '#e1f5ee', minHeight: 32 }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < CAMP.dailySchedule.length - 1 ? 20 : 0 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#999', marginBottom: 2 }}>{item.time}</div>
                      <div style={{ fontWeight: 700, color: '#0f1a14', fontSize: 14 }}>{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is it for? */}
      <section style={{ background: '#fff' }}>
        <div className="section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 52 }}>
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
              <motion.div key={g.age} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card" style={{ padding: 0, overflow: 'hidden', textAlign: 'center' }}>
                <div style={{ background: `linear-gradient(135deg, ${g.color}22, ${g.color}0c)`, padding: '28px 24px 22px', borderBottom: `1px solid ${g.color}20` }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: g.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 14px' }}>{g.emoji}</div>
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

      {/* Pricing */}
      <section style={{ background: '#f0faf5', padding: '80px 24px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>Pricing</span>
            <h2 className="display-md" style={{ color: '#0f1a14' }}>Simple, Transparent Pricing</h2>
          </motion.div>

          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card" style={{ textAlign: 'center', border: `2px solid ${G}` }}>
              <div style={{ display: 'inline-block', background: G, color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 14px', borderRadius: 20, marginBottom: 16 }}>
                Summer Camp 2026
              </div>
              <div style={{ fontSize: 52, fontWeight: 900, color: G, fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1, marginBottom: 4 }}>
                {CAMP.price}
              </div>
              <p style={{ color: '#777', marginBottom: 24 }}>per child, full month</p>
              <div style={{ background: '#fff9f0', border: '1px solid #fde68a', borderRadius: 10, padding: '12px 16px', marginBottom: 24 }}>
                <div style={{ fontWeight: 700, color: '#b45309', fontSize: 14 }}>⚡ Early-Bird Offer</div>
                <p style={{ color: '#92400e', fontSize: 13, margin: '4px 0 0' }}>
                  Register before {CAMP.earlyBirdDeadline} and pay just <strong>{CAMP.earlyBirdPrice}</strong>.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CAMP.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#444' }}>
                    <span style={{ color: G, fontWeight: 700, fontSize: 16 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16 }}>
                Register for Summer Camp
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: '#fff' }}>
        <div className="section">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="pill" style={{ marginBottom: 16, display: 'inline-flex' }}>Testimonials</span>
            <h2 className="display-md" style={{ color: '#0f1a14', marginBottom: 12 }}>What Previous Campers Say</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Final CTA */}
      <section className="camp-gradient dot-pattern" style={{ padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', right: '5%', width: 380, height: 380, background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '8%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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
              <Link to="/contact" className="btn btn-white btn-lg">
                Register Now — {CAMP.price}
              </Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                Ask a Question
              </a>
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

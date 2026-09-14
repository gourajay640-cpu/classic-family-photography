'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Camera, Heart, Play, Quote } from 'lucide-react';

const hero = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90';
const story = 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=88';
const work = [
  ['The Wedding Day', 'Weddings', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=88'],
  ['A Quiet Beginning', 'Pre-Wedding', 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1100&q=88'],
  ['After The Vows', 'Reception', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=88'],
];

const services = ['Wedding Photography','Wedding Films','Cinematography','Pre-Wedding','Couples','Editorial / Modelling','Events','Custom Stories'];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src={hero} alt="Wedding couple portrait" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-kicker">Classic Family Photography • Bhopal</div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="hero-title">
            Stories worth<br /><em>remembering.</em>
          </motion.h1>
          <p className="hero-lede">Wedding photography and films for people who want more than coverage — they want images that still feel alive years from now.</p>
          <div className="hero-actions">
            <a className="btn-premium gold" href="/booking">Book your date <ArrowUpRight size={15} /></a>
            <a className="btn-premium" href="/portfolio">Explore the work <ArrowRight size={15} /></a>
          </div>
          <div className="hero-meta"><span>Weddings</span><span>Films</span><span>Portraits</span><span>BHOPAL / INDIA</span></div>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div className="story-photo">
            <img src={story} alt="Wedding celebration" loading="lazy" />
            <span className="photo-tag">Honest moments • Thoughtful frames</span>
          </div>
          <div className="story-copy">
            <div className="eyebrow">The studio</div>
            <h2>Not just a record.<br />A feeling.</h2>
            <p>Classic Family Photography blends candid observation with an editorial eye. We care about the quiet in-between moments as much as the big ones — a hand on a shoulder, a laugh before the ceremony, the room five minutes before everyone arrives.</p>
            <p>Our approach is cinematic, warm and calm, designed to let you be present while we take care of the story.</p>
            <div className="signature-line">Made with care in Bhopal.</div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="shell">
          <div className="section-head">
            <div><div className="eyebrow">Selected work</div><h2>A few stories<br />we loved telling.</h2></div>
            <div><p>From intimate ceremonies to full wedding weekends, our portfolio is built around real people, real places and real emotion.</p><a className="text-link" href="/portfolio">View full portfolio <ArrowRight size={15} /></a></div>
          </div>
          <div className="work-grid">
            <figure className="work-card work-large"><img src={work[0][2]} alt={work[0][0]} loading="lazy" /><figcaption><strong>{work[0][0]}</strong><span>{work[0][1]}</span></figcaption></figure>
            <div className="work-stack">
              {work.slice(1).map(([title, cat, url]) => <figure className="work-card work-small" key={title}><img src={url} alt={title} loading="lazy" /><figcaption><strong>{title}</strong><span>{cat}</span></figcaption></figure>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell">
          <div className="section-head"><div><div className="eyebrow">What we do</div><h2>Built around<br />your story.</h2></div><p>Choose one service or build a custom team around your event. Coverage is tailored to your timeline, location and priorities.</p></div>
          <div className="service-grid">
            {services.map((service, i) => <div className="service-item" key={service}><span className="service-number">0{i + 1}</span><h3>{service}</h3><p>Clean, cinematic coverage with a natural, people-first approach.</p></div>)}
          </div>
        </div>
      </section>

      <section className="quote-band section">
        <div className="shell">
          <Quote size={24} className="mx-auto" />
          <blockquote>“The best photographs don't just show you what happened. They take you back.”</blockquote>
          <p>We photograph the energy, the tenderness and all the little details that make a celebration yours.</p>
        </div>
      </section>

      <section className="section cta-panel">
        <img src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=2000&q=88" alt="Couple during wedding celebration" loading="lazy" />
        <div className="cta-inner">
          <div className="eyebrow" style={{ color: '#d9bc8c' }}>Your date matters</div>
          <h2>Let's make something<br /><em>beautiful.</em></h2>
          <p>Tell us your date, your plans and what matters most to you. We'll come back with availability and a package built around the day.</p>
          <div className="hero-actions"><a className="btn-premium gold" href="/booking">Check availability <ArrowUpRight size={15} /></a><a className="btn-premium" href="/contact">Talk to the studio</a></div>
        </div>
      </section>
    </main>
  );
}

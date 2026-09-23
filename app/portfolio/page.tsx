'use client';
import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

const data = [
  ['Ring Ceremony', 'Weddings', '/ring ceremony.jpg'],
  ['Model Portfolio', 'Modelling', '/modeling-1.jpg'],
  ['Bride & Groom Portrait', 'Weddings', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1100&q=88'],
  ['Pre-Wedding Couple Shoot', 'Pre-Wedding', 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1100&q=88'],
  ['Cinematic Wedding', 'Cinematography', 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1100&q=88'],
  ['Reception', 'Events', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=88'],
  ['Haldi', 'Weddings', 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=88'],
  ['Couple Session', 'Couple', 'https://images.unsplash.com/photo-1494386346843-e12284507169?auto=format&fit=crop&w=1100&q=88'],
];

export default function Portfolio() {
  const [c, setC] = useState('All');
  const [light, setLight] = useState<string | null>(null);
  const cats = ['All', 'Weddings', 'Pre-Wedding', 'Cinematography', 'Modelling', 'Couple', 'Events'];
  const filtered = data.filter((x) => c === 'All' || x[1] === c);

  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">Portfolio</div>
          <h1>
            The images
            <br />
            speak for themselves.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', alignItems: 'end' }}>
            <p className="muted" style={{ maxWidth: 540, lineHeight: 1.7 }}>
              A growing archive of weddings, couples, portraits and celebrations. Tap any image to view it full screen.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {cats.map((x) => (
                <button
                  key={x}
                  onClick={() => setC(x)}
                  className="btn-premium"
                  style={{
                    color: c === x ? '#fff' : 'var(--ink)',
                    borderColor: c === x ? 'var(--ink)' : 'var(--line)',
                    background: c === x ? 'var(--ink)' : 'transparent',
                  }}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
          <div style={{ columns: '3 280px', columnGap: 18, marginTop: 46 }}>
            {filtered.map(([title, cat, url]) => (
              <button
                key={title}
                onClick={() => setLight(url)}
                style={{
                  width: '100%',
                  display: 'block',
                  marginBottom: 18,
                  textAlign: 'left',
                  background: 'none',
                  border: 0,
                  padding: 0,
                  breakInside: 'avoid',
                }}
              >
                <img src={url} alt={title} loading="lazy" style={{ width: '100%', display: 'block' }} />
                <div style={{ padding: '11px 2px 0' }}>
                  <strong style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '1.2rem' }}>{title}</strong>
                  <span className="muted" style={{ fontSize: '.68rem', letterSpacing: '.13em', textTransform: 'uppercase', marginLeft: 8 }}>
                    {cat}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
            <a className="text-link" href="/booking">
              Want this for your day? Start a conversation <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      {light && (
        <div
          onClick={() => setLight(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(7,7,7,.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <button
            onClick={() => setLight(null)}
            style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 0, color: '#fff' }}
          >
            <X size={25} />
          </button>
          <img src={light} alt="Portfolio preview" style={{ maxWidth: '94vw', maxHeight: '90vh', objectFit: 'contain' }} />
        </div>
      )}
    </main>
  );
}
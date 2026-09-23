'use client';
import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

// Purane links hata kar apni sabhi images yahan add karein:
const data = [
  ['Ring Ceremony', 'Weddings', '/ring-ceremony.jpg'],
  ['Pre Wedding Shoot', 'Pre-Wedding', '/pre-wedding-1.jpg'],
  ['Cinematic Shoot', 'Cinematography', '/cinematic-1.jpg'],
  ['Haldi Function', 'Weddings', '/haldi-1.jpg'],
  ['Couple Shoot', 'Couple', '/couple-1.jpg'],
  ['Reception Party', 'Events', '/reception-1.jpg'],
  ['Model Portrait', 'Modelling', '/modeling-1.jpg'],
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
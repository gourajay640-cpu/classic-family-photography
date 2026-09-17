'use client';
import { useEffect, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function Booking() {
  const [date, setDate] = useState('');
  const [packages, setPackages] = useState<any[]>([]);
  const [done, setDone] = useState<any>(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/packages')
      .then((r) => r.json())
      .then(setPackages)
      .catch(() => setPackages([]));
  }, []);

  async function submit(e: any) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    // Fallback preferred times so backend validation doesn't fail
    const pStart = f.get('preferredStartTime') || '09:00';
    const pEnd = f.get('preferredEndTime') || '18:00';
    f.set('startTime', pStart.toString());
    f.set('endTime', pEnd.toString());

    const r = await fetch('/api/bookings', { method: 'POST', body: f });
    const j = await r.json();

    if (!r.ok) {
      setMsg(j.error || 'Unable to submit');
      return;
    }
    setDone(j);
    setMsg('');
  }

  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <div className="eyebrow">Book a shoot</div>
          <h1>Tell us about<br />your day.</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 60, alignItems: 'start' }}>
          
          <aside>
            <div className="eyebrow">How it works</div>
            <div style={{ display: 'grid', gap: 18, marginTop: 22 }}>
              {[
                ['01', 'Share your date'],
                ['02', 'Tell us what you need'],
                ['03', 'We confirm availability']
              ].map(([n, t]) => (
                <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Georgia,serif', fontSize: '1.1rem', color: 'var(--gold)' }}>{n}</span>
                  <span style={{ fontSize: '.9rem' }}>{t}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="card-premium" style={{ padding: '34px' }}>
            {done ? (
              <div style={{ padding: '50px 0', textAlign: 'center' }}>
                <Check size={38} color="var(--gold)" style={{ margin: '0 auto' }} />
                <div className="eyebrow" style={{ marginTop: 18 }}>Request received</div>
                <h2 className="serif" style={{ fontSize: '3rem', fontWeight: 400, margin: '10px 0' }}>You're on the list.</h2>
                <p className="muted">
                  We have your enquiry. Your booking ID is <strong style={{ color: 'var(--ink)' }}>{done.bookingCode}</strong>.
                </p>
                <a className="btn-premium" href="/">Back home</a>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'grid', gap: 26 }}>
                
                <div className="eyebrow">Your details</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    ['name', 'Client Name', 'text'],
                    ['phone', 'Phone Number', 'tel'],
                    ['email', 'Email', 'email'],
                    ['location', 'Event Location', 'text']
                  ].map(([n, l, t]) => (
                    <label key={n} style={{ display: 'grid', gap: 8 }}>
                      <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>{l}</span>
                      <input required name={n} type={t} style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0', outline: 'none' }} />
                    </label>
                  ))}
                </div>

                <div className="eyebrow" style={{ marginTop: 8 }}>The event</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Event Type</span>
                    <select required name="eventType" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }}>
                      <option value="WEDDING">Wedding</option>
                      <option value="PRE_WEDDING">Pre-Wedding</option>
                      <option value="MODELLING">Modelling</option>
                      <option value="ENGAGEMENT">Engagement</option>
                      <option value="RECEPTION">Reception</option>
                      <option value="BIRTHDAY">Birthday</option>
                      <option value="EVENT">Event</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </label>

                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Event Date</span>
                    <input required name="eventDate" type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>
                </div>

                <div className="eyebrow">Planning details</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>People</span>
                    <input name="people" type="number" min="1" defaultValue="2" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>

                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Functions</span>
                    <input name="functions" type="number" min="1" defaultValue="1" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>

                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Package</span>
                    <select name="packageId" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }}>
                      <option value="">Custom / Contact</option>
                      {packages.map((p) => (
                        <option value={p.id} key={p.id}>
                          {p.name} — ₹{Number(p.price).toLocaleString('en-IN')}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Budget</span>
                    <input name="budget" type="number" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Start time</span>
                    <input required name="preferredStartTime" type="time" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>

                  <label style={{ display: 'grid', gap: 8 }}>
                    <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>End time</span>
                    <input required name="preferredEndTime" type="time" style={{ border: 0, borderBottom: '1px solid var(--line)', background: 'transparent', padding: '10px 0' }} />
                  </label>
                </div>

                <label style={{ display: 'grid', gap: 8 }}>
                  <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>Anything else?</span>
                  <textarea name="message" rows={5} style={{ border: '1px solid var(--line)', padding: 14, background: 'transparent', outline: 'none' }} />
                </label>

                {msg && <p style={{ color: '#9f2f2f', margin: 0 }}>{msg}</p>}

                <div style={{ display: 'flex', justify: 'space-between', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="muted" style={{ fontSize: '.78rem' }}>No payment is taken at this stage.</span>
                  <button className="btn-premium" style={{ background: 'var(--ink)', color: '#fff', borderColor: 'var(--ink)' }}>
                    Send enquiry <ArrowRight size={15} />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
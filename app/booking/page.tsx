'use client';

import { useEffect, useState } from 'react';
import { Check, CheckCircle, ArrowRight } from 'lucide-react';

export default function BookingPage() {
  const [date, setDate] = useState('2026-09-25');
  const [packages, setPackages] = useState<any[]>([]);
  const [done, setDone] = useState<any>(null);
  const [msg, setMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Field State
  const [eventType, setEventType] = useState('WEDDING');
  const [people, setPeople] = useState('2');
  const [functions, setFunctions] = useState('1');
  const [pkg, setPkg] = useState('CUSTOM');
  const [budget, setBudget] = useState('59967');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('19:00');
  const [note, setNote] = useState('interested');

  useEffect(() => {
    fetch('/api/packages')
      .then((r) => r.json())
      .then(setPackages)
      .catch(() => setPackages([]));
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg('');

    const f = new FormData(e.currentTarget);

    // If packageId is empty or "CUSTOM", delete it so backend treats it as optional/null
    const packageVal = f.get('packageId');
    if (!packageVal || packageVal === 'CUSTOM') {
      f.delete('packageId');
    }

    // Set fallback start and end time if not filled
    const pStart = f.get('preferredStartTime') || startTime || '09:00';
    const pEnd = f.get('preferredEndTime') || endTime || '18:00';
    f.set('startTime', pStart.toString());
    f.set('endTime', pEnd.toString());

    try {
      const r = await fetch('/api/bookings', { method: 'POST', body: f });
      const j = await r.json();

      if (!r.ok) {
        setMsg(j.error || 'Unable to submit enquiry');
        return;
      }

      setDone(j);
      setIsSubmitted(true);
    } catch (err) {
      setMsg('Something went wrong. Please try again.');
    }
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#fcfbf9] pt-32 pb-16 px-6 text-[#1a1a1a]">
        <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-10 rounded-2xl border border-black/10 shadow-sm">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="font-serif text-3xl sm:text-4xl">Enquiry Received!</h1>
          <p className="text-sm text-black/70 leading-relaxed">
            {done?.bookingCode ? (
              <>
                Thank you for reaching out. Your booking ID is{' '}
                <strong className="text-black">{done.bookingCode}</strong>. We will get back to you shortly.
              </>
            ) : (
              'Thank you for reaching out. We have received your booking details and will get back to you shortly.'
            )}
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setDone(null);
            }}
            className="mt-4 bg-[#181818] text-white px-6 py-3 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-black transition-all"
          >
            Submit Another Enquiry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fcfbf9] pt-28 pb-16 px-6 text-[#1a1a1a]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase text-[#c5a880] font-semibold block">
            BOOK YOUR DATE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl mt-1">Reserve a Session</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start">
          {/* Sidebar / Steps */}
          <aside>
            <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 mb-4">
              How it works
            </div>
            <div className="space-y-4">
              {[
                ['01', 'Share your date'],
                ['02', 'Tell us what you need'],
                ['03', 'We confirm availability'],
              ].map(([n, t]) => (
                <div key={n} className="flex gap-3 items-center">
                  <span className="font-serif text-lg text-[#c5a880]">{n}</span>
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-black/10 space-y-6"
          >
            <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70">
              Your details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ['name', 'Client Name', 'text'],
                ['phone', 'Phone Number', 'tel'],
                ['email', 'Email', 'email'],
                ['location', 'Event Location', 'text'],
              ].map(([n, l, t]) => (
                <label key={n} className="block space-y-2">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-black/70 block">
                    {l}
                  </span>
                  <input
                    required
                    name={n}
                    type={t}
                    className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                  />
                </label>
              ))}
            </div>

            <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 pt-2">
              The Event
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  EVENT TYPE
                </label>
                <select
                  name="eventType"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                >
                  <option value="WEDDING">Wedding</option>
                  <option value="PRE_WEDDING">Pre-Wedding</option>
                  <option value="MODELLING">Modelling</option>
                  <option value="ENGAGEMENT">Engagement</option>
                  <option value="RECEPTION">Reception</option>
                  <option value="BIRTHDAY">Birthday</option>
                  <option value="EVENT">Event</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  EVENT DATE
                </label>
                <input
                  required
                  name="eventDate"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 pt-2">
              Planning Details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  PEOPLE
                </label>
                <input
                  name="people"
                  type="number"
                  min="1"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  FUNCTIONS
                </label>
                <input
                  name="functions"
                  type="number"
                  min="1"
                  value={functions}
                  onChange={(e) => setFunctions(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  PACKAGE
                </label>
                <select
                  name="packageId"
                  value={pkg}
                  onChange={(e) => setPkg(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                >
                  <option value="CUSTOM">Custom / Contact</option>
                  {packages.map((p) => (
                    <option value={p.id} key={p.id}>
                      {p.name} — ₹{Number(p.price).toLocaleString('en-IN')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  BUDGET
                </label>
                <input
                  name="budget"
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  START TIME
                </label>
                <input
                  name="preferredStartTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                  END TIME
                </label>
                <input
                  name="preferredEndTime"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                ANYTHING ELSE?
              </label>
              <textarea
                name="message"
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full border border-black/20 bg-transparent p-3 text-sm outline-none focus:border-black rounded-lg"
              />
            </div>

            {msg && <p className="text-red-600 text-xs font-medium">{msg}</p>}

            <div className="flex justify-between items-center pt-4 flex-wrap gap-4">
              <span className="text-xs text-black/50">
                No payment is taken at this stage.
              </span>
              <button
                type="submit"
                className="bg-[#181818] text-white py-3.5 px-8 rounded-none font-medium text-xs tracking-wider uppercase hover:bg-black transition-all flex items-center gap-2"
              >
                SEND ENQUIRY <ArrowRight size={15} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
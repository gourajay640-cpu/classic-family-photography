'use client';

import { useEffect, useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function BookingPage() {
  const [date, setDate] = useState('2026-09-30');
  const [packages, setPackages] = useState<any[]>([]);
  const [done, setDone] = useState<any>(null);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api/packages')
      .then((r) => r.json())
      .then((data) => setPackages(Array.isArray(data) ? data : []))
      .catch(() => setPackages([]));
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Dynamic Package Value Handling
    const rawPackageId = formData.get('packageId')?.toString();
    const packageId = (rawPackageId && rawPackageId !== 'CUSTOM' && rawPackageId !== 'Custom / Contact') 
      ? rawPackageId 
      : null;

    // Convert values to expected types for backend API (Zod/Prisma validation)
    const payload = {
      name: formData.get('name')?.toString() || '',
      phone: formData.get('phone')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      location: formData.get('location')?.toString() || '',
      eventType: formData.get('eventType')?.toString() || 'MODELLING',
      eventDate: date,
      people: Number(formData.get('people')) || 1,
      functions: Number(formData.get('functions')) || 1,
      packageId: packageId,
      budget: Number(formData.get('budget')) || 0,
      startTime: formData.get('preferredStartTime')?.toString() || '09:00',
      endTime: formData.get('preferredEndTime')?.toString() || '18:00',
      message: formData.get('message')?.toString() || '',
    };

    try {
      // 1. Send as JSON to handle integer numbers & null values properly
      let r = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // 2. Fallback to FormData if backend expects multipart form
      if (!r.ok) {
        const cleanedFormData = new FormData();
        Object.entries(payload).forEach(([k, v]) => {
          if (v !== null && v !== undefined) {
            cleanedFormData.set(k, v.toString());
          }
        });

        r = await fetch('/api/bookings', {
          method: 'POST',
          body: cleanedFormData,
        });
      }

      const j = await r.json();

      if (!r.ok) {
        setMsg(j.error || j.message || 'Invalid booking details');
        return;
      }

      setDone(j);
    } catch (err) {
      setMsg('Something went wrong. Please try again.');
    }
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

          <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-black/10">
            {done ? (
              <div className="py-12 text-center space-y-4">
                <Check className="w-12 h-12 text-[#c5a880] mx-auto" />
                <div className="text-xs uppercase tracking-widest text-[#c5a880]">Request received</div>
                <h2 className="font-serif text-3xl">You're on the list.</h2>
                <p className="text-sm text-black/70">
                  We have your enquiry. Your booking ID is{' '}
                  <strong className="text-black">{done.bookingCode || done.id}</strong>.
                </p>
                <button
                  onClick={() => setDone(null)}
                  className="mt-4 bg-[#181818] text-white px-6 py-2.5 text-xs font-medium uppercase tracking-wider hover:bg-black transition-all"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70">
                  Your details
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    ['name', 'Client Name', 'text', 'Ajay gour'],
                    ['phone', 'Phone Number', 'tel', '08103748831'],
                    ['email', 'Email', 'email', 'gourajay640@gmail.com'],
                    ['location', 'Event Location', 'text', 'Bhopal'],
                  ].map(([n, l, t, d]) => (
                    <label key={n} className="block space-y-2">
                      <span className="text-[11px] tracking-[0.16em] uppercase text-black/70 block">
                        {l}
                      </span>
                      <input
                        required
                        name={n}
                        type={t}
                        defaultValue={d}
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
                      defaultValue="MODELLING"
                      className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                    >
                      <option value="MODELLING">Modelling</option>
                      <option value="WEDDING">Wedding</option>
                      <option value="PRE_WEDDING">Pre-Wedding</option>
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
                      defaultValue="2"
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
                      defaultValue="1"
                      className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                      PACKAGE
                    </label>
                    <select
                      name="packageId"
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
                      type="number"
                      defaultValue="59986"
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
                      defaultValue="09:00"
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
                      defaultValue="18:00"
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
                    defaultValue=""
                    className="w-full border border-black/20 bg-transparent p-3 text-sm outline-none focus:border-black rounded-lg"
                  />
                </div>

                {msg && <p className="text-red-600 text-xs font-semibold">{msg}</p>}

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
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
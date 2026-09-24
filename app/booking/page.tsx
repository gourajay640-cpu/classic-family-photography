'use client';

import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [eventType, setEventType] = useState('Wedding');
  const [date, setDate] = useState('2026-09-25');
  const [people, setPeople] = useState('2');
  const [functions, setFunctions] = useState('1');
  const [pkg, setPkg] = useState('Custom / Contact');
  const [budget, setBudget] = useState('59967');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('19:00');
  const [note, setNote] = useState('interested');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Instant successful booking mock
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-[#fcfbf9] pt-32 pb-16 px-6 text-[#1a1a1a]">
        <div className="max-w-xl mx-auto text-center space-y-6 bg-white p-10 rounded-2xl border border-black/10 shadow-sm">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
          <h1 className="font-serif text-3xl sm:text-4xl">Enquiry Received!</h1>
          <p className="text-sm text-black/70 leading-relaxed">
            Thank you for reaching out. We have received your booking details and will get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
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

        <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-black/10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                EVENT TYPE
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
              >
                <option value="Wedding">Wedding</option>
                <option value="Pre-Wedding">Pre-Wedding</option>
                <option value="Event">Event</option>
                <option value="Modelling">Modelling</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                EVENT DATE
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                PEOPLE
              </label>
              <input
                type="number"
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
                type="number"
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
                value={pkg}
                onChange={(e) => setPkg(e.target.value)}
                className="w-full border-b border-black/20 bg-transparent py-2 text-sm outline-none focus:border-black"
              >
                <option value="Custom / Contact">Custom / Contact</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block mb-2">
                BUDGET
              </label>
              <input
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
              rows={4}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border border-black/20 bg-transparent p-3 text-sm outline-none focus:border-black rounded-lg"
            />
          </div>

          {errorMessage && (
            <p className="text-red-600 text-xs font-medium">{errorMessage}</p>
          )}

          <div className="flex justify-between items-center pt-4">
            <span className="text-xs text-black/50">No payment is taken at this stage.</span>
            <button
              type="submit"
              className="bg-[#181818] text-white py-3.5 px-8 rounded-none font-medium text-xs tracking-wider uppercase hover:bg-black transition-all flex items-center gap-2"
            >
              SEND ENQUIRY <ArrowRight size={15} />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
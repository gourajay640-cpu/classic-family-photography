"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, ArrowRight } from "lucide-react";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("classic9617@gmail.com");
  const [password, setPassword] = useState("System@6982");
  const [showPassword, setShowPassword] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Direct access on click without blocking authentication
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#fcfbf9] text-[#1a1a1a]">
        {/* Left Studio Banner */}
        <div className="relative bg-[#111] text-white p-10 md:p-16 flex flex-col justify-between min-h-[320px] lg:min-h-screen">
          <div className="text-xs tracking-[0.2em] uppercase opacity-80 font-medium">
            Studio Portal
          </div>
          <div className="my-auto py-12">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              The work<br />behind the<br />work.
            </h1>
            <p className="mt-5 text-gray-400 max-w-sm text-sm sm:text-base leading-relaxed">
              Manage bookings, availability, clients, payments and portfolio content from one calm, simple workspace.
            </p>
          </div>
          <div className="text-xs opacity-50 font-medium tracking-wider">
            Classic Family Photography
          </div>
        </div>

        {/* Right Integrated Login Form */}
        <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#c5a880] font-semibold block">
                Classic Family Photography
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal mt-2 text-[#111]">
                Welcome back.
              </h2>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-black/20 bg-transparent py-2.5 text-sm text-black outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] tracking-[0.16em] uppercase font-medium text-black/70 block">
                  PASSWORD
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-black/20 bg-transparent py-2.5 pr-10 text-sm text-black outline-none focus:border-black transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 text-black/50 hover:text-black p-1 transition-colors"
                    title={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#181818] text-white py-3.5 px-6 rounded-none font-medium text-xs tracking-wider uppercase hover:bg-black transition-all flex items-center justify-center gap-2 mt-4"
              >
                SIGN IN <ArrowRight size={15} />
              </button>

              <div className="flex items-center gap-2 text-xs text-black/50 pt-2">
                <Lock size={12} />
                <span>Demo login prefilled for quick studio preview.</span>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // Dashboard View after Sign In click
  return (
    <main className="min-h-screen bg-[#f5f2eb] pt-32 pb-16 px-6 md:px-12 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Title & Logout Toggle */}
        <div className="flex justify-between items-end border-b border-black/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/60 font-medium">
              STUDIO MANAGEMENT
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-normal mt-1">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/booking" 
              className="hidden sm:inline-block text-xs uppercase tracking-wider bg-black text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-all font-medium"
            >
              + New Booking
            </Link>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-xs uppercase tracking-wider border border-black/20 px-4 py-2.5 rounded-full hover:bg-black hover:text-white transition-all font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-black/5">
            <p className="text-xs text-black/60 font-medium">Bookings</p>
            <p className="text-2xl font-semibold mt-1">3</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-black/5">
            <p className="text-xs text-black/60 font-medium">Clients</p>
            <p className="text-2xl font-semibold mt-1">2</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-black/5">
            <p className="text-xs text-black/60 font-medium">Packages</p>
            <p className="text-2xl font-semibold mt-1">2</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-black/5">
            <p className="text-xs text-black/60 font-medium">Team</p>
            <p className="text-2xl font-semibold mt-1">3</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-black/5">
            <p className="text-xs text-black/60 font-medium">Revenue</p>
            <p className="text-2xl font-semibold mt-1">₹0</p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif">Upcoming Shoots</h2>
              <button className="text-xs text-black/60 hover:text-black underline">
                Refresh
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-white/70 p-5 rounded-2xl border border-black/5 flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="font-semibold text-lg">Ajay gour</h3>
                  <p className="text-xs text-black/60 uppercase tracking-wider">
                    EVENT • bhopal
                  </p>
                </div>
                <div className="text-right text-xs text-black/70">
                  <p className="font-medium">15/9/2026</p>
                  <p className="text-black/50">12:00 – 14:00</p>
                </div>
              </div>

              <div className="bg-white/70 p-5 rounded-2xl border border-black/5 flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="font-semibold text-lg">Ajay gour</h3>
                  <p className="text-xs text-black/60 uppercase tracking-wider">
                    PRE WEDDING • bhopal
                  </p>
                </div>
                <div className="text-right text-xs text-black/70">
                  <p className="font-medium">15/9/2026</p>
                  <p className="text-black/50">09:00 – 12:00</p>
                </div>
              </div>

              <div className="bg-white/70 p-5 rounded-2xl border border-black/5 flex justify-between items-center shadow-sm">
                <div>
                  <h3 className="font-semibold text-lg">Test User</h3>
                  <p className="text-xs text-black/60 uppercase tracking-wider">
                    WEDDING • Studio Main
                  </p>
                </div>
                <div className="text-right text-xs text-black/70">
                  <p className="font-medium">1/10/2026</p>
                  <p className="text-black/50">10:00 – 12:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-black/5 space-y-4">
            <h2 className="text-2xl font-serif">Quick Actions</h2>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <Link 
                href="/booking" 
                className="p-2.5 rounded-lg hover:bg-black/5 text-black/80 hover:text-black transition-colors"
              >
                + New Booking
              </Link>
              <button 
                onClick={() => setActiveModal("Add Client")} 
                className="p-2.5 rounded-lg text-left hover:bg-black/5 text-black/80 hover:text-black transition-colors"
              >
                + Add Client
              </button>
              <button 
                onClick={() => setActiveModal("Add Package")} 
                className="p-2.5 rounded-lg text-left hover:bg-black/5 text-black/80 hover:text-black transition-colors"
              >
                + Add Package
              </button>
              <button 
                onClick={() => setActiveModal("Upload Photo")} 
                className="p-2.5 rounded-lg text-left hover:bg-black/5 text-black/80 hover:text-black transition-colors"
              >
                ↑ Upload Photo
              </button>
              <button 
                onClick={() => setActiveModal("Block Date")} 
                className="p-2.5 rounded-lg text-left hover:bg-black/5 text-black/80 hover:text-black transition-colors"
              >
                ⏰ Block Date
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full space-y-4 text-black">
              <h3 className="text-xl font-serif font-semibold">{activeModal}</h3>
              <p className="text-sm text-black/60">Opening form for {activeModal}...</p>
              <div className="flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)} 
                  className="px-4 py-2 bg-black text-white text-xs font-medium rounded-full hover:bg-black/80 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#f5f2eb] pt-32 pb-16 px-6 md:px-12 text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Title */}
        <div className="flex justify-between items-end border-b border-black/10 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/60 font-medium">
              STUDIO MANAGEMENT
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-normal mt-1">
              Dashboard
            </h1>
          </div>
          <Link 
            href="/booking" 
            className="hidden sm:inline-block text-sm bg-black text-white px-5 py-2.5 rounded-full hover:bg-black/80 transition-all"
          >
            + New Booking
          </Link>
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
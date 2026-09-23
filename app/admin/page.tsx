'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Lock, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('classic9617@gmail.com');
  const [password, setPassword] = useState('System@6982');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      router.push('/admin');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg, #fcfbf9)' }}>
      {/* Left Banner */}
      <div style={{ position: 'relative', background: '#111', color: '#fff', padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '.75rem', letterSpacing: '.2em', textTransform: 'uppercase', opacity: .8 }}>Studio Portal</div>
        <div>
          <h1 className="serif" style={{ fontSize: '3.5rem', fontWeight: 400, lineHeight: 1.1 }}>
            The work<br />behind the<br />work.
          </h1>
          <p style={{ marginTop: '20px', color: '#aaa', maxWidth: '360px', fontSize: '.9rem' }}>
            Manage bookings, availability, clients, payments and portfolio content from one calm, simple workspace.
          </p>
        </div>
        <div style={{ fontSize: '.8rem', opacity: .5 }}>Classic Family Photography</div>
      </div>

      {/* Right Form */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <div style={{ fontSize: '.7rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold, #c5a880)' }}>
            Classic Family Photography
          </div>
          <h2 className="serif" style={{ fontSize: '2.8rem', fontWeight: 400, margin: '8px 0 32px' }}>
            Welcome back.
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
            <label style={{ display: 'grid', gap: '8px' }}>
              <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>EMAIL</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ border: 0, borderBottom: '1px solid #ccc', background: 'transparent', padding: '10px 0', outline: 'none' }}
              />
            </label>

            <label style={{ display: 'grid', gap: '8px', position: 'relative' }}>
              <span style={{ fontSize: '.67rem', letterSpacing: '.16em', textTransform: 'uppercase' }}>PASSWORD</span>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ border: 0, borderBottom: '1px solid #ccc', background: 'transparent', padding: '10px 32px 10px 0', outline: 'none', width: '100%' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: 0,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            {error && <p style={{ color: '#a33', fontSize: '.85rem', margin: 0 }}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="btn-premium"
              style={{
                background: '#181818',
                color: '#fff',
                padding: '14px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px'
              }}
            >
              {loading ? 'SIGNING IN...' : 'SIGN IN'} <ArrowRight size={15} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.75rem', color: '#777', marginTop: '10px' }}>
              <Lock size={12} />
              <span>Demo login is prefilled for local development.</span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
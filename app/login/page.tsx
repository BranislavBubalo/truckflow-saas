'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: pin.toUpperCase() }),
      });

      const data = await response.json();

      if (data.success) {
        // Sačuvaj PIN u session
        document.cookie = `auth_pin=${pin.toUpperCase()}; path=/; max-age=86400`; // 24h
        router.push('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🚛</div>
          <h1 className="text-3xl font-bold text-white mb-2">TruckFlow</h1>
          <p className="text-white/70">Enter your access PIN</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN (e.g., TF001)"
              className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-center text-2xl font-mono tracking-widest focus:outline-none focus:border-blue-400 transition"
              maxLength={5}
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-200 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold text-lg transition disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Access Site'}
          </button>
        </form>

        <p className="text-white/40 text-sm text-center mt-6">
          Protected access. Contact administrator for PIN.
        </p>
      </div>
    </div>
  );
}

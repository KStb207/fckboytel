'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Beispiel: API-Aufruf zu Supabase oder Email-Service
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      // Für jetzt: Nur lokale Validierung
      if (!email.includes('@')) {
        setError('Gültige Email erforderlich');
        setLoading(false);
        return;
      }

      // Simuliere API-Aufruf
      await new Promise(resolve => setTimeout(resolve, 500));

      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    } catch (err) {
      setError('Fehler beim Abonnieren. Versuche es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="bg-green-900 border border-green-700 text-white p-4 rounded">
        <p className="font-bold uppercase tracking-wider">✓ Erfolgreich angemeldet</p>
        <p className="text-sm text-green-200 mt-1">Danke! Du erhältst Infos zu neuen Drops.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="deine@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 bg-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
          required
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-white text-gray-900 px-6 py-3 font-bold hover:bg-gray-100 transition uppercase text-sm tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Wird gesendet...' : 'Go'}
        </button>
      </div>
      
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
    </form>
  );
}

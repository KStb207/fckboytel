'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const accepted = localStorage.getItem('disclaimer_accepted');
    if (!accepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimer_accepted', 'true');
    setShowBanner(false);
  };

  if (!mounted || !showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-70 z-40" />

      {/* Modal Banner */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-6">
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-10 text-center">
          <div className="mb-8">
            <div className="text-5xl font-bold text-gray-900 mb-4 uppercase" style={{ letterSpacing: '-1px' }}>
              Disclaimer
            </div>
            <div className="h-1 w-12 bg-gray-300 mx-auto"></div>
          </div>

          <p className="text-gray-700 leading-relaxed font-light mb-8 text-lg">
            Die Seite wird mit einer großen Portion Humor sowohl ironisch und makaber betrieben. 
            <span className="block mt-4 font-bold">
              Wenn du den Humor nicht verstehst, dann hau ab.
            </span>
          </p>

          <button
            onClick={handleAccept}
            className="w-full px-8 py-4 font-bold text-white hover:opacity-90 transition uppercase tracking-widest text-base"
            style={{ backgroundColor: '#013220' }}
          >
            Verstanden
          </button>
        </div>
      </div>
    </>
  );
}
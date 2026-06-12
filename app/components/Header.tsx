//components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 px-6 border-b-2 border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold uppercase tracking-tighter hover:text-gray-300 transition" style={{ letterSpacing: '-2px' }}>
          FckBoyTel
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link href="/produkte" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Produkte
          </Link>
          <Link href="/blog" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Blog
          </Link>
          <Link href="/ueber-uns" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Über Uns
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-6 pb-4 border-t border-gray-700 pt-4 flex flex-col gap-4">
          <Link href="/produkte" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Produkte
          </Link>
          <Link href="/blog" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Blog
          </Link>
          <Link href="/ueber-uns" className="uppercase text-sm font-bold tracking-widest hover:text-gray-300 transition">
            Über Uns
          </Link>
        </nav>
      )}
    </header>
  );
}
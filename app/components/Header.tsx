import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#2F4F4F' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition">
          <Image
            src="/images/Logo.png"
            alt="FckBoyTel Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link href="/produkte" className="text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition">
            Produkte
          </Link>
          <Link href="/blog" className="text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition">
            Blog
          </Link>
          <Link href="/ueber-uns" className="text-white font-bold uppercase tracking-widest text-sm hover:opacity-80 transition">
            Über uns
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}
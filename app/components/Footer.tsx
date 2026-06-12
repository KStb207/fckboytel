// \app\components\Footer.tsx

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Über */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Über FckBoyTel</h3>
            <p className="text-sm leading-relaxed font-light">
              Der Kulturbeutel für Männer mit Plan. Alles dabei, Null Improvisation.
            </p>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Widerrufsrecht
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@fckboytel.de" className="hover:text-white transition">
                  info@fckboytel.de
                </a>
              </li>
              <li className="text-xs text-gray-600 mt-4">
                FckBoyTel<br />
                Arnsberg, Deutschland
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4 text-xs">
            <p>© {currentYear} FckBoyTel. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
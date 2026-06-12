import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'FckBoyTel - Der Kulturbeutel für Männer mit Plan',
  description: 'Zahnbürste, Deo, Labello, Feuerzeug. Alles dabei. Null Improvisation.',
};

export default function Home() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-32 px-6 text-center border-b-4 border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="text-7xl font-bold tracking-tight mb-4 uppercase" style={{ letterSpacing: '-2px' }}>
                FckBoyTel
              </div>
              <div className="h-1 w-16 bg-gray-600 mx-auto"></div>
            </div>

            <h1 className="text-5xl font-bold mb-8 leading-tight uppercase" style={{ letterSpacing: '-1px' }}>
              Für Männer mit Plan
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Zahnbürste, Deo, Labello, Feuerzeug. Alles dabei. Null Improvisation.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-gray-900 px-10 py-4 font-bold text-base hover:bg-gray-100 transition uppercase tracking-widest">
                Zum Shop
              </button>
              <button className="border-2 border-white text-white px-10 py-4 font-bold text-base hover:bg-white hover:text-gray-900 transition uppercase tracking-widest">
                Details
              </button>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
              Was ist drin
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Zahnbürste', desc: 'Frischer Atem. Kein Kompromiss.' },
                { name: 'Deo', desc: 'Für jede Situation gerüstet.' },
                { name: 'Labello', desc: 'Gepflegte Lippen, immer.' },
                { name: 'Feuerzeug', desc: 'Klassisch. Unverzichtbar.' },
                { name: 'Premium-Beutel', desc: 'Anthrazit. Hochwertig.' },
                { name: 'Humor', desc: 'Das Wichtigste im Paket.' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 border-l-4 border-gray-700 hover:border-gray-900 transition duration-300"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wider">{item.name}</div>
                  <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
              Zwei Varianten
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Gefüllt */}
              <div className="border-2 border-gray-900 p-10 bg-gray-50">
                <div className="text-sm font-bold text-gray-600 uppercase tracking-widest mb-6">Option 01</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 uppercase" style={{ letterSpacing: '-0.5px' }}>
                  Gefüllt
                </h3>
                <p className="text-gray-700 mb-10 leading-relaxed font-light">
                  Komplett ausgestattet. Einfach auspacken und fertig. Keine Vorbereitung nötig.
                </p>
                <div className="bg-gray-900 text-white p-6 mb-8">
                  <div className="text-4xl font-bold">24,90€</div>
                  <div className="text-sm text-gray-400 mt-2 uppercase tracking-widest font-light">inkl. Versand</div>
                </div>
                <button className="w-full bg-gray-900 text-white py-4 font-bold hover:bg-gray-800 transition uppercase tracking-widest">
                  Jetzt kaufen
                </button>
              </div>

              {/* Leer */}
              <div className="border-2 border-gray-400 p-10 bg-white">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Option 02</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 uppercase" style={{ letterSpacing: '-0.5px' }}>
                  Leerer Beutel
                </h3>
                <p className="text-gray-700 mb-10 leading-relaxed font-light">
                  Für alle, die ihren eigenen Style reinbringen. Maximale Kontrolle.
                </p>
                <div className="bg-gray-100 text-gray-900 p-6 mb-8 border border-gray-300">
                  <div className="text-4xl font-bold">12,90€</div>
                  <div className="text-sm text-gray-600 mt-2 uppercase tracking-widest font-light">inkl. Versand</div>
                </div>
                <button className="w-full bg-white text-gray-900 border-2 border-gray-900 py-4 font-bold hover:bg-gray-100 transition uppercase tracking-widest">
                  Jetzt kaufen
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-400 uppercase text-sm tracking-widest font-light">Vorbereitet</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-gray-400 uppercase text-sm tracking-widest font-light">Essentials</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-gray-400 uppercase text-sm tracking-widest font-light">Humor</div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-6 bg-gray-800 text-white">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">Neuer Drop?</h2>
            <p className="text-gray-300 mb-8 font-light">
              Erhalte Infos zu neuen Produkten und exklusiven Deals.
            </p>

            <NewsletterForm />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
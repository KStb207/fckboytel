import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterForm from '@/components/NewsletterForm';
import { getAllProducts } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'FckBoyTel - Der Kulturbeutel für Männer mit Plan',
  description: 'Zahnbürste, Deo, Labello, Feuerzeug. Alles dabei. Null Improvisation.',
};

export default function Home() {
  const allProducts = getAllProducts();
  
  // Zwei zufällige Produkte
  const randomProducts = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-32 px-6 text-center border-b-4 border-gray-700 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/images/startseite_hintergrund.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
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
              <Link href="/produkte">
                <button className="bg-white text-gray-900 px-10 py-4 font-bold text-base hover:bg-gray-100 transition uppercase tracking-widest">
                  Zum Shop
                </button>
              </Link>
              <button className="border-2 border-white text-white px-10 py-4 font-bold text-base hover:bg-white hover:text-gray-900 transition uppercase tracking-widest">
                Details
              </button>
            </div>
          </div>
        </section>

       {/* Das sind wir - Fckboys */}
        <section className="py-24 px-6 text-white" style={{ backgroundColor: '#2F4F4F' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white uppercase" style={{ letterSpacing: '-1px' }}>
              Das sind wir - Fckboys
            </h2>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-100 leading-relaxed font-light mb-8">
                Wir sind eine Bewegung für Männer mit Plan. Keine Ausreden. Keine Improvisation. 
                Alles, was du brauchst, im Kulturbeutel. Wir stehen für Qualität, Humor und einen gewissen Swagger.
              </p>
              <p className="text-gray-300 leading-relaxed font-light">
                FckBoyTel ist mehr als nur ein Beutel – es ist eine Einstellung. Sei vorbereitet. 
                Sei selbstbewusst. Sei ein Fckboy.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
              Aktuelle Produkte
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {randomProducts.map((product) => (
                <Link key={product.id} href={`/produkte/${product.id}`}>
                  <div className="border-2 border-gray-300 p-8 bg-gray-50 hover:border-gray-900 transition cursor-pointer">
                    {/* Product Image */}
                    <div className="mb-6 bg-gray-100 rounded overflow-hidden h-48 flex items-center justify-center">
                      {product.image && product.image !== '/images/products/default.jpg' ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2">📦</div>
                          <p className="text-sm">Produktbild</p>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 uppercase" style={{ letterSpacing: '-0.5px' }}>
                      {product.name}
                    </h3>

                    <p className="text-gray-700 mb-6 leading-relaxed font-light">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-8 space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 font-light">
                          ✓ {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="bg-gray-900 text-white p-6 mb-6">
                      <div className="text-3xl font-bold">{product.price.toFixed(2)}€</div>
                      <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
                        inkl. Versand
                      </div>
                    </div>

                    <button className="w-full bg-gray-900 text-white py-3 font-bold hover:bg-gray-800 transition uppercase tracking-widest text-sm">
                      Jetzt ansehen
                    </button>
                  </div>
                </Link>
              ))}
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
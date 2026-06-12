import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllProducts } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

export default function ProduktePage() {
  const products = getAllProducts();

  return (
    <>
      <Header />
      
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6 border-b-4 border-gray-700">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 uppercase" style={{ letterSpacing: '-1px' }}>
              Unsere Produkte
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Alles was Männer mit Plan brauchen. Hochwertig. Zeitlos. Abgezockt.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {products && products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="bg-white border-2 border-gray-700 p-8 hover:border-gray-900 transition">
                    {/* Product Image */}
                    <div className="mb-6 bg-gray-100 rounded overflow-hidden h-64 flex items-center justify-center">
                      {product.image && product.image !== '/images/products/default.jpg' ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority={false}
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <div className="text-5xl mb-2">📦</div>
                          <p className="text-sm">Produktbild</p>
                        </div>
                      )}
                    </div>

                    <div className="mb-6">
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                        {product.variant === 'filled' ? 'Option 01' : 'Option 02'}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4 text-gray-900 uppercase" style={{ letterSpacing: '-0.5px' }}>
                      {product.name}
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed font-light">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-bold text-sm uppercase tracking-widest text-gray-600 mb-3">
                        Enthalten
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 font-light">
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div className="bg-gray-900 text-white p-6 mb-6">
                      <div className="text-4xl font-bold">{product.price.toFixed(2)}€</div>
                      <div className="text-sm text-gray-400 mt-2 uppercase tracking-widest font-light">
                        inkl. Versand
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gray-900 text-white py-4 font-bold hover:bg-gray-800 transition uppercase tracking-widest">
                      Jetzt kaufen
                    </button>

                    {/* Link to detail page */}
                    <Link 
                      href={`/produkte/${product.id}`}
                      className="block text-center mt-4 text-sm text-gray-600 hover:text-gray-900 transition"
                    >
                      Mehr Details →
                    </Link>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-12 text-gray-600">
                  <p>Keine Produkte gefunden.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
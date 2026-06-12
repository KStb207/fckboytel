// app\produkte\page.tsx
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
        {/* Header */}
        <section className="py-8 px-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 uppercase" style={{ letterSpacing: '-0.5px' }}>
              Unsere Produkte
            </h1>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {products && products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col">
                   {/* Product Image - Clickable */}
                    <Link href={`/produkte/${product.id}`} className="mb-4 bg-gray-100 rounded overflow-hidden h-80 flex items-center justify-center hover:opacity-80 transition">
                      {product.image && product.image !== '/images/products/default.jpg' ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain"
                          priority={false}
                        />
                      ) : (
                        <div className="text-center text-gray-400">
                          <div className="text-4xl mb-2">📦</div>
                          <p className="text-xs">Bild</p>
                        </div>
                      )}
                    </Link>

                    {/* Product Title - Clickable */}
                    <Link 
                      href={`/produkte/${product.id}`}
                      className="text-lg font-bold text-gray-900 uppercase mb-3 hover:text-gray-600 transition line-clamp-2"
                      style={{ letterSpacing: '-0.5px' }}
                    >
                      {product.name}
                    </Link>

                    {/* Facts */}
                    <div className="mb-4 flex-grow">
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 font-light">
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="text-2xl font-bold text-gray-900 mb-3">
                        {product.price.toFixed(2)}€
                      </div>
                      <Link 
                        href={`/produkte/${product.id}`}
                        className="w-full bg-gray-900 text-white py-2 font-bold hover:bg-gray-800 transition uppercase tracking-widest text-sm block text-center"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-600">
                <p>Keine Produkte gefunden.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
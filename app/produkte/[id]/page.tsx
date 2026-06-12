import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getProduct } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ProduktDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4 px-6 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <span>/</span>
              <Link href="/produkte" className="hover:text-gray-900">Produkte</Link>
              <span>/</span>
              <span className="text-gray-900 font-bold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Image + Description */}
              <div>
               {/* Image */}
                <div className="bg-gray-100 rounded-lg overflow-hidden mb-8 flex items-center justify-center" style={{ height: '300px' }}>{product.image && product.image !== '/images/products/default.jpg' ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-contain"
                      priority
                    />
                  ) : (
                    <div className="text-center text-gray-600">
                      <div className="text-6xl mb-2">📦</div>
                      <p className="text-sm">Produktbild</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <h3 className="font-bold text-sm uppercase tracking-widest text-gray-600 mb-3">
                  Produktbeschreibung
                </h3>
                <p className="text-gray-700 leading-relaxed font-light text-sm">
                  {product.description}
                </p>
              </div>

              {/* Right: Title, Facts, Price, Order Form */}
              <div>
                <h1 className="text-4xl font-bold mb-8 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
                  {product.name}
                </h1>

                {/* Features */}
                <div className="mb-8 p-6 rounded-lg" style={{ backgroundColor: '#2F4F4F' }}>
                  <h2 className="font-bold text-sm uppercase tracking-widest text-white mb-4">
                    Facts
                  </h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-white font-bold text-xs">✓</span>
                        <span className="text-white font-light text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-3xl font-bold text-gray-900">{product.price.toFixed(2)}€</div>
                  <div className="text-xs text-gray-600 mt-2 uppercase tracking-widest">
                    Inklusiv Versand (DE)
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Lieferzeit: 5-6 Wochen
                  </div>
                </div>

                {/* Order Form */}
                <form method="POST" action="#" className="border-t border-gray-200 pt-8">
                  <input type="hidden" name="product_id" value={product.id} />
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="deine@email.de"
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-900"
                    />
                  </div>

                  {/* Data Protection Checkbox */}
                  <div className="mb-6">
                    <label className="flex gap-3 text-sm text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agree_data_protection"
                        required
                        className="mt-1 cursor-pointer"
                      />
                      <span>
                        Ich akzeptiere die{' '}
                        <Link href="/datenschutz" className="font-bold hover:underline">
                          Datenschutzerklärung
                        </Link>
                      </span>
                    </label>
                  </div>

                 {/* CTA */}
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-8 py-2 font-bold hover:bg-gray-800 transition uppercase tracking-widest text-sm"
                  >
                    Jetzt bestellen
                  </button>

                  {/* Back Link */}
                  <Link 
                    href="/produkte"
                    className="block text-center mt-6 text-sm text-gray-600 hover:text-gray-900 transition"
                  >
                    ← Zurück zu alle Produkten
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
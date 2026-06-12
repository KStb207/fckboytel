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
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="bg-gray-100 border-2 border-gray-300 rounded overflow-hidden aspect-square flex items-center justify-center">
                {product.image && product.image !== '/images/products/default.jpg' ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                ) : (
                  <div className="text-center text-gray-600">
                    <div className="text-6xl mb-2">📦</div>
                    <p className="text-sm">Produktbild</p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  {product.variant === 'filled' ? 'Option 01 - Gefüllt' : 'Option 02 - Leer'}
                </span>

                <h1 className="text-4xl font-bold mt-4 mb-6 text-gray-900 uppercase" style={{ letterSpacing: '-1px' }}>
                  {product.name}
                </h1>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="font-bold text-sm uppercase tracking-widest text-gray-600 mb-4">
                    Was ist enthalten?
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-gray-900 font-bold">✓</span>
                        <span className="text-gray-700 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="bg-gray-900 text-white p-8 mb-8">
                  <div className="text-5xl font-bold">{product.price.toFixed(2)}€</div>
                  <div className="text-sm text-gray-400 mt-3 uppercase tracking-widest font-light">
                    Inklusiv Versand (DE)
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gray-900 text-white py-4 font-bold hover:bg-gray-800 transition uppercase tracking-widest">
                    Jetzt kaufen
                  </button>
                  <button className="flex-1 border-2 border-gray-900 text-gray-900 py-4 font-bold hover:bg-gray-100 transition uppercase tracking-widest">
                    In den Warenkorb
                  </button>
                </div>

                {/* Back Link */}
                <Link 
                  href="/produkte"
                  className="block text-center mt-6 text-sm text-gray-600 hover:text-gray-900 transition"
                >
                  ← Zurück zu alle Produkten
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
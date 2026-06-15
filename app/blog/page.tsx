import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main>
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 text-gray-900 uppercase">Blog</h1>

            <div className="grid md:grid-cols-2 gap-8">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="border border-gray-200 rounded overflow-hidden hover:shadow-lg transition cursor-pointer">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <p className="text-sm text-gray-600 mb-3">
                        {typeof post.date === 'string' 
                          ? post.date 
                          : new Date(post.date).toLocaleDateString('de-DE')} 
                        {' '}• {post.author}
                      </p>
                      <p className="text-gray-700">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
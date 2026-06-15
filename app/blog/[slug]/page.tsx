import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getBlogPost, getAllBlogPosts } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <article className="py-12 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
            <p className="text-gray-600 mb-8">
              {typeof post.date === 'string' 
                ? post.date 
                : new Date(post.date).toLocaleDateString('de-DE')} 
              • {post.author}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  a: ({node, ...props}) => <a className="text-blue-600 hover:underline font-bold" {...props} />,
                  img: ({node, ...props}) => <img className="w-full rounded-lg my-6" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                href="/blog"
                className="inline-block px-8 py-3 font-bold text-white hover:opacity-90 transition uppercase tracking-widest"
                style={{ backgroundColor: '#013220' }}
              >
                ← Zurück zum Blog
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
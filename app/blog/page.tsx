import { getBlogPosts } from '@/lib/notion';
import Link from 'next/link';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-3">
      
<img src="/logo.png" alt="FleetExpedite" className="w-10 h-10 object-contain" />


            <span>FleetExpedite</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#about" className="text-white/80 hover:text-white transition hidden md:block">
              About
            </Link>
            <Link href="/#features" className="text-white/80 hover:text-white transition hidden md:block">
              Features
            </Link>
            <Link href="/#pricing" className="text-white/80 hover:text-white transition hidden md:block">
              Pricing
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition hidden md:block font-semibold">
              Blog
            </Link>
            <Link href="/#contact" className="text-white/80 hover:text-white transition hidden md:block">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            FleetExpedite Blog
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Industry insights, AI dispatching tips, and trucking business strategies to help you grow your fleet.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-white/60 text-xl">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/60 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <time className="text-white/40 text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-xl">
              F
            </div>
            <span>FleetExpedite</span>
          </Link>
          <p className="text-white/60 mb-2">AI-Powered Fleet Management Solutions</p>
          <p className="text-white/40">© 2025 FleetExpedite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
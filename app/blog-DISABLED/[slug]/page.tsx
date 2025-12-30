import { getBlogPost, getAllSlugs } from '@/lib/notion';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

function markdownToHtml(markdown: string): string {
  return markdown
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" class="rounded-xl my-6 w-full" />')
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-white mt-10 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold text-white">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener">$1</a>')
    // Unordered lists
    .replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ml-6 text-white/80 mb-2">$1</li>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gim, '<pre class="bg-black/40 border border-white/10 rounded-xl p-4 my-6 overflow-x-auto"><code class="text-green-400 text-sm">$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/gim, '<code class="bg-black/40 px-2 py-1 rounded text-blue-300 text-sm">$1</code>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 my-6 text-white/70 italic">$1</blockquote>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p class="text-white/80 text-lg leading-relaxed mb-6">')
    // Line breaks
    .replace(/\n/gim, '<br />');
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getBlogPost(slug);

  if (!result) {
    notFound();
  }

  const { post, content } = result;
  const htmlContent = markdownToHtml(content);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-3">

          <img src="/logo.png" alt="FleetExpedite" className="w-10 h-10 object-contain" />      


            <span>FleetExpedite</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#about" className="text-white/80 hover:text-white transition hidden md:block">About</Link>
            <Link href="/#features" className="text-white/80 hover:text-white transition hidden md:block">Features</Link>
            <Link href="/#pricing" className="text-white/80 hover:text-white transition hidden md:block">Pricing</Link>
            <Link href="/blog" className="text-white hover:text-blue-400 transition hidden md:block font-semibold">Blog</Link>
            <Link href="/#contact" className="text-white/80 hover:text-white transition hidden md:block">Contact</Link>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition">
            ← Back to Blog
          </Link>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span key={tag} className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
            <time className="text-white/50">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: `<p class="text-white/80 text-lg leading-relaxed mb-6">${htmlContent}</p>` 
            }}
          />

          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to modernize your fleet operations?
            </h3>
            <p className="text-white/70 mb-6">
              See how FleetExpedite&apos;s AI-powered dispatch can help your trucking business.
            </p>
            <Link href="/#pricing" className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold transition">
              Get Started Today
            </Link>
          </div>
        </div>
      </article>

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
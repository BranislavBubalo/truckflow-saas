'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'easymde/dist/easymde.min.css';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), { ssr: false });

export default function BlogEntryPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [published, setPublished] = useState(true);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          content,
          tags,
          published,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create blog post');
      }

      router.push('/blog');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-white">Create Blog Post</h1>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            ← Back to Blog
          </Link>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Password */}
          <div>
            <label className="block text-white mb-2 font-semibold">
              Admin Password *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
              placeholder="Enter admin password"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-white mb-2 font-semibold">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
              placeholder="Blog post title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-white mb-2 font-semibold">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none resize-none"
              placeholder="Short description (for preview cards)"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-white mb-2 font-semibold">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-blue-500 focus:outline-none"
              placeholder="AI, Trucking, Dispatch"
            />
          </div>

          {/* Content Editor */}
          <div>
            <label className="block text-white mb-2 font-semibold">
              Content (Markdown) *
            </label>
            <p className="text-white/60 text-sm mb-2">
              For images, upload them to <code className="bg-white/10 px-2 py-1 rounded">/public/blog-images/</code> and use: <code className="bg-white/10 px-2 py-1 rounded">![alt text](/blog-images/image.jpg)</code>
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl overflow-hidden">
              <SimpleMDE
                value={content}
                onChange={(value) => setContent(value)}
                options={{
                  spellChecker: false,
                  placeholder: 'Write your blog post content in Markdown...',
                  status: false,
                  toolbar: [
                    'bold',
                    'italic',
                    'heading',
                    '|',
                    'quote',
                    'unordered-list',
                    'ordered-list',
                    '|',
                    'link',
                    'image',
                    '|',
                    'preview',
                    'side-by-side',
                    'fullscreen',
                  ],
                }}
              />
            </div>
          </div>

          {/* Published Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5 rounded border-white/20 bg-white/10 text-blue-500 focus:ring-blue-500"
            />
            <label htmlFor="published" className="text-white font-semibold">
              Publish immediately
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-bold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
            <Link
              href="/blog"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

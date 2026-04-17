import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar, Footer } from '@/components/titan'
import { getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog | TITANCODE',
  description: 'Artykuły o tworzeniu stron internetowych, technologiach webowych i projektowaniu.',
  alternates: {
    canonical: '/blog',
    languages: {
      'pl': '/blog',
    },
  },
  openGraph: {
    title: 'Blog | TITANCODE',
    description: 'Artykuły o tworzeniu stron internetowych, technologiach webowych i projektowaniu.',
    url: '/blog',
    siteName: 'TITANCODE',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          Artykuły o tworzeniu stron internetowych, technologiach webowych i projektowaniu.
        </p>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-border rounded-lg p-6 hover:border-[var(--titan-accent-primary)] transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    {post.tags.length > 0 && (
                      <span className="flex gap-2">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-muted rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-semibold group-hover:text-[var(--titan-accent-primary)] transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                  
                  <span className="text-sm font-medium text-[var(--titan-accent-primary)] mt-2">
                    Czytaj więcej →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-muted-foreground text-center py-20">
            Brak postów do wyświetlenia.
          </p>
        )}
      </div>

      <Footer />
    </main>
  )
}

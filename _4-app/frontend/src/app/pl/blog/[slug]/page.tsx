import { notFound } from 'next/navigation'
import { Navbar, Footer, ArticleSchema } from '@/components/titan'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post nie znaleziony | TITANCODE',
    }
  }
  
  return {
    title: `${post.title} | TITANCODE Blog`,
    description: post.description,
    alternates: {
      canonical: `/pl/blog/${slug}`,
      languages: {
        'pl': `/pl/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | TITANCODE Blog`,
      description: post.description,
      url: `/pl/blog/${slug}`,
      siteName: 'TITANCODE',
      locale: 'pl_PL',
      type: 'article',
      ...(post.coverImage && { images: [post.coverImage] }),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={slug}
        date={post.date}
        author={post.author}
        coverImage={post.coverImage}
      />
      <Navbar />
      
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {post.description}
          </p>
          
          {post.author && (
            <p className="text-sm text-muted-foreground mt-4">
              Autor: {post.author}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-10">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
          <MDXRemote source={post.content} />
        </div>
      </article>

      <Footer />
    </main>
  )
}

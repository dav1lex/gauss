import type { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://titancode.pl'
  const slugs = getAllSlugs()

  return [
    // Polish homepage (primary)
    {
      url: `${baseUrl}/pl`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          'pl': `${baseUrl}/pl`,
          'en': `${baseUrl}/en`,
        },
      },
    },
    // English homepage
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          'pl': `${baseUrl}/pl`,
          'en': `${baseUrl}/en`,
        },
      },
    },
    // Polish blog listing
    {
      url: `${baseUrl}/pl/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Polish blog posts
    ...slugs.map((slug) => ({
      url: `${baseUrl}/pl/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
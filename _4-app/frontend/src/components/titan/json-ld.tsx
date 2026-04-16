import Head from 'next/head'

interface OrganizationSchemaProps {
  locale: 'en' | 'pl'
}

interface ArticleSchemaProps {
  title: string
  description: string
  slug: string
  date: string
  author?: string
  coverImage?: string
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const baseUrl = 'https://titancode.pl'
  
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TITANCODE',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description: locale === 'en' 
      ? 'Warsaw-based custom web development agency. Fast delivery, same-day replies. Websites, apps, e-commerce, SEO.'
      : 'Warszawska agencja webowa. Strony, aplikacje, e-commerce, automatyzacja. Szybka realizacja.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warsaw',
      addressCountry: 'PL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@titancode.pl',
      contactType: 'customer service',
      availableLanguage: ['English', 'Polish'],
    },
    sameAs: [
      'https://github.com/dav1lex',
    ],
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'TITANCODE',
    url: baseUrl,
    email: 'info@titancode.pl',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warsaw',
      addressCountry: 'PL',
    },
    priceRange: '$$',
    description: locale === 'en'
      ? 'Custom web development agency in Warsaw, Poland'
      : 'Agencja tworzenia stron internetowych w Warszawie',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 52.2297,
        longitude: 21.0122,
      },
      geoRadius: '50000',
    },
  }

  return (
    <Head>
      <script
        key="ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        key="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </Head>
  )
}

export function ArticleSchema({ title, description, slug, date, author, coverImage }: ArticleSchemaProps) {
  const baseUrl = 'https://titancode.pl'
  const articleUrl = `${baseUrl}/pl/blog/${slug}`
  
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: articleUrl,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Organization',
      name: author || 'TITANCODE',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TITANCODE',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    ...(coverImage && {
      image: {
        '@type': 'ImageObject',
        url: coverImage,
      },
    }),
  }

  return (
    <Head>
      <script
        key={`ld-article-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
    </Head>
  )
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const baseUrl = 'https://titancode.pl'

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <Head>
      <script
        key="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </Head>
  )
}
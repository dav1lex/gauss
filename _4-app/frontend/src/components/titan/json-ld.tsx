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

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const baseUrl = 'https://titancode.pl'
  
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TITANCODE',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: locale === 'en' 
      ? 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.'
      : 'Agencja webowa z Warszawy. Tworzenie stron i aplikacji internetowych. Bez szablonów. Bez WordPress. Czysty kod.',
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
    sameAs: [],
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#localbusiness`,
    name: 'TITANCODE',
    url: baseUrl,
    telephone: '+48-511-118-916',
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
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
        url: `${baseUrl}/logo.png`,
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
    />
  )
}
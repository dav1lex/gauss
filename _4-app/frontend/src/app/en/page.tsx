import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer, OrganizationSchema } from '@/components/titan'

export const metadata: Metadata = {
  title: 'TITANCODE - Custom Web Development',
  description: 'Warsaw-based custom web development agency. Fast delivery, same-day replies. Websites, apps, e-commerce, SEO. No templates, no WordPress.',
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'pl': '/pl',
      'x-default': '/pl',
    },
  },
  openGraph: {
    title: 'TITANCODE - Custom Web Development',
    description: 'Warsaw-based custom web development agency. Fast delivery, same-day replies. Websites, apps, e-commerce, SEO. No templates, no WordPress.',
    url: '/en',
    siteName: 'TITANCODE',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'TITANCODE - Custom Web Development' }],
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema locale="en" />
      <main id="main">
        <Navbar />
        <HeroParallax />
        <Services />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

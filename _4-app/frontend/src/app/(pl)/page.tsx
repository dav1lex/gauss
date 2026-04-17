import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer, OrganizationSchema } from '@/components/titan'

export const metadata: Metadata = {
  title: 'TITANCODE - Tworzenie Stron Internetowych',
  description: 'Warszawska agencja webowa. Strony, aplikacje, e-commerce, automatyzacja. Szybka realizacja, odpowiedź w 24h. Bez szablonów, bez WordPress.',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'pl': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'TITANCODE - Tworzenie Stron Internetowych',
    description: 'Warszawska agencja webowa. Strony, aplikacje, e-commerce, automatyzacja. Szybka realizacja, odpowiedź w 24h. Bez szablonów, bez WordPress.',
    url: '/',
    siteName: 'TITANCODE',
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'TITANCODE - Tworzenie Stron Internetowych' }],
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema locale="pl" />
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
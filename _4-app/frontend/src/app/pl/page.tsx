import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer } from '@/components/titan'
// Import translations at build time
import translations from '../../../messages/pl.json';

export const metadata: Metadata = {
  title: 'TITANCODE - Tworzenie Stron Internetowych',
  description: 'Warszawska agencja tworzenia stron i aplikacji. Bez szablonów. Bez WordPress. Czysty, ręcznie pisany kod dla ambitnych projektów.',
  alternates: {
    canonical: '/pl',
    languages: {
      'en': '/en',
      'pl': '/pl',
      'x-default': '/en',
    },
  },
  openGraph: {
    title: 'TITANCODE - Tworzenie Stron Internetowych',
    description: 'Warszawska agencja tworzenia stron i aplikacji. Bez szablonów. Bez WordPress. Czysty, ręcznie pisany kod dla ambitnych projektów.',
    url: '/pl',
    siteName: 'TITANCODE',
    locale: 'pl_PL',
    type: 'website',
  },
}

// Inject translations into components via context or props
// For now, use the useTranslate hook which reads from URL

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroParallax />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
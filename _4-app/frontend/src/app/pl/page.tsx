import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer, OrganizationSchema } from '@/components/titan'

export const metadata: Metadata = {
  title: 'TITANCODE - Tworzenie Stron Internetowych',
  description: 'Warszawska agencja tworzenia stron i aplikacji. Bez szablonów. Bez WordPress. Czysty, ręcznie pisany kod dla ambitnych projektów.',
  alternates: {
    canonical: '/pl',
    languages: {
      'en': '/en',
      'pl': '/pl',
      'x-default': '/pl',
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

export default function Home() {
  return (
    <>
      <OrganizationSchema locale="pl" />
      <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border">
        Przejdź do głównej treści
      </a>
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
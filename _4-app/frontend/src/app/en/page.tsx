import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer } from '@/components/titan'
// Import translations at build time
import translations from '../../../messages/en.json';

export const metadata: Metadata = {
  title: 'TITANCODE - Custom Web Development',
  description: 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.',
  alternates: {
    canonical: '/en',
    languages: {
      'en': '/en',
      'pl': '/pl',
      'x-default': '/en',
    },
  },
  openGraph: {
    title: 'TITANCODE - Custom Web Development',
    description: 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.',
    url: '/en',
    siteName: 'TITANCODE',
    locale: 'en_US',
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
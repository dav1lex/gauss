import { Metadata } from 'next'
import { Navbar, HeroParallax, Services, Projects, Testimonials, FAQ, Contact, Footer, OrganizationSchema } from '@/components/titan'

export const metadata: Metadata = {
  title: 'TITANCODE - Custom Web Development',
  description: 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.',
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
    description: 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.',
    url: '/en',
    siteName: 'TITANCODE',
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema locale="en" />
      <a href="#contact" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border">
        Skip to main content
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
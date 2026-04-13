import { Navbar, HeroParallax, Stats, Services, Projects, Testimonials, About, FAQ, Contact, Footer } from '@/components/titan'
// Import translations at build time
import translations from '../../../messages/en.json';

// Inject translations into components via context or props
// For now, use the useTranslate hook which reads from URL

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroParallax backgroundImage="/images/hero-bg.jpg" />
      <Stats />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
import { Navbar, HeroParallax, Services, Projects, About, Contact, Footer } from '@/components/titan'
// Import translations at build time
import translations from '../../../messages/pl.json';

// Inject translations into components via context or props
// For now, use the useTranslate hook which reads from URL

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroParallax backgroundImage="/images/hero-bg.jpg" />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
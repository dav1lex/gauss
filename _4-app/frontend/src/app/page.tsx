import { Navbar, HeroParallax, Services, Projects, About, Contact, Footer } from '@/components/titan'

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
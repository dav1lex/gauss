#!/usr/bin/env node

// Script to generate static internationalized pages
// Run before next build

import { writeFile, mkdir } from 'fs/promises';
import { getAllLocales, getTranslations } from './src/lib/i18n';

async function generateStaticPages() {
  const locales = getAllLocales();
  
  for (const locale of locales) {
    // Create locale directory
    await mkdir(`src/app/${locale}`, { recursive: true });
    
    // Generate page component with pre-loaded translations
    const pageContent = `
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
`;
    
    await writeFile(`src/app/${locale}/page.tsx`, pageContent.trim());
    
    console.log(`Generated static page for locale: ${locale}`);
  }
}

generateStaticPages().catch(console.error);
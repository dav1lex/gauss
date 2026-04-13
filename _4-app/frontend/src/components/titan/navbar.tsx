'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { SettingsDropdown } from './settings-dropdown'
import { useTranslate } from '@/hooks/use-translate'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslate();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // Check if on blog page
  const isBlogPage = pathname.includes('/blog');
  const currentLocale = pathname.split('/')[1] || 'en';
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Build nav links - on blog, hash links go to homepage
  const navLinks = [
    { href: isBlogPage ? `/${currentLocale}#services` : '#services', label: t('navbar.services') },
    { href: isBlogPage ? `/${currentLocale}#projects` : '#projects', label: t('navbar.projects') },
    { href: isBlogPage ? `/${currentLocale}#about` : '#about', label: t('navbar.about') },
    { href: '/pl/blog', label: t('navbar.blog') },
    { href: isBlogPage ? `/${currentLocale}#contact` : '#contact', label: t('navbar.contact') },
  ]

  // CTA link also needs to go to homepage on blog
  const ctaHref = isBlogPage ? `/${currentLocale}#contact` : '#contact';

  // Determine text colors based on scroll state
  // Transparent state uses dark text (visible on light hero background)
  // Scrolled state uses theme-aware colors
  const getTextStyles = (scrolled: boolean, isLogo = false) => {
    if (scrolled) {
      // Scrolled: use theme colors
      return isLogo 
        ? 'text-foreground' 
        : 'text-muted-foreground hover:text-foreground';
    } else {
      // Transparent: use dark text for visibility on light hero
      return isLogo 
        ? 'text-foreground' 
        : 'text-foreground/80 hover:text-foreground';
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-transparent backdrop-blur-xl' 
        : 'border-transparent bg-transparent',
      className
    )}
    >
      {/* Background fill animation */}
      <div className={cn(
        'absolute inset-0 bg-card backdrop-blur-xl transition-transform duration-500 ease-out origin-top',
        scrolled ? 'scale-y-100' : 'scale-y-0'
      )} />
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        {/* Logo with top-to-bottom fill animation on scroll */}
        <Link href="/" className="flex items-center gap-3 relative">
          <span className={cn(
            'text-lg font-semibold tracking-tight relative',
            getTextStyles(scrolled, true)
          )}>
            {/* Base layer - accent color (shows when not scrolled) */}
            <span className={cn(
              'text-[var(--titan-accent-primary)] transition-opacity duration-300',
              scrolled ? 'opacity-0' : 'opacity-100'
            )}>
              TITANCODE
            </span>
            {/* Fill layer - foreground color, clips from top to bottom */}
            <span 
              className={cn(
                'absolute inset-0 text-foreground transition-all duration-500 ease-out',
                scrolled ? 'clip-fill-full' : 'clip-fill-empty'
              )}
              aria-hidden="true"
            >
              TITANCODE
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('transition-colors', getTextStyles(scrolled))}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <SettingsDropdown />
          <Link
            href={ctaHref}
            className={cn(
              'px-5 py-2 text-sm font-semibold transition-colors',
              scrolled
                ? 'bg-foreground text-primary-foreground hover:bg-[var(--titan-accent-primary)]'
                : 'bg-[var(--titan-accent-primary)] text-primary-foreground hover:bg-[var(--titan-accent-secondary)]'
            )}
          >
            {t('navbar.getStarted')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
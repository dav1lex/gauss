'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { SettingsDropdown } from './settings-dropdown'
import { useTranslate } from '@/hooks/use-translate'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronRight } from 'lucide-react'

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const t = useTranslate();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  // Check if dark mode
  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    // Watch for theme changes
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  
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
  
  // Lock body scroll when menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Build nav links - on blog, hash links go to homepage
  const navLinks = [
    { href: isBlogPage ? `/${currentLocale}#services` : '#services', label: t('navbar.services') },
    { href: isBlogPage ? `/${currentLocale}#projects` : '#projects', label: t('navbar.projects') },
    { href: isBlogPage ? `/${currentLocale}#about` : '#about', label: t('navbar.about') },
    { href: '/pl/blog', label: t('navbar.blog') },
    { href: isBlogPage ? `/${currentLocale}#contact` : '#contact', label: t('navbar.contact') },
  ]

  // Determine text colors based on scroll state + dark mode
  const getTextStyles = (scrolled: boolean, isLogo = false) => {
    // Light mode: white initially, dark after scroll (bg becomes white)
    if (!isDark) {
      return scrolled ? 'text-foreground' : 'text-white';
    }
    // Dark mode: normal, then accent on scroll
    if (scrolled) {
      return isLogo ? 'text-[var(--titan-accent-primary)]' : 'text-foreground';
    }
    return 'text-foreground';
  };

  return (
    <>
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 relative">
            <span className="relative text-lg font-semibold tracking-tight">
              <span 
                className={cn(
                  'text-[var(--titan-accent-primary)] transition-all duration-500',
                  isDark ? (scrolled ? 'clip-fill-full' : 'clip-fill-empty') : (scrolled ? 'opacity-100' : 'opacity-0')
                )}
              >
                TITANCODE
              </span>
              <span 
                className={cn(
                  'absolute inset-0 transition-all duration-500 text-foreground',
                  isDark ? (scrolled ? 'clip-fill-empty' : 'clip-fill-full') : (scrolled ? 'opacity-0' : 'opacity-100')
                )}
              >
                TITANCODE
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
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
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                'md:hidden p-2 transition-colors',
                scrolled ? 'text-foreground' : 'text-foreground'
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[999] flex flex-col overflow-hidden bg-background transition-transform duration-300 ease-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <header className="px-6 py-4 flex justify-between items-center shrink-0 border-b border-border">
          <Link 
            href="/" 
            className="text-lg font-semibold tracking-tight text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            TITANCODE
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-foreground"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Nav Content */}
        <div className="flex-1 relative overflow-hidden">
          <nav className="absolute inset-0 px-6 flex flex-col pt-6 overflow-y-auto pb-24">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between py-4 border-b border-border/50',
                  'text-xl font-medium text-foreground text-left w-full',
                  'transition-colors hover:text-[var(--titan-accent-primary)]'
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-[var(--titan-accent-primary)]" />
              </Link>
            ))}
          </nav>
        </div>


      </div>
    </>
  )
}
'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ThemeSwitcher } from './theme-switcher'

interface NavbarProps {
  className?: string
}

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ className }: NavbarProps) {
  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-xl', className)}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-mono font-bold text-white text-sm">
            T
          </div>
          <span className="text-lg font-semibold tracking-tight">TITANCODE</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <span className="hidden sm:block text-xs font-mono text-muted-foreground">
            // WARSAW, PL
          </span>
          <Link
            href="#contact"
            className="bg-foreground text-white px-5 py-2 text-sm font-semibold hover:bg-orange-500 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}
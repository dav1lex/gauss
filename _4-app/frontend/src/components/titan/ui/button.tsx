'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  href?: string
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400',
    secondary: 'bg-foreground text-white hover:bg-foreground/90',
    outline: 'border border-border hover:border-muted-foreground',
    ghost: 'hover:bg-secondary',
    link: 'text-orange-500 underline-offset-4 hover:underline'
  }
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-sm px-5 py-2',
    lg: 'text-lg px-10 py-5',
    icon: 'h-10 w-10'
  }
  
  const styles = cn(baseStyles, variants[variant], sizes[size], className)
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

// Arrow button variant
export function ButtonArrow({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
  return (
    <Button href={href} className={cn('gap-2', className)}>
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Button>
  )
}
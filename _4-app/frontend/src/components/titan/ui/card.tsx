'use client'

import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'border border-border bg-white',
        hover && 'cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn('p-6 pt-0 flex gap-2', className)}>
      {children}
    </div>
  )
}

// Simple stat card
export function StatCard({ value, label, className }: { value: string, label: string, className?: string }) {
  return (
    <div className={cn('p-6 border border-border bg-white', className)}>
      <span className="text-4xl font-bold">
        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
          {value}
        </span>
      </span>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  )
}

// Tech stack tag
export function TechTag({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn('px-3 py-1 bg-secondary border border-border text-xs font-mono', className)}>
      {children}
    </span>
  )
}

// Card with image placeholder
export function CardWithImage({ 
  children, 
  className,
  image = true 
}: { 
  children: React.ReactNode, 
  className?: string,
  image?: boolean 
}) {
  return (
    <div className={cn('border border-border bg-white', className)}>
      {image && (
        <div className="aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Image placeholder</span>
        </div>
      )}
      {children}
    </div>
  )
}
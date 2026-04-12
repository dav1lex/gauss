'use client'

import { cn } from '@/lib/utils'

interface CodeGradientProps {
  children: React.ReactNode
  className?: string
}

export function CodeGradient({ children, className }: CodeGradientProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  )
}
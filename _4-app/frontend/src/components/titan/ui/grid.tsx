'use client'

import { cn } from '@/lib/utils'

interface GridProps {
  children: React.ReactNode
  cols?: 1 | 2 | 3 | 4
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Grid({ children, cols = 3, gap = 'md', className }: GridProps) {
  const colSizes = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }
  
  const gapSizes = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  }
  
  return (
    <div className={cn('grid', colSizes[cols], gapSizes[gap], className)}>
      {children}
    </div>
  )
}

interface FlexProps {
  children: React.ReactNode
  direction?: 'row' | 'col'
  justify?: 'start' | 'center' | 'between' | 'end'
  items?: 'start' | 'center' | 'end'
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  wrap?: boolean
  className?: string
}

export function Flex({ 
  children, 
  direction = 'row', 
  justify = 'start', 
  items = 'center',
  gap = 'md',
  wrap = false,
  className 
}: FlexProps) {
  const directions = {
    row: 'flex-row',
    col: 'flex-col',
  }
  
  const justifySizes = {
    start: 'justify-start',
    center: 'justify-center',
    between: 'justify-between',
    end: 'justify-end',
  }
  
  const itemsSizes = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }
  
  const gapSizes = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  }
  
  return (
    <div className={cn(
      'flex', 
      directions[direction], 
      justifySizes[justify], 
      itemsSizes[items],
      gapSizes[gap],
      wrap && 'flex-wrap',
      className
    )}>
      {children}
    </div>
  )
}
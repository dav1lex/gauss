'use client'

import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'p-6 border border-border bg-white cursor-pointer',
        className
      )}
    >
      <div className="w-12 h-12 border border-border rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

// Pre-built icons for services
export const ServiceIcons = {
  Code: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Refresh: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  ShoppingCart: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Search: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Lightbulb: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Support: (
    <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
}

// Services data
export const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks. Fast, secure, scalable.',
    icon: ServiceIcons.Code,
  },
  {
    title: 'Automation',
    description: 'Workflow automation, API integrations, and custom tools to streamline your business.',
    icon: ServiceIcons.Refresh,
  },
  {
    title: 'E-commerce',
    description: 'Custom online stores with secure payments, inventory management, and analytics.',
    icon: ServiceIcons.ShoppingCart,
  },
  {
    title: 'SEO',
    description: 'Technical SEO, performance optimization, and visibility improvements for search engines.',
    icon: ServiceIcons.Search,
  },
  {
    title: 'Consulting',
    description: 'Technical architecture, tech stack decisions, and development process optimization.',
    icon: ServiceIcons.Lightbulb,
  },
  {
    title: 'Support',
    description: 'Ongoing maintenance, security updates, performance monitoring, and bug fixes.',
    icon: ServiceIcons.Support,
  },
]
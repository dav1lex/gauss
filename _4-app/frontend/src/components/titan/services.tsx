'use client'

import { cn } from '@/lib/utils'
import { ServiceCard, services } from './service-card'

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  return (
    <section id="services" className={cn('py-24 border-t border-border bg-white', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-orange-500 mb-4 block">01 / SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What we do</h2>
          <p className="text-muted-foreground max-w-xl">
            Full-cycle development from concept to deployment and beyond.
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
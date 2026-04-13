'use client'

import { cn } from '@/lib/utils'
import { ServiceCard } from './service-card'
import { useTranslate } from '@/hooks/use-translate'

interface ServicesProps {
  className?: string
}

export function Services({ className }: ServicesProps) {
  const t = useTranslate();
  
  // Get service items from translation
  const serviceItems = [
    { key: 'webDev', icon: 'Code' },
    { key: 'automation', icon: 'Refresh' },
    { key: 'ecommerce', icon: 'ShoppingCart' },
    { key: 'seo', icon: 'Search' },
    { key: 'consulting', icon: 'Lightbulb' },
    { key: 'support', icon: 'Support' }
  ] as const;

  return (
    <section id="services" className={cn('py-24 border-t border-border bg-background', className)}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[var(--titan-accent-primary)] mb-4 block">01 / SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-muted-foreground max-w-xl">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceItems.map((item) => (
            <ServiceCard
              key={item.key}
              title={t(`serviceItems.${item.key}.title`)}
              description={t(`serviceItems.${item.key}.description`)}
              iconKey={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
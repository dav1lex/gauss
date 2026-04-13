'use client'

import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  delay?: number
}

function TestimonialCard({ quote, author, role, delay = 0 }: TestimonialProps) {
  return (
    <div 
      className={cn(
        'bg-card border border-border p-8 relative',
        'transition-all duration-300 hover:border-[var(--titan-accent-primary)]/30'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="w-8 h-8 text-[var(--titan-accent-primary)]/20 mb-4" />
      <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <footer>
        <div className="font-semibold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </footer>
    </div>
  )
}

export function Testimonials() {
  const t = useTranslate();

  const testimonials = [
    {
      quote: t('testimonials.fast'),
      author: t('testimonials.client1'),
      role: t('testimonials.role1')
    },
    {
      quote: t('testimonials.precise'),
      author: t('testimonials.client2'),
      role: t('testimonials.role2')
    },
    {
      quote: t('testimonials.understand'),
      author: t('testimonials.client3'),
      role: t('testimonials.role3')
    }
  ]

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              quote={t.quote}
              author={t.author}
              role={t.role}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
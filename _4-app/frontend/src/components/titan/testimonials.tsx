'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

function TestimonialCard({ quote, author, role }: TestimonialProps) {
  return (
    <div className="w-full md:w-1/3 flex-shrink-0 px-3">
      <div className={cn(
        'bg-card border border-border p-6 md:p-8 relative h-full flex flex-col',
        'transition-colors duration-300 hover:border-[var(--titan-accent-primary)]/30'
      )}>
        {/* Decorative quotes */}
        <span className="absolute top-4 left-4 text-6xl text-[var(--titan-accent-primary)]/15 leading-none select-none font-serif">"</span>
        <span className="absolute bottom-20 md:bottom-24 right-4 text-6xl text-[var(--titan-accent-primary)]/15 leading-none select-none font-serif rotate-180">"</span>
        
        {/* Quote text - centered, with padding for decorative quotes */}
        <blockquote className="text-lg md:text-xl text-foreground flex-1 flex items-center justify-center text-center leading-relaxed px-4">
          {quote}
        </blockquote>
        
        {/* Author - centered */}
        <footer className="text-center mt-4">
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </footer>
      </div>
    </div>
  )
}

export function Testimonials() {
  const t = useTranslate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    { quote: t('testimonials.fast'), author: t('testimonials.client1'), role: t('testimonials.role1') },
    { quote: t('testimonials.precise'), author: t('testimonials.client2'), role: t('testimonials.role2') },
    { quote: t('testimonials.understand'), author: t('testimonials.client3'), role: t('testimonials.role3') },
    { quote: t('testimonials.hosting'), author: t('testimonials.client7'), role: t('testimonials.role7') },
    { quote: t('testimonials.honest'), author: t('testimonials.client8'), role: t('testimonials.role8') },
    { quote: t('testimonials.migration'), author: t('testimonials.client9'), role: t('testimonials.role9') },
    { quote: t('testimonials.roi'), author: t('testimonials.client4'), role: t('testimonials.role4') },
    { quote: t('testimonials.maintenance'), author: t('testimonials.client5'), role: t('testimonials.role5') },
    { quote: t('testimonials.scaling'), author: t('testimonials.client6'), role: t('testimonials.role6') }
  ];
  
  const totalTestimonials = testimonials.length;
  const visibleCards = 3;
  const maxIndex = totalTestimonials - visibleCards;

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setTranslateX(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 100;
    if (translateX < -threshold && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    setTranslateX(0);
  };

  return (
    <section id="testimonials" className="py-24 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX); }}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => isDragging && handleDragEnd()}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Sliding Track - Shows 3 cards on desktop, 1 on mobile */}
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(calc(-${currentIndex * (100 / visibleCards)}% + ${translateX}px))`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-3 border border-border hover:border-[var(--titan-accent-primary)] hover:text-[var(--titan-accent-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goNext}
              disabled={currentIndex === maxIndex}
              className="p-3 border border-border hover:border-[var(--titan-accent-primary)] hover:text-[var(--titan-accent-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dots + Counter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === currentIndex 
                      ? 'bg-[var(--titan-accent-primary)] w-6' 
                      : 'bg-border w-2 hover:bg-muted-foreground'
                  )}
                  aria-label={`Go to testimonial set ${index + 1}`}
                />
              ))}
            </div>
            <span className="font-mono text-sm text-muted-foreground min-w-[60px] text-right">
              {String(currentIndex + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

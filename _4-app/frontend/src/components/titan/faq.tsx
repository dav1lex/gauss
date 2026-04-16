'use client'

import { cn } from '@/lib/utils'
import { useTranslate } from '@/hooks/use-translate'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FAQSchema } from './json-ld'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  delay?: number
}

function FAQItem({ question, answer, isOpen, onClick, delay = 0 }: FAQItemProps) {
  return (
    <div 
      className={cn(
        'border-b border-border last:border-b-0',
        'transition-colors duration-200',
        isOpen && 'bg-muted/30'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full py-6 px-6 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-foreground pr-4">
          {question}
        </span>
        <ChevronDown 
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300',
            isOpen && 'rotate-180'
          )} 
        />
      </button>
      <div 
        className={cn(
          'overflow-hidden transition-all duration-300 ease-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const t = useTranslate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a1')
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--titan-section-bg)]">
      <FAQSchema faqs={faqs} />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-card border border-border rounded-lg overflow-hidden max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
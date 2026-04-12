"use client";

import { useLanguage } from '@/app/language-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, Code, Sparkles, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    key: 'starter',
    icon: Code,
    price: 2500,
    priceEn: 600,
  },
  {
    key: 'custom',
    icon: Sparkles,
    price: 7000,
    priceEn: 1700,
  },
  {
    key: 'ecommerce',
    icon: TrendingUp,
    price: 15000,
    priceEn: 3600,
  },
  {
    key: 'enterprise',
    icon: Shield,
    price: null,
    priceEn: null,
  },
];

export default function PricingClient() {
  const { t, tArray, language } = useLanguage();
  const isPl = language === 'pl';

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <section className="pt-16 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {isPl ? 'Cennik' : 'Pricing'}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {isPl 
              ? 'Projekty od 2 500 PLN. Typowo 7 000–20 000+ PLN. Bez ukrytych kosztów.'
              : 'Projects from 2,500 PLN. Typically 7,000–20,000+ PLN. No hidden fees.'}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            const price = isPl ? tier.price : tier.priceEn;
            
            return (
              <Card key={tier.key} className="bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{t(`estimatePage.tiers.${tier.key}.name`)}</CardTitle>
                  </div>
                  <CardDescription>{t(`estimatePage.tiers.${tier.key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">
                      {price ? `${price.toLocaleString()} ${isPl ? 'PLN' : 'USD'}` : (isPl ? 'Od 25 000 PLN' : 'From $6,000')}
                    </span>
                    {tier.key === 'starter' && price && (
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {isPl ? '+' : '+'} {isPl ? '700 PLN' : '$170'} / {isPl ? 'rok hosting' : 'year hosting'}
                      </span>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400">
                      {isPl ? 'Co zawiera:' : 'Includes:'}
                    </h4>
                    {tArray(`estimatePage.tiers.${tier.key}.includes`).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${language}/contact`}>
            <Button size="lg" className="group">
              {isPl ? 'Darmowa wycena' : 'Get a free quote'}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

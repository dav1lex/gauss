import type { Metadata } from 'next';
import { Locale } from '../../../../i18n-config';
import PricingClient from './pricing-client';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isPl = lang === 'pl';

  return {
    title: isPl 
      ? 'Cennik | Tworzenie Stron WWW Warszawa'
      : 'Pricing | Web Development Services',
    description: isPl
      ? 'Przejrzyste ceny projektów webowych. Od prostych stron po zaawansowane aplikacje. Projekt od 2 500 PLN.'
      : 'Transparent pricing for web projects. From simple sites to complex apps. Projects from 2,500 PLN.',
    alternates: {
      canonical: `/${lang}/calculate-estimate`,
      languages: {
        'pl-PL': '/pl/calculate-estimate',
        'en-US': '/en/calculate-estimate',
        'x-default': '/pl/calculate-estimate',
      },
    },
  };
}

export default function PricingPage() {
  return <PricingClient />;
}

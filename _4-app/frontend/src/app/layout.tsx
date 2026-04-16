import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://titancode.pl'),
  title: {
    default: 'TITANCODE - Custom Web Development',
    template: '%s | TITANCODE',
  },
  description: 'Warsaw-based custom web development. No templates. No WordPress. Just clean, handcrafted code for ambitious projects.',
  keywords: ['web development', 'custom websites', 'Warsaw', 'Poland', 'e-commerce', 'SEO', 'web design'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TITANCODE',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root layout for static export - locale layouts define their own html/body
  return children;
}
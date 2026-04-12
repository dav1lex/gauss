import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.titancode.pl';

  // Core pages only
  const routes = [
    '',                    // Home
    '/services',           // Services
    '/portfolio',          // Portfolio
    '/contact',            // Contact
    '/calculate-estimate', // Pricing
  ];

  const staticRoutes = routes.flatMap((route) =>
    ['pl', 'en'].map((locale) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  const blogIndex = {
    url: `${siteUrl}/blog`,
    lastModified: new Date(),
  };

  return [...staticRoutes, blogIndex];
}

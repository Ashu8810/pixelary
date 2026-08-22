import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.pixelary.in';
  const currentDate = new Date();

  const routes = [
    '',
    '/services',
    '/services/website-design-development',
    '/services/ui-ux-design',
    '/services/mobile-app-development',
    '/services/seo-services',
    '/services/cyber-security',
    '/services/digital-marketing',
    '/services/social-media-management',
    '/work',
    '/work/dodge-challenger',
    '/work/tedxbmsit',
    '/work/commitiq',
    '/blog',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  return routes.map((route) => {
    let priority = 0.7;
    let changeFrequency: 'weekly' | 'monthly' = 'monthly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (route === '/services' || route === '/work') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.startsWith('/services/') || route.startsWith('/work/')) {
      priority = 0.8;
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency,
      priority,
    };
  });
}

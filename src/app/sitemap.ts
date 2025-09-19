import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clamo.uz'
  
  // Define your supported locales
  const locales = ['uz', 'ru', 'en']
  
  // Define your static routes
  const staticRoutes = [
    '',
    '/about',
    '/licensing',
    '/accreditation',
    '/consulting',
    '/international',
    '/regulatorydocuments',
    '/contacts',
    '/news',
    '/allquestion',
    '/cabinet-clamo'
  ]

  // Generate sitemap entries for each locale and route
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of staticRoutes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${route}`])
          )
        }
      })
    }
  }

  return sitemapEntries
}

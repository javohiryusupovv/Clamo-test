import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clamo.uz'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/cabinet-clamo/',
        '/test-recaptcha/'
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

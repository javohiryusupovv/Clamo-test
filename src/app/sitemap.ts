import { MetadataRoute } from 'next'
import { getNews } from '@/lib/getNews'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://clamo.uz'
    const locales = ['uz', 'ru', 'en']

    const staticPages = [
        '',
        '/about',
        '/licensing',
        '/accreditation',
        '/consulting',
        '/contacts',
        '/news',
        '/regulatorydocuments',
        '/international',
        '/allquestion'
    ]

    const staticEntries: MetadataRoute.Sitemap = []

    for (const page of staticPages) {
        for (const locale of locales) {
            staticEntries.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: page === '' ? 'daily' : 'weekly',
                priority: page === '' ? 1 : 0.8,
                alternates: {
                    languages: {
                        uz: `${baseUrl}/uz${page}`,
                        ru: `${baseUrl}/ru${page}`,
                        en: `${baseUrl}/en${page}`,
                    }
                }
            })
        }
    }

    const newsEntries: MetadataRoute.Sitemap = []
    try {
        const newsData = await getNews(1, 100)
        const news = Array.isArray(newsData?.results) ? newsData.results : []

        for (const article of news) {
            if (article?.slug) {
                for (const locale of locales) {
                    newsEntries.push({
                        url: `${baseUrl}/${locale}/news/${article.slug}`,
                        lastModified: article.created_at ? new Date(article.created_at) : new Date(),
                        changeFrequency: 'monthly',
                        priority: 0.6,
                        alternates: {
                            languages: {
                                uz: `${baseUrl}/uz/news/${article.slug}`,
                                ru: `${baseUrl}/ru/news/${article.slug}`,
                                en: `${baseUrl}/en/news/${article.slug}`,
                            }
                        }
                    })
                }
            }
        }
    } catch (error) {
        console.error('Error fetching news for sitemap:', error)
    }

    return [...staticEntries, ...newsEntries]  // <-- RETURN needed inside the function
}



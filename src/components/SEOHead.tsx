import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false
}: SEOHeadProps) {
  const baseUrl = 'https://clamo.uz'
  const fullTitle = title ? `${title} | CLAMO` : 'CLAMO - Litsenziyalash va Akkreditatsiyalash Markazi'
  const fullDescription = description || 'CLAMO — litsenziyalash va akkreditatsiyalash bo\'yicha xizmatlar ko\'rsatadigan davlat muassasasi.'
  const fullCanonical = canonical || baseUrl
  const fullOgImage = ogImage || `${baseUrl}/og-image.png`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="CLAMO" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#23B3FC" />
      <meta name="format-detection" content="telephone=no" />
    </Head>
  )
}

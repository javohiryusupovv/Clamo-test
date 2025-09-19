import Script from 'next/script'

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'Article' | 'Service'
  data: Record<string, unknown>
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": data.name || "CLAMO",
          "description": data.description || "Licensing and Accreditation Center",
          "url": data.url || "https://clamo.uz",
          "logo": data.logo || "https://clamo.uz/HeadLogo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": data.phone || "+998-55-514-30-03",
            "contactType": "customer service",
            "email": data.email || "clamosocial@gmail.com"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": data.address || "улица Мирзакалон Исмоилий, дом 2A",
            "addressCountry": "UZ"
          },
          "sameAs": data.socialMedia || [
            "https://t.me/CLAMO_uz",
            "https://instagram.com/clamo.uz",
            "https://facebook.com/CLAMORasmiy"
          ]
        }

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": data.name || "CLAMO",
          "url": data.url || "https://clamo.uz",
          "description": data.description || "Licensing and Accreditation Center",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://clamo.uz/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }

      case 'BreadcrumbList':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items?.map((item: Record<string, unknown>, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }

      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "CLAMO"
          },
          "publisher": {
            "@type": "Organization",
            "name": "CLAMO",
            "logo": {
              "@type": "ImageObject",
              "url": "https://clamo.uz/HeadLogo.svg"
            }
          },
          "datePublished": data.publishedAt,
          "dateModified": data.modifiedAt || data.publishedAt
        }

      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "CLAMO"
          },
          "serviceType": data.serviceType || "Licensing and Accreditation",
          "areaServed": {
            "@type": "Country",
            "name": "Uzbekistan"
          }
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

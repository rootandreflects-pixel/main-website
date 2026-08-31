import { seoConfig, formatBusinessHours } from '@/lib/seo'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'webpage' | 'breadcrumb' | 'person'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {}

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${seoConfig.siteUrl}#organization`,
        name: seoConfig.business.name,
        alternateName: seoConfig.siteName,
        description: seoConfig.business.description,
        url: seoConfig.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.siteUrl}/placeholder-logo.svg`,
          width: 600,
          height: 200
        },
        image: {
          '@type': 'ImageObject', 
          url: `${seoConfig.siteUrl}/placeholder-logo.svg`,
          width: 1200,
          height: 630
        },
        telephone: seoConfig.business.phone,
        email: seoConfig.business.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: seoConfig.business.address.street,
          addressLocality: seoConfig.business.address.city,
          addressRegion: seoConfig.business.address.state,
          postalCode: seoConfig.business.address.zipCode,
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          // PLACEHOLDER - Add actual coordinates when address is confirmed
          latitude: '40.7128',
          longitude: '-74.0060'
        },
        openingHours: formatBusinessHours(),
        areaServed: seoConfig.business.serviceArea.map(area => ({
          '@type': 'City',
          name: area
        })),
        serviceType: 'Mental Health Services',
        knowsAbout: [
          'Individual Therapy',
          'Couples Therapy', 
          'Family Therapy',
          'Trauma Therapy',
          'Anxiety Treatment',
          'Depression Treatment',
          'Grief Counseling',
          'EMDR Therapy',
          'Cognitive Behavioral Therapy'
        ],
        paymentAccepted: ['Cash', 'Credit Card', 'Insurance'],
        currenciesAccepted: 'USD',
        priceRange: '$$',
        aggregateRating: undefined, // Only add if you have real reviews
        sameAs: Object.values(seoConfig.business.social).filter(Boolean)
      }
      break

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${seoConfig.siteUrl}#website`,
        name: seoConfig.siteName,
        url: seoConfig.siteUrl,
        description: seoConfig.siteDescription,
        publisher: {
          '@id': `${seoConfig.siteUrl}#organization`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      }
      break

    case 'webpage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${seoConfig.siteUrl}${data?.path || ''}#webpage`,
        url: `${seoConfig.siteUrl}${data?.path || ''}`,
        name: data?.title || seoConfig.siteName,
        description: data?.description || seoConfig.siteDescription,
        isPartOf: {
          '@id': `${seoConfig.siteUrl}#website`
        },
        about: {
          '@id': `${seoConfig.siteUrl}#organization`
        },
        dateModified: new Date().toISOString(),
        breadcrumb: data?.breadcrumb && {
          '@id': `${seoConfig.siteUrl}${data.path}#breadcrumb`
        },
        mainEntity: data?.mainEntity && {
          '@id': `${seoConfig.siteUrl}#organization`
        }
      }
      break

    case 'breadcrumb':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': `${seoConfig.siteUrl}${data?.path || ''}#breadcrumb`,
        itemListElement: data?.items?.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: index === data.items.length - 1 ? undefined : `${seoConfig.siteUrl}${item.path}`
        })) || []
      }
      break

    case 'person':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${seoConfig.siteUrl}/about#${data?.id}`,
        name: data?.name,
        jobTitle: data?.role,
        description: data?.bio,
        knowsAbout: data?.specialties || [],
        worksFor: {
          '@id': `${seoConfig.siteUrl}#organization`
        },
        mainEntityOfPage: {
          '@id': `${seoConfig.siteUrl}/about#webpage`
        }
      }
      break

    default:
      return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 0)
      }}
    />
  )
}
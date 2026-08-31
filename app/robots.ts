import { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
          '*.json',
          '/*?*' // Disallow URLs with query parameters to avoid duplicate content
        ]
      }
    ],
    sitemap: `${seoConfig.siteUrl}/sitemap.xml`,
    host: seoConfig.siteUrl
  }
}
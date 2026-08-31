import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { PageTransition } from '@/components/page-transition'
import { StructuredData } from '@/components/structured-data'
import { seoConfig } from '@/lib/seo'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
  preload: true
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#555435' },
    { media: '(prefers-color-scheme: dark)', color: '#b37048' }
  ]
}

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: 'Root & Reflect Psychotherapy | Compassionate Mental Health Care',
    template: '%s | Root & Reflect Psychotherapy'
  },
  description: 'Root & Reflect Psychotherapy offers compassionate, evidence-based therapy services including individual, couples, family, and trauma-informed care to help you heal and grow.',
  keywords: [
    'psychotherapy',
    'therapy', 
    'mental health',
    'counseling',
    'individual therapy',
    'couples therapy',
    'family therapy',
    'trauma therapy',
    'anxiety treatment',
    'depression treatment',
    'EMDR',
    'grief counseling',
    seoConfig.business.address.city,
    seoConfig.business.address.state
  ],
  authors: [{ name: seoConfig.business.name }],
  creator: seoConfig.business.name,
  publisher: seoConfig.business.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: 'Root & Reflect Psychotherapy | Compassionate Mental Health Care',
    description: 'Professional psychotherapy practice offering individual, couples, family, and trauma-informed therapy services. Evidence-based care in a safe, supportive environment.',
    images: [
      {
        url: '/placeholder-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Root & Reflect Psychotherapy Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Root & Reflect Psychotherapy | Compassionate Mental Health Care',
    description: 'Professional psychotherapy practice offering evidence-based therapy services to support your mental health journey.',
    images: ['/placeholder-logo.svg']
  },
  alternates: {
    canonical: seoConfig.siteUrl
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)'
      }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <StructuredData type="organization" />
        <StructuredData type="website" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-serif antialiased`}>
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

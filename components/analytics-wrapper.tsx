'use client'

import * as React from 'react'
import { Analytics } from '@vercel/analytics/next'
import { useCookieConsent } from '@/components/cookie-consent-provider'

export function AnalyticsWrapper() {
  const { consent } = useCookieConsent()
  const [shouldRender, setShouldRender] = React.useState(false)

  React.useEffect(() => {
    // Only render analytics if consent is given and analytics are allowed
    setShouldRender(consent.given && consent.preferences.analytics)
  }, [consent])

  // Only render in production and when consent allows
  if (process.env.NODE_ENV !== 'production' || !shouldRender) {
    return null
  }

  return <Analytics />
}
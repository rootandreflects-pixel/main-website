'use client'

import { useCookieConsent as useContext } from '@/components/cookie-consent-provider'
import { shouldLoadAnalytics, shouldLoadMarketing } from '@/lib/cookie-consent'

/**
 * Hook that provides cookie consent state and utilities
 * Re-exports the context hook with additional utilities
 */
export function useCookieConsent() {
  const context = useContext()
  
  return {
    ...context,
    // Additional convenience methods
    canLoadAnalytics: shouldLoadAnalytics(),
    canLoadMarketing: shouldLoadMarketing(),
  }
}
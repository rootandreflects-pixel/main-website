import { CookieConsent } from '@/lib/cookie-consent'

declare global {
  interface WindowEventMap {
    'cookieConsentChanged': CustomEvent<CookieConsent>
    'openCookiePreferences': CustomEvent<void>
  }
}

export {}
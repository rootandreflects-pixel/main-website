'use client'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export interface CookieConsent {
  given: boolean
  preferences: CookiePreferences
  timestamp: number
}

const COOKIE_CONSENT_KEY = 'cookie-consent'
const CONSENT_EXPIRY_DAYS = 365

export const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false
}

export const defaultConsent: CookieConsent = {
  given: false,
  preferences: defaultPreferences,
  timestamp: 0
}

export function getCookieConsent(): CookieConsent {
  if (typeof window === 'undefined') return defaultConsent
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!stored) return defaultConsent
    
    const parsed = JSON.parse(stored) as CookieConsent
    
    // Check if consent has expired
    const now = Date.now()
    const expiryTime = parsed.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000)
    
    if (now > expiryTime) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      return defaultConsent
    }
    
    return {
      given: parsed.given,
      preferences: {
        necessary: true, // Always enforce necessary cookies
        analytics: parsed.preferences.analytics ?? false,
        marketing: parsed.preferences.marketing ?? false
      },
      timestamp: parsed.timestamp
    }
  } catch {
    return defaultConsent
  }
}

export function setCookieConsent(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return
  
  const consent: CookieConsent = {
    given: true,
    preferences: {
      necessary: true, // Always true
      analytics: preferences.analytics,
      marketing: preferences.marketing
    },
    timestamp: Date.now()
  }
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
  
  // Dispatch custom event for components to react to consent changes
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
    detail: consent 
  }))
}

export function resetCookieConsent(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem(COOKIE_CONSENT_KEY)
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
    detail: defaultConsent 
  }))
}

export function shouldLoadAnalytics(): boolean {
  const consent = getCookieConsent()
  return consent.given && consent.preferences.analytics
}

export function shouldLoadMarketing(): boolean {
  const consent = getCookieConsent()
  return consent.given && consent.preferences.marketing
}

// Cookie category descriptions
export const cookieCategories = {
  necessary: {
    title: 'Necessary Cookies',
    description: 'These cookies are essential for the website to function properly and cannot be disabled. They enable core functionality such as security, network management, and accessibility.',
    examples: ['Session management', 'Security features', 'Accessibility preferences']
  },
  analytics: {
    title: 'Analytics Cookies',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website performance and user experience.',
    examples: ['Page views', 'User interactions', 'Performance metrics']
  },
  marketing: {
    title: 'Marketing Cookies',
    description: 'These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.',
    examples: ['Personalized advertisements', 'Campaign effectiveness', 'Social media integration']
  }
} as const
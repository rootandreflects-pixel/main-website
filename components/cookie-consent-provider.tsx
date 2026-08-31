'use client'

import * as React from 'react'
import { 
  getCookieConsent, 
  setCookieConsent, 
  resetCookieConsent,
  type CookieConsent, 
  type CookiePreferences,
  defaultConsent
} from '@/lib/cookie-consent'

interface CookieConsentContextType {
  consent: CookieConsent
  updatePreferences: (preferences: CookiePreferences) => void
  acceptAll: () => void
  rejectNonEssential: () => void
  resetConsent: () => void
  showBanner: boolean
  setShowBanner: (show: boolean) => void
}

const CookieConsentContext = React.createContext<CookieConsentContextType | null>(null)

export function useCookieConsent() {
  const context = React.useContext(CookieConsentContext)
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}

interface CookieConsentProviderProps {
  children: React.ReactNode
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [consent, setConsent] = React.useState<CookieConsent>(defaultConsent)
  const [showBanner, setShowBanner] = React.useState(false)
  const [isInitialized, setIsInitialized] = React.useState(false)

  // Initialize consent state on mount
  React.useEffect(() => {
    const storedConsent = getCookieConsent()
    setConsent(storedConsent)
    setShowBanner(!storedConsent.given)
    setIsInitialized(true)
  }, [])

  // Listen for consent changes from other tabs
  React.useEffect(() => {
    const handleConsentChange = (event: CustomEvent<CookieConsent>) => {
      setConsent(event.detail)
      setShowBanner(!event.detail.given)
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener)
    }
  }, [])

  const updatePreferences = React.useCallback((preferences: CookiePreferences) => {
    setCookieConsent(preferences)
    const newConsent = getCookieConsent()
    setConsent(newConsent)
    setShowBanner(false)
  }, [])

  const acceptAll = React.useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    updatePreferences(allAccepted)
  }, [updatePreferences])

  const rejectNonEssential = React.useCallback(() => {
    const essentialOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    updatePreferences(essentialOnly)
  }, [updatePreferences])

  const resetConsent = React.useCallback(() => {
    resetCookieConsent()
    setConsent(defaultConsent)
    setShowBanner(true)
  }, [])

  const contextValue: CookieConsentContextType = {
    consent,
    updatePreferences,
    acceptAll,
    rejectNonEssential,
    resetConsent,
    showBanner: isInitialized && showBanner,
    setShowBanner
  }

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  )
}
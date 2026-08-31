'use client'

import * as React from 'react'
import { useCookieConsent } from '@/components/cookie-consent-provider'

interface CookiePreferencesButtonProps {
  children?: React.ReactNode
  className?: string
}

export function CookiePreferencesButton({ 
  children = 'Cookie Preferences', 
  className = '' 
}: CookiePreferencesButtonProps) {
  const { setShowBanner } = useCookieConsent()

  const handleClick = () => {
    setShowBanner(true)
  }

  return (
    <button
      onClick={handleClick}
      className={className || 'hover:text-white transition-colors duration-200 cursor-pointer text-left'}
      type="button"
    >
      {children}
    </button>
  )
}
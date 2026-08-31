'use client'

import * as React from 'react'
import { createPortal } from 'react-dom'
import { X, Cookie, Settings, Shield, BarChart3, Target } from 'lucide-react'
import { useCookieConsent } from '@/components/cookie-consent-provider'

export function CookieConsentModal() {
  const { showBanner, acceptAll, rejectNonEssential, consent, updatePreferences, setShowBanner } = useCookieConsent()
  const [showSettings, setShowSettings] = React.useState(false)
  const [preferences, setPreferences] = React.useState(consent.preferences)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    setPreferences(consent.preferences)
  }, [consent.preferences])

  if (!mounted || !showBanner) return null

  const handleAcceptAll = () => {
    acceptAll()
    setShowSettings(false)
  }

  const handleRejectNonEssential = () => {
    rejectNonEssential()
    setShowSettings(false)
  }

  const handleSavePreferences = () => {
    updatePreferences(preferences)
    setShowSettings(false)
  }

  const handleClose = () => {
    setShowBanner(false)
  }

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '20px',
        margin: '0',
        pointerEvents: 'none'
      }}
    >
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          pointerEvents: 'auto'
        }}
      />
      
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '600px',
          pointerEvents: 'auto',
          zIndex: 2147483647
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            maxHeight: 'calc(100vh - 40px)',
            overflowY: 'auto'
          }}
        >
          {!showSettings ? (
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(179, 112, 72, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Cookie style={{ width: '24px', height: '24px', color: '#b37048' }} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>
                      We value your privacy
                    </h2>
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                      Choose your cookie preferences
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleClose}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '8px',
                    color: '#9ca3af',
                    cursor: 'pointer'
                  }}
                >
                  <X style={{ width: '20px', height: '20px' }} />
                </button>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#4b5563', margin: '0 0 20px 0' }}>
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide 
                  personalized content.
                </p>
                
                <div style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '16px', 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0' 
                }}>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    <strong>Essential cookies</strong> are always enabled as they're necessary for the website to function.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={handleAcceptAll}
                    style={{
                      backgroundColor: '#b37048',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '14px 24px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      flex: '1'
                    }}
                  >
                    Accept All
                  </button>
                  
                  <button
                    onClick={handleRejectNonEssential}
                    style={{
                      backgroundColor: '#f9fafb',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      borderRadius: '12px',
                      padding: '14px 24px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      flex: '1'
                    }}
                  >
                    Reject All
                  </button>
                </div>
                
                <button
                  onClick={() => setShowSettings(true)}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#6b7280',
                    border: 'none',
                    padding: '12px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Settings style={{ width: '16px', height: '16px' }} />
                  Customize Preferences
                </button>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #f3f4f6' }}>
                <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0, textAlign: 'center' }}>
                  Learn more in our{' '}
                  <a href="/privacy" style={{ color: '#b37048', textDecoration: 'underline' }}>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>
                  Cookie Preferences
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <X style={{ width: '20px', height: '20px' }} />
                </button>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ marginBottom: '16px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Shield style={{ width: '20px', height: '20px', color: '#16a34a' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Essential</h3>
                    </div>
                    <div style={{ width: '48px', height: '24px', backgroundColor: '#16a34a', borderRadius: '12px' }}></div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#166534', margin: 0 }}>
                    Required for the website to function.
                  </p>
                </div>

                <div style={{ marginBottom: '16px', padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <BarChart3 style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Analytics</h3>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      style={{
                        width: '48px',
                        height: '24px',
                        backgroundColor: preferences.analytics ? '#3b82f6' : '#e2e8f0',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    ></button>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    Help us improve user experience.
                  </p>
                </div>

                <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <Target style={{ width: '20px', height: '20px', color: '#8b5cf6' }} />
                      <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Marketing</h3>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      style={{
                        width: '48px',
                        height: '24px',
                        backgroundColor: preferences.marketing ? '#8b5cf6' : '#e2e8f0',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    ></button>
                  </div>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                    Personalized advertisements.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={handleSavePreferences}
                  style={{
                    backgroundColor: '#b37048',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '14px 24px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    flex: '1'
                  }}
                >
                  Save
                </button>
                
                <button
                  onClick={handleAcceptAll}
                  style={{
                    backgroundColor: '#f9fafb',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    borderRadius: '12px',
                    padding: '14px 24px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    flex: '1'
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}


'use client'

import { useEffect, useState } from 'react'

export function CookieOverlay() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà répondu
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent')
      if (consent) {
        setHasConsent(true)
      } else {
        setHasConsent(false)
      }
    }

    checkConsent()

    // Écouter les changements de consentement
    const handleConsentChange = () => {
      setHasConsent(true)
    }

    window.addEventListener('cookie-consent-change', handleConsentChange)

    return () => {
      window.removeEventListener('cookie-consent-change', handleConsentChange)
    }
  }, [])

  // Si pas de réponse, bloquer la page
  if (hasConsent === false) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 9998,
          backdropFilter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: '90%',
            padding: '0 16px',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(18px, 5vw, 24px)',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#fff',
            lineHeight: '1.2',
          }}>
            Acceptation requise
          </h2>
          <p style={{
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            lineHeight: '1.4',
            color: '#e5e7eb',
          }}>
            Utilisez la bannière ci-dessous
          </p>
        </div>
      </div>
    )
  }

  return null
}

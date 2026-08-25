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
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            maxWidth: '500px',
            padding: '0 20px',
          }}
        >
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#fff',
          }}>
            Acceptation des cookies requise
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#e5e7eb',
          }}>
            Pour continuer à naviguer sur notre site, veuillez accepter ou refuser les cookies en utilisant la bannière ci-dessous.
          </p>
        </div>
      </div>
    )
  }

  return null
}

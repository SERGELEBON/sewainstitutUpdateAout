'use client'

import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next'

export function ConditionalAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Vérifier le consentement initial
    const checkConsent = () => {
      try {
        const consentData = localStorage.getItem('cookie-consent')
        if (consentData) {
          const consent = JSON.parse(consentData)
          setHasConsent(consent.analytics === true)
        }
      } catch (error) {
        console.error('Error reading cookie consent:', error)
        setHasConsent(false)
      }
    }

    checkConsent()

    // Écouter les changements de consentement
    const handleConsentChange = () => {
      checkConsent()
    }

    window.addEventListener('cookie-consent-change', handleConsentChange)
    return () => window.removeEventListener('cookie-consent-change', handleConsentChange)
  }, [])

  // Charger Analytics SEULEMENT si consentement donné
  if (!hasConsent) {
    return null
  }

  return <Analytics />
}

'use client'

import { useEffect } from 'react'

export function VisitorTracker() {
  useEffect(() => {
    // Enregistrer la visite une seule fois au chargement
    const trackVisit = () => {
      // Vérifier si on a déjà tracké cette session
      const sessionTracked = sessionStorage.getItem('visitor-tracked')

      if (!sessionTracked) {
        fetch('/api/cookie-stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'visit' }),
        })
          .then(() => {
            sessionStorage.setItem('visitor-tracked', 'true')
          })
          .catch(() => {})
      }
    }

    trackVisit()
  }, [])

  return null
}

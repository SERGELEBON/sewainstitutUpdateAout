'use client'

import CookieConsent from 'react-cookie-consent'
import Link from 'next/link'

export function CookieConsentBanner() {
  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: true,
      timestamp: Date.now(),
    }))
    window.dispatchEvent(new Event('cookie-consent-change'))

    // Enregistrer la stat
    fetch('/api/cookie-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'accept' }),
    }).catch(() => {})
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({
      essential: true,
      analytics: false,
      timestamp: Date.now(),
    }))
    window.dispatchEvent(new Event('cookie-consent-change'))

    // Enregistrer la stat
    fetch('/api/cookie-stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'decline' }),
    }).catch(() => {})
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      width: '90%',
      maxWidth: '600px',
    }}>
      <CookieConsent
        location="none"
        buttonText="Accepter"
        declineButtonText="Refuser"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        cookieName="sewa-cookie-consent"
        containerClasses="cookie-container"
        style={{
          position: 'static',
          background: '#ffffff',
          color: '#111827',
          border: '2px solid #e5e7eb',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          padding: '20px',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
        buttonStyle={{
          background: '#1A64B1',
          color: '#ffffff',
          fontSize: '14px',
          padding: '10px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          margin: '0 4px',
        }}
        declineButtonStyle={{
          background: '#ffffff',
          color: '#6b7280',
          fontSize: '14px',
          padding: '10px 24px',
          borderRadius: '8px',
          fontWeight: '600',
          border: '2px solid #e5e7eb',
          cursor: 'pointer',
          margin: '0 4px',
        }}
        buttonWrapperClasses="cookie-buttons"
        expires={365}
      >
        <div style={{ marginBottom: '16px' }}>
          <h3 style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#111827',
          }}>
            Gestion des cookies
          </h3>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#4b5563',
            margin: 0,
          }}>
            Nous utilisons des cookies pour améliorer votre expérience.{' '}
            <Link
              href="/politique-cookies"
              style={{
                color: '#1A64B1',
                textDecoration: 'underline',
                fontWeight: '600',
              }}
            >
              En savoir plus
            </Link>
          </p>
        </div>
      </CookieConsent>
    </div>
  )
}

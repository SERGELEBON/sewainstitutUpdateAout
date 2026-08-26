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
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 9999,
      width: 'calc(100% - 32px)',
      maxWidth: '500px',
      padding: '0 16px',
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
          border: 'none',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          padding: 'clamp(20px, 5vw, 28px)',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
        buttonStyle={{
          background: '#1A64B1',
          color: '#ffffff',
          fontSize: 'clamp(13px, 3.5vw, 15px)',
          padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 28px)',
          borderRadius: '8px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          margin: '4px',
          width: 'auto',
          minWidth: '100px',
        }}
        declineButtonStyle={{
          background: '#f3f4f6',
          color: '#374151',
          fontSize: 'clamp(13px, 3.5vw, 15px)',
          padding: 'clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 28px)',
          borderRadius: '8px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          margin: '4px',
          width: 'auto',
          minWidth: '100px',
        }}
        buttonWrapperClasses="cookie-buttons"
        expires={365}
      >
        <div style={{ marginBottom: 'clamp(16px, 4vw, 20px)' }}>
          <h3 style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 'clamp(18px, 4.5vw, 20px)',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#111827',
            lineHeight: '1.2',
          }}>
            🍪 Gestion des cookies
          </h3>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 'clamp(13px, 3.5vw, 14px)',
            lineHeight: '1.5',
            color: '#6b7280',
            margin: 0,
            wordWrap: 'break-word',
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

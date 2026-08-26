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
          background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
          color: '#111827',
          border: '1px solid #e5e7eb',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          padding: 'clamp(24px, 6vw, 32px)',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
        buttonStyle={{
          background: 'linear-gradient(135deg, #1A64B1 0%, #1557a0 100%)',
          color: '#ffffff',
          fontSize: 'clamp(14px, 3.5vw, 15px)',
          padding: 'clamp(12px, 3vw, 14px) clamp(24px, 6vw, 32px)',
          borderRadius: '12px',
          fontWeight: '600',
          border: 'none',
          cursor: 'pointer',
          margin: '4px',
          width: 'auto',
          minWidth: '110px',
          boxShadow: '0 4px 12px rgba(26, 100, 177, 0.3)',
          transition: 'all 0.2s ease',
        }}
        declineButtonStyle={{
          background: '#ffffff',
          color: '#6b7280',
          fontSize: 'clamp(14px, 3.5vw, 15px)',
          padding: 'clamp(12px, 3vw, 14px) clamp(24px, 6vw, 32px)',
          borderRadius: '12px',
          fontWeight: '600',
          border: '2px solid #e5e7eb',
          cursor: 'pointer',
          margin: '4px',
          width: 'auto',
          minWidth: '110px',
          transition: 'all 0.2s ease',
        }}
        buttonWrapperClasses="cookie-buttons"
        expires={365}
      >
        <div style={{ marginBottom: 'clamp(16px, 4vw, 20px)' }}>
          <h3 style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 'clamp(18px, 4.5vw, 22px)',
            fontWeight: '700',
            marginBottom: '12px',
            color: '#111827',
            lineHeight: '1.2',
          }}>
            Protection de vos données
          </h3>
          <p style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 'clamp(13px, 3.5vw, 15px)',
            lineHeight: '1.6',
            color: '#4b5563',
            margin: 0,
            marginBottom: '12px',
            wordWrap: 'break-word',
          }}>
            Pour vous offrir la meilleure expérience, nous utilisons des cookies pour analyser le trafic et améliorer nos services. Vos données sont protégées et ne sont jamais partagées.
          </p>
          <Link
            href="/politique-cookies"
            style={{
              color: '#1A64B1',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: 'clamp(13px, 3.5vw, 14px)',
              display: 'inline-block',
              borderBottom: '1px solid #1A64B1',
            }}
          >
            Consulter notre politique →
          </Link>
        </div>
      </CookieConsent>
    </div>
  )
}

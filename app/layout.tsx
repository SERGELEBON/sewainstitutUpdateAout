import type React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { WhatsAppButton } from '@/components/shared/whatsapp-button'
import { ScholarshipPopup } from '@/components/shared/scholarship-popup'
import { CookieConsentBanner } from '@/components/cookies/cookie-consent-banner'
import { CookieOverlay } from '@/components/cookies/cookie-overlay'
import { VisitorTracker } from '@/components/cookies/visitor-tracker'
import { ConditionalAnalytics } from '@/components/analytics/conditional-analytics'
import { SITE_CONFIG } from '@/lib/constants'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1A64B1' },
    { media: '(prefers-color-scheme: dark)', color: '#1A64B1' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'formation anglais Ghana',
    'ecole anglais Accra',
    'cours anglais en ligne',
    'IELTS Ghana',
    'TOEFL preparation',
    'immersion anglais Afrique',
    'Sewa Institute',
    'apprendre anglais Ghana',
    'formation anglais professionnel',
    'business english Ghana',
    'ecole langue anglaise Afrique',
    'cours anglais francophones',
    'certificat anglais international',
    'preparation universitaire anglais',
    'sejour linguistique Ghana',
    'hebergement etudiant Accra',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.website }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.website),
  alternates: {
    canonical: SITE_CONFIG.website,
    languages: {
      'fr-FR': SITE_CONFIG.website,
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - Formation Anglais au Ghana`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.website,
    siteName: SITE_CONFIG.name,
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/logotransp.png',
        width: 800,
        height: 600,
        alt: 'Sewa Institute Ghana - Formation Anglais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} - Formation Anglais au Ghana`,
    description: SITE_CONFIG.description,
    images: ['/images/logotransp.png'],
    creator: '@SewaInstituteGH',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logotransp.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/logotransp.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/images/logotransp.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  category: 'education',
  generator: 'v0.app',
}

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.website,
  logo: `${SITE_CONFIG.website}/images/logotransp.png`,
  image: `${SITE_CONFIG.website}/images/logotransp.png`,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Asene',
    addressLocality: 'Accra',
    addressCountry: 'GH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '5.6037',
    longitude: '-0.1870',
  },
  sameAs: ['https://web.facebook.com/SewaProudToBe', 'https://www.tiktok.com/@sewa.institute.gh'],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: '5.6037',
      longitude: '-0.1870',
    },
    geoRadius: '5000',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Programmes de formation',
    itemListElement: [
      {
        '@type': 'Course',
        name: 'General English',
        description: 'Formation complete en anglais general pour tous les niveaux',
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
      },
      {
        '@type': 'Course',
        name: 'Business English',
        description: 'Anglais professionnel pour le monde des affaires',
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
      },
      {
        '@type': 'Course',
        name: 'IELTS & TOEFL Preparation',
        description: "Preparation aux examens internationaux d'anglais",
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' dir='ltr'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='dns-prefetch' href='https://fonts.googleapis.com' />
        <meta name='theme-color' content='#1A64B1' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Sewa Institute' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#1A64B1' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className='font-sans antialiased'>
        <VisitorTracker />
        <CookieOverlay />
        <Header />
        <main className='min-h-screen'>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScholarshipPopup />
        <CookieConsentBanner />
        <ConditionalAnalytics />
      </body>
    </html>
  )
}

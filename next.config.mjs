/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pour dÃ©ploiement statique (hÃ©bergement mutualisÃ©)
  // output: 'export',
  // distDir: 'out',
  // trailingSlash: true,

  // Pour dÃ©ploiement serveur Node.js (VPS)
  // output: 'standalone', // Desactive: cause une erreur de build sur Vercel (ENOENT next-server.js.nft.json)
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel-scripts.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https: http:",
              "connect-src 'self' https://*.vercel-insights.com https://vercel.live https://vitals.vercel-insights.com",
              "frame-ancestors 'self'",
              "form-action 'self'",
              "base-uri 'self'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
      },
    ]
  },
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/accueil',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/a-propos',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/galerie',
        permanent: true,
      },
      {
        source: '/register',
        destination: '/inscription',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/formations',
        permanent: true,
      },
      {
        source: '/accommodation',
        destination: '/hebergement',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

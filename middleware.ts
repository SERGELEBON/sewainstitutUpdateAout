import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAdminToken } from '@/lib/auth/admin-auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protection admin routes
  if (pathname.startsWith('/admin/cookie-stats') && !pathname.includes('/login')) {
    const token = request.cookies.get('admin-token')?.value

    if (!token || !(await verifyAdminToken(token))) {
      // Rediriger vers la page de login
      return NextResponse.redirect(new URL('/admin/cookie-stats/login', request.url))
    }
  }

  // Protection anti-scraping
  const userAgent = request.headers.get('user-agent') || ''

  // Bloquer les scrapers connus
  const blockedBots = [
    'scrapy',
    'crawler',
    'spider',
    'scraper',
    'bot',
    'wget',
    'curl',
    'python-requests',
    'axios',
    'httpie',
    'postman',
  ]

  // Exceptions pour les bots légitimes
  const allowedBots = [
    'googlebot',
    'bingbot',
    'slurp', // Yahoo
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit', // Facebook
    'twitterbot',
    'linkedinbot',
  ]

  const lowerUA = userAgent.toLowerCase()

  // Vérifier si c'est un bot autorisé
  const isAllowedBot = allowedBots.some(bot => lowerUA.includes(bot))

  // Bloquer si c'est un scraper malveillant
  if (!isAllowedBot && blockedBots.some(bot => lowerUA.includes(bot))) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Bloquer les requêtes sans User-Agent
  if (!userAgent && !pathname.startsWith('/api/')) {
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Headers de sécurité anti-scraping
  const response = NextResponse.next()

  response.headers.set('X-Robots-Tag', 'noarchive, notranslate')
  response.headers.set('X-Content-Type-Options', 'nosniff')

  return response
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
}

import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminPassword, createAdminToken } from '@/lib/auth/admin-auth'
import { getRateLimit, getClientIP, securityHeaders } from '@/lib/security'

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request.headers)

    // Rate limiting strict pour login (3 tentatives par minute)
    const rateLimit = getRateLimit(clientIP, 3, 60000)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Trop de tentatives. Réessayez dans 1 minute.',
        },
        { status: 429, headers: securityHeaders }
      )
    }

    const { password } = await request.json()

    // Validation
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Mot de passe requis' },
        { status: 400, headers: securityHeaders }
      )
    }

    // Vérifier le mot de passe
    const isValid = await verifyAdminPassword(password)

    if (!isValid) {
      // Attendre un peu pour ralentir les attaques par force brute
      await new Promise(resolve => setTimeout(resolve, 1000))

      return NextResponse.json(
        { success: false, message: 'Mot de passe incorrect' },
        { status: 401, headers: securityHeaders }
      )
    }

    // Créer le token JWT
    const token = await createAdminToken()

    // Créer la réponse avec le cookie sécurisé
    const response = NextResponse.json(
      { success: true, message: 'Authentification réussie' },
      { headers: securityHeaders }
    )

    // Cookie sécurisé
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500, headers: securityHeaders }
    )
  }
}

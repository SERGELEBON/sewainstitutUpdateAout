import { NextResponse } from 'next/server'
import { securityHeaders } from '@/lib/security'

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: 'Déconnexion réussie' },
    { headers: securityHeaders }
  )

  // Supprimer le cookie avec path '/'
  response.cookies.set('admin-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  })

  return response
}

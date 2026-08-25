import { NextRequest, NextResponse } from 'next/server'
import { securityHeaders, getRateLimit, getClientIP } from '@/lib/security'
import { verifyAdminToken } from '@/lib/auth/admin-auth'

// Stockage en mémoire (remplacer par une vraie DB en production)
let cookieStats = {
  totalVisitors: 0,
  accepted: 0,
  declined: 0,
  pending: 0,
  lastUpdated: new Date().toISOString(),
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { action } = data // 'accept', 'decline', 'visit'

    if (action === 'visit') {
      cookieStats.totalVisitors++
      cookieStats.pending++
    } else if (action === 'accept') {
      cookieStats.accepted++
      cookieStats.pending = Math.max(0, cookieStats.pending - 1)
    } else if (action === 'decline') {
      cookieStats.declined++
      cookieStats.pending = Math.max(0, cookieStats.pending - 1)
    }

    cookieStats.lastUpdated = new Date().toISOString()

    return NextResponse.json(
      { success: true, stats: cookieStats },
      { headers: securityHeaders }
    )
  } catch (error) {
    console.error('Error tracking cookie stats:', error)
    return NextResponse.json(
      { success: false, message: 'Error tracking stats' },
      { status: 500, headers: securityHeaders }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification admin
    const token = request.cookies.get('admin-token')?.value
    if (!token || !(await verifyAdminToken(token))) {
      return NextResponse.json(
        { success: false, message: 'Non autorisé' },
        { status: 401, headers: securityHeaders }
      )
    }

    // Rate limiting
    const clientIP = getClientIP(request.headers)
    const rateLimit = getRateLimit(clientIP, 30, 60000)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: 'Trop de requêtes' },
        { status: 429, headers: securityHeaders }
      )
    }

    // Calculer les pourcentages
    const totalResponses = cookieStats.accepted + cookieStats.declined
    const acceptRate = totalResponses > 0
      ? ((cookieStats.accepted / totalResponses) * 100).toFixed(1)
      : '0.0'
    const declineRate = totalResponses > 0
      ? ((cookieStats.declined / totalResponses) * 100).toFixed(1)
      : '0.0'

    return NextResponse.json(
      {
        success: true,
        stats: {
          ...cookieStats,
          acceptRate: `${acceptRate}%`,
          declineRate: `${declineRate}%`,
          totalResponses,
        },
      },
      { headers: securityHeaders }
    )
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500, headers: securityHeaders }
    )
  }
}

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Stats = {
  totalVisitors: number
  accepted: number
  declined: number
  pending: number
  acceptRate: string
  declineRate: string
  totalResponses: number
  lastUpdated: string
}

export default function CookieStatsPage() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const fetchStats = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/cookie-stats', {
        credentials: 'include',
        cache: 'no-store',
      })
      const data = await response.json()

      if (response.status === 401) {
        // Non autorisé, rediriger vers login
        router.push('/admin/cookie-stats/login')
        return
      }

      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/cookie-stats/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  useEffect(() => {
    fetchStats()
    // Rafraîchir toutes les 10 secondes
    const interval = setInterval(fetchStats, 10000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Chargement des statistiques...</p>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Erreur de chargement des statistiques</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Statistiques Cookies</h1>
            <p className="text-muted-foreground">
              Dernière mise à jour : {new Date(stats.lastUpdated).toLocaleString('fr-FR')}
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={fetchStats} variant="outline">
              Rafraîchir
            </Button>
            <Button onClick={handleLogout} variant="destructive">
              Déconnexion
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Visiteurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalVisitors}</div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-700">
                Acceptés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-700">{stats.accepted}</div>
              <p className="text-xs text-green-600 mt-1">{stats.acceptRate} des réponses</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-700">
                Refusés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-700">{stats.declined}</div>
              <p className="text-xs text-red-600 mt-1">{stats.declineRate} des réponses</p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-700">
                En attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-700">{stats.pending}</div>
              <p className="text-xs text-yellow-600 mt-1">N'ont pas encore répondu</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Graphique de répartition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Acceptés</span>
                  <span className="text-sm text-muted-foreground">
                    {stats.accepted} ({stats.acceptRate})
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{
                      width: `${stats.totalResponses > 0 ? (stats.accepted / stats.totalResponses) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Refusés</span>
                  <span className="text-sm text-muted-foreground">
                    {stats.declined} ({stats.declineRate})
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all"
                    style={{
                      width: `${stats.totalResponses > 0 ? (stats.declined / stats.totalResponses) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">En attente</span>
                  <span className="text-sm text-muted-foreground">{stats.pending}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-yellow-500 h-3 rounded-full transition-all"
                    style={{
                      width: `${stats.totalVisitors > 0 ? (stats.pending / stats.totalVisitors) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">ℹ️ Note importante</h3>
          <p className="text-sm text-blue-700">
            Ces statistiques sont stockées en mémoire et seront réinitialisées au redémarrage du serveur.
            Pour une solution permanente, configurez une base de données.
          </p>
        </div>
      </div>
    </div>
  )
}

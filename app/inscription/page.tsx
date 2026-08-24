import type { Metadata } from 'next'
import { InscriptionForm } from '@/components/forms/inscription-form'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Inscription',
  description: 'Inscrivez-vous aux formations de Sewa Institute',
}

export default function InscriptionPage() {
  return (
    <div className='py-24 bg-muted/30'>
      <div className='mx-auto max-w-3xl px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>Inscription</h1>
          <p className='text-lg text-muted-foreground'>
            Commencez votre parcours d'apprentissage avec Sewa Institute
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulaire d'inscription</CardTitle>
            <CardDescription>
              Remplissez ce formulaire et notre équipe vous contactera rapidement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InscriptionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

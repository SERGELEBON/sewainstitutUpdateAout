import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Award, Target, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Préparation aux Examens',
  description: 'Préparez-vous efficacement aux examens IELTS, TOEFL et TOEIC',
}

export default function PreparationExamensPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-balance'>
              Préparation aux Examens d'Anglais
            </h1>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              Préparez-vous aux examens internationaux IELTS, TOEFL et TOEIC avec nos programmes
              spécialisés et obtenez les scores dont vous avez besoin.
            </p>
            <Button asChild size='lg' variant='secondary' className='text-lg'>
              <Link href='/inscription'>Commencer ma préparation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold'>Pourquoi se préparer avec nous ?</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Nos programmes de préparation aux examens sont conçus par des experts certifiés qui
                connaissent parfaitement les formats et les exigences de chaque test. Nous vous
                donnons les outils, stratégies et la confiance nécessaires pour exceller.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Taux de réussite de 95%</h3>
                    <p className='text-sm text-muted-foreground'>
                      Nos étudiants obtiennent en moyenne +1 band score à l'IELTS
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Examens blancs réguliers</h3>
                    <p className='text-sm text-muted-foreground'>
                      Testez-vous dans les conditions réelles de l'examen
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Feedback personnalisé</h3>
                    <p className='text-sm text-muted-foreground'>
                      Identifiez et corrigez vos points faibles avec nos experts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative h-[400px]'>
              <Image
                src='/images/580037751-1412673667166936-2588911483997229172-n.jpg'
                alt='Préparation aux examens'
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exams Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Examens préparés</h2>
            <p className='text-lg text-muted-foreground'>
              Choisissez l'examen adapté à vos objectifs
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <Card>
              <CardContent className='p-8'>
                <div className='text-center mb-6'>
                  <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <Award className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold'>IELTS</h3>
                  <p className='text-sm text-muted-foreground mt-2'>Academic & General Training</p>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Accepté dans plus de 10,000 institutions</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Requis pour immigration et études</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Note sur 9 bands</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Préparer l'IELTS</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary'>
              <CardContent className='p-8'>
                <div className='text-center mb-6'>
                  <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <Target className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold'>TOEFL</h3>
                  <p className='text-sm text-muted-foreground mt-2'>Internet-Based Test (iBT)</p>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Standard pour universités américaines</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Format 100% numérique</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Score de 0 à 120 points</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Préparer le TOEFL</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8'>
                <div className='text-center mb-6'>
                  <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                    <TrendingUp className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold'>TOEIC</h3>
                  <p className='text-sm text-muted-foreground mt-2'>Business English</p>
                </div>
                <ul className='space-y-3 mb-6'>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Référence en anglais professionnel</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Reconnu par les entreprises</span>
                  </li>
                  <li className='flex items-start gap-2 text-sm'>
                    <Check className='h-4 w-4 text-primary mt-0.5' />
                    <span>Score de 10 à 990 points</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Préparer le TOEIC</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Notre méthode de préparation</h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold text-lg mb-3'>1. Évaluation initiale</h3>
                <p className='text-muted-foreground'>
                  Test de niveau complet pour identifier vos forces et faiblesses dans chaque
                  section de l'examen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold text-lg mb-3'>2. Plan personnalisé</h3>
                <p className='text-muted-foreground'>
                  Programme sur mesure adapté à votre score cible et au temps disponible avant
                  l'examen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold text-lg mb-3'>3. Entraînement intensif</h3>
                <p className='text-muted-foreground'>
                  Cours ciblés sur les stratégies spécifiques à chaque section : Reading, Listening,
                  Writing, Speaking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold text-lg mb-3'>4. Examens blancs</h3>
                <p className='text-muted-foreground'>
                  Tests complets dans les conditions réelles de l'examen avec correction détaillée
                  et conseils d'amélioration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Atteignez votre score cible</h2>
          <p className='text-xl text-white/90 mb-8'>
            Ne laissez pas l'examen être un obstacle. Préparez-vous avec des experts et réussissez
            du premier coup.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/inscription'>Commencer ma préparation</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
            >
              <Link href='/contact'>Demander conseil</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

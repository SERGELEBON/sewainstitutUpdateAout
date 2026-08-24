import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Clock, Users, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anglais Général',
  description: 'Formation complète pour améliorer votre anglais dans toutes les compétences',
}

export default function AnglaisGeneralPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-balance'>
              Formation Anglais Général
            </h1>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              Développez vos compétences en anglais de manière équilibrée : expression orale et
              écrite, compréhension, grammaire et vocabulaire.
            </p>
            <Button asChild size='lg' variant='secondary' className='text-lg'>
              <Link href='/inscription'>S'inscrire à cette formation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='relative h-[400px]'>
              <Image
                src='/images/526360160-1319970519770585-8816222884616177298-n.jpg'
                alt="Cours d'anglais général"
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold'>À propos de cette formation</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Notre programme d'Anglais Général est conçu pour les apprenants de tous niveaux
                souhaitant améliorer leur maîtrise globale de la langue anglaise. Que vous soyez
                débutant ou que vous souhaitiez perfectionner vos compétences, nos cours s'adaptent
                à votre niveau.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Avec une approche communicative et interactive, vous pratiquerez l'anglais dans des
                situations réelles et développerez votre confiance à l'oral comme à l'écrit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Détails du programme</h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Clock className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Durée flexible</h3>
                <p className='text-sm text-muted-foreground'>De 1 à 6 mois selon vos objectifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Users className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Classes réduites</h3>
                <p className='text-sm text-muted-foreground'>Maximum 15 étudiants par classe</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <BookOpen className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>20h par semaine</h3>
                <p className='text-sm text-muted-foreground'>4 heures de cours par jour</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Check className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Tous niveaux</h3>
                <p className='text-sm text-muted-foreground'>De débutant à avancé (A1 à C1)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center'>Ce que vous allez apprendre</h2>
            <div className='space-y-6'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Compréhension orale
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Développez votre capacité à comprendre l'anglais parlé dans diverses situations
                    : conversations, médias, présentations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Expression orale
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Pratiquez la conversation, améliorez votre prononciation et gagnez en fluidité
                    lors de nos sessions interactives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Compréhension écrite
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Lisez et analysez des textes variés, enrichissez votre vocabulaire et comprenez
                    des documents authentiques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Expression écrite
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Rédigez des emails, essais et rapports en anglais avec clarté et précision.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Grammaire et vocabulaire
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Maîtrisez les structures grammaticales essentielles et développez un vocabulaire
                    riche et varié.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Prêt à commencer votre apprentissage ?</h2>
          <p className='text-xl text-white/90 mb-8'>
            Rejoignez notre prochain groupe d'Anglais Général et transformez votre niveau d'anglais
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/inscription'>S'inscrire maintenant</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
            >
              <Link href='/contact'>Poser une question</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

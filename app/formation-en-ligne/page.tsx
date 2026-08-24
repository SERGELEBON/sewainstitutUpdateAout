import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Video, Calendar, Users, Clock, Globe, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formation en Ligne',
  description: "Apprenez l'anglais à distance avec nos cours en ligne interactifs",
}

export default function FormationEnLignePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-balance'>
                Formations d'Anglais en Ligne
              </h1>
              <p className='text-xl text-white/90 leading-relaxed'>
                Apprenez l'anglais depuis chez vous avec nos cours en direct, interactifs et
                personnalisés. La qualité Sewa Institute accessible partout dans le monde.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='lg' variant='secondary' className='text-lg'>
                  <Link href='/inscription'>Commencer maintenant</Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
                >
                  <Link href='/contact'>Demander une démo gratuite</Link>
                </Button>
              </div>
            </div>
            <div className='relative h-[400px] lg:h-[500px]'>
              <Image
                src='/images/dg2.jpeg'
                alt='Directeur Sewa Institute - Formation en ligne'
                fill
                className='rounded-lg object-cover shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Pourquoi choisir nos cours en ligne ?
            </h2>
            <p className='text-lg text-muted-foreground'>
              Tous les avantages de Sewa Institute, à distance
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Video className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Cours en direct</h3>
                <p className='text-muted-foreground'>
                  Classes interactives par vidéoconférence avec des professeurs natifs et certifiés.
                  Interaction en temps réel.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Calendar className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Horaires flexibles</h3>
                <p className='text-muted-foreground'>
                  Choisissez les créneaux qui vous conviennent : matin, après-midi ou soir. Sessions
                  adaptées à tous les fuseaux horaires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Classes réduites</h3>
                <p className='text-muted-foreground'>
                  Maximum 8 étudiants par classe pour garantir une attention personnalisée et
                  maximiser la pratique orale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Clock className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Accès 24/7</h3>
                <p className='text-muted-foreground'>
                  Plateforme d'apprentissage accessible en permanence avec exercices, vidéos et
                  ressources pédagogiques.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Globe className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Accessible partout</h3>
                <p className='text-muted-foreground'>
                  Étudiez depuis n'importe où dans le monde. Il vous suffit d'une connexion internet
                  et d'un ordinateur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <HeadphonesIcon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Support dédié</h3>
                <p className='text-muted-foreground'>
                  Notre équipe vous accompagne du début à la fin : assistance technique, conseils
                  pédagogiques et suivi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Nos formules en ligne</h2>
            <p className='text-lg text-muted-foreground'>
              Choisissez la formule adaptée à vos besoins
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto'>
            <Card>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-6'>Cours en groupe</h3>
                <div className='space-y-4 mb-8'>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>6-8 étudiants par classe</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>3 sessions de 1h30min par semaine</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Matériel pédagogique inclus</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Accès plateforme e-learning</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Certificat de fin de formation</span>
                  </div>
                </div>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>S'inscrire</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary relative'>
              <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                <span className='bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Plus populaire
                </span>
              </div>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-6'>Cours semi-privés</h3>
                <div className='space-y-4 mb-8'>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>2-3 étudiants par classe</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>2 sessions de 1h30min par semaine</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Programme personnalisé</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Feedback individuel détaillé</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Horaires flexibles</span>
                  </div>
                </div>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>S'inscrire</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-6'>Cours particuliers</h3>
                <div className='space-y-4 mb-8'>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>1 étudiant - 100% personnalisé</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Fréquence et durée sur mesure</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Contenu adapté à vos objectifs</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Progression accélérée</span>
                  </div>
                  <div className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                    <span className='text-sm'>Horaires totalement flexibles</span>
                  </div>
                </div>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>S'inscrire</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='relative h-[400px]'>
              <Image
                src='/images/englishg.jpeg'
                alt="Plateforme d'apprentissage"
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold'>Une plateforme complète</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Notre plateforme d'apprentissage en ligne combine technologie moderne et pédagogie
                éprouvée pour une expérience d'apprentissage optimale.
              </p>
              <ul className='space-y-4'>
                <li className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Vidéoconférence HD</h3>
                    <p className='text-sm text-muted-foreground'>
                      Qualité audio et vidéo professionnelle pour une communication claire
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Tableau blanc interactif</h3>
                    <p className='text-sm text-muted-foreground'>
                      Partagez et annotez des documents en temps réel avec votre professeur
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Exercices interactifs</h3>
                    <p className='text-sm text-muted-foreground'>
                      Bibliothèque d'exercices avec correction automatique et explications
                    </p>
                  </div>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1'>
                    <Check className='h-5 w-5 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-1'>Suivi de progression</h3>
                    <p className='text-sm text-muted-foreground'>
                      Tableaux de bord détaillés pour suivre vos progrès et identifier vos points
                      d'amélioration
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Comment ça marche ?</h2>
            <p className='text-lg text-muted-foreground'>
              Commencez votre formation en 4 étapes simples
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold'>
                  1
                </div>
                <h3 className='font-semibold mb-2'>Inscription</h3>
                <p className='text-sm text-muted-foreground'>
                  Remplissez le formulaire en ligne et choisissez votre formule
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold'>
                  2
                </div>
                <h3 className='font-semibold mb-2'>Test de niveau</h3>
                <p className='text-sm text-muted-foreground'>
                  Passez un test gratuit pour évaluer votre niveau d'anglais
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold'>
                  3
                </div>
                <h3 className='font-semibold mb-2'>Planning personnalisé</h3>
                <p className='text-sm text-muted-foreground'>
                  Nous créons un emploi du temps adapté à vos disponibilités
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center'>
                <div className='mx-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold'>
                  4
                </div>
                <h3 className='font-semibold mb-2'>Commencez à apprendre</h3>
                <p className='text-sm text-muted-foreground'>
                  Rejoignez votre première classe et commencez votre voyage
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-6 text-balance'>
            Commencez votre formation dès aujourd'hui
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Essayez gratuitement avec une leçon de démonstration. Aucun engagement, aucune carte
            bancaire requise.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary' className='text-lg'>
              <Link href='/inscription'>Essai gratuit</Link>
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

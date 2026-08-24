import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Clock, Users, BookOpen, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business English',
  description: "Anglais professionnel pour développer votre carrière à l'international",
}

export default function BusinessEnglishPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-balance'>
              Formation Business English
            </h1>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              Maîtrisez l'anglais professionnel pour exceller dans votre carrière internationale.
              Présentations, négociations, rédaction professionnelle et networking.
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
                src='/images/580037751-1412673667166936-2588911483997229172-n.jpg'
                alt='Cours de Business English'
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
            <div className='space-y-6'>
              <div className='inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full'>
                <Briefcase className='h-4 w-4' />
                <span className='text-sm font-semibold'>Formation Professionnelle</span>
              </div>
              <h2 className='text-3xl font-bold'>À propos de cette formation</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Notre programme Business English est spécialement conçu pour les professionnels qui
                souhaitent développer leurs compétences en anglais des affaires. Vous apprendrez à
                communiquer efficacement dans un environnement professionnel international.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                De la rédaction d'emails professionnels aux présentations en passant par les
                négociations commerciales, vous acquerrez toutes les compétences linguistiques
                nécessaires pour réussir dans le monde des affaires international.
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
            <p className='text-muted-foreground'>
              Une formation intensive pour professionnels ambitieux
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Clock className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Durée flexible</h3>
                <p className='text-sm text-muted-foreground'>De 2 à 6 mois selon vos objectifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Users className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Petits groupes</h3>
                <p className='text-sm text-muted-foreground'>
                  Maximum 10 professionnels par classe
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <BookOpen className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>15h par semaine</h3>
                <p className='text-sm text-muted-foreground'>3 heures de cours intensifs</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Check className='h-8 w-8 text-primary' />
                </div>
                <h3 className='font-semibold'>Niveau intermédiaire</h3>
                <p className='text-sm text-muted-foreground'>B1 minimum requis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold mb-12 text-center'>
              Compétences professionnelles développées
            </h2>
            <div className='space-y-6'>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Communication professionnelle
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Maîtrisez la communication écrite et orale dans un contexte professionnel :
                    emails, rapports, mémos et correspondance d'affaires.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Présentations professionnelles
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Apprenez à structurer et délivrer des présentations percutantes en anglais avec
                    confiance et impact.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Réunions et négociations
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Développez vos compétences pour participer efficacement aux réunions
                    internationales et négocier en anglais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Networking et relations professionnelles
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Construisez votre réseau professionnel international avec les bonnes expressions
                    et étiquette du business anglais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Vocabulaire commercial spécialisé
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Enrichissez votre vocabulaire spécifique aux domaines de la finance, marketing,
                    management et commerce international.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className='p-6'>
                  <h3 className='font-semibold text-lg mb-3 flex items-center gap-2'>
                    <Check className='h-5 w-5 text-primary' />
                    Entretiens et recrutement
                  </h3>
                  <p className='text-muted-foreground ml-7'>
                    Préparez-vous aux entretiens d'embauche en anglais et apprenez à valoriser votre
                    parcours professionnel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Secteurs couverts</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Notre formation s'adapte aux besoins de divers secteurs professionnels
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4 max-w-4xl mx-auto'>
            {[
              'Finance & Banking',
              'Marketing & Sales',
              'Management',
              'IT & Technology',
              'Commerce International',
              'Logistique',
              'Ressources Humaines',
              'Consulting',
            ].map(industry => (
              <div
                key={industry}
                className='bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow'
              >
                <p className='font-medium text-sm'>{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8'>
          <Card className='border-2'>
            <CardContent className='p-8 md:p-12'>
              <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='relative w-32 h-32 flex-shrink-0'>
                  <Image
                    src='/images/579988675-1412673200500316-6799641391410815907-n.jpg'
                    alt='Étudiant Business English'
                    fill
                    className='rounded-full object-cover'
                  />
                </div>
                <div className='flex-1 text-center md:text-left'>
                  <p className='text-lg italic text-muted-foreground mb-6 leading-relaxed'>
                    "Le programme Business English m'a permis d'obtenir une promotion dans une
                    entreprise internationale. Les compétences acquises me servent quotidiennement
                    dans mes interactions avec mes collègues et clients anglophones."
                  </p>
                  <div>
                    <p className='font-semibold'>Emmanuel K.</p>
                    <p className='text-sm text-muted-foreground'>Manager Commercial, Accra</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Propulsez votre carrière internationale</h2>
          <p className='text-xl text-white/90 mb-8'>
            Rejoignez notre programme Business English et donnez un nouvel élan à votre parcours
            professionnel
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
              <Link href='/contact'>Demander plus d'informations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

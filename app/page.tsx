'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Stats } from '@/components/shared/stats'
import { HeroSlider } from '@/components/shared/hero-slider'
import { AboutSlider } from '@/components/shared/about-slider'
import { PartnersMarquee } from '@/components/shared/partners-marquee'
import { VacationPrograms } from '@/components/shared/vacation-programs'
import { ResidencePermitInfo } from '@/components/dialogs/residence-permit-info'
import { PROGRAMS, TESTIMONIALS } from '@/lib/constants'
import { GraduationCap, Globe, Award, Users } from 'lucide-react'

export default function HomePage() {
  const [permitInfoOpen, setPermitInfoOpen] = useState(false)
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Stats Section */}
      <Stats />

      {/* About Section */}
      <section className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <AboutSlider />
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold tracking-tight lg:text-4xl text-balance'>
                Une immersion totale dans la langue anglaise
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                À Asene, Accra, Sewa Institute Ghana est le cœur de notre vision : permettre aux
                francophones d'apprendre l'anglais au Ghana dans les meilleures conditions.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Nos étudiants vivent une immersion totale dans la langue anglaise, combinant un
                encadrement académique rigoureux, une préparation aux examens internationaux comme
                l'IELTS, et une vie de campus riche en expériences humaines.
              </p>
              <Button asChild size='lg'>
                <Link href='/presentiel-ghana'>En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>Nos Programmes</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Des formations adaptées à tous les niveaux et tous les objectifs
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {PROGRAMS.map(program => (
              <Card key={program.id} className='hover:shadow-lg transition-shadow overflow-hidden'>
                <CardContent className='p-0'>
                  <div className='relative h-48 w-full'>
                    <Image
                      src={program.image || '/placeholder.svg'}
                      alt={program.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div className='p-6 space-y-4'>
                    <h3 className='text-xl font-semibold'>{program.title}</h3>
                    <p className='text-muted-foreground'>{program.description}</p>
                    <Button asChild variant='outline' className='w-full bg-transparent'>
                      <Link href={`/formations/${program.id}`}>Découvrir</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Pourquoi choisir Sewa Institute ?
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center space-y-4'>
              <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center' aria-hidden='true'>
                <GraduationCap className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-lg font-semibold'>Formation de qualité</h3>
              <p className='text-sm text-muted-foreground'>
                Enseignants qualifiés et méthodes pédagogiques éprouvées
              </p>
            </div>
            <div className='text-center space-y-4'>
              <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center' aria-hidden='true'>
                <Globe className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-lg font-semibold'>Immersion totale</h3>
              <p className='text-sm text-muted-foreground'>
                Vivre et apprendre dans un environnement anglophone
              </p>
            </div>
            <div className='text-center space-y-4'>
              <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center' aria-hidden='true'>
                <Award className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-lg font-semibold'>Certifications reconnues</h3>
              <p className='text-sm text-muted-foreground'>
                Préparation aux examens IELTS, TOEFL et TOEIC
              </p>
            </div>
            <div className='text-center space-y-4'>
              <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center' aria-hidden='true'>
                <Users className='h-8 w-8 text-primary' />
              </div>
              <h3 className='text-lg font-semibold'>Communauté internationale</h3>
              <p className='text-sm text-muted-foreground'>
                Rencontrez des étudiants venus de toute l'Afrique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className='py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <div className='inline-block bg-white/20 px-4 py-2 rounded-full'>
                <p className='text-sm font-semibold text-white'>OFFRE SPÉCIALE 2026-2027</p>
              </div>
              <h2 className='text-4xl font-bold tracking-tight lg:text-5xl text-balance'>
                Bourses d'études partielles Ghana
              </h2>
              <p className='text-lg text-white/90 leading-relaxed'>
                Profitez de notre 2e édition du programme de bourses d'études et réalisez vos rêves
                au Ghana !
              </p>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <p className='text-white/95'>Frais de scolarité réduits jusqu'à 50%</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <p className='text-white/95'>Frais de logement payés à 50%</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='h-8 w-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold'>✓</span>
                  </div>
                  <p className='text-white/95'>Accès gratuit aux cours d'informatique</p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='lg' variant='secondary' className='text-base'>
                  <Link href='/bourse'>Découvrir les bourses</Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-blue-600 bg-transparent'
                >
                  <Link href='/inscription'>Candidater</Link>
                </Button>
              </div>
            </div>
            <div className='relative h-[300px] md:h-[400px]'>
              <Image
                src='/images/boursesewa.jpeg'
                alt='Programme de bourses Sewa Institute Ghana'
                fill
                className='rounded-lg object-cover shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residence Permit Section */}
      <section className='py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <div className='inline-block bg-white/20 px-4 py-2 rounded-full'>
                <p className='text-sm font-semibold'>SERVICE IMPORTANT</p>
              </div>
              <h2 className='text-4xl font-bold tracking-tight lg:text-5xl text-balance'>
                Permit de Résidence
              </h2>
              <p className='text-lg text-white/95 leading-relaxed'>
                Nous vous aidons à obtenir votre permis de résidence pour étudier au Ghana en toute
                légalité.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-6'>
                <div className='bg-white/10 rounded-lg p-6 backdrop-blur'>
                  <h3 className='text-xl font-bold mb-4'>Frais d'application</h3>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/90'>Afrique de l'Ouest</span>
                      <span className='font-bold text-lg'>$45</span>
                    </div>
                    <div className='flex justify-between items-center pt-3 border-t border-white/20'>
                      <span className='text-white/90'>Autres pays</span>
                      <span className='font-bold text-lg'>$50</span>
                    </div>
                  </div>
                </div>

                <div className='bg-white/10 rounded-lg p-6 backdrop-blur'>
                  <h3 className='text-xl font-bold mb-4'>Pénalités de retard</h3>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-white/90'>Afrique de l'Ouest</span>
                      <span className='font-bold text-lg'>200 GH₵</span>
                    </div>
                    <div className='flex justify-between items-center pt-3 border-t border-white/20'>
                      <span className='text-white/90'>Autres pays</span>
                      <span className='font-bold text-lg'>300 GH₵</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className='text-sm text-white/80 italic'>
                *Ne pas oublier ! Le permis de résidence est obligatoire pour tous les étudiants
                internationaux.
              </p>

              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  variant='secondary'
                  onClick={() =>
                    window.open(
                      'https://wa.me/233553019097?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20le%20permis%20de%20r%C3%A9sidence',
                      '_blank'
                    )
                  }
                  className='text-base'
                  aria-label='Contacter Sewa Institute via WhatsApp pour le permis de résidence'
                >
                  <span className='mr-2' aria-hidden='true'>WhatsApp</span>
                  Nous contacter
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  onClick={() => setPermitInfoOpen(true)}
                  className='border-white text-white hover:bg-white hover:text-amber-600 bg-transparent'
                >
                  Plus d'informations
                </Button>
              </div>
            </div>

            <div className='bg-white/10 rounded-lg p-8 backdrop-blur space-y-6'>
              <div className='bg-white/10 rounded-lg p-5 border border-white/20'>
                <h4 className='font-bold text-lg mb-3'>Documents nécessaires</h4>
                <ul className='space-y-2 text-white/90'>
                  <li className='flex items-start gap-3'>
                    <span className='text-xl mt-1'>✓</span>
                    <span>Passeport valide</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-xl mt-1'>✓</span>
                    <span>Lettre d'acceptation de Sewa Institute</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-xl mt-1'>✓</span>
                    <span>Preuve de moyens financiers</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-xl mt-1'>✓</span>
                    <span>Photos d'identité (4x4 cm)</span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='text-xl mt-1'>✓</span>
                    <span>Formulaire de demande complété</span>
                  </li>
                </ul>
              </div>

              <div className='bg-green-500/20 border border-green-500/50 rounded-lg p-5'>
                <p className='text-white font-semibold'>
                  Conseil : Demandez votre permis avant votre arrivée pour un traitement plus rapide
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>Ils témoignent</h2>
            <p className='text-lg text-muted-foreground'>
              Découvrez les expériences de nos anciens étudiants
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className='hover:shadow-lg transition-shadow'>
                <CardContent className='p-6 space-y-4'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className='rounded-full object-cover'
                    />
                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-sm text-muted-foreground'>{testimonial.country}</p>
                    </div>
                  </div>
                  <p className='text-sm text-muted-foreground italic leading-relaxed'>
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-12 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mb-8'>
          <h2 className='text-2xl font-bold tracking-tight text-center mb-2'>Nos Partenaires</h2>
          <p className='text-center text-muted-foreground mb-8'>Ils nous font confiance</p>
        </div>
        <PartnersMarquee />
      </section>

      {/* Gallery Preview Section */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>La vie au campus</h2>
            <p className='text-lg text-muted-foreground'>
              Découvrez notre environnement d'apprentissage
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div className='relative h-64 md:h-80'>
              <Image
                src='/images/599930380-1439628877804748-1922393096421763607-n.jpg'
                alt='Visite éducative'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative h-64 md:h-80'>
              <Image
                src='/images/526859100-1319970323103938-823436667703388820-n.jpg'
                alt='Conférence'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative h-64 md:h-80'>
              <Image
                src='/images/599930491-1439628837804752-574638878632053744-n.jpg'
                alt='Port de Tema'
                fill
                className='rounded-lg object-cover'
              />
            </div>
          </div>
          <div className='text-center mt-8'>
            <Button asChild size='lg'>
              <Link href='/galerie'>Voir toute la galerie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-6 text-balance'>
            Prêt à commencer votre voyage linguistique ?
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Rejoignez des milliers d'étudiants qui ont transformé leur avenir grâce à Sewa Institute
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary' className='text-lg'>
              <Link href='/inscription'>S'inscrire maintenant</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
            >
              <Link href='/contact'>Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Residence Permit Modal */}
      <ResidencePermitInfo open={permitInfoOpen} onOpenChange={setPermitInfoOpen} />

      {/* Vacation Programs Section */}
      <VacationPrograms />

      {/* CTA Section */}
    </div>
  )
}

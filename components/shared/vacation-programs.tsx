import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Calendar, Users, Award, Plane } from 'lucide-react'

export function VacationPrograms() {
  return (
    <section className='py-16 bg-gradient-to-b from-amber-50 to-white'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <div className='inline-block bg-amber-100 px-4 py-2 rounded-full mb-4'>
            <p className='text-sm font-semibold text-amber-800'>OFFRE SAISONNIÈRE</p>
          </div>
          <h2 className='text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4'>
            Colonie de Vacances
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Explorez le Ghana avec Sewa Institute et vivez une expérience inoubliable
          </p>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          {/* Image */}
          <div className='relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-2xl'>
            <Image
              src='/images/colonie.jpeg'
              alt='Colonies de Vacances Sewa Institute Ghana'
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Content */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h3 className='text-2xl font-bold'>Coût Adorable</h3>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Avec Sewa Institute, vivez une expérience inoubliable en explorant les sites
                touristiques exclusifs et en plongeant au cœur de nouvelles cultures.
              </p>
              <p className='text-base text-muted-foreground leading-relaxed'>
                Une opportunité unique d'enrichir vos connaissances linguistiques et de découvrir
                les merveilles du Ghana en compagnie de nouveaux amis du monde entier.
              </p>
            </div>

            {/* Features Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <Card className='border-amber-200 hover:shadow-lg transition-shadow'>
                <CardContent className='p-4'>
                  <div className='flex items-start gap-3'>
                    <Plane className='h-5 w-5 text-amber-600 flex-shrink-0 mt-1' />
                    <div>
                      <h4 className='font-semibold text-sm mb-1'>Destinations</h4>
                      <p className='text-xs text-muted-foreground'>
                        Cape Coast, Independence Square, Back Gate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-amber-200 hover:shadow-lg transition-shadow'>
                <CardContent className='p-4'>
                  <div className='flex items-start gap-3'>
                    <Calendar className='h-5 w-5 text-amber-600 flex-shrink-0 mt-1' />
                    <div>
                      <h4 className='font-semibold text-sm mb-1'>Périodes flexibles</h4>
                      <p className='text-xs text-muted-foreground'>Vacances scolaires et congés</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-amber-200 hover:shadow-lg transition-shadow'>
                <CardContent className='p-4'>
                  <div className='flex items-start gap-3'>
                    <Users className='h-5 w-5 text-amber-600 flex-shrink-0 mt-1' />
                    <div>
                      <h4 className='font-semibold text-sm mb-1'>Groupes encadrés</h4>
                      <p className='text-xs text-muted-foreground'>Accompagnement professionnel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='border-amber-200 hover:shadow-lg transition-shadow'>
                <CardContent className='p-4'>
                  <div className='flex items-start gap-3'>
                    <Award className='h-5 w-5 text-amber-600 flex-shrink-0 mt-1' />
                    <div>
                      <h4 className='font-semibold text-sm mb-1'>Certificat</h4>
                      <p className='text-xs text-muted-foreground'>Attestation d'immersion</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Button asChild size='lg' className='bg-amber-600 hover:bg-amber-700'>
                <Link href='/contact?subject=colonie-vacances'>Réserver maintenant</Link>
              </Button>
              <Button asChild size='lg' variant='outline'>
                <a
                  href='https://wa.me/233553019097?text=Bonjour%2C%20j%27aimerais%20en%20savoir%20plus%20sur%20les%20colonies%20de%20vacances%20Sewa%20Institute'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className='bg-amber-50 rounded-lg p-8 border border-amber-200'>
          <h3 className='text-2xl font-bold mb-8 text-center'>Ce qui est inclus</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { title: 'Transport', desc: "Aller-retour depuis l'institut" },
              { title: 'Guide expert', desc: 'Explications culturelles complètes' },
              { title: 'Repas complets', desc: 'Petit-déj, déj et dîner inclus' },
              { title: "Droits d'entrée", desc: 'Accès à tous les sites' },
              { title: 'Assurance', desc: 'Couverture complète du séjour' },
              { title: 'Certificat', desc: "Attestation d'immersion culturelle" },
              { title: 'Photos', desc: 'Souvenirs professionnels' },
              { title: 'Sécurité', desc: 'Encadrement 24h/24' },
            ].map((item, index) => (
              <div key={index} className='flex items-start gap-3'>
                <div className='h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold'>
                  ✓
                </div>
                <div>
                  <p className='font-semibold text-sm'>{item.title}</p>
                  <p className='text-xs text-muted-foreground'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-12'>
          <h3 className='text-2xl font-bold mb-4'>Prêt pour l'aventure ?</h3>
          <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Contactez-nous pour connaître les dates exactes, tarifs et disponibilités de nos
            colonies de vacances
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' className='bg-amber-600 hover:bg-amber-700'>
              <Link href='/contact?subject=colonie-vacances'>Demander des informations</Link>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <Link href='/formations'>Explorer autres programmes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

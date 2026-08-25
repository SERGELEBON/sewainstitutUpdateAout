import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Home, Wifi, Utensils, Shield, Wind, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hébergement',
  description:
    "Solutions d'hébergement confortables et sécurisées pour les étudiants de Sewa Institute",
}

export default function HebergementPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-balance'>
                Hébergement à Sewa Institute
              </h1>
              <p className='text-xl text-white/90 leading-relaxed'>
                Vivez dans un environnement confortable, sécurisé et propice à l'apprentissage.
                Notre résidence étudiante offre tout ce dont vous avez besoin pour vous concentrer
                sur vos études.
              </p>
              <Button asChild size='lg' variant='secondary' className='text-lg'>
                <Link href='/inscription'>Réserver votre chambre</Link>
              </Button>
            </div>
            <div className='relative h-[400px] lg:h-[500px]'>
              <Image
                src='/images/logement.jpeg'
                alt='Hébergement Sewa Institute - Best Modern Hostel'
                fill
                className='rounded-lg object-cover shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Votre chez-vous loin de chez vous</h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Notre résidence étudiante est située sur le campus, à Asene, Accra. Un cadre idéal
              pour étudier et créer des liens avec d'autres étudiants internationaux.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Home className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Chambres Modernes</h3>
                <p className='text-muted-foreground'>
                  Chambres individuelles ou partagées entièrement équipées avec lit, bureau, armoire
                  et climatisation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Wifi className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Internet haut débit</h3>
                <p className='text-muted-foreground'>
                  WiFi gratuit et illimité dans toutes les chambres et espaces communs pour rester
                  connecté.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Utensils className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Cuisine équipée</h3>
                <p className='text-muted-foreground'>
                  Cuisine accessible pour préparer vos repas. Possibilité de pension complète sur
                  demande.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Shield className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Sécurité 24/7</h3>
                <p className='text-muted-foreground'>
                  Gardiennage permanent, portail sécurisé et système de surveillance pour votre
                  tranquillité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Wind className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Environnement paisible</h3>
                <p className='text-muted-foreground'>
                  Cadre calme et propice aux études dans le climat tropical ghanéen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Emplacement exclusif</h3>
                <p className='text-muted-foreground'>
                  Situé à proximité du campus pour un accès facile aux cours et activités.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Types de chambres</h2>
            <p className='text-lg text-muted-foreground'>Choisissez l'option qui vous convient</p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto'>
            <Card className='border-2'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-6'>Chambre partagée</h3>
                <p className='text-muted-foreground mb-6'>
                  2 étudiants par chambre - Option économique
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>2 lits individuels avec literie</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>2 bureaux et chaises de travail</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>2 armoires de rangement</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Ventilateur inclus</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Salle de bain commune</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Draps et serviettes fournis</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Réserver cette chambre</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-6'>Chambre individuelle</h3>
                <p className='text-muted-foreground mb-6'>
                  1 étudiant - Option confort et intimité
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>1 lit double avec literie premium</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Bureau spacieux et chaise</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Grande armoire et étagères</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Climatisation disponible</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Salle de bain privée</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Draps et serviettes fournis</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Réserver cette chambre</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Découvrez notre résidence</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <div className='relative h-64 md:col-span-2 lg:col-span-1'>
              <Image
                src='/images/logement.jpeg'
                alt='Hostel Sewa Institute'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative h-64'>
              <Image
                src='/images/maison.jpeg'
                alt='Résidence étudiante - Intérieur'
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='relative h-64'>
              <Image
                src='/images/ghana-housing-1.jpg'
                alt='Chambre étudiante Ghana'
                fill
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold mb-8 text-center'>Contactez-nous pour réserver</h2>
            <Card>
              <CardContent className='p-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Téléphone</h3>
                    <p className='text-primary font-medium'>+233 26 181 5407</p>
                    <p className='text-primary font-medium'>+233 55 301 9097</p>
                    <p className='text-primary font-medium'>+233 30 242 3670</p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Email</h3>
                    <p className='text-primary font-medium'>sewainstitute.edu@gmail.com</p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Adresse</h3>
                    <p className='text-muted-foreground'>Asene, Accra, Ghana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Réservez votre chambre dès maintenant</h2>
          <p className='text-xl text-white/90 mb-8'>
            Les places sont limitées. Assurez-vous d'avoir un logement confortable pour toute la
            durée de votre formation.
          </p>
          <Button asChild size='lg' variant='secondary'>
            <Link href='/inscription'>Réserver maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

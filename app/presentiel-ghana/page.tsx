import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, Home, Utensils, Wifi, BookOpen, Users, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Présentiel au Ghana',
  description: 'Découvrez nos programmes en immersion totale à Accra, Ghana',
}

export default function PresentielGhanaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <h1 className='text-4xl font-bold tracking-tight lg:text-5xl text-balance'>
                Immersion Totale au Ghana
              </h1>
              <p className='text-xl text-white/90 leading-relaxed'>
                Vivez une expérience unique d'apprentissage de l'anglais dans notre campus à Asene,
                Accra. Une immersion complète dans un environnement anglophone authentique.
              </p>
              <Button asChild size='lg' variant='secondary' className='text-lg'>
                <Link href='/inscription'>Réserver votre place</Link>
              </Button>
            </div>
            <div className='relative h-[400px] lg:h-[500px]'>
              <Image
                src='/images/580037751-1412673667166936-2588911483997229172-n.jpg'
                alt='Campus Sewa Institute Accra'
                fill
                className='rounded-lg object-cover shadow-2xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Location Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='relative h-[400px] lg:h-[500px]'>
              <Image
                src='/images/599930380-1439628877804748-1922393096421763607-n.jpg'
                alt='Environnement Ghana'
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
            <div className='space-y-6'>
              <div className='flex items-center gap-3 text-primary'>
                <MapPin className='h-6 w-6' />
                <h2 className='text-3xl font-bold'>Notre Campus à Asene, Accra</h2>
              </div>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Situé dans un quartier calme et sécurisé d'Accra, notre campus offre un cadre idéal
                pour l'apprentissage. À proximité des zones d'activité économique et culturelle,
                vous bénéficiez d'une immersion complète dans la vie ghanéenne.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Le Ghana, pays anglophone stable et accueillant, est la destination parfaite pour
                les francophones souhaitant améliorer leur anglais tout en découvrant la richesse de
                la culture ouest-africaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Hébergement et Services
            </h2>
            <p className='text-lg text-muted-foreground'>
              Tout le confort nécessaire pour vous concentrer sur vos études
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Home className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Chambres Meublées</h3>
                <p className='text-muted-foreground'>
                  Chambres individuelles ou partagées entièrement équipées avec climatisation, lits
                  confortables et rangements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Utensils className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Restauration</h3>
                <p className='text-muted-foreground'>
                  Trois repas par jour avec un mélange de cuisine locale et internationale, adaptés
                  à tous les régimes alimentaires.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Wifi className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Internet Haut Débit</h3>
                <p className='text-muted-foreground'>
                  Connexion WiFi gratuite et illimitée dans tout le campus pour faciliter vos
                  recherches et études.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <BookOpen className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Bibliothèque</h3>
                <p className='text-muted-foreground'>
                  Accès à une bibliothèque riche en ressources pédagogiques, livres et matériel
                  d'apprentissage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Espaces Communs</h3>
                <p className='text-muted-foreground'>
                  Salles de détente, espaces de travail collaboratif et zones récréatives pour
                  socialiser.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Check className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Sécurité 24/7</h3>
                <p className='text-muted-foreground'>
                  Campus sécurisé avec surveillance continue pour votre tranquillité d'esprit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Votre Journée Type
            </h2>
            <p className='text-lg text-muted-foreground'>
              Un emploi du temps équilibré entre apprentissage et découverte
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 max-w-3xl mx-auto'>
            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>08h00 - 09h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Petit-déjeuner</h3>
                    <p className='text-sm text-muted-foreground'>
                      Commencez la journée avec un repas nutritif
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>09h00 - 13h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Cours d'anglais</h3>
                    <p className='text-sm text-muted-foreground'>
                      Sessions intensives avec nos professeurs qualifiés - grammaire, vocabulaire,
                      conversation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>13h00 - 14h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Déjeuner</h3>
                    <p className='text-sm text-muted-foreground'>
                      Repas au réfectoire avec vos camarades
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>14h00 - 17h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Ateliers pratiques</h3>
                    <p className='text-sm text-muted-foreground'>
                      Travaux de groupe, présentations, activités culturelles et excursions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>17h00 - 19h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Temps libre</h3>
                    <p className='text-sm text-muted-foreground'>
                      Sport, détente, révisions personnelles
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>19h00 - 20h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Dîner</h3>
                    <p className='text-sm text-muted-foreground'>Repas convivial en groupe</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-primary min-w-[100px]'>20h00 - 22h00</div>
                  <div>
                    <h3 className='font-semibold mb-1'>Soirée</h3>
                    <p className='text-sm text-muted-foreground'>
                      Activités sociales, cinéma en anglais, jeux de société
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Gallery */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Activités et Excursions
            </h2>
            <p className='text-lg text-muted-foreground'>
              Découvrez le Ghana à travers des sorties culturelles organisées
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <div className='relative h-64'>
              <Image
                src='/images/599930380-1439628877804748-1922393096421763607-n.jpg'
                alt='Visite du port de Tema'
                fill
                className='rounded-lg object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg' />
              <div className='absolute bottom-4 left-4 right-4 text-white'>
                <h3 className='font-semibold text-lg mb-1'>Visites industrielles</h3>
                <p className='text-sm'>
                  Découverte du port de Tema et des infrastructures ghanéennes
                </p>
              </div>
            </div>

            <div className='relative h-64'>
              <Image
                src='/images/526859100-1319970323103938-823436667703388820-n.jpg'
                alt='Conférences'
                fill
                className='rounded-lg object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg' />
              <div className='absolute bottom-4 left-4 right-4 text-white'>
                <h3 className='font-semibold text-lg mb-1'>Conférences inspirantes</h3>
                <p className='text-sm'>Rencontres avec des professionnels et entrepreneurs</p>
              </div>
            </div>

            <div className='relative h-64'>
              <Image
                src='/images/599930491-1439628837804752-574638878632053744-n.jpg'
                alt='Activités portuaires'
                fill
                className='rounded-lg object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg' />
              <div className='absolute bottom-4 left-4 right-4 text-white'>
                <h3 className='font-semibold text-lg mb-1'>Immersion professionnelle</h3>
                <p className='text-sm'>Visites d'entreprises et découverte du monde du travail</p>
              </div>
            </div>

            <div className='relative h-64'>
              <Image
                src='/images/579988675-1412673200500316-6799641391410815907-n.jpg'
                alt='Vie étudiante'
                fill
                className='rounded-lg object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg' />
              <div className='absolute bottom-4 left-4 right-4 text-white'>
                <h3 className='font-semibold text-lg mb-1'>Vie sociale</h3>
                <p className='text-sm'>Événements, sorties et activités entre étudiants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Forfaits et Tarifs
            </h2>
            <p className='text-lg text-muted-foreground'>
              Des packages tout inclus pour une expérience sans souci
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl mx-auto'>
            <Card className='border-2'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-4'>Formule Standard</h3>
                <div className='mb-6'>
                  <div className='text-4xl font-bold text-primary'>1 mois</div>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Cours d'anglais intensifs</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Hébergement en chambre partagée</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>3 repas par jour</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Matériel pédagogique</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Choisir ce forfait</Link>
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
                <h3 className='text-2xl font-bold mb-4'>Formule Premium</h3>
                <div className='mb-6'>
                  <div className='text-4xl font-bold text-primary'>3 mois</div>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Tout de la formule Standard</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Préparation aux examens IELTS</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Excursions culturelles</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Accompagnement personnalisé</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Choisir ce forfait</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className='border-2'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold mb-4'>Formule Excellence</h3>
                <div className='mb-6'>
                  <div className='text-4xl font-bold text-primary'>6 mois</div>
                </div>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Tout de la formule Premium</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Chambre individuelle</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Prépa admission universitaire</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <Check className='h-5 w-5 text-primary mt-0.5' />
                    <span className='text-sm'>Stage en entreprise</span>
                  </li>
                </ul>
                <Button asChild className='w-full'>
                  <Link href='/inscription'>Choisir ce forfait</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-6 text-balance'>
            Réservez votre place dès maintenant
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Les places sont limitées. Ne manquez pas cette opportunité unique d'apprendre l'anglais
            au Ghana.
          </p>
          <Button asChild size='lg' variant='secondary' className='text-lg'>
            <Link href='/inscription'>S'inscrire maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

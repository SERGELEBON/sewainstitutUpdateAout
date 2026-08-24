import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Clock, Users, Award, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formation Professionnelle - Sewa Institute',
  description:
    'Formations professionnelles certifiées dans 12 domaines clés : gestion, technologie, santé, commerce et plus au Ghana',
}

export default function FormationProfessionnellePage() {
  return (
    <div className='py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center'>
          <div className='space-y-6'>
            <div className='inline-block bg-primary/10 px-4 py-2 rounded-full'>
              <p className='text-sm font-semibold text-primary'>NOS FORMATIONS PROFESSIONNELLES</p>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
              Formation Professionnelle
            </h1>
            <p className='text-xl text-muted-foreground leading-relaxed'>
              Sewa Institute propose une gamme complète de formations professionnelles comme réponse
              stratégique aux besoins urgents d'avancement de carrière au Ghana.
            </p>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Découvrez nos 12 programmes d'excellence adaptés aux défis du marché du travail
              africain moderne.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button asChild size='lg'>
                <Link href='/inscription'>S'inscrire à une formation</Link>
              </Button>
              <Button asChild size='lg' variant='outline'>
                <Link href='/contact'>Demander plus d'informations</Link>
              </Button>
            </div>
          </div>
          <div className='relative h-96'>
            <Image
              src='/images/prof1.jpeg'
              alt='Formation Professionnelle Sewa Institute'
              fill
              className='object-cover rounded-lg shadow-xl'
            />
          </div>
        </div>

        {/* Overview Section */}
        <section className='mb-16 bg-muted/50 rounded-lg p-8'>
          <h2 className='text-3xl font-bold mb-6'>Nos programmes d'excellence</h2>
          <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
            L'institut propose actuellement les formations suivantes en tant que réponse stratégique
            à la nécessité pressante d'avancement professionnel :
          </p>
        </section>

        {/* Programs Grid */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-12'>Les 12 formations disponibles</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Gestion du Pétrole et du Gaz</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Gestion des ressources énergétiques et opérations pétrolières en contexte africain
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>
                    Technologies de l'Information et Communication
                  </h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Systèmes informatiques, réseaux et solutions numériques pour les entreprises
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Gestion d'Entreprise et Administration</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Stratégie d'entreprise, management et gestion administrative complète
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Aide Pharmaceutique</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Support en pharmacie, gestion des médicaments et services pharmaceutiques
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Gestion de Projets</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Planification, exécution et suivi de projets complexes de grande envergure
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Assistant Infirmier Certifié</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Assistance médicale, soins aux patients et services de santé professionnels
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Santé et Sécurité</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  HSE, prévention des risques et gestion de la sécurité en entreprise
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>
                    Logistique et Gestion de la Chaîne d'Approvisionnement
                  </h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Supply chain, entreposage et optimisation des flux logistiques
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Gestion des Ressources Humaines</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Recrutement, développement du personnel et relations sociales
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Comptabilité et Finance</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Gestion financière, comptabilité générale et analyse d'investissements
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Langues (Anglais, Français, Allemand)</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Cours de langues professionnelles pour communication internationale
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-lg transition-shadow'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-3 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary flex-shrink-0 mt-1' />
                  <h3 className='text-lg font-semibold'>Santé Électronique (eSanté)</h3>
                </div>
                <p className='text-sm text-muted-foreground'>
                  Systèmes numériques de santé et gestion médicale informatisée
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Avantages de nos formations</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <Award className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold'>Certification</h3>
                <p className='text-sm text-muted-foreground'>
                  Diplômes reconnus internationalement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold'>Formation pratique</h3>
                <p className='text-sm text-muted-foreground'>Enseignement basé sur des cas réels</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold'>Insertion professionnelle</h3>
                <p className='text-sm text-muted-foreground'>Appui pour l'emploi garanti</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <Clock className='h-6 w-6 text-primary' />
                </div>
                <h3 className='font-semibold'>Flexibilité</h3>
                <p className='text-sm text-muted-foreground'>
                  Formats adapté à votre emploi du temps
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Certification Section */}
        <section className='mb-16 bg-primary/5 rounded-lg p-12'>
          <h2 className='text-3xl font-bold mb-8'>Certification</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Diplômes décernés</h3>
              <p className='text-muted-foreground mb-4'>
                Chaque formation débouche sur un diplôme ou une certification professionnelle
                reconnus au Ghana et à l'international, valable auprès des employeurs et
                institutions.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Mesures d'efficacité</h3>
              <ul className='space-y-3 text-muted-foreground'>
                <li className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span>Taux de succès des étudiants dans l'obtention de postes qualifiés</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span>Capacité de l'institut à répondre aux besoins de la main-d'œuvre</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span>Évaluations de l'efficacité et de la responsabilité de l'institut</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span>Partenariats établis par l'institut avec les industries</span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle2 className='h-5 w-5 text-primary flex-shrink-0 mt-0.5' />
                  <span>
                    Quantité et qualité de la recherche et du soutien professionnel appliqué
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='bg-primary text-white rounded-lg p-12 text-center'>
          <h2 className='text-3xl font-bold mb-4'>Prêt à transformer votre carrière ?</h2>
          <p className='text-lg text-white/90 mb-8 max-w-2xl mx-auto'>
            Choisissez une formation qui correspond à vos objectifs professionnels et rejoignez nos
            milliers d'étudiants diplômés avec succès.
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
              <Link href='/contact'>Nous contacter</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

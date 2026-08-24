import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  GraduationCap,
  Home,
  Laptop,
  CheckCircle,
  Calendar,
  Users,
  Clock,
  Award,
  Phone,
  Mail,
  MessageCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Programme de Bourses REBECCA 3ème Édition 2026-2027 | SEWA Institute",
  description:
    "Programme de bourses REBECCA - SEWA Institute Ghana 2026-2027. Bénéficiez de 50% de réduction sur les frais de scolarité et d'hébergement. À partir de 790 000 FCFA.",
  keywords: [
    'bourse REBECCA',
    'bourse etude Ghana',
    'bourse anglais Afrique',
    'bourse Sewa Institute',
    'etudier anglais Ghana bourse',
    'scholarship Ghana',
    'bourse formation anglais',
  ],
  openGraph: {
    title: "Programme de Bourses REBECCA 3ème Édition - SEWA Institute Ghana",
    description: "À partir de 790 000 FCFA - 50% de réduction sur scolarité et hébergement",
    images: ['/images/bourse-rebecca-2026.jpeg'],
  },
}

const advantages = [
  {
    icon: GraduationCap,
    title: 'Prise en charge de 50% des frais de scolarité',
    description: 'Réduction de 50% sur les frais de formation',
  },
  {
    icon: Home,
    title: 'Prise en charge de 50% des frais de logement',
    description: "Réduction de 50% sur l'hébergement au campus",
  },
  {
    icon: Laptop,
    title: "Cours d'informatique entièrement gratuits",
    description: 'Formation informatique incluse sans frais supplémentaires',
  },
]

const studyAreas = [
  { name: 'Lettre Anglaise', description: "Maîtrisez l'anglais en immersion totale" },
  { name: "Informatique", description: 'Compétences numériques essentielles' },
  { name: 'Art Oratoire', description: 'Développez votre prise de parole en public' },
]

const requirements = [
  'Age: 18-35 ans',
  'Baccalauréat minimum',
  'Motivation et engagement',
  'Copie du dernier diplôme',
  'Copie du passeport valide',
  'Lettre de motivation',
]

const timeline = [
  { step: '1', title: 'Candidature', description: 'Envoyez votre dossier complet par email' },
  { step: '2', title: 'Selection', description: 'Etude de votre dossier par notre equipe' },
  { step: '3', title: 'Confirmation', description: 'Notification et preparation du voyage' },
  { step: '4', title: 'Rentree Mars 2026', description: 'Début de votre formation au Ghana' },
]

export default function BourseEtudePage() {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-primary via-blue-600 to-primary overflow-hidden'>
        <div className="absolute inset-0 bg-[url('/images/bourse-rebecca-2026.jpeg')] bg-cover bg-center opacity-10" />
        <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='text-white space-y-6'>
              <div className='inline-block px-4 py-2 bg-yellow-500 text-black font-bold rounded-full text-sm'>
                3ème Édition - 2026-2027
              </div>
              <h1 className='text-4xl lg:text-5xl font-bold leading-tight text-balance'>
                Programme de Bourses REBECCA
              </h1>
              <p className='text-lg text-white/90 font-semibold mb-2'>
                SEWA Institute – The PanAfrican Institute
              </p>
              <p className='text-xl text-white/90 leading-relaxed'>
                Réalisez vos études linguistiques au Ghana avec un soutien financier exceptionnel.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button asChild size='lg' variant='secondary' className='text-lg'>
                  <Link href='/inscription'>Postuler maintenant</Link>
                </Button>
                <Button
                  asChild
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
                >
                  <Link href='#avantages'>Voir les avantages</Link>
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
                <Image
                  src='/images/bourse-rebecca-2026.jpeg'
                  alt='Programme de Bourses REBECCA 3ème Édition 2026-2027 - SEWA Institute Ghana'
                  width={500}
                  height={700}
                  className='w-full h-auto'
                  priority
                />
              </div>
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg'>
                <span className='text-2xl font-bold text-black'>50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Highlight */}
      <section className='py-8 bg-yellow-500'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6 text-center'>
            <div>
              <p className='text-lg font-medium text-black/80'>Coût réel d'une année de langue</p>
              <p className='text-2xl font-bold text-black/60 line-through'>2 170 000 FCFA</p>
            </div>
            <div className='text-4xl font-bold text-black'>→</div>
            <div>
              <p className='text-lg font-medium text-black/80'>Avec la Bourse REBECCA</p>
              <p className='text-4xl font-bold text-black'>À partir de 790 000 FCFA</p>
            </div>
            <div className='ml-4 px-4 py-2 bg-black text-yellow-500 rounded-lg font-bold'>
              Logement + Scolarité inclus
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id='avantages' className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Avantages de la Bourse
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Une opportunité exceptionnelle pour transformer votre avenir
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className='text-center hover:shadow-lg transition-shadow border-2 border-primary/10'
              >
                <CardContent className='pt-8 pb-6 space-y-4'>
                  <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                    <advantage.icon className='h-8 w-8 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold'>{advantage.title}</h3>
                  <p className='text-muted-foreground'>{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-6'>
                Domaines d'Etudes
              </h2>
              <p className='text-lg text-muted-foreground mb-8'>
                Domaines éligibles : Lettre Anglaise, Informatique, Art Oratoire
              </p>
              <div className='space-y-4'>
                {studyAreas.map((area, index) => (
                  <div
                    key={index}
                    className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm'
                  >
                    <CheckCircle className='h-6 w-6 text-green-500 flex-shrink-0 mt-0.5' />
                    <div>
                      <h3 className='font-semibold'>{area.name}</h3>
                      <p className='text-sm text-muted-foreground'>{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='space-y-6'>
              <Card className='bg-primary text-white'>
                <CardContent className='p-6 space-y-4'>
                  <h3 className='text-xl font-bold'>Ce que vous obtiendrez</h3>
                  <ul className='space-y-3'>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-yellow-400' />
                      <span>Maitrise de l'anglais en immersion totale</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-yellow-400' />
                      <span>CV booste avec expérience internationale</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-yellow-400' />
                      <span>Réseau professionnel et académique</span>
                    </li>
                    <li className='flex items-center gap-3'>
                      <CheckCircle className='h-5 w-5 text-yellow-400' />
                      <span>Compétences business international</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <div className='flex items-center gap-4 p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg'>
                <Clock className='h-8 w-8 text-yellow-600' />
                <div>
                  <p className='font-bold text-yellow-800'>Duree: 1 an</p>
                  <p className='text-sm text-yellow-700'>Rentree prevue: Mars 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className='py-16 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Conditions d'Eligibilité
            </h2>
            <p className='text-lg text-muted-foreground'>
              Documents et critères requis pour postuler
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {requirements.map((req, index) => (
              <div
                key={index}
                className='flex items-center gap-3 p-4 bg-muted/50 rounded-lg border border-muted'
              >
                <div className='w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm'>
                  {index + 1}
                </div>
                <span className='font-medium'>{req}</span>
              </div>
            ))}
          </div>
          <div className='mt-8 p-4 bg-red-50 border border-red-200 rounded-lg max-w-2xl mx-auto'>
            <p className='text-red-700 text-center font-medium'>
              Important: Les frais de transport ne sont pas inclus dans la bourse
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className='py-16 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Processus de Candidature
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {timeline.map((item, index) => (
              <div key={index} className='relative'>
                <div className='bg-white rounded-lg p-6 shadow-sm border text-center h-full'>
                  <div className='w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold'>
                    {item.step}
                  </div>
                  <h3 className='font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className='hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary text-2xl'>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id='postuler' className='py-16 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <Award className='h-16 w-16 mx-auto mb-4 text-yellow-400' />
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              Postulez Maintenant
            </h2>
            <p className='text-xl text-white/90'>
              Les places sont limitées - ne laissez pas passer cette chance unique
            </p>
          </div>

          <Card className='bg-white text-gray-900'>
            <CardHeader>
              <CardTitle className='text-center text-2xl'>Comment postuler ?</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <p className='text-center text-muted-foreground'>
                Soumettez votre dossier dès maintenant via notre site www.sewainstitutegh.com ou WhatsApp
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center gap-3 p-4 bg-muted/50 rounded-lg'>
                  <MessageCircle className='h-6 w-6 text-green-500' />
                  <div>
                    <p className='text-sm text-muted-foreground'>WhatsApp</p>
                    <a
                      href='https://wa.me/23670027868'
                      className='font-semibold hover:text-primary'
                    >
                      +236 70 02 78 68
                    </a>
                  </div>
                </div>
                <div className='flex items-center gap-3 p-4 bg-muted/50 rounded-lg'>
                  <MessageCircle className='h-6 w-6 text-green-500' />
                  <div>
                    <p className='text-sm text-muted-foreground'>WhatsApp</p>
                    <a
                      href='https://wa.me/233261815407'
                      className='font-semibold hover:text-primary'
                    >
                      +233 261 815 407
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                <Button asChild size='lg' className='text-lg'>
                  <a
                    href='https://wa.me/23670027868?text=Bonjour%2C%20je%20souhaite%20postuler%20pour%20la%20bourse%20REBECCA%202026-2027'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MessageCircle className='mr-2 h-5 w-5' />
                    WhatsApp +236 70 02 78 68
                  </a>
                </Button>
                <Button asChild size='lg' variant='outline' className='text-lg bg-transparent'>
                  <a
                    href='https://wa.me/233261815407?text=Bonjour%2C%20je%20souhaite%20postuler%20pour%20la%20bourse%20REBECCA%202026-2027'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <MessageCircle className='mr-2 h-5 w-5' />
                    WhatsApp +233 261 815 407
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className='text-center mt-8 text-white/80 text-sm italic'>
            Inspirer • Former • Transformer
          </p>
          <p className='text-center mt-2 text-white/70 text-xs'>
            #SEWAInstitute #BourseREBECCA #ÉtudierAuGhana
          </p>
        </div>
      </section>
    </div>
  )
}

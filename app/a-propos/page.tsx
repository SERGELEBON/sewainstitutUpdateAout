import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Heart, Award, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos',
  description: "Découvrez l'histoire et la mission de Sewa Institute",
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-balance'>
              À Propos de Sewa Institute
            </h1>
            <p className='text-xl text-white/90 leading-relaxed'>
              The Pan African Institute - Une vision panafricaine pour l'éducation anglophone
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
            <Card className='border-2'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Target className='h-6 w-6 text-primary' />
                  </div>
                  <h2 className='text-2xl font-bold'>Notre Mission</h2>
                </div>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  Offrir aux francophones d'Afrique et d'ailleurs l'opportunité d'apprendre
                  l'anglais dans un environnement immersif au Ghana, tout en facilitant leur accès
                  aux universités anglophones et en développant leurs compétences pour réussir dans
                  un monde globalisé.
                </p>
              </CardContent>
            </Card>

            <Card className='border-2'>
              <CardContent className='p-8'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                    <Eye className='h-6 w-6 text-primary' />
                  </div>
                  <h2 className='text-2xl font-bold'>Notre Vision</h2>
                </div>
                <p className='text-lg text-muted-foreground leading-relaxed'>
                  Devenir la référence panafricaine pour l'apprentissage de l'anglais et créer des
                  ponts éducatifs et culturels entre les communautés francophones et anglophones
                  d'Afrique, contribuant ainsi à l'unité et au développement du continent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold tracking-tight lg:text-4xl'>Notre Histoire</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Fondé en 2018, Sewa Institute est né d'une vision claire : briser les barrières
                linguistiques qui limitent les opportunités des jeunes francophones africains.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Basé à Asene, Accra, notre campus principal offre un environnement d'apprentissage
                moderne et stimulant, où les étudiants peuvent non seulement perfectionner leur
                anglais, mais aussi découvrir la culture ghanéenne et développer un réseau
                panafricain.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Depuis notre création, nous avons accompagné plus de 500 étudiants dans leur
                parcours linguistique et académique, avec un taux de réussite de 95% aux examens
                internationaux.
              </p>
            </div>
            <div className='relative h-[400px] lg:h-[500px] w-full flex items-center justify-center'>
              <Image
                src='/images/laphoto.png'
                alt='Directeur Général Sewa Institute'
                width={300}
                height={400}
                className='rounded-lg object-contain shadow-xl'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>Nos Valeurs</h2>
            <p className='text-lg text-muted-foreground'>
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Award className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Excellence</h3>
                <p className='text-sm text-muted-foreground'>
                  Nous visons l'excellence dans tout ce que nous faisons, de l'enseignement à
                  l'accompagnement des étudiants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Heart className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Bienveillance</h3>
                <p className='text-sm text-muted-foreground'>
                  Nous créons un environnement chaleureux et inclusif où chaque étudiant se sent
                  valorisé et soutenu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Target className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Impact</h3>
                <p className='text-sm text-muted-foreground'>
                  Nous mesurons notre succès par l'impact positif que nous avons sur la vie de nos
                  étudiants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6 text-center space-y-4'>
                <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center'>
                  <Eye className='h-8 w-8 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Innovation</h3>
                <p className='text-sm text-muted-foreground'>
                  Nous adoptons des méthodes pédagogiques modernes et innovantes pour garantir des
                  résultats optimaux.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section id='accreditations' className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>
              <Shield className='inline h-10 w-10 text-primary mr-3' />
              Accréditations & Certifications
            </h2>
            <p className='text-lg text-muted-foreground'>
              Sewa Institute est officiellement reconnu par les autorités compétentes du Ghana
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 md:gap-8 max-w-4xl mx-auto'>
            <Card className='border-2 border-primary/20 hover:border-primary/40 transition-colors'>
              <CardContent className='p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>Ghana Registrar General</h3>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Enregistrement légal de l'institut
                    </p>
                    <p className='font-mono text-sm bg-muted px-3 py-1 rounded'>
                      CS302582018
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary/20 hover:border-primary/40 transition-colors'>
              <CardContent className='p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>Ghana Education Service (GES)</h3>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Autorisation d'opérer dans le secteur éducatif
                    </p>
                    <p className='font-mono text-sm bg-muted px-3 py-1 rounded'>
                      GES/GAR/PT/LG.08/2018
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary/20 hover:border-primary/40 transition-colors'>
              <CardContent className='p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>National Schools Inspectorate Authority (NaSIA)</h3>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Certification de qualité éducative
                    </p>
                    <p className='font-mono text-sm bg-muted px-3 py-1 rounded'>
                      GA-PRV-SPS-P3876082022
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary/20 hover:border-primary/40 transition-colors'>
              <CardContent className='p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>Institute of Commercial Management UK</h3>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Centre agréé - Londres, Angleterre
                    </p>
                    <p className='font-mono text-sm bg-muted px-3 py-1 rounded'>
                      Center number 11950
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-2 border-primary/20 hover:border-primary/40 transition-colors'>
              <CardContent className='p-6 sm:p-8'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1'>
                    <CheckCircle className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2'>Ghana Revenue Authority (GRA)</h3>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Numéro d'identification fiscale
                    </p>
                    <p className='font-mono text-sm bg-muted px-3 py-1 rounded'>
                      TIN C0018569765
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='text-center mt-12'>
            <p className='text-sm text-muted-foreground italic'>
              Ces certifications garantissent notre conformité aux standards éducatifs du Ghana
              et notre reconnaissance internationale.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-4'>Notre Équipe</h2>
            <p className='text-lg text-muted-foreground'>
              Des professionnels passionnés et dévoués
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='relative h-48 mb-4'>
                  <Image
                    src='/images/526360160-1319970519770585-8816222884616177298-n.jpg'
                    alt="Membre de l'équipe"
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
                <h3 className='font-semibold text-lg'>Direction Académique</h3>
                <p className='text-sm text-muted-foreground mt-2'>
                  Expert en pédagogie des langues
                </p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='relative h-48 mb-4'>
                  <Image
                    src='/images/580037751-1412673667166936-2588911483997229172-n.jpg'
                    alt="Membre de l'équipe"
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
                <h3 className='font-semibold text-lg'>Conseil Pédagogique</h3>
                <p className='text-sm text-muted-foreground mt-2'>Spécialiste IELTS et TOEFL</p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='relative h-48 mb-4'>
                  <Image
                    src='/images/526859100-1319970323103938-823436667703388820-n.jpg'
                    alt="Membre de l'équipe"
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
                <h3 className='font-semibold text-lg'>Relations Étudiantes</h3>
                <p className='text-sm text-muted-foreground mt-2'>Accompagnement personnalisé</p>
              </CardContent>
            </Card>

            <Card className='text-center'>
              <CardContent className='p-6'>
                <div className='relative h-48 mb-4'>
                  <Image
                    src='/images/527473937-1319972669770370-6240416561571836221-n.jpg'
                    alt="Membre de l'équipe"
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
                <h3 className='font-semibold text-lg'>Administration</h3>
                <p className='text-sm text-muted-foreground mt-2'>Gestion des inscriptions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold tracking-tight lg:text-4xl mb-6 text-balance'>
            Rejoignez l'aventure Sewa Institute
          </h2>
          <p className='text-xl text-white/90 mb-8 leading-relaxed'>
            Faites partie d'une communauté dynamique et internationale
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
    </div>
  )
}

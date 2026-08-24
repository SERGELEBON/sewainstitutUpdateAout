import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap, FileText, HandshakeIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admission Universitaire',
  description: 'Accompagnement complet pour votre admission dans une université anglophone',
}

export default function UniversitePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary to-primary/90 text-white py-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-6 text-balance'>
              Programme d'Admission Universitaire
            </h1>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              De la préparation linguistique à l'inscription dans une université ghanéenne ou
              internationale, nous vous accompagnons à chaque étape de votre parcours académique.
            </p>
            <Button asChild size='lg' variant='secondary' className='text-lg'>
              <Link href='/inscription'>Commencer mon dossier</Link>
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
                alt='Étudiants universitaires'
                fill
                className='rounded-lg object-cover shadow-xl'
              />
            </div>
            <div className='space-y-6'>
              <h2 className='text-3xl font-bold'>Votre passerelle vers l'université</h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Sewa Institute ne se contente pas de vous apprendre l'anglais. Nous vous préparons à
                réussir dans le système universitaire anglophone et vous aidons à décrocher une
                place dans l'université de vos rêves.
              </p>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Grâce à nos partenariats avec des universités ghanéennes et notre expertise en
                admissions internationales, nous maximisons vos chances d'acceptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Services d'accompagnement</h2>
            <p className='text-lg text-muted-foreground'>Un soutien complet de A à Z</p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <FileText className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Orientation académique</h3>
                <p className='text-sm text-muted-foreground'>
                  Conseils personnalisés pour choisir le programme et l'université qui correspondent
                  à vos objectifs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <GraduationCap className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Préparation académique</h3>
                <p className='text-sm text-muted-foreground'>
                  Cours d'anglais académique et méthodologie universitaire pour réussir vos études.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <FileText className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Constitution du dossier</h3>
                <p className='text-sm text-muted-foreground'>
                  Aide à la rédaction de votre lettre de motivation, CV et préparation des documents
                  requis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                  <HandshakeIcon className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold'>Suivi et inscription</h3>
                <p className='text-sm text-muted-foreground'>
                  Accompagnement jusqu'à votre inscription définitive et intégration dans
                  l'université.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Nos universités partenaires au Ghana</h2>
            <p className='text-lg text-muted-foreground'>
              Accédez à des établissements reconnus internationalement
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>University of Ghana</h3>
                <p className='text-sm text-muted-foreground'>
                  La plus ancienne et prestigieuse université du Ghana
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>
                  Kwame Nkrumah University of Science and Technology
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Excellence en sciences et technologies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>University of Cape Coast</h3>
                <p className='text-sm text-muted-foreground'>Leader en sciences de l'éducation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>Ashesi University</h3>
                <p className='text-sm text-muted-foreground'>Innovation et entrepreneuriat</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>Ghana Communication Technology University</h3>
                <p className='text-sm text-muted-foreground'>Spécialisée en TIC et business</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-6'>
                <h3 className='font-semibold mb-2'>Central University</h3>
                <p className='text-sm text-muted-foreground'>Formation en business et théologie</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-24 bg-muted/30'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Processus d'admission</h2>
          </div>
          <div className='max-w-3xl mx-auto space-y-6'>
            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-2xl text-primary min-w-[40px]'>1</div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>
                      Évaluation et orientation (1 semaine)
                    </h3>
                    <p className='text-muted-foreground'>
                      Bilan de votre niveau d'anglais, analyse de votre parcours académique et
                      définition de vos objectifs universitaires.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-2xl text-primary min-w-[40px]'>2</div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>
                      Préparation linguistique (3-6 mois)
                    </h3>
                    <p className='text-muted-foreground'>
                      Cours d'anglais intensifs et préparation aux examens requis (IELTS, TOEFL)
                      jusqu'à l'obtention du score nécessaire.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-2xl text-primary min-w-[40px]'>3</div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Constitution du dossier (1 mois)</h3>
                    <p className='text-muted-foreground'>
                      Préparation de tous les documents : lettres de motivation, CV, traductions
                      certifiées, recommandations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-2xl text-primary min-w-[40px]'>4</div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Candidature (2-3 mois)</h3>
                    <p className='text-muted-foreground'>
                      Dépôt des candidatures dans plusieurs universités, suivi des dossiers et
                      préparation aux entretiens éventuels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className='border-l-4 border-l-primary'>
              <CardContent className='p-6'>
                <div className='flex items-start gap-4'>
                  <div className='font-bold text-2xl text-primary min-w-[40px]'>5</div>
                  <div>
                    <h3 className='font-semibold text-lg mb-2'>Inscription et intégration</h3>
                    <p className='text-muted-foreground'>
                      Finalisation de l'inscription, aide aux démarches administratives et
                      accompagnement pour votre installation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className='py-24 bg-white'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-4'>Nos success stories</h2>
            <p className='text-lg text-muted-foreground'>
              Ils ont réussi leur admission avec Sewa Institute
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto'>
            <Card>
              <CardContent className='p-8'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='relative w-16 h-16'>
                    <Image
                      src='/images/580037751-1412673667166936-2588911483997229172-n.jpg'
                      alt='Success story'
                      fill
                      className='rounded-full object-cover'
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>Jean-Pierre D.</p>
                    <p className='text-sm text-muted-foreground'>Cameroun → UG Business School</p>
                  </div>
                </div>
                <p className='text-muted-foreground italic'>
                  "Grâce à Sewa Institute, j'ai obtenu mon IELTS 7.0 et une admission à l'University
                  of Ghana. Le soutien était exceptionnel du début à la fin."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='relative w-16 h-16'>
                    <Image
                      src='/images/526859100-1319970323103938-823436667703388820-n.jpg'
                      alt='Success story'
                      fill
                      className='rounded-full object-cover'
                    />
                  </div>
                  <div>
                    <p className='font-semibold'>Aminata S.</p>
                    <p className='text-sm text-muted-foreground'>
                      Côte d'Ivoire → KNUST Engineering
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground italic'>
                  "L'accompagnement personnalisé m'a permis de préparer un dossier solide. Je suis
                  maintenant étudiante en génie civil à KNUST !"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-primary text-white'>
        <div className='mx-auto max-w-4xl px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Réalisez votre rêve universitaire</h2>
          <p className='text-xl text-white/90 mb-8'>
            Ne laissez pas la langue être un obstacle. Commencez votre parcours vers une université
            anglophone aujourd'hui.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button asChild size='lg' variant='secondary'>
              <Link href='/inscription'>Démarrer mon projet</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
            >
              <Link href='/contact'>Obtenir plus d'informations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

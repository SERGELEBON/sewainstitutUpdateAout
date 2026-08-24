import type { Metadata } from 'next'
import Image from 'next/image'
import { MessageCircle, MapPin, CalendarDays, Home, MonitorPlay, Gift, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Questions fréquentes',
  description:
    'Réponses aux questions fréquentes sur SEWA Institute Ghana, les admissions, les cours, le logement et les inscriptions.',
}

const whatsappHref = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
  "Bonjour, je souhaite recevoir la procédure d'inscription à SEWA Institute Ghana."
)}`

const quickFacts = [
  {
    title: 'Admissions mensuelles',
    description: 'Les admissions ont lieu chaque début de mois en 2026.',
    icon: CalendarDays,
  },
  {
    title: 'Tous niveaux',
    description: 'Les programmes accueillent les débutants comme les apprenants avancés.',
    icon: MonitorPlay,
  },
  {
    title: 'Logement disponible',
    description: "Des logements sécurisés sont proposés à 5 minutes de l'école, selon les places.",
    icon: Home,
  },
]

const faqs = [
  {
    question: 'Pourquoi vous bloquez encore avec l\'anglais malgré vos efforts ?',
    answer: 'Vous avez étudié l\'anglais mais quand il faut parler, vous manquez de confiance ? Vous avez peur de faire des erreurs ? Vous manquez de pratique ? Pas d\'environnement anglophone ? La vérité : on progresse en pratiquant, en parlant et en vivant la langue. C\'est exactement ce que propose SEWA Institute Ghana avec une immersion complète à Accra.',
    image: '/images/faq1.jpeg',
  },
  {
    question: 'Que propose SEWA Institute pour votre immersion anglophone ?',
    answer: 'À SEWA, vous ne venez pas seulement suivre des cours... vous venez vivre l\'anglais. Apprenez, pratiquez et progressez dans un environnement anglophone pensé pour vos études, votre carrière, vos voyages et votre business. Cours d\'anglais en classe, English Club & pratique orale, présentations orales régulières, découverte de la culture ghanéenne, environnement 100% immersion, confiance pour études, carrière & business.',
    image: '/images/faq2.jpeg',
  },
  {
    question: 'Pour qui est fait le programme SEWA Institute ?',
    answer: 'Le programme est adapté à chaque profil : Étudiants pour améliorer votre anglais pour les études et l\'avenir professionnel. Parents pour offrir à votre enfant une expérience utile, encadrée et sécurisée au Ghana. Professionnels pour parler anglais et évoluer dans votre carrière. Entrepreneurs pour développer votre business en Afrique anglophone. Voyageurs pour communiquer facilement dans les pays anglophones. Candidats à l\'expatriation pour mieux s\'adapter à un environnement anglophone. Apprenants à distance commencez avec des cours en ligne en direct, même loin du Ghana.',
    image: '/images/faq3.jpeg',
  },
  {
    question: 'Ce que vous recevez avec l\'expérience SEWA',
    answer: '1. Cours d\'anglais structurés - 2. English Club en présentiel obligatoire - 3. Online English Club - 4. Présentations orales mensuelles - 5. Activités culturelles - 6. Excursions et activités d\'immersion - 7. Livres inclus - 8. Logement sécurisé disponible. Vous n\'arrivez pas au Ghana dans l\'inconnu. Vous pouvez être logé dans un cadre pratique et sécurisé.',
    image: '/images/faq4.jpeg',
  },
  {
    question: 'Quels sont les bonus inclus pendant l\'offre 2026 ?',
    answer: 'Chez SEWA, nous voulons que vous repartiez avec plus que l\'anglais. C\'est pourquoi nous ajoutons des bonus pratiques pour votre confiance, votre avenir et vos opportunités. 1. Speak Up Masterclass : Parlez avec assurance, présentez-vous clairement et structurez vos idées en public. 2. Anglophone Mindset Workshop : Comprenez les codes, la discipline, la communication et la mentalité des environnements anglophones. 3. Business Starter Bootcamp : Découvrez les bases du marketing pour vendre un service et trouver vos premiers clients. 4. 100K Side Income Plan : Atelier pratique pour construire progressivement une source de revenu visant 100 000 FCFA/mois en parallèle. 5. Welcome to Accra Kit : Recevez les informations essentielles pour préparer votre arrivée à Accra avec sérénité. 6. SEWA Ambassador Program : Apprenez le marketing de recommandation et gagnez des commissions en recommandant SEWA.',
    image: '/images/faq5.jpeg',
  },
  {
    question: 'Quel parcours choisir pour commencer votre formation ?',
    answer: 'PARCOURS 1 : DÉCLIC ANGLAIS – 1 MOIS. Pour commencer, débloquer vos bases et vivre une première immersion anglophone. Idéal pour : Débutants, Voyageurs, Personnes qui veulent tester l\'immersion, Étudiants avec un budget limité. Promesse : En 1 mois, vous commencez à pratiquer, vous débloquez vos bases et vous découvrez l\'environnement anglophone du Ghana. Prix de lancement : Cours normal 95 000 FCFA - Cours intensif 130 000 FCFA. Immersion complète à Accra, English Club inclus, Encadrement professionnel, Environnement sécurisé.',
    image: '/images/faq6.jpeg',
  },
  {
    question: 'Parcours 2 : Transformation Anglais – 3 mois (Recommandé)',
    answer: 'Progressez, pratiquez, transformez votre anglais. Vivez l\'immersion à Accra. Idéal pour : Étudiants, Jeunes diplômés, Professionnels, Entrepreneurs, Candidats à l\'expatriation. Promesse : En 3 mois, vous gagnez en aisance, vous pratiquez régulièrement, vous prenez la parole avec plus d\'assurance et vous vivez une vraie immersion anglophone à Accra. Prix de lancement : Cours normal 170 000 FCFA - Cours intensif 230 000 FCFA. Pourquoi le choisir ? Le meilleur choix si vous voulez une vraie transformation sans attendre une année complète.',
    image: '/images/faq7.jpeg',
  },
  {
    question: 'Pack Ambition Bilingue – 6 mois (Offre Spéciale)',
    answer: 'Pour construire un niveau solide et préparer de vraies opportunités. Idéal pour : Étudiants sérieux, Candidats à l\'expatriation, Professionnels, Entrepreneurs, Parents qui veulent un parcours complet pour leurs enfants. Promesse : En 6 mois, vous construisez un anglais plus solide, développez votre confiance à l\'oral et préparez de meilleures opportunités académiques, professionnelles et entrepreneuriales. Prix de lancement : Cours normal 265 000 FCFA - Cours intensif 380 000 FCFA. Un parcours complet : Apprentissage structuré • Pratique active • Encadrement premium • Immersion réelle.',
    image: '/images/faq8.jpeg',
  },
  {
    question: 'Parcours 4 : SEWA Online Live Class – Cours en ligne en direct',
    answer: 'Vous êtes loin du Ghana ? Commencez depuis chez vous. Cours en direct via Zoom ou Google Meet, Professeur réel, Tableau blanc, Interaction humaine, 1h30 par séance. 3 séances par semaine, Cours individuels, Inscription incluse, 4 livres PDF inclus. Notre promesse : Commencez votre anglais depuis chez vous avec l\'expérience SEWA en direct, puis rejoignez l\'immersion à Accra quand vous êtes prêt. À partir de 80 000 FCFA / mois.',
    image: '/images/faq9.jpeg',
  },
  {
    question: 'Pourquoi s\'inscrire maintenant à SEWA Institute ?',
    answer: 'Réservez votre place avant la prochaine cohorte et préparez votre arrivée à Accra en toute sérénité. Les admissions ont lieu en début de mois. Les places sont organisées par cohorte, et les logements sécurisés proches de l\'école sont limités. Pour garantir votre place et votre logement, il est recommandé de finaliser votre inscription au moins 2 semaines avant votre arrivée. Tarifs de lancement 2026 : les prix actuels peuvent être révisés après les prochaines rentrées. En vous inscrivant maintenant, vous pouvez : 1. Sécuriser votre place dans la prochaine cohorte - 2. Réserver votre logement proche de l\'école - 3. Profiter des tarifs de lancement 2026 - 4. Accéder aux bonus de lancement - 5. Préparer votre arrivée à Accra plus sereinement.',
    image: '/images/faq10.jpeg',
  },
  {
    question: 'Pourquoi s\'inscrire maintenant à SEWA Institute ? (Suite)',
    answer: 'Réservez votre place avant la prochaine cohorte et préparez votre arrivée à Accra en toute sérénité. Les admissions ont lieu en début de mois. Les places sont organisées par cohorte, et les logements sécurisés proches de l\'école sont limités. Pour garantir votre place et votre logement, il est recommandé de finaliser votre inscription au moins 2 semaines avant votre arrivée. Tarifs de lancement 2026 : les prix actuels peuvent être révisés après les prochaines rentrées.',
    image: '/images/faq11.jpeg',
  },
  {
    question: 'Prêt à transformer votre anglais et votre confiance à Accra ?',
    answer: 'SEWA Institute Ghana vous ouvre ses portes pour une expérience complète d\'apprentissage, de pratique, d\'immersion et de transformation. L\'équipe SEWA vous accompagne ensuite pour la suite de la procédure. Choisissez votre parcours : 1 MOIS - Pour commencer, débloquer vos bases et vivre une première immersion. 3 MOIS - Pour une vraie progression et plus d\'aisance à l\'oral. 6 MOIS - Pour construire un niveau solide et préparer de vraies opportunités. 12 MOIS - Pour maîtriser durablement l\'anglais et multiplier vos opportunités. ONLINE - Commencez depuis chez vous, avec nos cours en direct. Votre anglais peut devenir une porte vers plus d\'opportunités. Votre avenir commence aujourd\'hui. SEWA vous y prépare.',
    image: '/images/faq12.jpeg',
  },
] as Array<{ question: string; answer: string; image?: string }>

const infoBlocks = [
  {
    title: 'Rythme des cours',
    description:
      'Cours normal pour avancer avec régularité, cours intensif pour progresser plus vite avec plus de pratique quotidienne.',
    icon: Clock,
  },
  {
    title: 'Bonus 2026',
    description:
      "Les bonus sont proposés selon les programmes, les offres de lancement et le calendrier officiel de l'institut.",
    icon: Gift,
  },
  {
    title: 'Campus à Accra',
    description:
      "Une immersion anglophone au Ghana avec cours, pratique orale, activités culturelles et accompagnement.",
    icon: MapPin,
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <div className='bg-white'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className='relative overflow-hidden bg-primary text-white'>
        <div className='absolute inset-0'>
          <Image
            src='/images/faq-immersion.png'
            alt=''
            fill
            priority
            className='object-cover opacity-25'
            aria-hidden='true'
          />
          <div className='absolute inset-0 bg-primary/80' />
        </div>

        <div className='relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:py-24'>
          <div className='max-w-3xl space-y-6'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-secondary'>
              Section 13 - FAQ
            </p>
            <h1 className='text-4xl font-bold tracking-tight text-balance lg:text-6xl'>
              Questions fréquentes
            </h1>
            <p className='text-lg leading-8 text-white/90 lg:text-xl'>
              Retrouvez les réponses essentielles sur les cours, les admissions 2026, le logement,
              les programmes en ligne, les bonus et la procédure d'inscription.
            </p>
            <div className='flex flex-col gap-3 sm:flex-row'>
              <Button asChild size='lg' variant='secondary' className='text-base'>
                <a href={whatsappHref} target='_blank' rel='noopener noreferrer'>
                  <MessageCircle className='mr-2 h-5 w-5' />
                  Recevoir la procédure
                </a>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white bg-transparent text-base text-white hover:bg-white hover:text-primary'
              >
                <a href={`tel:${SITE_CONFIG.whatsapp.replace(/\s/g, '')}`}>
                  Appeler {SITE_CONFIG.whatsapp}
                </a>
              </Button>
            </div>
          </div>

          <div className='relative min-h-[320px] overflow-hidden rounded-lg shadow-2xl lg:min-h-[460px]'>
            <Image
              src='/images/faq-offre-2026.png'
              alt="Étudiant SEWA Institute Ghana en cours d'anglais"
              fill
              className='object-cover'
              sizes='(min-width: 1024px) 40vw, 100vw'
            />
          </div>
        </div>
      </section>

      <section className='bg-muted/30 py-12'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 md:grid-cols-3 lg:px-8'>
          {quickFacts.map(fact => {
            const Icon = fact.icon

            return (
              <Card key={fact.title} className='border-0 shadow-sm'>
                <CardContent className='flex gap-4 p-6'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <div>
                    <h2 className='font-semibold'>{fact.title}</h2>
                    <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                      {fact.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className='py-16 lg:py-24'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.95fr_1.2fr] lg:px-8'>
          <div className='space-y-6'>
            <div>
              <p className='font-semibold text-primary'>Informations pratiques</p>
              <h2 className='mt-3 text-3xl font-bold tracking-tight lg:text-4xl'>
                Tout comprendre avant de vous inscrire
              </h2>
              <p className='mt-4 text-lg leading-8 text-muted-foreground'>
                Les réponses ci-dessous reprennent les questions les plus importantes pour préparer
                votre arrivée, choisir votre rythme de cours ou démarrer à distance.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-4'>
              {infoBlocks.map(block => {
                const Icon = block.icon

                return (
                  <div key={block.title} className='flex gap-4 rounded-lg border bg-white p-5'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/25 text-primary'>
                      <Icon className='h-5 w-5' />
                    </div>
                    <div>
                      <h3 className='font-semibold'>{block.title}</h3>
                      <p className='mt-1 text-sm leading-6 text-muted-foreground'>
                        {block.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className='relative min-h-[260px] overflow-hidden rounded-lg'>
              <Image
                src='/images/faq-logement.png'
                alt='Chambre de logement étudiant disponible pour SEWA Institute Ghana'
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 42vw, 100vw'
              />
            </div>
          </div>

          <Card className='border shadow-sm'>
            <CardContent className='p-4 sm:p-6 lg:p-8'>
              <Accordion type='single' collapsible defaultValue='item-0' className='w-full'>
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className='text-base font-semibold hover:no-underline'>
                      <span>
                        <span className='mr-3 text-primary'>{index + 1}.</span>
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className='pl-8 text-base leading-7 text-muted-foreground space-y-4'>
                      <p>{faq.answer}</p>
                      {faq.image && (
                        <div className='relative w-full h-64 sm:h-80 rounded-lg overflow-hidden mt-4'>
                          <Image
                            src={faq.image}
                            alt={faq.question}
                            fill
                            className='object-contain'
                            sizes='(max-width: 768px) 100vw, 50vw'
                          />
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='bg-muted/30 py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            <div className='relative min-h-[280px] overflow-hidden rounded-lg lg:col-span-2'>
              <Image
                src='/images/faq-bonus.png'
                alt="Bonus inclus pendant l'offre 2026 de SEWA Institute Ghana"
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 66vw, 100vw'
              />
            </div>
            <div className='relative min-h-[280px] overflow-hidden rounded-lg'>
              <Image
                src='/images/faq-parcours.png'
                alt='Parcours de formation anglais SEWA Institute Ghana'
                fill
                className='object-cover'
                sizes='(min-width: 1024px) 33vw, 100vw'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-primary py-16 text-white'>
        <div className='mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight lg:text-4xl'>
            Besoin de la procédure d'inscription ?
          </h2>
          <p className='max-w-2xl text-lg leading-8 text-white/90'>
            Contactez SEWA Institute Ghana sur WhatsApp pour recevoir les étapes, les documents à
            préparer et les disponibilités pour le logement.
          </p>
          <Button asChild size='lg' variant='secondary' className='text-base'>
            <a href={whatsappHref} target='_blank' rel='noopener noreferrer'>
              <MessageCircle className='mr-2 h-5 w-5' />
              WhatsApp {SITE_CONFIG.whatsapp}
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

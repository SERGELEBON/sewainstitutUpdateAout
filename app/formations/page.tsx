import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PROGRAMS } from '@/lib/constants'
import { Download, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formations',
  description: 'Découvrez nos programmes de formation en anglais',
}

const books = [
  {
    id: 1,
    title: 'Secret of Everyday English - Vocabulary',
    author: 'Zacharie Mbaiadoum',
    description: 'Manuel de vocabulaire anglais - French Edition',
    image: '/images/livresewa1.jpeg',
  },
  {
    id: 2,
    title: 'Secret of Everyday English - Practical Conversation',
    author: 'Zacharie Mbaiadoum',
    description: 'Guide de conversation pratique en anglais',
    image: '/images/livresewa2.jpeg',
  },
  {
    id: 3,
    title: 'Secret of Everyday English - Grammar',
    author: 'Zacharie Mbaiadoum',
    description: 'Grammaire anglaise : Phonetics, Parts of Speech, Tenses',
    image: '/images/livresewa3.jpeg',
  },
]

export default function FormationsPage() {
  return (
    <div className='py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>Nos Formations</h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Choisissez le programme adapté à vos objectifs
          </p>
        </div>

        {/* Programs Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16'>
          {PROGRAMS.map(program => (
            <Card key={program.id} className='hover:shadow-lg transition-shadow overflow-hidden'>
              <div className='relative h-48'>
                <Image
                  src={program.image || '/placeholder.svg'}
                  alt={program.title}
                  fill
                  className='object-cover'
                />
              </div>
              <CardHeader className='pb-2'>
                <CardTitle className='text-lg'>{program.title}</CardTitle>
                <CardDescription className='text-sm'>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className='w-full'>
                  <Link href={`/formations/${program.id}`}>Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Books / Pedagogy Section */}
        <section className='mb-16'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center gap-3 mb-4'>
              <BookOpen className='h-8 w-8 text-primary' />
              <h2 className='text-3xl font-bold'>Nos Livres et Pédagogie</h2>
            </div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Découvrez nos manuels exclusifs conçus par nos experts pour un apprentissage efficace
              de l'anglais
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-3 mb-8'>
            {books.map(book => (
              <Card key={book.id} className='hover:shadow-lg transition-shadow overflow-hidden'>
                <div className='relative h-72'>
                  <Image
                    src={book.image || '/placeholder.svg'}
                    alt={book.title}
                    fill
                    className='object-contain bg-gray-50 p-2'
                  />
                </div>
                <CardContent className='p-6'>
                  <h3 className='font-bold text-lg mb-1'>{book.title}</h3>
                  <p className='text-sm text-primary mb-2'>Par {book.author}</p>
                  <p className='text-sm text-muted-foreground'>{book.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Book showcase */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            <div className='relative h-64 group'>
              <Image
                src='/images/book1.jpeg'
                alt='Livre Practical Conversation'
                fill
                className='object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow'
              />
            </div>
            <div className='relative h-64 group'>
              <Image
                src='/images/book2.jpeg'
                alt='Livre Vocabulary'
                fill
                className='object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow'
              />
            </div>
            <div className='relative h-64 group'>
              <Image
                src='/livre3.jpeg'
                alt='Manuel Grammar - Secret of Everyday English'
                fill
                className='object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow'
              />
            </div>
            <div className='relative h-64 group'>
              <Image
                src='/images/livea.jpeg'
                alt='Collection de livres Sewa Institute'
                fill
                className='object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow'
              />
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className='mb-16'>
          <Card className='border-2 border-primary bg-primary/5'>
            <CardContent className='p-8'>
              <div className='text-center mb-8'>
                <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 mx-auto mb-4'>
                  <Download className='h-8 w-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold mb-2'>Téléchargez les documents importants</h3>
                <p className='text-muted-foreground mb-6'>
                  Consultez nos fiches de renseignement : programmes, tarifs, calendrier académique
                  et formulaires d'inscription.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <Button asChild size='lg' className='h-auto py-6 flex-col gap-2' variant='default'>
                  <a href='/docs/tele2.pdf' download='SEWA-Programmes-Tarifs.pdf'>
                    <Download className='h-6 w-6' />
                    <div className='text-left'>
                      <div className='font-semibold'>Programmes & Tarifs 2026</div>
                      <div className='text-xs opacity-90'>Détails complets des formations</div>
                    </div>
                  </a>
                </Button>

                <Button asChild size='lg' className='h-auto py-6 flex-col gap-2' variant='default'>
                  <a href='/docs/tele1-calendrier.pdf' download='SEWA-Calendrier-Academique.pdf'>
                    <Download className='h-6 w-6' />
                    <div className='text-left'>
                      <div className='font-semibold'>Calendrier Académique</div>
                      <div className='text-xs opacity-90'>Dates des formations 2026-2027</div>
                    </div>
                  </a>
                </Button>

                <Button asChild size='lg' className='h-auto py-6 flex-col gap-2' variant='default'>
                  <a href='/docs/tele3.pdf' download='SEWA-Informations-Complementaires.pdf'>
                    <Download className='h-6 w-6' />
                    <div className='text-left'>
                      <div className='font-semibold'>Informations Complémentaires</div>
                      <div className='text-xs opacity-90'>Conditions et modalités</div>
                    </div>
                  </a>
                </Button>
              </div>

              <div className='mt-8 pt-6 border-t text-center'>
                <Button asChild size='lg'>
                  <Link href='/inscription'>S'inscrire maintenant</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Help Section */}
        <div className='bg-muted/30 rounded-lg p-8 md:p-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-2xl font-bold mb-4'>Pas sûr de votre choix ?</h2>
            <p className='text-muted-foreground mb-6'>
              Contactez-nous pour un conseil personnalisé et trouvez la formation qui vous convient
            </p>
            <Button asChild size='lg'>
              <Link href='/contact'>Contactez nos conseillers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

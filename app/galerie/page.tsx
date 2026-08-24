'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryCategories = [
  {
    name: 'Campus',
    description: 'Notre campus et infrastructures',
    images: [
      {
        src: '/images/s1.jpeg',
        alt: 'Batiment principal Sewa Institute Ghana avec drapeaux',
      },
    ],
  },
  {
    name: 'Etudiants',
    description: 'La vie etudiante a Sewa Institute',
    images: [
      {
        src: '/images/s7.jpeg',
        alt: "Groupe d'etudiants Sewa Institute",
      },
      {
        src: '/images/s8.jpeg',
        alt: 'Etudiants en uniforme Sewa Institute',
      },
      {
        src: '/images/tof4.jpeg',
        alt: 'Etudiants detente - vie au campus',
      },
    ],
  },
  {
    name: 'Presentations et Cours',
    description: 'Activites pedagogiques et culturelles',
    images: [
      {
        src: '/images/pres7.jpeg',
        alt: 'Etudiante faisant une presentation avec le drapeau du Ghana',
      },
      {
        src: '/images/prese9.jpeg',
        alt: 'Presentation culinaire - cours de cuisine en anglais',
      },
      {
        src: '/images/pres4.jpeg',
        alt: 'Presentation gastronomique traditionnelle',
      },
      {
        src: '/images/pres3.jpeg',
        alt: 'Etudiant en tenue traditionnelle presentant sa culture',
      },
      {
        src: '/images/dget-eps.jpeg',
        alt: 'Etudiants en tenues traditionnelles africaines',
      },
      {
        src: '/images/formation.jpeg',
        alt: 'Etudiants en classe avec ordinateurs portables et casques',
      },
      {
        src: '/images/4.jpeg',
        alt: "Etudiant prenant la parole lors d'une presentation",
      },
      {
        src: '/images/3.jpeg',
        alt: 'Intervenant faisant une conference aux etudiants',
      },
      {
        src: '/images/5.jpeg',
        alt: 'Etudiante presentant son projet avec microphone',
      },
      {
        src: '/images/2.jpeg',
        alt: "Presentation en tenue traditionnelle a l'institut",
      },
      {
        src: '/images/1.jpeg',
        alt: "Jeune presentatrice parlant lors d'un evenement",
      },
    ],
  },
  {
    name: 'Sorties et Excursions',
    description: 'Decouverte du Ghana et activites',
    images: [
      {
        src: '/images/sortie11.jpeg',
        alt: 'Sortie culturelle - groupe devant murales artistiques',
      },
      {
        src: '/images/sortie10.jpeg',
        alt: 'Visite Independence Square Accra',
      },
      {
        src: '/images/sortie14.jpeg',
        alt: 'Etudiantes en sortie touristique',
      },
      {
        src: '/images/sortie3.jpeg',
        alt: 'Moment detente entre etudiants',
      },
      {
        src: '/images/sortie8.jpeg',
        alt: 'Activite piscine - loisirs',
      },
      {
        src: '/images/sortie.jpeg',
        alt: "Etudiant lors d'une sortie a un evenement",
      },
    ],
  },
  {
    name: 'Ceremonies',
    description: 'Graduations et remises de diplomes',
    images: [
      {
        src: '/images/diplo1.jpeg',
        alt: 'Photo de groupe des diplomes en toges',
      },
      {
        src: '/images/s6.jpeg',
        alt: 'Photo de groupe graduation 2024',
      },
      {
        src: '/images/s5.jpeg',
        alt: 'Remise de diplome et trophee',
      },
      {
        src: '/images/prix1.jpeg',
        alt: 'Remise de cadeau a un diplome',
      },
      {
        src: '/images/prix2.jpeg',
        alt: 'Felicitations a une diplomee',
      },
      {
        src: '/images/prix3.jpeg',
        alt: "Remise de trophee d'excellence",
      },
    ],
  },
  {
    name: 'Vie au Campus',
    description: 'Moments de convivialite et celebrations',
    images: [
      {
        src: '/images/div.jpeg',
        alt: 'Celebration avec gateau en classe',
      },
    ],
  },
  {
    name: 'Equipe et Partenaires',
    description: 'Notre equipe et nos partenariats',
    images: [
      {
        src: '/images/prof1.jpeg',
        alt: 'Professeur 1 - Equipe Sewa Institute',
      },
      {
        src: '/images/prof2.jpeg',
        alt: 'Professeur 2 - Equipe Sewa Institute',
      },
      {
        src: '/images/prof3.jpeg',
        alt: 'Professeur 3 - Equipe Sewa Institute',
      },
      {
        src: '/images/6.jpeg',
        alt: "Membre femme de l'equipe professionnelle",
      },
      {
        src: '/images/s9.jpeg',
        alt: 'Membre du personnel Sewa Institute',
      },
      {
        src: '/images/s0.jpeg',
        alt: 'Professeur Sewa Institute',
      },
      {
        src: '/images/s3.jpeg',
        alt: 'Rencontre partenariat institutionnel',
      },
      {
        src: '/images/part.jpeg',
        alt: 'Partenariat Save the Children',
      },
    ],
  },
  {
    name: 'Ressources',
    description: 'Supports pedagogiques',
    images: [
      {
        src: '/images/sew2.jpeg',
        alt: 'Livre de grammaire Secret of Everyday English',
      },
    ],
  },
]

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentCategory = galleryCategories.find(cat => cat.name === selectedCategory)

  const openLightbox = (categoryName: string, imageIndex: number) => {
    setSelectedCategory(categoryName)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    if (currentCategory) {
      setCurrentImageIndex(prev => (prev + 1) % currentCategory.images.length)
    }
  }

  const prevImage = () => {
    if (currentCategory) {
      setCurrentImageIndex(
        prev => (prev - 1 + currentCategory.images.length) % currentCategory.images.length
      )
    }
  }

  return (
    <div className='py-16'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>Galerie</h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Decouvrez la vie au campus et les activites a Sewa Institute
          </p>
        </div>

        {/* Category Grid */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {galleryCategories.map(category => (
            <Card
              key={category.name}
              className='overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02] group'
              onClick={() => openLightbox(category.name, 0)}
            >
              <CardContent className='p-0'>
                <div className='relative aspect-[4/3]'>
                  <Image
                    src={category.images[0].src || '/placeholder.svg'}
                    alt={category.images[0].alt}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                    loading='lazy'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
                  <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                    <h3 className='text-lg font-bold'>{category.name}</h3>
                    <p className='text-xs text-white/80'>{category.description}</p>
                    <p className='text-xs mt-1 text-white/60'>
                      {category.images.length} photo{category.images.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentCategory && (
        <div className='fixed inset-0 z-50 bg-black/95 flex items-center justify-center'>
          {/* Close button */}
          <Button
            variant='ghost'
            size='icon'
            className='absolute top-4 right-4 text-white hover:bg-white/20 z-50'
            onClick={closeLightbox}
          >
            <X className='h-8 w-8' />
          </Button>

          {/* Category title */}
          <div className='absolute top-4 left-4 text-white z-50'>
            <h2 className='text-xl font-bold'>{currentCategory.name}</h2>
            <p className='text-sm text-white/70'>
              {currentImageIndex + 1} / {currentCategory.images.length}
            </p>
          </div>

          {/* Navigation arrows */}
          {currentCategory.images.length > 1 && (
            <>
              <Button
                variant='ghost'
                size='icon'
                className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12'
                onClick={prevImage}
              >
                <ChevronLeft className='h-8 w-8' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12'
                onClick={nextImage}
              >
                <ChevronRight className='h-8 w-8' />
              </Button>
            </>
          )}

          {/* Main image */}
          <div className='relative w-full h-full max-w-5xl max-h-[80vh] mx-auto px-16'>
            <Image
              src={currentCategory.images[currentImageIndex].src || '/placeholder.svg'}
              alt={currentCategory.images[currentImageIndex].alt}
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* Image description */}
          <div className='absolute bottom-4 left-0 right-0 text-center text-white'>
            <p className='text-sm'>{currentCategory.images[currentImageIndex].alt}</p>
          </div>

          {/* Thumbnail navigation */}
          {currentCategory.images.length > 1 && (
            <div className='absolute bottom-16 left-0 right-0 flex justify-center gap-2 px-4 overflow-x-auto'>
              {currentCategory.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-16 h-12 relative rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                    idx === currentImageIndex
                      ? 'border-white scale-110'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img.src || '/placeholder.svg'} alt='' fill className='object-cover' />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

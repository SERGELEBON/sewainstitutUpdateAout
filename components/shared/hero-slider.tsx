'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SLIDES = [
  {
    image: '/images/hero-modern-classroom-students-learning-english.jpg',
    alt: 'Salle de classe moderne à Sewa Institute',
  },
  {
    image: '/images/hero-african-students-discussion-international.jpg',
    alt: 'Étudiants africains en discussion',
  },
  {
    image: '/images/hero-teacher-english-class-ghana.jpg',
    alt: "Cours d'anglais à Sewa Institute Ghana",
  },
  {
    image: '/images/hero-students-studying-library-books.jpg',
    alt: 'Étudiants dans la bibliothèque',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDES.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className='relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden'>
      {/* Background Image Slider */}
      <div className='absolute inset-0'>
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image || '/placeholder.svg'}
              alt={slide.alt}
              fill
              className='object-cover'
              priority={index === 0}
            />
          </div>
        ))}
        <div className='absolute inset-0 bg-primary/30' />
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-7xl px-6 py-24 lg:py-32 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 items-center'>
          <div className='bg-primary/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl space-y-8'>
            <h1 className='text-4xl font-bold tracking-tight lg:text-6xl text-balance'>
              Apprenez l'anglais au cœur de l'Afrique
            </h1>
            <p className='text-xl text-white/90 leading-relaxed'>
              Rejoignez le premier institut panafricain dédié à l'apprentissage de l'anglais pour
              les francophones. Vivez une immersion totale au Ghana.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button asChild size='lg' variant='secondary' className='text-lg'>
                <Link href='/inscription'>S'inscrire maintenant</Link>
              </Button>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='border-white text-white hover:bg-white hover:text-primary bg-transparent'
              >
                <Link href='/formations'>Découvrir nos formations</Link>
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className='flex justify-center lg:justify-end gap-2'>
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

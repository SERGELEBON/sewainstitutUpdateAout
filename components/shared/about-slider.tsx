'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/s6.jpeg',
    alt: 'Étudiants diplômés Sewa Institute',
  },
  {
    src: '/images/slid11.jpeg',
    alt: 'Remise de diplôme',
  },
  {
    src: '/images/s4.jpeg',
    alt: 'Présentation Sewa Institute',
  },

  {
    src: '/images/slid12.jpeg',
    alt: 'Étudiants diplômés Sewa Institute',
  },
  {
    src: '/images/s5.jpeg',
    alt: 'Remise de diplôme',
  },
  {
    src: '/images/slid13.jpeg',
    alt: 'Présentation Sewa Institute',
  },
  {
    src: '/images/slid14.jpeg',
    alt: 'Remise de diplôme',
  },
]

export function AboutSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='relative h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-xl'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src || '/placeholder.svg'}
            alt={image.alt}
            fill
            className='object-cover'
          />
        </div>
      ))}

      {/* Indicators */}
      <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

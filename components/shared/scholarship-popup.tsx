'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

export function ScholarshipPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('scholarship-popup-seen')

    if (!hasSeenPopup) {
      // Show popup after 2 seconds delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('scholarship-popup-seen', 'true')
  }

  const handleImageClick = () => {
    setIsOpen(false)
    sessionStorage.setItem('scholarship-popup-seen', 'true')
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300'>
      <div className='relative max-w-lg w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300'>
        {/* Close button */}
        <button
          onClick={handleClose}
          className='absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110'
          aria-label='Fermer'
        >
          <X className='h-5 w-5 text-gray-700' />
        </button>

        {/* Clickable image that redirects to scholarship page */}
        <Link
          href='/bourse'
          onClick={handleImageClick}
          className='block cursor-pointer hover:opacity-95 transition-opacity'
        >
          <Image
            src='/images/bourse-rebecca-2026.jpeg'
            alt="Programme de Bourses REBECCA 3ème Édition 2026-2027 - SEWA Institute Ghana"
            width={600}
            height={800}
            className='w-full h-auto'
            priority
          />
        </Link>

        {/* Optional bottom bar */}
        <div className='p-4 bg-gradient-to-r from-primary to-blue-600 text-white text-center'>
          <p className='font-semibold text-sm'>Cliquez sur l'image pour en savoir plus</p>
        </div>
      </div>
    </div>
  )
}

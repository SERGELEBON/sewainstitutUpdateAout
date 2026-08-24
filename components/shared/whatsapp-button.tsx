'use client'

import { MessageCircle, Facebook } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
      <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z' />
    </svg>
  )
}

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Bonjour, je souhaite obtenir plus d'informations sur les formations à Sewa Institute."
    )
    window.open(
      `https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`,
      '_blank'
    )
  }

  const handleFacebookClick = () => {
    window.open('https://web.facebook.com/SewaProudToBe', '_blank')
  }

  const handleTikTokClick = () => {
    window.open('https://www.tiktok.com/@sewa.institute.gh?_r=1&_t=ZS-937k7rpqXvJ', '_blank')
  }

  return (
    <div className='fixed bottom-6 right-6 z-40 flex flex-col gap-3'>
      <button
        onClick={handleTikTokClick}
        className='flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all hover:scale-110 active:scale-95'
        aria-label='Suivez-nous sur TikTok'
      >
        <TikTokIcon className='h-7 w-7' />
      </button>

      <button
        onClick={handleFacebookClick}
        className='flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:bg-[#165FD7] transition-all hover:scale-110 active:scale-95'
        aria-label='Visitez notre page Facebook'
      >
        <Facebook className='h-7 w-7' />
      </button>

      <button
        onClick={handleWhatsAppClick}
        className='flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 active:scale-95'
        aria-label='Contactez-nous sur WhatsApp'
      >
        <MessageCircle className='h-7 w-7' />
      </button>
    </div>
  )
}

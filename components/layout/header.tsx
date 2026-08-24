'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Formations', href: '/formations' },
  { name: 'Bourse', href: '/bourse', highlight: true },
  { name: 'Formation en Ligne', href: '/formation-en-ligne' },
  { name: 'Hébergement', href: '/hebergement' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5' onClick={closeMobileMenu}>
            <span className='sr-only'>{SITE_CONFIG.name}</span>
            <Image
              src='/images/logotransp.png'
              alt={SITE_CONFIG.name}
              width={80}
              height={80}
              className='h-16 w-auto'
              priority
            />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className='sr-only'>Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className='h-6 w-6' aria-hidden='true' />
            ) : (
              <Menu className='h-6 w-6' aria-hidden='true' />
            )}
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-4'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium leading-6 px-3 py-2 rounded-md transition-colors ${
                item.highlight
                  ? 'bg-yellow-500 text-black hover:bg-yellow-600 animate-pulse'
                  : 'text-foreground hover:bg-primary hover:text-white'
              }`}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button asChild>
            <Link href='/inscription' onClick={closeMobileMenu}>
              S'inscrire
            </Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className='lg:hidden border-t bg-white'>
          <div className='space-y-1 px-4 py-4'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.highlight
                    ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                    : 'text-foreground hover:bg-primary hover:text-white'
                }`}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className='pt-4 border-t'>
              <Button asChild className='w-full' onClick={closeMobileMenu}>
                <Link href='/inscription'>S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

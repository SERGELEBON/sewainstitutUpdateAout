import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Youtube, Shield } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function Footer() {
  return (
    <footer className='relative bg-white border-t overflow-hidden'>
      {/* Background globe image */}
      <div className='absolute inset-0 opacity-5'>
        <Image
          src='/world-map-blue-continents-on-white-background-prof.jpg'
          alt=''
          fill
          className='object-cover'
          aria-hidden='true'
        />
      </div>

      {/* Content overlay */}
      <div className='relative z-10'>
        <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8'>
          <div className='flex flex-col items-center justify-center space-y-6'>
            {/* Logo */}
            <Link href='/'>
              <Image
                src='/images/logotransp.png'
                alt={SITE_CONFIG.name}
                width={100}
                height={100}
                className='h-20 w-auto'
              />
            </Link>

            {/* Tagline */}
            <p className='text-center text-sm text-muted-foreground max-w-md'>
              {SITE_CONFIG.tagline}
            </p>

            {/* Social media links */}
            <div className='flex gap-6'>
              <Link
                href={SITE_CONFIG.socialMedia.facebook}
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='h-5 w-5' />
              </Link>
              <Link
                href={SITE_CONFIG.socialMedia.instagram}
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='h-5 w-5' />
              </Link>
              <Link
                href={SITE_CONFIG.socialMedia.linkedin}
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='h-5 w-5' />
              </Link>
              <Link
                href={SITE_CONFIG.socialMedia.youtube}
                className='text-muted-foreground hover:text-primary transition-colors'
                aria-label='YouTube'
              >
                <Youtube className='h-5 w-5' />
              </Link>
            </div>

            {/* Accreditations Section */}
            <div className='w-full max-w-4xl mx-auto'>
              <div className='flex flex-col items-center gap-4 py-6 border-t border-b'>
                <div className='flex items-center gap-2 text-primary'>
                  <Shield className='h-5 w-5' />
                  <span className='text-sm font-semibold'>Institut Agréé & Certifié</span>
                </div>
                <div className='flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-muted-foreground'>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium'>GRG:</span>
                    <code className='px-1.5 py-0.5 bg-muted/50 rounded text-xs'>CS302582018</code>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium'>GES:</span>
                    <code className='px-1.5 py-0.5 bg-muted/50 rounded text-xs'>GES/GAR/PT/LG.08/2018</code>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium'>NaSIA:</span>
                    <code className='px-1.5 py-0.5 bg-muted/50 rounded text-xs'>GA-PRV-SPS-P3876082022</code>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium'>ICM UK:</span>
                    <code className='px-1.5 py-0.5 bg-muted/50 rounded text-xs'>11950</code>
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium'>GRA:</span>
                    <code className='px-1.5 py-0.5 bg-muted/50 rounded text-xs'>C0018569765</code>
                  </div>
                </div>
                <Link
                  href='/a-propos#accreditations'
                  className='text-xs text-primary hover:text-primary/80 transition-colors'
                >
                  Voir toutes nos accréditations →
                </Link>
              </div>
            </div>

            {/* Copyright */}
            <div className='pt-6'>
              <p className='text-center text-sm text-muted-foreground'>
                &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

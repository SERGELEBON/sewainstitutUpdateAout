'use client'

import Image from 'next/image'

const partners = [
  {
    id: 'uog',
    logo: '/images/partners/uog.jpg',
    name: 'University of Ghana',
  },
  {
    id: 'ashesi',
    logo: '/images/partners/ashesi.jpeg',
    name: 'Ashesi University',
  },
  {
    id: 'knust',
    logo: '/images/partners/knust.png',
    name: 'KNUST',
  },
  {
    id: 'gis',
    logo: '/images/partners/gis.jpg',
    name: 'Ghana Immigration Service',
  },
  {
    id: 'british-council',
    logo: '/images/partners/british-council.png',
    name: 'British Council Ghana',
  },
  {
    id: 'cambridge',
    logo: '/images/partners/cambridge.png',
    name: 'Cambridge Assessment',
  },
  {
    id: 'idp',
    logo: '/images/partners/idp.png',
    name: 'IDP Education',
  },
  {
    id: 'ielts',
    logo: '/images/partners/ielts.png',
    name: 'IELTS Official Test Center',
  },
]

export function PartnersMarquee() {
  return (
    <section className='w-full py-8 bg-white border-y border-gray-100'>
      <div className='w-full overflow-hidden'>
        <div className='flex animate-marquee gap-16 items-center'>
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className='flex-shrink-0 h-16 w-28 flex items-center justify-center hover:opacity-70 transition-opacity'
            >
              <Image
                src={partner.logo || '/placeholder.svg'}
                alt={partner.name}
                height={64}
                width={112}
                className='object-contain h-full w-full'
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

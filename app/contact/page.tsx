import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez Sewa Institute pour toute question sur nos formations',
}

export default function ContactPage() {
  return (
    <div className='py-24 bg-muted/30'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>Contactez-nous</h1>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Une question ? Notre équipe est là pour vous répondre
          </p>
        </div>

        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <MapPin className='h-5 w-5 text-primary mt-1 flex-shrink-0' aria-hidden='true' />
                  <div>
                    <p className='font-semibold'>Adresse</p>
                    <p className='text-muted-foreground'>{SITE_CONFIG.address}</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <Phone className='h-5 w-5 text-primary mt-1 flex-shrink-0' aria-hidden='true' />
                  <div>
                    <p className='font-semibold'>Téléphone</p>
                    <p className='text-muted-foreground'>
                      <a href={`tel:${SITE_CONFIG.phone}`} className='hover:text-primary transition-colors'>
                        {SITE_CONFIG.phone}
                      </a>
                    </p>
                    <p className='text-muted-foreground'>
                      <a href={`tel:${SITE_CONFIG.phone2}`} className='hover:text-primary transition-colors'>
                        {SITE_CONFIG.phone2}
                      </a>
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      WhatsApp: <a href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/\\D/g, '')}`} target='_blank' rel='noopener noreferrer' className='hover:text-primary transition-colors'>{SITE_CONFIG.whatsapp}</a>
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <Mail className='h-5 w-5 text-primary mt-1 flex-shrink-0' aria-hidden='true' />
                  <div>
                    <p className='font-semibold'>Email</p>
                    <p className='text-muted-foreground'>
                      <a href={`mailto:${SITE_CONFIG.email}`} className='hover:text-primary transition-colors'>
                        {SITE_CONFIG.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <Clock className='h-5 w-5 text-primary mt-1 flex-shrink-0' aria-hidden='true' />
                  <div>
                    <p className='font-semibold'>Horaires d'ouverture</p>
                    <p className='text-muted-foreground'>Lundi - Vendredi: 8h15 - 17h</p>
                    <p className='text-muted-foreground'>Samedi: 9h - 13h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <MapPin className='h-5 w-5 text-primary' aria-hidden='true' />
                  Notre Localisation
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 p-4 bg-primary/5 rounded-lg border'>
                    <MapPin className='h-6 w-6 text-primary flex-shrink-0' aria-hidden='true' />
                    <div>
                      <h3 className='font-semibold text-primary'>Sewa Institute</h3>
                      <p className='text-sm text-muted-foreground'>Asene, Accra, Ghana</p>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <a
                      href='https://maps.google.com/?q=Asene,+Accra,+Ghana'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm font-medium'
                    >
                      <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                        <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/>
                      </svg>
                      Ouvrir dans Google Maps
                    </a>

                    <a
                      href='https://waze.com/ul?q=Asene%20Accra%20Ghana'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-sm font-medium'
                    >
                      <svg className='h-4 w-4' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                        <path d='M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z'/>
                      </svg>
                      Ouvrir dans Waze
                    </a>
                  </div>

                  <div className='p-4 bg-muted rounded-lg'>
                    <h4 className='font-medium mb-2 text-sm'>🚗 Comment nous trouver :</h4>
                    <ul className='text-xs text-muted-foreground space-y-1'>
                      <li>• Situé dans le quartier d'Asene à Accra</li>
                      <li>• Accessible par transport en commun (trotro)</li>
                      <li>• Parking disponible sur place</li>
                      <li>• À proximité des principales routes d'Accra</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

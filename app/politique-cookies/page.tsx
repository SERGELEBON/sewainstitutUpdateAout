import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Politique de Cookies',
  description: 'Politique de gestion des cookies de SEWA Institute Ghana',
}

export default function PolitiqueCookiesPage() {
  return (
    <div className='py-24 bg-muted/30'>
      <div className='mx-auto max-w-4xl px-6 lg:px-8'>
        <div className='mb-12'>
          <h1 className='text-4xl font-bold tracking-tight lg:text-5xl mb-4'>
            Politique de Cookies
          </h1>
          <p className='text-lg text-muted-foreground'>
            Dernière mise à jour : 25 août 2026
          </p>
        </div>

        <Card className='mb-8'>
          <CardContent className='p-8 space-y-6'>
            <section>
              <h2 className='text-2xl font-bold mb-4'>Qu'est-ce qu'un cookie ?</h2>
              <p className='text-muted-foreground'>
                Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette ou mobile)
                lorsque vous visitez un site web. Les cookies permettent de mémoriser vos préférences et
                d'améliorer votre expérience de navigation.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold mb-4'>Cookies que nous utilisons</h2>

              <div className='space-y-6'>
                <div className='border-l-4 border-green-500 pl-4'>
                  <h3 className='text-xl font-semibold mb-2'>1. Cookies Essentiels (Obligatoires)</h3>
                  <p className='text-muted-foreground mb-3'>
                    Ces cookies sont nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                  </p>
                  <div className='bg-muted/50 p-4 rounded-md space-y-2 text-sm'>
                    <div>
                      <strong>Nom:</strong> sewa-cookie-consent
                    </div>
                    <div>
                      <strong>Finalité:</strong> Stocke vos préférences de cookies
                    </div>
                    <div>
                      <strong>Durée:</strong> 1 an
                    </div>
                    <div>
                      <strong>Type:</strong> Cookie local
                    </div>
                  </div>
                </div>

                <div className='border-l-4 border-blue-500 pl-4'>
                  <h3 className='text-xl font-semibold mb-2'>2. Cookies Analytiques (Optionnels)</h3>
                  <p className='text-muted-foreground mb-3'>
                    Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site
                    afin de l'améliorer. Vous pouvez les refuser.
                  </p>
                  <div className='bg-muted/50 p-4 rounded-md space-y-2 text-sm'>
                    <div>
                      <strong>Nom:</strong> _va (Vercel Analytics)
                    </div>
                    <div>
                      <strong>Fournisseur:</strong> Vercel Inc.
                    </div>
                    <div>
                      <strong>Finalité:</strong> Analyse du trafic et du comportement des visiteurs (anonymisé)
                    </div>
                    <div>
                      <strong>Durée:</strong> 2 ans
                    </div>
                    <div>
                      <strong>Type:</strong> Cookie tiers
                    </div>
                    <div className='mt-2'>
                      <strong>Données collectées:</strong>
                      <ul className='list-disc list-inside mt-1 text-muted-foreground'>
                        <li>Pages visitées</li>
                        <li>Durée de la visite</li>
                        <li>Navigateur et appareil utilisés</li>
                        <li>Pays de provenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold mb-4'>Vos choix concernant les cookies</h2>
              <p className='text-muted-foreground mb-4'>
                Vous avez le contrôle total sur les cookies. Voici vos options :
              </p>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold'>•</span>
                  <span>
                    <strong>Accepter tous les cookies :</strong> Vous acceptez tous les cookies,
                    y compris les cookies analytiques.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold'>•</span>
                  <span>
                    <strong>Refuser les cookies analytiques :</strong> Seuls les cookies essentiels
                    seront utilisés.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary font-bold'>•</span>
                  <span>
                    <strong>Gérer vos préférences de navigateur :</strong> Vous pouvez bloquer ou
                    supprimer les cookies via les paramètres de votre navigateur.
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold mb-4'>Comment gérer les cookies dans votre navigateur</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
                <div className='bg-muted/50 p-4 rounded-md'>
                  <strong className='block mb-2'>Google Chrome</strong>
                  <p className='text-muted-foreground'>
                    Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
                  </p>
                </div>
                <div className='bg-muted/50 p-4 rounded-md'>
                  <strong className='block mb-2'>Firefox</strong>
                  <p className='text-muted-foreground'>
                    Options → Vie privée et sécurité → Cookies et données de sites
                  </p>
                </div>
                <div className='bg-muted/50 p-4 rounded-md'>
                  <strong className='block mb-2'>Safari</strong>
                  <p className='text-muted-foreground'>
                    Préférences → Confidentialité → Gérer les données de sites web
                  </p>
                </div>
                <div className='bg-muted/50 p-4 rounded-md'>
                  <strong className='block mb-2'>Edge</strong>
                  <p className='text-muted-foreground'>
                    Paramètres → Cookies et autorisations de site → Gérer et supprimer les cookies
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold mb-4'>Modifications de cette politique</h2>
              <p className='text-muted-foreground'>
                Nous pouvons mettre à jour cette politique de cookies pour refléter les changements
                dans nos pratiques. Nous vous informerons de toute modification importante en affichant
                un nouvel avis de consentement.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold mb-4'>Contact</h2>
              <p className='text-muted-foreground'>
                Pour toute question concernant notre utilisation des cookies, contactez-nous :
              </p>
              <div className='mt-4 space-y-2'>
                <p>
                  <strong>Email :</strong>{' '}
                  <a href='mailto:sewainstitute.edu@gmail.com' className='text-primary hover:underline'>
                    sewainstitute.edu@gmail.com
                  </a>
                </p>
                <p>
                  <strong>WhatsApp :</strong>{' '}
                  <a href='https://wa.me/233261815407' className='text-primary hover:underline'>
                    +233 26 181 5407
                  </a>
                </p>
              </div>
            </section>
          </CardContent>
        </Card>

        <div className='flex justify-center'>
          <Button asChild size='lg'>
            <Link href='/'>Retour à l'accueil</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

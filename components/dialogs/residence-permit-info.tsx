'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface ResidencePermitInfoProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ResidencePermitInfo({ open, onOpenChange }: ResidencePermitInfoProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='max-w-4xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>
            Comment obtenir un permis de séjour étudiant au Ghana ?
          </DialogTitle>
          <DialogDescription>Guide complet des étapes et conditions</DialogDescription>
        </DialogHeader>

        <div className='space-y-6 py-4'>
          {/* Documents Requis */}
          <section className='space-y-3'>
            <h3 className='text-lg font-bold text-primary'>Documents Requis</h3>
            <div className='bg-muted/50 rounded-lg p-4 space-y-2'>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Lettre de candidature</p>
                  <p className='text-sm text-muted-foreground'>
                    Adressée au Contrôleur général du Service d'immigration du Ghana (GIS) par
                    Sewa-Institute
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Lettre de recommandation</p>
                  <p className='text-sm text-muted-foreground'>
                    De votre établissement scolaire ou universitaire
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Lettre d'admission</p>
                  <p className='text-sm text-muted-foreground'>
                    Une copie de votre lettre d'admission
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Justificatif de paiement des frais de scolarité</p>
                  <p className='text-sm text-muted-foreground'>Reçu ou justificatif de paiement</p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Carte d'identité de non-citoyen</p>
                  <p className='text-sm text-muted-foreground'>
                    Original (coût : 120 $ pour une première demande, 60 $ pour un renouvellement)
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Passeport</p>
                  <p className='text-sm text-muted-foreground'>
                    Original, valide pendant au moins six mois
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                <div>
                  <p className='font-semibold'>Photos d'identité</p>
                  <p className='text-sm text-muted-foreground'>Deux photos récentes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Procédure de Demande */}
          <section className='space-y-3'>
            <h3 className='text-lg font-bold text-primary'>Procédure de Demande</h3>
            <div className='bg-muted/50 rounded-lg p-4 space-y-3'>
              <div className='flex gap-3'>
                <span className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  1
                </span>
                <div>
                  <p className='font-semibold'>Dépôt de la demande</p>
                  <p className='text-sm text-muted-foreground'>
                    Au siège du Service d'immigration du Ghana à Accra
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>
                  2
                </span>
                <div>
                  <p className='font-semibold'>Délai de traitement</p>
                  <p className='text-sm text-muted-foreground'>
                    2 à 8 semaines pour une première demande, 1 à 2 semaines pour un renouvellement
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Tarifs */}
          <section className='space-y-3'>
            <h3 className='text-lg font-bold text-primary'>Tarifs</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border-l-4 border-blue-600'>
                <p className='font-bold text-blue-900 dark:text-blue-100'>
                  Ressortissants de la CEDEAO
                </p>
                <p className='text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2'>55 $</p>
                <p className='text-sm text-muted-foreground mt-1'>Tous services inclus</p>
              </div>
              <div className='bg-orange-50 dark:bg-orange-950 rounded-lg p-4 border-l-4 border-orange-600'>
                <p className='font-bold text-orange-900 dark:text-orange-100'>
                  Ressortissants hors CEDEAO
                </p>
                <p className='text-2xl font-bold text-orange-600 dark:text-orange-400 mt-2'>50 $</p>
                <p className='text-sm text-muted-foreground mt-1'>Tous services inclus</p>
              </div>
            </div>
            <p className='text-sm text-muted-foreground italic'>
              Frais de renouvellement : Identiques aux frais de première demande
            </p>
          </section>

          {/* Conditions Supplémentaires */}
          <section className='space-y-3'>
            <h3 className='text-lg font-bold text-primary'>Conditions Supplémentaires</h3>
            <div className='bg-muted/50 rounded-lg p-4 space-y-2'>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>✓</span>
                <div>
                  <p className='font-semibold'>Examen médical</p>
                  <p className='text-sm text-muted-foreground'>
                    Peut être exigé pour certains candidats
                  </p>
                </div>
              </div>
              <div className='flex gap-3'>
                <span className='text-primary font-bold'>✓</span>
                <div>
                  <p className='font-semibold'>Certificat de police</p>
                  <p className='text-sm text-muted-foreground'>
                    Peut être exigé pour certains candidats
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className='bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-800'>
            <p className='text-sm leading-relaxed text-green-900 dark:text-green-100'>
              <span className='font-bold'>Important :</span> Sewa-Institute vous recommande de vous
              renseigner auprès de l'administration de l'école ou du Service d'immigration du Ghana
              pour connaître les conditions et les frais les plus récents.
            </p>
            <p className='text-sm leading-relaxed text-green-900 dark:text-green-100 mt-2'>
              Il est conseillé aux étudiants de se procurer tous les documents nécessaires pour
              faire une demande de permis de séjour et l'obtenir afin d'éviter une amende pour
              infraction à la loi.
            </p>
          </section>
        </div>

        <div className='flex justify-end gap-2 mt-6'>
          <Button variant='outline' onClick={() => onOpenChange(false)}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

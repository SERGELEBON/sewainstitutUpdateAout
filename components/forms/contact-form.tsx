'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validators/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

const SCHOOL_EMAIL = 'sewainstitute.edu@gmail.com'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Send to API - Resend delivers the email server-side
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', formData: data }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: 'Message envoyé !',
          description:
            `Votre message a été envoyé à ${SCHOOL_EMAIL}. Nous vous répondrons rapidement.`,
        })

        reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      // Real fallback only: the automatic send failed, so we open the visitor's
      // mail client pre-filled with the same information as a last resort.
      const subject = encodeURIComponent(
        `Message de contact - ${data.firstName} ${data.lastName}`
      )
      const body = encodeURIComponent(
        `NOUVEAU MESSAGE DE CONTACT\n\n` +
          `Nom: ${data.firstName} ${data.lastName}\n` +
          `Email: ${data.email}\n` +
          `Téléphone: ${data.phone}\n\n` +
          `Message:\n${data.message}\n`
      )

      window.open(`mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${body}`, '_blank')

      toast({
        title: 'Envoi automatique indisponible',
        description:
          "Nous avons ouvert votre messagerie pour envoyer le message manuellement. Vous pouvez aussi réessayer plus tard.",
        variant: 'destructive',
      })
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='firstName'>Prénom *</Label>
          <Input
            id='firstName'
            {...register('firstName')}
            placeholder='Ama'
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className='text-sm text-destructive'>{errors.firstName.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='lastName'>Nom *</Label>
          <Input
            id='lastName'
            {...register('lastName')}
            placeholder='Mensah'
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <p className='text-sm text-destructive'>{errors.lastName.message}</p>}
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email'>Email *</Label>
        <Input
          id='email'
          type='email'
          {...register('email')}
          placeholder='ama.mensah@gmail.com'
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className='text-sm text-destructive'>{errors.email.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='phone'>Téléphone *</Label>
        <Input
          id='phone'
          type='tel'
          {...register('phone')}
          placeholder='+233 26 181 5407'
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className='text-sm text-destructive'>{errors.phone.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message'>Message *</Label>
        <Textarea
          id='message'
          {...register('message')}
          placeholder='Votre message...'
          rows={6}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className='text-sm text-destructive'>{errors.message.message}</p>}
      </div>

      <Button type='submit' className='w-full' disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>

      <p className='text-sm text-muted-foreground text-center'>
        Votre message sera envoyé à <strong>sewainstitute.edu@gmail.com</strong>
      </p>
    </form>
  )
}

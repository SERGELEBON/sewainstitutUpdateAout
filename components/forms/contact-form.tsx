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
      // Send to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', formData: data }),
      })

      const result = await response.json()

      if (result.success) {
        toast({
          title: '✅ Message envoyé avec succès !',
          description:
            'Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.',
          duration: 5000,
        })

        reset()
      } else {
        const errorTitle = result.message || 'Erreur d\'envoi'
        const errorDesc = result.details
          ? `${result.details}`
          : 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'

        toast({
          title: `❌ ${errorTitle}`,
          description: errorDesc,
          variant: 'destructive',
          duration: 7000,
        })
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: '❌ Erreur de connexion',
        description: 'Impossible de se connecter au serveur. Vérifiez votre connexion internet et réessayez.',
        variant: 'destructive',
        duration: 7000,
      })
    } finally {
      setIsSubmitting(false)
    }
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

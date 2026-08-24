'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inscriptionSchema, type InscriptionFormData } from '@/lib/validators/contact'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import { PROGRAMS } from '@/lib/constants'

const SCHOOL_EMAIL = 'contacts@sewainstitutegh.com'

export function InscriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<InscriptionFormData>({
    resolver: zodResolver(inscriptionSchema),
  })

  const onSubmit = async (data: InscriptionFormData) => {
    setIsSubmitting(true)

    try {
      // Send to API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'inscription', formData: data }),
      })

      const result = await response.json()

      if (result.success) {
        // Also create mailto link as backup with complete information
        const subject = encodeURIComponent(
          `Demande d'inscription - ${data.firstName} ${data.lastName}`
        )
        const mailtoBody = encodeURIComponent(
          `NOUVELLE DEMANDE D'INSCRIPTION\n\n` +
            `=== INFORMATIONS PERSONNELLES ===\n` +
            `Prénom: ${data.firstName}\n` +
            `Nom: ${data.lastName}\n` +
            `Email: ${data.email}\n` +
            `Téléphone: ${data.phone}\n` +
            `Pays d'origine: ${data.country || 'Non spécifié'}\n` +
            `Date de naissance: ${data.dateOfBirth}\n` +
            `\n=== INFORMATIONS DE PASSEPORT ===\n` +
            `Numéro de passeport: ${data.passportNumber}\n` +
            `Date d'émission: ${data.passportIssueDate}\n` +
            `Date d'expiration: ${data.passportExpiryDate}\n` +
            `Lieu d'émission: ${data.passportIssuePlace}\n` +
            `\n=== INFORMATIONS DE FORMATION ===\n` +
            `Programme: ${data.program}\n` +
            `Mode de formation: ${data.location === 'presential' ? 'Présentiel au Ghana' : 'Formation en ligne'}\n` +
            `Date de début souhaitée: ${data.startDate}\n` +
            `\n=== MESSAGE ADDITIONNEL ===\n` +
            `${data.message || 'Aucun message'}\n`
        )

        // Open mailto as backup
        window.open(`mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${mailtoBody}`, '_blank')

        toast({
          title: 'Inscription enregistrée !',
          description:
            'Votre demande a été envoyée à contacts@sewainstitutegh.com. Nous vous contacterons rapidement.',
        })

        reset()
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement.',
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
            placeholder='Kwame'
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
            placeholder='Asante'
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
          placeholder='kwame.asante@gmail.com'
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
          placeholder='+233 55 301 9097'
          aria-invalid={!!errors.phone}
        />
        {errors.phone && <p className='text-sm text-destructive'>{errors.phone.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='country'>Pays d'origine</Label>
        <Input
          id='country'
          {...register('country')}
          placeholder='Ghana, Togo, Cameroun, Tchad...'
        />
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='dateOfBirth'>Date de naissance *</Label>
          <Input
            id='dateOfBirth'
            type='date'
            {...register('dateOfBirth')}
            aria-invalid={!!errors.dateOfBirth}
          />
          {errors.dateOfBirth && (
            <p className='text-sm text-destructive'>{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='passportNumber'>Numéro de passeport *</Label>
          <Input
            id='passportNumber'
            {...register('passportNumber')}
            placeholder='AA123456'
            aria-invalid={!!errors.passportNumber}
          />
          {errors.passportNumber && (
            <p className='text-sm text-destructive'>{errors.passportNumber.message}</p>
          )}
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='passportIssueDate'>Date d'émission du passeport *</Label>
          <Input
            id='passportIssueDate'
            type='date'
            {...register('passportIssueDate')}
            aria-invalid={!!errors.passportIssueDate}
          />
          {errors.passportIssueDate && (
            <p className='text-sm text-destructive'>{errors.passportIssueDate.message}</p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='passportExpiryDate'>Date d'expiration du passeport *</Label>
          <Input
            id='passportExpiryDate'
            type='date'
            {...register('passportExpiryDate')}
            aria-invalid={!!errors.passportExpiryDate}
          />
          {errors.passportExpiryDate && (
            <p className='text-sm text-destructive'>{errors.passportExpiryDate.message}</p>
          )}
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='passportIssuePlace'>Lieu d'émission du passeport *</Label>
        <Input
          id='passportIssuePlace'
          {...register('passportIssuePlace')}
          placeholder='Abidjan, Lomé, Bamako...'
          aria-invalid={!!errors.passportIssuePlace}
        />
        {errors.passportIssuePlace && (
          <p className='text-sm text-destructive'>{errors.passportIssuePlace.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='program'>Programme *</Label>
        <Select onValueChange={value => setValue('program', value)}>
          <SelectTrigger id='program' aria-invalid={!!errors.program}>
            <SelectValue placeholder='Sélectionnez un programme' />
          </SelectTrigger>
          <SelectContent>
            {PROGRAMS.map(program => (
              <SelectItem key={program.id} value={program.id}>
                {program.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.program && <p className='text-sm text-destructive'>{errors.program.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label>Mode de formation *</Label>
        <RadioGroup
          onValueChange={(value: 'presential' | 'online') => setValue('location', value)}
          className='flex gap-4'
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='presential' id='presential' />
            <Label htmlFor='presential' className='font-normal cursor-pointer'>
              Présentiel au Ghana
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='online' id='online' />
            <Label htmlFor='online' className='font-normal cursor-pointer'>
              Formation en ligne
            </Label>
          </div>
        </RadioGroup>
        {errors.location && <p className='text-sm text-destructive'>{errors.location.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='startDate'>Date de début souhaitée *</Label>
        <Input
          id='startDate'
          type='date'
          {...register('startDate')}
          aria-invalid={!!errors.startDate}
        />
        {errors.startDate && <p className='text-sm text-destructive'>{errors.startDate.message}</p>}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message'>Message (optionnel)</Label>
        <Textarea
          id='message'
          {...register('message')}
          placeholder='Questions ou informations supplémentaires...'
          rows={4}
        />
      </div>

      <Button type='submit' className='w-full' size='lg' disabled={isSubmitting}>
        {isSubmitting ? 'Envoi en cours...' : "Envoyer la demande d'inscription"}
      </Button>

      <p className='text-sm text-muted-foreground text-center'>
        Votre demande sera envoyée à <strong>contacts@sewainstitutegh.com</strong>
      </p>
    </form>
  )
}

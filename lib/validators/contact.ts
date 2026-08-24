import { z } from 'zod'

// Regex patterns for validation
const phoneRegex = /^[+]?[0-9\s-]{8,20}$/
const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/
const noScriptRegex = /^(?!.*<script)(?!.*javascript:)(?!.*on\w+=).*$/i

// Custom refinements for security
const secureString = (minLength: number, maxLength: number) =>
  z
    .string()
    .min(minLength, `Doit contenir au moins ${minLength} caracteres`)
    .max(maxLength, `Ne doit pas depasser ${maxLength} caracteres`)
    .refine(val => noScriptRegex.test(val), 'Contenu non autorise detecte')

export const contactSchema = z.object({
  firstName: secureString(2, 50).refine(
    val => nameRegex.test(val),
    'Le prenom contient des caracteres invalides'
  ),
  lastName: secureString(2, 50).refine(
    val => nameRegex.test(val),
    'Le nom contient des caracteres invalides'
  ),
  email: z
    .string()
    .email('Email invalide')
    .max(254, 'Email trop long')
    .refine(val => !val.includes('..'), 'Email invalide')
    .refine(val => noScriptRegex.test(val), 'Contenu non autorise detecte'),
  phone: z
    .string()
    .min(8, 'Numero de telephone invalide')
    .max(20, 'Numero de telephone trop long')
    .refine(val => phoneRegex.test(val), 'Format de telephone invalide'),
  message: secureString(10, 2000),
})

export type ContactFormData = z.infer<typeof contactSchema>

export const inscriptionSchema = z.object({
  firstName: secureString(2, 50).refine(
    val => nameRegex.test(val),
    'Le prenom contient des caracteres invalides'
  ),
  lastName: secureString(2, 50).refine(
    val => nameRegex.test(val),
    'Le nom contient des caracteres invalides'
  ),
  email: z
    .string()
    .email('Email invalide')
    .max(254, 'Email trop long')
    .refine(val => !val.includes('..'), 'Email invalide')
    .refine(val => noScriptRegex.test(val), 'Contenu non autorise detecte'),
  phone: z
    .string()
    .min(8, 'Numero de telephone invalide')
    .max(20, 'Numero de telephone trop long')
    .refine(val => phoneRegex.test(val), 'Format de telephone invalide'),
  country: secureString(0, 100).optional(),
  dateOfBirth: z.string().min(1, 'Veuillez entrer votre date de naissance'),
  passportNumber: z
    .string()
    .min(5, 'Le numero de passeport doit contenir au moins 5 caracteres')
    .max(20, 'Le numero de passeport est trop long')
    .regex(/^[A-Z0-9]{5,20}$/, 'Format de numero de passeport invalide'),
  passportIssueDate: z.string().min(1, "Veuillez entrer la date d'emission du passeport"),
  passportExpiryDate: z.string().min(1, "Veuillez entrer la date d'expiration du passeport"),
  passportIssuePlace: secureString(2, 100),
  program: z
    .string()
    .min(1, 'Veuillez selectionner un programme')
    .max(100, 'Programme invalide')
    .refine(val => noScriptRegex.test(val), 'Contenu non autorise detecte'),
  location: z.enum(['presential', 'online'], {
    required_error: 'Veuillez selectionner un mode de formation',
  }),
  startDate: z
    .string()
    .min(1, 'Veuillez selectionner une date de debut')
    .max(50, 'Date invalide')
    .refine(val => noScriptRegex.test(val), 'Contenu non autorise detecte'),
  message: secureString(0, 2000).optional(),
})

export type InscriptionFormData = z.infer<typeof inscriptionSchema>

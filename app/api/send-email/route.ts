import { NextRequest, NextResponse } from 'next/server'
import { contactSchema, inscriptionSchema } from '@/lib/validators/contact'
import {
  getRateLimit,
  getClientIP,
  sanitizeObject,
  containsSuspiciousContent,
  securityHeaders,
} from '@/lib/security'

const SCHOOL_EMAIL = 'contacts@sewainstitutegh.com'

export async function POST(request: NextRequest) {
  try {
    // Get client IP from headers
    const clientIP = getClientIP(request.headers)

    // Rate limiting
    const rateLimit = getRateLimit(clientIP)

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: 'Trop de requetes. Veuillez reessayer dans une minute.' },
        { status: 429, headers: securityHeaders }
      )
    }

    // Parse and validate request body
    const data = await request.json()
    const { type, formData } = data

    if (!type || !formData) {
      return NextResponse.json(
        { success: false, message: 'Donnees invalides' },
        { status: 400, headers: securityHeaders }
      )
    }

    // Sanitize all input data
    const sanitizedData = sanitizeObject(formData as Record<string, unknown>)

    // Check for suspicious content
    const allValues = Object.values(sanitizedData).join(' ')
    if (containsSuspiciousContent(String(allValues))) {
      return NextResponse.json(
        { success: false, message: 'Contenu non autorise detecte' },
        { status: 400, headers: securityHeaders }
      )
    }

    // Validate based on form type
    let validationResult
    if (type === 'inscription') {
      validationResult = inscriptionSchema.safeParse(sanitizedData)
    } else if (type === 'contact') {
      validationResult = contactSchema.safeParse(sanitizedData)
    } else {
      return NextResponse.json(
        { success: false, message: 'Type de formulaire invalide' },
        { status: 400, headers: securityHeaders }
      )
    }

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation echouee',
          errors: validationResult.error.errors,
        },
        { status: 400, headers: securityHeaders }
      )
    }

    const validatedData = validationResult.data

    let subject = ''
    let htmlContent = ''

    if (type === 'inscription') {
      subject = `Nouvelle demande d'inscription - ${validatedData.firstName} ${validatedData.lastName}`
      htmlContent = `
        <h2>Nouvelle demande d'inscription</h2>
        <hr/>
        <h3>Informations personnelles</h3>
        <p><strong>Prénom:</strong> ${validatedData.firstName}</p>
        <p><strong>Nom:</strong> ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Téléphone:</strong> ${validatedData.phone}</p>
        <p><strong>Pays d'origine:</strong> ${(validatedData as Record<string, unknown>).country || 'Non spécifié'}</p>
        <p><strong>Date de naissance:</strong> ${(validatedData as Record<string, unknown>).dateOfBirth || 'Non spécifiée'}</p>
        <hr/>
        <h3>Informations de passeport</h3>
        <p><strong>Numéro de passeport:</strong> ${(validatedData as Record<string, unknown>).passportNumber || 'Non spécifié'}</p>
        <p><strong>Date d'émission:</strong> ${(validatedData as Record<string, unknown>).passportIssueDate || 'Non spécifiée'}</p>
        <p><strong>Date d'expiration:</strong> ${(validatedData as Record<string, unknown>).passportExpiryDate || 'Non spécifiée'}</p>
        <p><strong>Lieu d'émission:</strong> ${(validatedData as Record<string, unknown>).passportIssuePlace || 'Non spécifié'}</p>
        <hr/>
        <h3>Informations sur la formation</h3>
        <p><strong>Programme choisi:</strong> ${(validatedData as Record<string, unknown>).program}</p>
        <p><strong>Mode de formation:</strong> ${(validatedData as Record<string, unknown>).location === 'presential' ? 'Présentiel au Ghana' : 'Formation en ligne'}</p>
        <p><strong>Date de début souhaitée:</strong> ${(validatedData as Record<string, unknown>).startDate}</p>
        <hr/>
        <h3>Message additionnel</h3>
        <p>${validatedData.message || 'Aucun message'}</p>
        <hr/>
        <p><em>Email envoyé automatiquement depuis le site web Sewa Institute</em></p>
        <p><small>IP: ${clientIP} | Date: ${new Date().toISOString()}</small></p>
      `
    } else if (type === 'contact') {
      subject = `Nouveau message de contact - ${validatedData.firstName} ${validatedData.lastName}`
      htmlContent = `
        <h2>Nouveau message de contact</h2>
        <hr/>
        <h3>Informations de l'expediteur</h3>
        <p><strong>Nom complet:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Telephone:</strong> ${validatedData.phone}</p>
        <hr/>
        <h3>Message</h3>
        <p>${validatedData.message}</p>
        <hr/>
        <p><em>Email envoye automatiquement depuis le site web Sewa Institute</em></p>
        <p><small>IP: ${clientIP} | Date: ${new Date().toISOString()}</small></p>
      `
    }

    // Return success with security headers
    return NextResponse.json(
      {
        success: true,
        message: 'Votre demande a ete enregistree. Nous vous contacterons bientot.',
        emailTo: SCHOOL_EMAIL,
        subject: subject,
      },
      { headers: securityHeaders }
    )
  } catch (error) {
    console.error('Error processing email request:', error)
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de l'envoi" },
      { status: 500, headers: securityHeaders }
    )
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Methode non autorisee' },
    { status: 405, headers: securityHeaders }
  )
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: 'Methode non autorisee' },
    { status: 405, headers: securityHeaders }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: 'Methode non autorisee' },
    { status: 405, headers: securityHeaders }
  )
}

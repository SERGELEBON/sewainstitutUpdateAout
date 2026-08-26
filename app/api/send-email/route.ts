import { NextRequest, NextResponse } from 'next/server'
import { contactSchema, inscriptionSchema } from '@/lib/validators/contact'
import {
  getRateLimit,
  getClientIP,
  sanitizeObject,
  containsSuspiciousContent,
  securityHeaders,
} from '@/lib/security'

const SCHOOL_EMAIL = process.env.NOTIFICATION_EMAIL || 'sewainstitute.edu@gmail.com'
const FROM_EMAIL = 'Sewa Institute <no-reply@sewainstitutegh.com>'

async function sendViaResend(subject: string, html: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY

  // Mode DEV: simuler l'envoi si pas de clé API
  if (!apiKey && process.env.NODE_ENV === 'development') {
    console.log('\n📧 ===== EMAIL SIMULATION (DEV MODE) =====')
    console.log('De:', FROM_EMAIL)
    console.log('À:', SCHOOL_EMAIL)
    console.log('Reply-To:', replyTo || 'N/A')
    console.log('Sujet:', subject)
    console.log('---')
    console.log(html.replace(/<[^>]*>/g, '').substring(0, 200) + '...')
    console.log('==========================================\n')
    return { ok: true }
  }

  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return {
      ok: false,
      error: 'Configuration manquante',
      details: 'La clé API Resend n\'est pas configurée. Veuillez contacter l\'administrateur ou utiliser sewainstitute.edu@gmail.com'
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [SCHOOL_EMAIL],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    })

    if (!res.ok) {
      const errorBody = await res.text()
      console.error('Resend API error:', res.status, errorBody)

      let errorMessage = "Échec de l'envoi de l'email"
      let details = ''

      if (res.status === 401 || res.status === 403) {
        errorMessage = 'Erreur d\'authentification'
        details = 'La clé API Resend est invalide. Contactez l\'administrateur.'
      } else if (res.status === 422) {
        errorMessage = 'Données invalides'
        details = 'Le format de l\'email est incorrect. Vérifiez vos informations.'
      } else if (res.status === 429) {
        errorMessage = 'Limite atteinte'
        details = 'Trop d\'emails envoyés. Réessayez dans quelques minutes.'
      } else if (res.status >= 500) {
        errorMessage = 'Erreur du service d\'email'
        details = 'Le service Resend est temporairement indisponible. Réessayez plus tard.'
      }

      return { ok: false, error: errorMessage, details }
    }

    return { ok: true }
  } catch (error) {
    console.error('Error calling Resend API:', error)
    return {
      ok: false,
      error: 'Erreur de connexion',
      details: 'Impossible de joindre le service d\'email. Vérifiez votre connexion internet et réessayez.'
    }
  }
}

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
        <p><strong>Durée de formation:</strong> ${(validatedData as Record<string, unknown>).duration}</p>
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

    const sendResult = await sendViaResend(subject, htmlContent, validatedData.email)

    if (!sendResult.ok) {
      return NextResponse.json(
        {
          success: false,
          message: sendResult.error || "Une erreur est survenue lors de l'envoi",
          details: sendResult.details || '',
        },
        { status: 502, headers: securityHeaders }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: type === 'inscription'
          ? 'Votre demande d\'inscription a été enregistrée avec succès'
          : 'Votre message a été envoyé avec succès',
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

// Security headers configuration for Sewa Institute
export const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel-scripts.com https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https: http:",
    "connect-src 'self' https://*.vercel-insights.com https://vercel.live https://vitals.vercel-insights.com",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "base-uri 'self'",
    'upgrade-insecure-requests',
  ].join('; '),
}

// Rate limiting configuration
export const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Trop de requêtes depuis cette adresse IP, veuillez réessayer plus tard.',
}

// CSRF protection configuration
export const CSRF_CONFIG = {
  enabled: true,
}

// Input validation rules
export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d\s\-\+\(\)]{8,20}$/,
  minPasswordLength: 8,
  maxInputLength: 1000,
}

// Sensitive data fields
export const SENSITIVE_FIELDS = ['password', 'token', 'secret', 'apiKey', 'creditCard', 'ssn']

// In-memory rate limiting store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Get client IP address from request
export function getClientIP(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()

  const realIp = headers.get('x-real-ip')
  if (realIp) return realIp

  return '127.0.0.1'
}

// Rate limit checker
export function getRateLimit(
  clientIP: string,
  maxRequests: number = RATE_LIMIT_CONFIG.max,
  windowMs: number = RATE_LIMIT_CONFIG.windowMs
): { allowed: boolean; remaining: number } {
  const now = Date.now()

  if (!rateLimitStore.has(clientIP)) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { allowed: true, remaining: maxRequests - 1 }
  }

  const record = rateLimitStore.get(clientIP)!

  if (now > record.resetTime) {
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + windowMs,
    })
    return { allowed: true, remaining: maxRequests - 1 }
  }

  record.count++
  const allowed = record.count <= maxRequests
  const remaining = Math.max(0, maxRequests - record.count)

  return { allowed, remaining }
}

// Sanitize object - remove dangerous characters
export function sanitizeObject(obj: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {}

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = value
        .replace(/<[^>]*>/g, '')
        .replace(/[<>\"'`]/g, '')
        .trim()
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      sanitized[key] = value
    } else if (value === null || value === undefined) {
      sanitized[key] = ''
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      sanitized[key] = sanitizeObject(value)
    } else if (Array.isArray(value)) {
      sanitized[key] = value.map(item =>
        typeof item === 'string'
          ? item
              .replace(/<[^>]*>/g, '')
              .replace(/[<>\"'`]/g, '')
              .trim()
          : item
      )
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

// Check for suspicious content patterns
export function containsSuspiciousContent(content: string): boolean {
  if (!content || typeof content !== 'string') return false

  const suspiciousPatterns = [
    /<script[^>]*>[\s\S]*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /union\s+select/gi,
    /drop\s+table/gi,
    /insert\s+into/gi,
    /delete\s+from/gi,
    /exec\s*\(/gi,
    /eval\s*\(/gi,
    /base64_decode/gi,
    /fromCharCode/gi,
    /String\.fromCharCode/gi,
  ]

  return suspiciousPatterns.some(pattern => pattern.test(content))
}

// Validate email format
export function isValidEmail(email: string): boolean {
  return VALIDATION_RULES.email.test(email)
}

// Validate phone format
export function isValidPhone(phone: string): boolean {
  return VALIDATION_RULES.phone.test(phone)
}

// Check if field is sensitive
export function isSensitiveField(fieldName: string): boolean {
  return SENSITIVE_FIELDS.some(field => fieldName.toLowerCase().includes(field.toLowerCase()))
}

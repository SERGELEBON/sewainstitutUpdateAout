import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'

// Hash du mot de passe (généré avec bcrypt)
// Ne JAMAIS stocker le mot de passe en clair
const ADMIN_PASSWORD_HASH = '$2b$10$HM1nfQ81hHG4ZQ/PpMIw3e0y84aiZHcAnWoeO7bi2O6EjHUcGDsaC' // ZachDg#2026

const SECRET_KEY = new TextEncoder().encode(
  process.env.JWT_SECRET || 'sewa-admin-secret-key-change-in-production-2026'
)

export async function verifyAdminPassword(password: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, ADMIN_PASSWORD_HASH)
  } catch (error) {
    console.error('Password verification error:', error)
    return false
  }
}

export async function createAdminToken(): Promise<string> {
  const token = await new SignJWT({ role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(SECRET_KEY)

  return token
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    return payload.role === 'admin'
  } catch (error) {
    return false
  }
}

// Générer le hash d'un mot de passe (à utiliser une seule fois)
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10)
}

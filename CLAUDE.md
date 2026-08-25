# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sewa Institute is a Next.js 16+ application for English language training in Ghana. Built with TypeScript, Tailwind CSS v4+, and shadcn/ui components. Requires Node.js 20+ and pnpm.

## Key Commands

### Development
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (Next.js standalone mode)
- `pnpm build:analyze` - Build with bundle analysis
- `pnpm start` - Start Next.js production server
- `pnpm start:server` - Start custom production server using server.js

### Code Quality
- `pnpm lint` - Run ESLint with next/core-web-vitals config
- `pnpm lint:fix` - Auto-fix ESLint errors
- `pnpm format` - Format with Prettier (single quotes, no semicolons, 100 char width)
- `pnpm format:check` - Check formatting
- `pnpm type-check` - TypeScript strict mode checking

### Quality Workflows
- `pnpm quality:check` - Run type-check + format check (pre-commit gate)
- `pnpm quality:fix` - Run lint:fix + format
- `pnpm ci` - Full CI pipeline (quality + build + test)
- `pnpm precommit` - Pre-commit quality check

### Security & Testing
- `pnpm test` - Placeholder (no tests configured)
- `pnpm audit` - Security audit (moderate+ severity)
- `pnpm security:scan` - Complete security scan

### LWS Deployment
- `pnpm build:lws` - Build static export with quality checks (deprecated approach)
- `pnpm build:server` - Build standalone with quality checks (current approach)
- `node server.js` - Test production server locally
- See DEPLOIEMENT-LWS.md for full deployment process

## Architecture

### Directory Structure
- `app/` - Next.js App Router with French route naming
  - `/` - Homepage (page.tsx)
  - `/a-propos` - About page
  - `/formations/` - Training courses with nested routes (anglais-general, business-english, preparation-examens, universite, gestion-petrole-gaz)
  - `/bourse` - Scholarship information
  - `/galerie` - Gallery
  - `/contact` - Contact form
  - `/inscription` - Registration
  - `/hebergement` - Accommodation
  - `/formation-en-ligne` - Online training
  - `/presentiel-ghana` - In-person courses in Ghana
  - `/api/` - API routes
  - `layout.tsx` - Root layout with theme provider
  - `globals.css` - Global styles with Tailwind v4
  - `sitemap.ts` - Sitemap generation

- `components/` - Organized by purpose
  - `ui/` - shadcn/ui Radix primitives (accordion, dialog, form, etc.)
  - `shared/` - Reusable custom components
  - `forms/` - Form components with React Hook Form
  - `layout/` - Header, footer, navigation components
  - `dialogs/` - Modal dialogs
  - `theme-provider.tsx` - Dark/light theme support

- `lib/` - Core utilities
  - `constants.ts` - Application-wide constants
  - `security.ts` - Security utilities and CSP helpers
  - `utils.ts` - General utilities (cn helper, etc.)
  - `validators/` - Zod schemas for form validation

- `hooks/` - Custom React hooks
- `public/` - Static assets (images, fonts, etc.)
- `server.js` - **Custom standalone server for LWS hosting** (critical for deployment)

### Tech Stack
- **Framework**: Next.js 16.1+ with App Router, standalone output mode
- **Runtime**: Node.js 20+, React 19.2
- **Language**: TypeScript 5 with strict mode, `jsx: "react-jsx"`
- **Styling**: Tailwind CSS v4.1+ with @tailwindcss/postcss, CSS variables for theming
- **UI Library**: Radix UI primitives via shadcn/ui (new-york style)
- **Forms**: React Hook Form 7.60+ with @hookform/resolvers and Zod 3.25+ validation
- **Icons**: Lucide React
- **Analytics**: @vercel/analytics
- **Package Manager**: pnpm 8+ (required)

### Key Configuration Files
- **next.config.mjs**: 
  - `output: 'standalone'` for Node.js server deployment
  - `typescript.ignoreBuildErrors: true` (fix before production!)
  - `images.unoptimized: true` for hosting flexibility
  - Comprehensive security headers (HSTS, CSP, X-Frame-Options, etc.)
  - English → French route redirects (/about → /a-propos, /gallery → /galerie, etc.)
  - Vercel Blob storage pattern for remote images
  
- **tsconfig.json**: 
  - Strict mode enabled
  - Path alias: `@/*` maps to root
  - Incremental compilation
  - `moduleResolution: "bundler"`
  
- **Prettier**: Single quotes, no semicolons, 100 char width, JSX single quotes, LF line endings
- **ESLint**: Extends next/core-web-vitals only (minimal config)
- **shadcn/ui**: components.json configured with "new-york" style, RSC enabled

### Route Naming Convention
**Critical**: This project uses **French route names** for user-facing pages with automatic redirects from English equivalents for SEO. When adding new routes:
- Primary route: French (e.g., `/a-propos`, `/formations`)
- Add redirect in next.config.mjs from English (e.g., `/about` → `/a-propos`)
- Follow existing pattern in redirects() function

### Security Architecture
- **CSP**: Configured for Vercel Analytics, fonts, and inline styles (unavoidable with Tailwind)
- **Headers**: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **API Routes**: No-cache headers on `/api/*` routes
- **lib/security.ts**: Centralized security utilities
- **Admin Authentication**: JWT + bcrypt for `/admin/cookie-stats` (password: ZachDg#2026)
- **Anti-Scraping**: middleware.ts blocks malicious bots, allows legitimate crawlers
- **Rate Limiting**: 3 attempts/min for login, 30/min for stats API, 100/min for general APIs
- **Cookie Consent**: GDPR-compliant with overlay blocking page until user responds
- **Email Service**: Resend API (no EmailJS) - requires `RESEND_API_KEY` environment variable

### Deployment to LWS (cPanel Node.js Hosting)

**Critical files for deployment:**
- `server.js` - Custom standalone server (root level, executable with `#!/usr/bin/env node`)
  - Checks for Next.js standalone build at `.next/standalone/server.js`
  - Provides `/health` endpoint with server metrics
  - Configured for LWS cPanel environment (hostname: 0.0.0.0, PORT: 3000)
- `.htaccess` - Apache rewrite rules (goes in public_html/, redirects to Node.js app)
- Package structure after build:
  ```
  nodejs/               # Application root on LWS
  ├── server.js        # Entry point
  ├── package.json
  ├── .next/
  │   └── static/      # Critical: must copy from .next/standalone/
  └── public/          # Static assets
  ```

**Build process for LWS:**
1. `pnpm build` - Creates `.next/standalone/` with optimized server
2. Copy `.next/standalone/*` to deployment package
3. Copy `.next/static/` to deployment package `.next/static/`
4. Copy `public/` to deployment package
5. Copy `server.js` and `package.json` to deployment package
6. Upload to LWS cPanel → `public_html/nodejs/`
7. Configure Node.js app in cPanel (version 20.x, start file: server.js)
8. Set environment variables: `NODE_ENV=production`, `PORT=3000`

**Reference documentation:**
- DEPLOIEMENT-LWS.md - Step-by-step deployment guide
- LWS-TROUBLESHOOTING.md - Common deployment issues and fixes

### Known Technical Debt
- TypeScript build errors ignored (`typescript.ignoreBuildErrors: true`) - should be fixed
- No test suite configured (`pnpm test` is placeholder)
- Images unoptimized globally - consider enabling Next.js image optimization selectively
- Consider migrating from ESLint minimal config to security/a11y ruleset mentioned in docs

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

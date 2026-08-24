# Sewa Institute - Formation Anglais au Ghana

[![CI/CD Pipeline](https://github.com/votre-utilisateur/sewa/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/votre-utilisateur/sewa/actions/workflows/ci-cd.yml)
[![Security Scan](https://github.com/votre-utilisateur/sewa/actions/workflows/security.yml/badge.svg)](https://github.com/votre-utilisateur/sewa/actions/workflows/security.yml)
[![Performance Check](https://github.com/votre-utilisateur/sewa/actions/workflows/performance.yml/badge.svg)](https://github.com/votre-utilisateur/sewa/actions/workflows/performance.yml)

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

![Code Quality](https://img.shields.io/badge/Code%20Quality-A+-brightgreen)
![Security Score](https://img.shields.io/badge/Security%20Score-A-blue)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-90+-green)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1-blue)

Sewa est une application web moderne construite avec Next.js 13+, offrant une expérience utilisateur fluide et réactive.

## Fonctionnalités

- Interface utilisateur moderne et réactive
- Thème clair/sombre
- Composants accessibles avec Radix UI
- Formulaire avec validation
- Navigation fluide
- Optimisation des performances

## Technologies utilisées

- **Framework**: Next.js 13+
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Gestion d'état**: React Hooks
- **Formulaires**: React Hook Form
- **Validation**: Zod
- **Icônes**: Lucide Icons
- **Outils de développement**: ESLint, Prettier

## Démarrage rapide

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/votre-utilisateur/sewa.git
   cd sewa
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   ```

3. **Démarrer l'environnement de développement**

   ```bash
   pnpm dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## Scripts disponibles

### 🚀 Développement

- `pnpm dev` - Lance le serveur de développement
- `pnpm build` - Crée une version de production
- `pnpm build:analyze` - Build avec analyse du bundle
- `pnpm start` - Démarre le serveur de production

### ✨ Qualité du Code

- `pnpm lint` - Exécute le linter ESLint
- `pnpm lint:fix` - Corrige automatiquement les erreurs de lint
- `pnpm format` - Formate le code avec Prettier
- `pnpm format:check` - Vérifie le formatage du code
- `pnpm type-check` - Vérifie les types TypeScript

### 🔒 Sécurité

- `pnpm audit` - Audit de sécurité des dépendances
- `pnpm security:scan` - Scan de sécurité complet

### 🎯 Workflows Complets

- `pnpm quality:check` - Vérifie lint, types et formatage
- `pnpm quality:fix` - Corrige automatiquement la qualité
- `pnpm ci` - Reproduit le pipeline CI localement

## 🚀 CI/CD et Déploiement

### Workflows Automatisés

- **🔄 CI/CD Principal** : Tests, build et déploiement automatique
- **🔒 Sécurité** : Scan quotidien des vulnérabilités
- **📊 Performance** : Tests Lighthouse et analyse de bundle

### Environnements

- **Staging** : Déploiement automatique depuis `develop`
- **Production** : Déploiement automatique depuis `main`

### Configuration

Voir [.github/DEPLOYMENT.md](.github/DEPLOYMENT.md) pour le guide complet de déploiement.

## Structure du projet

```
sewa/
├── app/               # Dossier principal de l'application Next.js
├── components/        # Composants réutilisables
├── lib/               # Utilitaires et configurations
├── public/            # Fichiers statiques
├── styles/            # Fichiers de style globaux
└── types/             # Définitions de types TypeScript
```

## Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

Votre nom - [@votretwitter](https://twitter.com/votretwitter) - contacts@sewainstitutegh.com

Lien du projet : [https://github.com/votre-utilisateur/sewa](https://github.com/votre-utilisateur/sewa)

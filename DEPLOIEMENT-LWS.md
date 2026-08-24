# Guide de Déploiement Simplifié sur LWS - Node.js 20+

## Prérequis

- Formule LWS cPanel L avec Node.js activé
- Accès cPanel et gestionnaire de fichiers
- Node.js 20+ sur votre environnement local
- pnpm installé localement

## Étape 1: Build local

```bash
# Build pour production
pnpm run build

# Test du serveur (optionnel)
node server.js
# Vérifier: http://localhost:3000/health
```

## Étape 2: Préparation pour LWS

### 2.1 Créer le package de déploiement

```bash
# Créer dossier temporaire
mkdir sewa-lws-deploy
cd sewa-lws-deploy

# Copier les fichiers essentiels
cp -r ../.next/standalone/* .
cp -r ../.next/static ./.next/static
cp -r ../public ./public
cp ../server.js ./
cp ../package.json ./
```

### 2.2 Vérifier le contenu

```bash
# Structure attendue:
sewa-lws-deploy/
├── server.js          # Point d'entrée
├── package.json       # Avec Node.js 20+
├── .next/             # Build Next.js
│   └── static/        # Assets statiques
└── public/            # Fichiers publics
```

## Étape 3: Upload sur LWS

### 3.1 Structure cPanel

```
public_html/
├── .htaccess          # Redirection vers Node.js
└── nodejs/            # Application Node.js
    ├── server.js
    ├── package.json
    ├── .next/
    └── public/
```

### 3.2 Upload des fichiers

1. **Uploader .htaccess** dans `public_html/`
2. **Créer dossier `nodejs`** dans `public_html/`
3. **Uploader tout le contenu** de `sewa-lws-deploy/` dans `public_html/nodejs/`

## Étape 4: Configuration cPanel Node.js

### 4.1 Créer l'application

- **Nom**: Sewa Institute
- **Dossier**: `nodejs`
- **Fichier de démarrage**: `server.js`
- **Version Node.js**: 20.x

### 4.2 Variables d'environnement

```
NODE_ENV=production
PORT=3000
```

### 4.3 Installation et démarrage

```bash
# Dans le terminal cPanel ou interface Node.js
cd nodejs
npm install --production
npm start
```

## Étape 5: Vérification

1. **Test application**: Visitez votre domaine
2. **Test santé**: `https://votredomaine.com/health`
3. **Logs**: Vérifiez dans cPanel > Node.js

## Dépannage

### Problèmes courants

**1. Page par défaut LWS affichée**

- Vérifier que `.htaccess` est dans `public_html/`
- Vérifier que l'application Node.js est DÉMARRÉE dans cPanel
- Redémarrer l'application

**2. Erreur 500**

- Vérifier les logs dans cPanel Node.js
- Vérifier que `server.js` existe et fonctionne
- Vérifier les permissions des fichiers

**3. Assets manquants**

- Vérifier que `.next/static/` est présent
- Vérifier que `public/` contient les fichiers

### Commandes utiles

```bash
# Tester localement
node server.js

# Voir les logs LWS
# Via cPanel > Node.js > Logs

# Redémarrer l'app
# Via cPanel > Node.js > Restart
```

## Architecture finale

```
✅ SIMPLE ET EFFICACE:

Développement:
- server.js (à la racine)
- package.json (Node.js 20+)

LWS Production:
- public_html/.htaccess (redirection)
- public_html/nodejs/server.js (app principale)
- public_html/nodejs/package.json
- public_html/nodejs/.next/
- public_html/nodejs/public/
```

**Fini les complications ! Juste `server.js` + build Next.js** ✨

# 🚨 Guide de Dépannage LWS - Sewa Institute

## Problème : Application ne démarre pas après déploiement

### ✅ Actions immédiates à faire :

#### 1. **Vérifier les logs Node.js sur LWS**
- Aller dans **cPanel > Node.js**
- Cliquer sur votre application
- Regarder les **"Logs"** ou **"Error Logs"**
- Copier les erreurs exactes

#### 2. **Vérifier la configuration Node.js**
Dans cPanel > Node.js, s'assurer que :
- **Version Node.js** : `20.x` (pas 18.x ou 16.x)
- **Dossier Application** : `nodejs`
- **Fichier de démarrage** : `server.js`
- **Mode d'exécution** : `Production`

#### 3. **Variables d'environnement requises**
Ajouter ces variables dans cPanel > Node.js > Variables d'environnement :
```
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

#### 4. **Permissions des fichiers**
Vérifier que tous les fichiers ont les bonnes permissions :
- Fichiers : `644`
- Dossiers : `755`
- `server.js` : `755` (exécutable)

### 🔍 Diagnostic par étapes

#### **Étape 1 : Test du serveur de base**
1. Aller sur : `https://votre-domaine.com/health`
2. Vous devriez voir un JSON avec `"status": "OK"`
3. Si ça marche → Problème Next.js
4. Si ça marche pas → Problème serveur de base

#### **Étape 2 : Vérifier la structure des fichiers**
Sur LWS, dans le dossier `nodejs/`, vous devez avoir :
```
nodejs/
├── server.js          ✅ Point d'entrée
├── package.json       ✅ Dépendances
├── .next/             ✅ Build Next.js
│   ├── static/        ✅ CSS/JS/images
│   └── standalone/    ✅ (si disponible)
└── public/           ✅ Assets publics
```

#### **Étape 3 : Test manuel du serveur**
Dans cPanel > Terminal (ou File Manager > Terminal) :
```bash
cd public_html/nodejs
node server.js
```
- Si erreur → Lire le message exact
- Si pas d'erreur → Problème de configuration LWS

### 🐛 Erreurs communes et solutions

#### **Erreur : "Cannot find module 'next'"**
**Cause** : Dependencies Next.js manquantes
**Solution** :
1. Vérifier que `node_modules/` existe
2. Si manquant, installer : `npm install`
3. Ou utiliser le mode standalone

#### **Erreur : "EADDRINUSE: port already in use"**
**Cause** : Port 3000 déjà utilisé
**Solution** :
1. Changer le port dans les variables d'environnement
2. Ou arrêter l'ancienne application

#### **Erreur : "Module not found: .next/BUILD_ID"**
**Cause** : Build Next.js incomplet
**Solution** :
1. Re-build l'application : `pnpm build`
2. Re-déployer via CI/CD

#### **Erreur : "Permission denied"**
**Cause** : `server.js` pas exécutable
**Solution** :
```bash
chmod +x server.js
chmod 755 server.js
```

### 🔧 Solutions d'urgence

#### **Solution 1 : Mode Standalone forcé**
Si Next.js standard ne marche pas, utiliser le standalone :
1. Vérifier si `.next/standalone/server.js` existe
2. Si oui, copier son contenu vers `server.js`

#### **Solution 2 : Mode Basic Server**
Si tout échoue, le nouveau `server.js` lancera un serveur de base qui affiche :
- Page d'accueil simple
- Endpoint `/health` fonctionnel
- Message "Application is being deployed"

#### **Solution 3 : Déploiement manuel**
Si CI/CD ne marche pas :
1. Build local : `pnpm build`
2. Compresser le dossier `.next/standalone/`
3. Upload via FTP dans `nodejs/`
4. Renommer `server.js` du standalone

### 📋 Checklist de vérification

Cocher chaque élément :

**Configuration LWS :**
- [ ] Node.js 20.x activé
- [ ] Application configurée dans cPanel
- [ ] Variables d'environnement ajoutées
- [ ] Dossier `nodejs/` créé

**Fichiers :**
- [ ] `server.js` présent et exécutable
- [ ] `package.json` présent
- [ ] `.next/static/` présent
- [ ] `public/` présent

**Tests :**
- [ ] `/health` répond avec JSON
- [ ] Logs Node.js sans erreur critique
- [ ] Application "Running" dans cPanel

**Secrets GitHub :**
- [ ] `FTP_HOST` configuré
- [ ] `FTP_USER` configuré
- [ ] `FTP_PASS` configuré

### 🆘 Support d'urgence

Si rien ne marche :

1. **Contact LWS Support** avec ces infos :
   - Version Node.js utilisée
   - Messages d'erreur exacts
   - Structure des fichiers uploadés

2. **Test FTP manuel** :
   - Connecter via FileZilla avec les credentials
   - Vérifier que les fichiers sont bien uploadés
   - Tester les permissions

3. **Rollback** :
   - Sauvegarder la version actuelle
   - Déployer une version plus simple
   - Tester step par step

### 📞 Que faire maintenant ?

1. **Immediate** : Aller checker les logs LWS Node.js
2. **Tester** : `https://votre-domaine.com/health`
3. **Redémarrer** : Application dans cPanel
4. **Reporter** : Les erreurs exactes que vous voyez

Le nouveau `server.js` inclut des fallbacks pour que quelque chose démarre même si Next.js échoue !
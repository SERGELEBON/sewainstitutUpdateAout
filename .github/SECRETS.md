# GitHub Secrets Configuration pour LWS

Ce fichier décrit les secrets GitHub requis pour le déploiement automatique sur LWS.

## 🔐 Secrets Requis

Pour que le pipeline CI/CD fonctionne, vous devez configurer les secrets suivants dans GitHub :

### Variables FTP LWS (À configurer dans GitHub)

**🚨 IMPORTANT** : Ces secrets doivent être configurés dans GitHub Settings > Secrets and variables > Actions

1. **`FTP_HOST`**
   - Nom du secret : `FTP_HOST`
   - Valeur : `ftp.sewainstitutegh.com` ou `91.234.194.113`

2. **`FTP_USER`**
   - Nom du secret : `FTP_USER`
   - Valeur : `sewainstftp@sewainstitutegh.com`

3. **`FTP_PASS`**
   - Nom du secret : `FTP_PASS`
   - Valeur : `Sewapro#123`

### ⚙️ Étapes pour configurer les secrets GitHub :

1. Aller sur GitHub.com → Votre repository
2. Cliquer sur **Settings** (onglet)
3. Dans la sidebar gauche : **Secrets and variables** → **Actions**
4. Cliquer **New repository secret**
5. Ajouter chaque secret avec le nom exact ci-dessus
6. Sauvegarder

### 🔄 Actions après configuration des secrets :

1. **Push sur main** → Déclenche automatiquement le déploiement
2. **Vérifier les logs** dans Actions tab sur GitHub
3. **Redémarrer l'application** dans LWS cPanel → Node.js
4. **Vérifier le site** : https://sewainstitutegh.com

## 📝 Comment Configurer les Secrets

1. Allez dans votre repository GitHub
2. Cliquez sur **Settings** > **Secrets and variables** > **Actions**
3. Cliquez sur **New repository secret** pour chaque secret
4. Ajoutez les trois secrets avec leurs valeurs respectives

## 🌍 Configuration des Environnements

Le pipeline utilise deux environnements :

### Production (branche `main`)
- Déploie vers : `/public_html/nodejs/`
- URL : `https://sewainstitutegh.com`
- Rétention des backups : 30 jours

### Staging (branche `dev`)
- Déploie vers : `/public_html/staging/nodejs/`
- URL : `https://staging.sewainstitutegh.com`
- Rétention des backups : 7 jours

## 🚀 Structure de Déploiement LWS

```
LWS cPanel Structure:
public_html/
├── .htaccess                 # Redirection Apache (optionnel)
├── nodejs/                   # Application production
│   ├── server.js            # Point d'entrée Node.js
│   ├── package.json         # Dépendances
│   ├── .next/               # Build Next.js
│   ├── public/              # Assets statiques
│   ├── .htaccess           # Config Apache locale
│   └── node_modules/        # Dépendances standalone
└── staging/                 # Application staging (optionnel)
    └── nodejs/              # Même structure que production
```

## 🔧 Configuration cPanel LWS

Après le déploiement automatique :

1. **Aller dans cPanel > Node.js**
2. **Créer/configurer l'application** :
   - Nom : `Sewa Institute`
   - Version Node.js : `20.x`
   - Dossier : `nodejs`
   - Fichier de démarrage : `server.js`
   - Variables d'environnement :
     ```
     NODE_ENV=production
     PORT=3000
     ```

3. **Démarrer l'application**
4. **Vérifier les logs** en cas de problème

## ⚡ Optimisations

- **Cache** : Utilisation du cache GitHub Actions pour les dépendances
- **Build incrémental** : Réutilisation du cache Next.js
- **Déploiement intelligent** : Évite les téléchargements inutiles avec `dangerous-clean-slate: false`
- **Backup automatique** : Création d'artifacts GitHub en cas de rollback nécessaire

## 🐛 Dépannage

### Si le déploiement échoue :

1. **Vérifiez les secrets** : FTP_HOST, FTP_USER, FTP_PASS
2. **Vérifiez les permissions** du compte FTP
3. **Vérifiez l'espace disque** sur LWS
4. **Consultez les logs** du workflow GitHub

### Si l'application ne démarre pas sur LWS :

1. **Vérifiez Node.js 20+** est activé
2. **Vérifiez les variables d'environnement**
3. **Consultez les logs** cPanel Node.js
4. **Vérifiez** que `server.js` existe dans le bon dossier

## 📊 Monitoring

Le pipeline inclut :
- ✅ Vérification de santé automatique
- ✅ Test de performance de base
- ✅ Backup automatique
- ✅ Notifications de déploiement

---

**Sécurité** : Ne jamais exposer les secrets FTP dans le code source !
# 🚀 Portfolio — FULGENCE Damivelo

Portfolio personnel de développeur full-stack (Web, Desktop, Mobile) construit avec **Next.js 14**, **Tailwind CSS** et **Framer Motion**.

## ✨ Fonctionnalités

- Design sombre futuriste avec animations avancées
- Curseur personnalisé avec effet de suivi
- Particules interactives en arrière-plan
- Barre de progression de scroll
- Animations d'entrée au scroll (intersection observer)
- Effet de frappe animé (typewriter)
- Barres de compétences animées
- Timeline interactive pour l'expérience
- Formulaire de contact (ouvre le client mail)
- Entièrement responsive (mobile, tablette, desktop)
- Export statique (déployable partout gratuitement)

## 🛠 Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Animations** : CSS animations + Framer Motion
- **Icons** : Lucide React
- **Typo** : Syne (display) + DM Sans (body) + Space Mono
- **Déploiement** : Vercel (gratuit)

---

## 📦 Installation locale

```bash
# 1. Cloner le repo
git clone https://github.com/23fulgence23/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 🐙 Publier sur GitHub

### Étape 1 — Créer un repo GitHub

1. Allez sur [github.com/new](https://github.com/new)
2. Nom du repo : `portfolio`
3. Visibilité : **Public** (requis pour Vercel gratuit)
4. Ne pas initialiser avec README
5. Cliquez **Create repository**

### Étape 2 — Initialiser Git et pousser

```bash
# Dans le dossier du projet
git init
git add .
git commit -m "🚀 Initial commit — Portfolio FULGENCE Damivelo"
git branch -M main
git remote add origin https://github.com/23fulgence23/portfolio.git
git push -u origin main
```

---

## 🌐 Déploiement gratuit sur Vercel

### Option A — Via l'interface Vercel (recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez **"New Project"**
4. Importez votre repo `portfolio`
5. Laissez les paramètres par défaut (Next.js détecté automatiquement)
6. Cliquez **"Deploy"**
7. ✅ Votre site est en ligne en ~1 minute !

URL automatique : `https://portfolio-23fulgence23.vercel.app`

### Option B — Via CLI Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option C — GitHub Pages (alternative)

```bash
# Build statique
npm run build
# Le dossier /out/ contient le site statique
# Uploadez ce dossier sur GitHub Pages
```

---

## 🔄 Mettre à jour le portfolio

```bash
# Après modifications
git add .
git commit -m "✏️ Mise à jour [description]"
git push

# Vercel redéploie automatiquement !
```

---

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Page d'accueil
│   │   └── globals.css     # Styles globaux
│   └── components/
│       ├── Cursor.tsx      # Curseur personnalisé
│       ├── Navbar.tsx      # Navigation
│       ├── Hero.tsx        # Section héro
│       ├── About.tsx       # À propos
│       ├── Skills.tsx      # Compétences
│       ├── Experience.tsx  # Expérience
│       ├── Education.tsx   # Formation
│       ├── Projects.tsx    # Projets
│       ├── Contact.tsx     # Contact
│       ├── Footer.tsx      # Pied de page
│       ├── Particles.tsx   # Particules canvas
│       └── ProgressBar.tsx # Barre de scroll
├── public/
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 👤 Contact

- **Email** : fulgencedamivelo6@gmail.com
- **GitHub** : [github.com/23fulgence23](https://github.com/23fulgence23)
- **WhatsApp** : +261 32 532 0054
- **Localisation** : Madagascar 🇲🇬

---

*Portfolio construit avec ❤️ par FULGENCE Damivelo*

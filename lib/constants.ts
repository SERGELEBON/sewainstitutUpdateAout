export const SITE_CONFIG = {
  name: 'Sewa Institute',
  description: 'The Pan African Institute - Formation en anglais au Ghana',
  tagline: "L'école d'anglais des francophones au Ghana et en ligne",
  email: 'contacts@sewainstitutegh.com',
  phone: '026 181 5407',
  phone2: '055 301 9097',
  whatsapp: '+233 26 181 5407',
  website: 'https://www.sewainstitute.edu.gh',
  address: 'Asene, Accra, Ghana',
  socialMedia: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
} as const

export const COLORS = {
  primary: '#1A64B1',
  secondary: '#85CBF4',
  background: '#FFFFFF',
} as const

export const PROGRAMS = [
  {
    id: 'gestion-petrole-gaz',
    title: 'Formation Professionnelle',
    description: "12 formations d'excellence en gestion, technologie, santé et commerce",
    image: '/images/6.jpeg',
  },
  {
    id: 'anglais-general',
    title: 'General English',
    description: "Cours d'anglais général pour tous les niveaux",
    image: '/images/englishg.jpeg',
  },
  {
    id: 'business-english',
    title: 'Business English',
    description: 'Anglais professionnel pour votre carrière',
    image: '/images/580026396-1412673150500321-1436120580185097043-n.jpg',
  },
  {
    id: 'preparation-examens',
    title: 'IELTS & TOEFL',
    description: 'Préparation aux examens internationaux',
    image: '/images/579988675-1412673200500316-6799641391410815907-n.jpg',
  },
  {
    id: 'universite',
    title: 'Préparation Universitaire',
    description: 'Intégration dans les universités anglophones',
    image: '/images/527473937-1319972669770370-6240416561571836221-n.jpg',
  },
]

export const TESTIMONIALS = [
  {
    name: 'Jake Obed',
    country: "Côte d'Ivoire",
    text: "Étudier à Sewa Institute m'a permis non seulement d'améliorer mon anglais, mais aussi de rencontrer une communauté d'étudiants motivés.",
    avatar: '/images/cote_ivoire.jpeg',
  },
  {
    name: 'Houreimatou',
    country: 'Mali',
    text: "Je manquais de confiance. Grâce à l'accompagnement personnalisé, je peux désormais communiquer en anglais avec aisance.",
    avatar: '/images/mali.jpeg',
  },
  {
    name: 'Ayaba',
    country: 'Togo',
    text: "L'immersion linguistique au Ghana avec Sewa a été incroyable. J'ai progressé plus que je ne l'aurais jamais imaginé.",
    avatar: '/images/togo.jpeg',
  },
  {
    name: 'Fatima',
    country: 'Sénégal',
    text: "Aujourd'hui, je parle anglais avec assurance et je me sens prêt pour mes projets internationaux.",
    avatar: '/images/527473937-1319972669770370-6240416561571836221-n.jpg',
  },
]

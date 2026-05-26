export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  notes?: string
  image: string
  whatsappMsg: string
}

export const products: Product[] = [
  {
    id: 'ros',
    name: 'ROS',
    tagline: 'Premium Cologne for Men',
    description: 'Calm and refreshing fragrance that commands presence without demanding attention. Clean, confident, unforgettable.',
    image: '/images/ros.jpg',
    whatsappMsg: 'Hi! I want to order ROS Cologne',
  },
  {
    id: 'soie-dor-oud',
    name: "Soie d'Or Oud",
    tagline: 'Silken Oud, Plant-Based',
    description: 'A liquid-gold glow of silken oud, smooth as silk and luminous as sunrise. Warm, radiant, and deeply feminine.',
    image: '/images/soie.jpg',
    whatsappMsg: "Hi! I want to order Soie d'Or Oud",
  },
  {
    id: 'ros-oud',
    name: 'ROS OUD',
    tagline: 'Oud & Essences',
    description: 'Seduction in every drop. Rich, velvety smoothness with oud and essences that linger long after you leave the room.',
    image: '/images/ros-oud.jpg',
    whatsappMsg: 'Hi! I want to order ROS OUD',
  },
  {
    id: 'le-mot',
    name: 'Le Mot',
    tagline: 'Subtle & Delicate',
    description: 'The word is Cologne. A fragrance that whispers rather than shouts — refined, poetic, and quietly powerful.',
    image: '/images/le-mot.jpg',
    whatsappMsg: 'Hi! I want to order Le Mot Cologne',
  },
  {
    id: 'oud',
    name: 'Oud',
    tagline: 'Oud · Cream Amber · Musk',
    description: 'Rich black oud with warm cream amber and soft musk. Deep and unforgettable — a fragrance that becomes your signature.',
    notes: 'Black Oud · Cream Amber · White Musk',
    image: '/images/oud.jpg',
    whatsappMsg: 'Hi! I want to order Oud',
  },
]

export const WHATSAPP_NUMBER = '2349138479374'


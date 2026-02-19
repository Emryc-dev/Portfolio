import React from 'react';
import { Project, Skill, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'swiftlink',
    title: 'SwiftLink',
    description: 'Plateforme web moderne orientée performance et architecture scalable.',
    longDescription: 'SwiftLink est une solution complète mettant l\'accent sur une architecture REST propre.',
    stack: ['Node.js', 'Express', 'REST API', 'Architecture MVC', 'PostgreSQL'],
    imageUrl: '/images/SwiftLink - Logistics & Delivery Management - Google Chrome 19_02_2026 21_32_00.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/Made-Easy-Tech-MET/swiftlink-saas',
    category: 'FullStack'
  },
  {
    id: 'creatoros',
    title: 'CreatorOS',
    description: 'Plateforme digitale orientée créateurs de contenu avec gestion sécurisée.',
    longDescription: 'Un système d\'exploitation pour créateurs incluant authentification JWT.',
    stack: ['React', 'Supabase', 'JWT', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/images/CreatorOS _ Scale Your YouTube Channel - Google Chrome 19_02_2026 23_18_58.png',
    liveUrl: '#',
    githubUrl: '#',
    category: 'FullStack'
  },
  {
    id: 'cabinet-comptable',
    title: 'Cabinet Comptable',
    description: 'Site vitrine professionnel pour un cabinet d\'expertise comptable.',
    longDescription: 'Design épuré et sérieux pour le secteur financier.',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Responsive Design'],
    imageUrl: '/images/notec-consulting.png',
    liveUrl: 'https://notec-consulting.vercel.app/',
    githubUrl: 'https://github.com/Emeryc-dev/notec-consulting',
    category: 'Frontend'
  },
  {
    id: 'Electro-store',
    title: 'Electro-Store',
    description: 'Site e-commerce moderne avec gestion des produits, panier et paiement.',
    longDescription: 'Plateforme e-commerce complète avec interface utilisateur fluide et gestion des commandes.',
    stack: ['React', 'Tailwind CSS', 'State Management', 'Responsive Design'],
    imageUrl: '/images/Electro - Electronics Store - Google Chrome 05_12_2025 13_18_05.png',
    liveUrl: 'https://electro-store-xi.vercel.app/',
    githubUrl: 'https://github.com/Emeryc-dev/Electro-store',
    category: 'Frontend'
  },
  {
    id: 'ThinkUp',
    title: 'ThinkUp',
    description: 'Application web de génération d\'idées de projets pour étudiants en développement.',
    longDescription: 'Outil interactif permettant aux étudiants de générer des idées de projets originaux et stimulants selon leur niveau et leurs intérêts.',
    stack: ['React', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
    imageUrl: '/images/ThinkUp.png',
    liveUrl: 'https://think-up-gilt.vercel.app/',
    githubUrl: 'https://github.com/Emeryc-dev/ThinkUp',
    category: 'Others'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 85, icon: 'fa-brands fa-react', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'fa-solid fa-palette', category: 'Frontend' },
  { name: 'Node.js', level: 80, icon: 'fa-brands fa-node-js', category: 'Backend' },
  { name: 'PHP & MySQL', level: 75, icon: 'fa-brands fa-php', category: 'Backend' },
  { name: 'Supabase', level: 85, icon: 'fa-solid fa-bolt', category: 'Database' },
  { name: 'PostgreSQL', level: 80, icon: 'fa-solid fa-database', category: 'Database' },
  { name: 'Python', level: 60, icon: 'fa-brands fa-python', category: 'Backend' },
  { name: 'Architecture MVC', level: 85, icon: 'fa-solid fa-layer-group', category: 'Tools' }
];

export const SERVICES: Service[] = [
  {
    title: 'Développement Web Full Stack',
    description: 'Conception et réalisation d\'applications web de A à Z (Frontend + Backend + DB).',
    icon: 'fa-solid fa-rocket'
  },
  {
    title: 'Dashboards Administrateur',
    description: 'Interface de gestion intuitive pour piloter vos données en temps réel.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: 'Intégration Backend & API',
    description: 'Mise en place d\'architectures REST robustes et sécurisées.',
    icon: 'fa-solid fa-gears'
  }
];

export const SYSTEM_PROMPT = `
Tu es l'assistant IA d'Emeryc Djomo, un Développeur Web Junior Full Stack ambitieux.
Tes réponses doivent être professionnelles, chaleureuses et orientées vers le recrutement.

À propos d'Emeryc :
- Nom : Emeryc Djomo
- Contact WhatsApp : +237672170259
- Spécialités : React, Node.js, Supabase, PHP, Tailwind CSS.
- Projets : SwiftLink (Node.js), CreatorOS (Supabase), Cabinet Comptable (Vitrine).
- Soft skills : Sérieux, orienté solution, esprit d'équipe.

Réponds aux questions des recruteurs sur son parcours, ses compétences techniques et sa disponibilité. 
Si on te demande ses coordonnées, donne son WhatsApp : +237672170259.
Garde tes réponses concises et impactantes.
`;

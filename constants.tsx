import React from 'react';
import { Project, Skill, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'swiftlink',
    title: 'SwiftLink',
    description: 'Plateforme web moderne orientee performance et architecture scalable.',
    longDescription: 'SwiftLink est une solution complete mettant l accent sur une architecture REST propre.',
    stack: ['Node.js', 'Express', 'REST API', 'Architecture MVC', 'PostgreSQL'],
    imageUrl: '/images/SwiftLink - Logistics & Delivery Management - Google Chrome 19_02_2026 21_32_00.png',
    liveUrl: 'https://swiftlink-saas.vercel.app/',
    githubUrl: 'https://github.com/Made-Easy-Tech-MET/swiftlink-saas',
    category: 'FullStack'
  },
  {
    id: 'creatoros',
    title: 'CreatorOS',
    description: 'Plateforme digitale orientee createurs de contenu avec gestion securisee.',
    longDescription: 'Un systeme d exploitation pour createurs incluant authentification JWT.',
    stack: ['React', 'Supabase', 'JWT', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/images/CreatorOS _ Scale Your YouTube Channel - Google Chrome 19_02_2026 23_18_58.png',
    liveUrl: '#',
    githubUrl: '#',
    category: 'FullStack'
  },
  {
    id: 'cabinet-comptable',
    title: 'Cabinet Comptable',
    description: 'Site vitrine professionnel pour un cabinet d expertise comptable.',
    longDescription: 'Design epure et serieux pour le secteur financier.',
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
    longDescription: 'Plateforme e-commerce complete avec interface utilisateur fluide et gestion des commandes.',
    stack: ['React', 'Tailwind CSS', 'State Management', 'Responsive Design'],
    imageUrl: '/images/Electro - Electronics Store - Google Chrome 05_12_2025 13_18_05.png',
    liveUrl: 'https://electro-store-xi.vercel.app/',
    githubUrl: 'https://github.com/Emeryc-dev/Electro-store',
    category: 'Frontend'
  },
  {
    id: 'ThinkUp',
    title: 'ThinkUp',
    description: 'Application web de generation d idees de projets pour etudiants en developpement.',
    longDescription: 'Outil interactif permettant aux etudiants de generer des idees de projets originaux et stimulants selon leur niveau et leurs interets.',
    stack: ['React', 'Tailwind CSS', 'API Integration', 'Responsive Design'],
    imageUrl: '/images/ThinkUp.png',
    liveUrl: 'https://think-up-gilt.vercel.app/',
    githubUrl: 'https://github.com/Emeryc-dev/ThinkUp',
    category: 'Others'
  },
  {
    id: 'figma-dashboard-design',
    title: 'Finance Dashboard UI (Figma)',
    description: 'Conception UI/UX d un dashboard analytique avec parcours utilisateur, composants reutilisables et prototype interactif.',
    longDescription: 'Projet design realise sur Figma: wireframes, design system, variantes de composants et prototype haute fidelite oriente experience utilisateur.',
    stack: ['Figma', 'UI/UX Design', 'Design System', 'Prototyping'],
    imageUrl: '/images/stitch_splash_screen/splash_screen/screen.png',
    galleryUrls: [
      '/images/stitch_splash_screen/splash_screen/screen.png',
      '/images/stitch_splash_screen/authentication/screen.png',
      '/images/stitch_splash_screen/mes_parcelles/screen.png',
      '/images/stitch_splash_screen/d%C3%A9tails_de_la_parcelle/screen.png',
      '/images/stitch_splash_screen/carte_m%C3%A9t%C3%A9o/screen.png',
      '/images/stitch_splash_screen/alertes_m%C3%A9t%C3%A9o/screen.png',
      '/images/stitch_splash_screen/dashboard_-_d%C3%A9butant/screen.png',
      '/images/stitch_splash_screen/dashboard_-_expert/screen.png',
      '/images/stitch_splash_screen/tableau_de_bord_admin/screen.png'
    ],
    liveUrl: 'https://www.figma.com/',
    category: 'Frontend'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 75, icon: 'fa-brands fa-react', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: 'fa-solid fa-palette', category: 'Frontend' },
  { name: 'Node.js', level: 60, icon: 'fa-brands fa-node-js', category: 'Backend' },
  { name: 'PHP & MySQL', level: 75, icon: 'fa-brands fa-php', category: 'Backend' },
  { name: 'Supabase', level: 55, icon: 'fa-solid fa-bolt', category: 'Database' },
  { name: 'PostgreSQL', level: 80, icon: 'fa-solid fa-database', category: 'Database' },
  { name: 'Python', level: 60, icon: 'fa-brands fa-python', category: 'Backend' },
  { name: 'Architecture MVC', level: 45, icon: 'fa-solid fa-layer-group', category: 'Tools' },
  { name: 'Figma', level: 80, icon: 'fa-brands fa-figma', category: 'Tools' }
];

export const SERVICES: Service[] = [
  {
    title: 'Conception Produit et Architecture Web',
    description: 'Structuration de solutions web robustes: cadrage du besoin, choix techniques et architecture evolutive adaptee a vos objectifs.',
    icon: 'fa-solid fa-rocket'
  },
  {
    title: 'Developpement Frontend Premium',
    description: 'Interfaces modernes, rapides et accessibles avec une attention forte a l UX, la performance et la coherence visuelle.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: 'Backend, API et Donnees',
    description: 'Conception d API securisees, modelisation de bases de donnees et automatisation des flux pour des applications fiables.',
    icon: 'fa-solid fa-gears'
  }
];

export const SYSTEM_PROMPT = `
Tu es l assistant IA d Emeryc Djomo, un Developpeur Web Junior Full Stack ambitieux.
Tes reponses doivent etre professionnelles, chaleureuses et orientees vers le recrutement.

A propos d Emeryc :
- Nom : Emeryc Djomo
- Contact WhatsApp : +237672170259
- Specialites : React, Node.js, Supabase, PHP, Tailwind CSS.
- Projets : SwiftLink (Node.js), CreatorOS (Supabase), Cabinet Comptable (Vitrine).
- Soft skills : Serieux, oriente solution, esprit d equipe.

Reponds aux questions des recruteurs sur son parcours, ses competences techniques et sa disponibilite.
Si on te demande ses coordonnees, donne son WhatsApp : +237672170259.
Garde tes reponses concises et impactantes.
`;

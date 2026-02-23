import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Christian Subasik',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Ingénieur des médias (en formation)',
      en: 'Media Engineer (in training)',
    },
    subtitle: {
      fr: 'Étudiant en ingénierie des médias à la HEIG',
      en: 'Media Engineering student at HEIG',
    },
    location: 'Orbe, Suisse',
  },
  seo: {
    title: 'Christian Subasik — Ingénieur des médias (en formation)',
    description: 'CV interactif de Christian Subasik, étudiant en ingénierie des médias à la HEIG.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Christian Subasik', href: 'https://www.linkedin.com/in/christian-subasik-5082253a0' },
    { type: 'github', label: 'KryssPii', href: 'https://github.com/KryssPii' },
    { type: 'email', label: 'christiansubasik@gmail.com' },
    { type: 'phone', label: '+41 76 281 21 48' },
    { type: 'location', label: 'Orbe, Suisse' },
  ],
  skills: [
    {
      title: { fr: 'Bureautique', en: 'Office Tools' },
      type: 'badges',
      items: [
        { name: 'Canva' },
        { name: 'Office365' },
      ],
    },
    {
      title: { fr: 'Compétences transversales', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: "Aisance orale, Prise d'initiatives, Polyvalence, Esprit d'équipe, Autonomie", en: 'Oral ease, Initiative, Versatility, Team spirit, Autonomy' } },
      ],
    },
    {
      title: { fr: 'Autres compétences', en: 'Other Skills' },
      type: 'text',
      items: [
        { name: { fr: "Gestion du stress, Contact humain, Travail d'équipe, Bartending, Gestion des stocks", en: 'Stress management, Human contact, Teamwork, Bartending, Stock management' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'ville-lausanne',
      company: { fr: 'Service de la petite enfance, Ville de Lausanne', en: 'Early Childhood Service, City of Lausanne' },
      role: { fr: 'Auxiliaire informatique', en: 'IT Auxiliary' },
      type: { fr: 'Contrat temporaire', en: 'Temporary contract' },
      period: { fr: 'mars 2025 - août 2025', en: 'March 2025 - August 2025' },
      description: {
        fr: 'Planification des rendez-vous avec les centres de vie enfantine pour le déploiement de comptes informatiques et aide à la conception d\'affiches.',
        en: 'Scheduling appointments with childcare centers for IT account deployment and assisting in poster design.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Travail en équipe avec les éducateurs et le service informatique.',
          en: 'Teamwork with educators and the IT department.',
        },
        tasks: {
          fr: [
            'Planification et gestion des rendez-vous.',
            'Déploiement de comptes informatiques pour les éducateurs.',
            'Conception d\'affiches pour les centres.',
          ],
          en: [
            'Scheduling and managing appointments.',
            'Deploying IT accounts for educators.',
            'Designing posters for the centers.',
          ],
        },
        env: {
          fr: 'Canva, Office365',
          en: 'Canva, Office365',
        },
      },
    },
    {
      id: 'protectas',
      company: { fr: 'Protectas SA', en: 'Protectas SA' },
      role: { fr: 'Agent de sécurité auxiliaire', en: 'Auxiliary Security Agent' },
      type: { fr: 'CDD', en: 'Fixed-term contract' },
      period: { fr: '2021 - 2022', en: '2021 - 2022' },
      description: {
        fr: 'Gestion et patrouille de sites, surveillance et fouille si nécessaire, travail de jour ou de nuit.',
        en: 'Site management and patrolling, surveillance and search if necessary, day or night work.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Travail en équipe et gestion des situations de stress.',
          en: 'Teamwork and stress situation management.',
        },
        tasks: {
          fr: [
            'Patrouille et surveillance des sites.',
            'Gestion des situations d\'urgence.',
            'Travail en horaires décalés (jour/nuit).',
          ],
          en: [
            'Patrolling and monitoring sites.',
            'Managing emergency situations.',
            'Working in rotating shifts (day/night).',
          ],
        },
      },
    },
    {
      id: 'hessel',
      company: { fr: 'Hessel espace culturel', en: 'Hessel Cultural Space' },
      role: { fr: 'Aide au service', en: 'Service Assistant' },
      type: { fr: 'Contrat temporaire', en: 'Temporary contract' },
      period: { fr: '2022 - 2023', en: '2022 - 2023' },
      description: {
        fr: 'Aide au service au bar, entretien de l\'établissement, gestion des stocks et fermeture du lieu.',
        en: 'Assistance at the bar, maintenance of the establishment, stock management, and closing the venue.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Travail en contact direct avec la clientèle.',
          en: 'Direct customer contact work.',
        },
        tasks: {
          fr: [
            'Service au bar et gestion des commandes.',
            'Entretien et rangement de l\'espace culturel.',
            'Fermeture du lieu et gestion des stocks.',
          ],
          en: [
            'Bar service and order management.',
            'Maintenance and tidying of the cultural space.',
            'Closing the venue and stock management.',
          ],
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'HEIG', en: 'HEIG' },
      degree: { fr: 'Bachelor en ingénierie des médias', en: 'Bachelor in Media Engineering' },
      specialty: { fr: 'Ingénierie des médias', en: 'Media Engineering' },
      period: { fr: 'En cours', en: 'Ongoing' },
    },
    {
      school: { fr: 'CPNV', en: 'CPNV' },
      degree: { fr: 'Maturité post-CFC TASV', en: 'Post-CFC TASV Maturity' },
      period: '2024',
    },
    {
      school: { fr: 'CPNV', en: 'CPNV' },
      degree: { fr: 'CFC Électronicien', en: 'Electronics Technician CFC' },
      period: '2021',
    },
    {
      school: { fr: 'École obligatoire', en: 'Compulsory School' },
      degree: { fr: "Diplôme de fin d'études", en: 'School Leaving Certificate' },
      period: '2015',
    },
  ],
  hobbies: [
    { title: { fr: 'Basse', en: 'Bass' } },
    { title: { fr: 'Cuisine', en: 'Cooking' } },
    { title: { fr: 'Lecture', en: 'Reading' } },
    { title: { fr: 'Cinéma', en: 'Cinema' } },
    { title: { fr: 'Jeux vidéo', en: 'Video Games' } },
  ],
  // Projets (section commentée pour ajout futur)\n  // projects: [],\n  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCES' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'Autres missions...', en: 'Other tasks...' },
      techEnv: { fr: 'Env. technique :', en: 'Tech. env.:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences for more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}


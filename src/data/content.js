import { creativeWorkflow, developerProfile, portfolioProjects, solutions } from './siteData';

const baseProjects = portfolioProjects;

export const contentByLang = {
  en: {
    nav: {
      brand: 'MYC Beauty Innovation',
      links: [
        ['Dashboard', '#dashboard'],
        ['Solutions', '#solutions'],
        ['Portfolio', '#portfolio'],
        ['Chatbot', '#chatbot'],
        ['Intelligence', '#intelligence']
      ]
    },
    hero: {
      badge: 'B2B Strategic Proposal',
      title: 'Cosmetic packaging, product innovation, and R&D for premium brands.',
      typing: 'Creating intelligent solutions for the cosmetics industry.',
      copy:
        'A premium showcase for MYC Beauty Innovation: packaging design, make-up and fragrance innovation, custom solutions, and sustainable development.',
      primaryCta: 'View company',
      secondaryCta: 'View offer',
      stats: [
        ['Founded', '2012'],
        ['Market', 'Global B2B'],
        ['Scale', '200-500']
      ],
      snapshotLabel: 'Company Profile',
      snapshotTitle: 'An international cosmetic company focused on innovation',
      outcomeLabel: 'Positioning',
      outcomeCopy: 'A B2B supplier for cosmetic brands with a focus on design, performance, and brand experience.',
      philosophyLabel: 'Strengths',
      philosophyCopy:
        'Premium packaging, product innovation, international reach, and ESG thinking with recycled materials and eco-packaging.'
    },
    dashboard: {
      eyebrow: 'Operational View',
      title: 'A dynamic read of product and innovation management.',
      copy: 'Simulated indicators show how MYC connects design, production, and quality across packaging projects.',
      kpis: [
        ['Innovation', '88%', 'Alignment between market trends and product development.'],
        ['Quality', '4%', 'Visual control and packaging compliance.'],
        ['Sustainability', '72%', 'Tracking recycled materials and eco-packaging.']
      ],
      stateLabel: 'Project data',
      stateTitle: 'Innovation levers summary',
      realtime: 'Live simulation',
      oeeTarget: 'Target level',
      anomalyRate: 'Quality alert',
      energyIndex: 'Eco-design index'
    },
    solutions: {
      eyebrow: 'MYC Monastir',
      title: 'General company overview.',
      copy:
        'MYC Beauty Innovation designs premium cosmetic packaging, develops custom solutions, and supports brands from concept to delivery.',
      label: 'Company',
      overviewTitle: 'Cosmetic packaging, make-up innovation, and R&D',
      operationalLens: 'Core activities',
      operationalLensCopy: 'Cosmetic packaging design and manufacturing, product innovation, and custom solutions.',
      nextStep: 'Explore',
      nextStepCopy: 'View portfolio',
      cards: solutions,
      mapTitle: 'Location context and official site',
      companyName: 'MYC Beauty Innovation',
      companySubtitle: 'Cosmetic packaging and product innovation',
      officialSiteLabel: 'Official site',
      officialSiteUrl: 'https://www.myc-innovation.com/',
      locationLabel: 'Location',
      locationUrl:
        'https://www.google.com/maps/dir//PQG2%2BW3+MYC+Beauty+innovation+TUNISIA,+Menzel+Harb/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x13020d001063bfb5:0x6b898891dc8ddc6?sa=X&ved=1t:57443&ictx=111',
      locationEmbedUrl: 'https://www.google.com/maps?q=PQG2%2BW3+MYC+Beauty+innovation+TUNISIA,+Menzel+Harb&z=16&output=embed',
      logoLabel: 'Logo',
      logoCopy: 'Reserved space for the official logo. The current badge is a clean, consistent placeholder.',
      logoAsset: '/assets/myc/logo/logo-myc.png',
      previewLabel: 'Interactive preview',
      previewCopy: 'Activate a card to view the live site in an embedded frame and compare each project.',
      showcaseCards: [
        {
          title: 'ATS AI CV Analyzer',
          subtitle: 'AI/NLP',
          url: 'https://ats-ten-delta.vercel.app/',
          description: 'Applicant screening and CV intelligence for recruitment workflows.',
          image: '/assets/myc/site-images/b1.jpg'
        },
        {
          title: 'EVA Ecommerce',
          subtitle: 'Commerce',
          url: 'https://eva-ecommerce-azlv.vercel.app/',
          description: 'A modern e-commerce showcase with a polished product experience.',
          image: '/assets/myc/site-images/b2.jpg'
        },
        {
          title: 'Expert IA Automatisation',
          subtitle: 'AI Training',
          url: 'https://expert-ia-automatisation.vercel.app/',
          description: 'Training and automation journeys built around practical AI adoption.',
          image: '/assets/myc/site-images/b3.jpg'
        },
        {
          title: 'IHEC Carthage Banking Portfolio',
          subtitle: 'Finance',
          url: 'https://bank-portfolio-optimizer.vercel.app/',
          description: 'A student banking portfolio with optimization-oriented presentation.',
          image: '/assets/myc/site-images/b4.jpg'
        },
        {
          title: 'My Portfolio',
          subtitle: 'Personal brand',
          url: 'https://bortoflo.vercel.app/',
          description: 'The main personal portfolio and professional presentation layer.',
          image: '/assets/myc/site-images/b5.jpg'
        }
      ]
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Filterable projects that show range without losing strategic clarity.',
      copy:
        'Each project is framed as a relevant capability for industry: language intelligence, optimization, and embedded control.',
      filters: ['All', 'AI/NLP', 'Data Science', 'C++/IoT'],
      capability: 'Applied industrial capability'
    },
    intelligence: {
      eyebrow: 'Creative Intelligence',
      title: 'A rapid branding workflow for industrial concepts and interfaces.',
      copy:
        'Leonardo AI helps explore visual directions quickly, while Canva locks the presentation into clean executive-ready assets.',
      pipelineTitle: 'Design-to-proposal pipeline',
      pipelineCopy:
        'The goal is not generic AI art. It is rapid industrial storytelling: concept scenes, dashboard mockups, and branded proposal visuals that move from idea to stakeholder-ready material quickly.',
      stepLabel: 'Step',
      leonadoTitle: 'Leonardo AI',
      leonadoCopy: 'Used to explore scenes, industrial atmosphere, product visualization, and fast iterations.',
      canvaTitle: 'Canva',
      canvaCopy: 'Used to turn validated concepts into pitch decks, one-pagers, and proposal collateral.',
      outcomeLabel: 'Outcome',
      outcomeCopy:
        'A creative intelligence layer that shortens branding cycles, improves visual consistency, and keeps the industrial message stable from concept to rollout.'
    },
    chatbot: {
      assistantIntro:
        `I can help you present MYC Beauty Innovation: packaging, innovation, R&D, B2B positioning, and the Monastir opportunity. Ask me a company question or open a strategic topic.`,
      title: 'AI Assistant',
      subtitle: 'MYC company concierge',
      questionsTitle: 'Suggested company questions',
      quickQuestions: [
        'What does MYC Beauty Innovation do?',
        'Who are MYC’s main clients?',
        'What are the company’s core activities?',
        'What is the business model?',
        'Why is Monastir strategically important?',
        'How can AI help MYC grow?'
      ],
      placeholder: 'Ask about MYC Beauty Innovation...',
      loading: 'Thinking through the company brief...',
      buttonLabel: 'Open company chatbot'
    },
    footer: {
      title: 'MYC Beauty Innovation',
      copy: 'Cosmetic packaging and product innovation portfolio.',
      links: ['Dashboard', 'Solutions', 'Portfolio', 'Intelligence']
    }
  },
  fr: {
    nav: {
      brand: 'MYC Beauty Innovation',
      links: [
        ['Tableau de bord', '#dashboard'],
        ['Solutions', '#solutions'],
        ['Portfolio', '#portfolio'],
        ['Chatbot', '#chatbot'],
        ['Intelligence', '#intelligence']
      ]
    },
    hero: {
      badge: 'Proposition stratégique B2B',
      title: 'Packaging cosmétique, innovation produit et R&D pour des marques premium.',
      typing: 'Créer des solutions intelligentes pour l industrie cosmétique.',
      copy:
        'Une vitrine premium pensée pour MYC Beauty Innovation: design packaging, innovation make-up et fragrance, solutions sur mesure et développement durable.',
      primaryCta: 'Voir la société',
      secondaryCta: 'Voir les offres',
      stats: [
        ['Création', '2012'],
        ['Marché', 'B2B global'],
        ['Taille', '200-500']
      ],
      snapshotLabel: 'Profil société',
      snapshotTitle: 'Entreprise cosmétique internationale et orientée innovation',
      outcomeLabel: 'Positionnement',
      outcomeCopy: 'Fournisseur B2B pour marques cosmétiques avec un focus sur le design, la performance et l experience marque.',
      philosophyLabel: 'Points forts',
      philosophyCopy:
        'Packaging premium, innovation produit, présence internationale et logique ESG avec matériaux recyclés et eco-packaging.'
    },
    dashboard: {
      eyebrow: 'Vision opérationnelle',
      title: 'Une lecture dynamique du pilotage produit et innovation.',
      copy: 'Des indicateurs simulés illustrent la capacité de MYC a relier conception, production et qualité sur des projets packaging.',
      kpis: [
        ['Innovation', '88%', 'Alignement entre tendances marche et developpement produit.'],
        ['Qualite', '4%', 'Controle visuel et conformité des packagings.'],
        ['Durabilite', '72%', 'Suivi des materiaux recyclés et eco-packaging.']
      ],
      stateLabel: 'Donnees projet',
      stateTitle: 'Synthese des leviers d innovation',
      realtime: 'Simulation en direct',
      oeeTarget: 'Niveau cible',
      anomalyRate: 'Alerte qualite',
      energyIndex: 'Indice eco-design'
    },
    solutions: {
      eyebrow: 'MYC Monastir',
      title: 'Présentation générale de la société.',
      copy:
        'MYC Beauty Innovation conçoit des packagings cosmétiques premium, développe des solutions sur mesure et accompagne les marques de la phase concept a la livraison.',
      label: 'Societe',
      overviewTitle: 'Packaging cosmétique, innovation make-up et R&D',
      operationalLens: 'Activites principales',
      operationalLensCopy: 'Design et fabrication de packaging cosmétique, innovation produit et solutions sur mesure.',
      nextStep: 'Explorer',
      nextStepCopy: 'Voir le portfolio',
      cards: solutions,
      mapTitle: 'Contexte geographique et site officiel',
      companyName: 'MYC Beauty Innovation',
      companySubtitle: 'Packaging cosmétique et innovation produit',
      officialSiteLabel: 'Site officiel',
      officialSiteUrl: 'https://www.myc-innovation.com/',
      locationLabel: 'Localisation',
      locationUrl:
        'https://www.google.com/maps/dir//PQG2%2BW3+MYC+Beauty+innovation+TUNISIA,+Menzel+Harb/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x13020d001063bfb5:0x6b898891dc8ddc6?sa=X&ved=1t:57443&ictx=111',
      locationEmbedUrl: 'https://www.google.com/maps?q=PQG2%2BW3+MYC+Beauty+innovation+TUNISIA,+Menzel+Harb&z=16&output=embed',
      logoLabel: 'Logo',
      logoCopy: 'Emplacement reserve pour le logo officiel. Le badge actuel sert de placeholder propre et coherent.',
      logoAsset: '/assets/myc/logo/logo-myc.png',
      previewLabel: 'Apercu interactif',
      previewCopy: 'Active une carte pour voir le site en direct dans un cadre intégré et comparer chaque projet.',
      showcaseCards: [
        {
          title: 'ATS AI CV Analyzer',
          subtitle: 'AI/NLP',
          url: 'https://ats-ten-delta.vercel.app/',
          description: 'Filtrage des candidats et intelligence CV pour les recrutements.',
          image: '/assets/myc/site-images/b1.jpg'
        },
        {
          title: 'EVA Ecommerce',
          subtitle: 'Commerce',
          url: 'https://eva-ecommerce-azlv.vercel.app/',
          description: 'Une vitrine e-commerce moderne avec une experience produit elegante.',
          image: '/assets/myc/site-images/b2.jpg'
        },
        {
          title: 'Expert IA Automatisation',
          subtitle: 'Formation IA',
          url: 'https://expert-ia-automatisation.vercel.app/',
          description: 'Parcours de formation et automatisation autour de l intelligence artificielle.',
          image: '/assets/myc/site-images/b3.jpg'
        },
        {
          title: 'IHEC Carthage Banking Portfolio',
          subtitle: 'Finance',
          url: 'https://bank-portfolio-optimizer.vercel.app/',
          description: 'Portfolio et showcase d optimisation orienté finance.',
          image: '/assets/myc/site-images/b4.jpg'
        },
        {
          title: 'Mon Portfolio',
          subtitle: 'Marque personnelle',
          url: 'https://bortoflo.vercel.app/',
          description: 'Le portfolio principal et la couche de présentation professionnelle.',
          image: '/assets/myc/site-images/b5.jpg'
        }
      ]
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Des projets filtrables qui montrent la polyvalence sans perdre la clarté stratégique.',
      copy:
        'Chaque projet est positionné comme une capacité pertinente pour l industrie: intelligence du langage, optimisation et contrôle embarqué.',
      filters: ['Tout', 'AI/NLP', 'Data Science', 'C++/IoT'],
      capability: 'Capacite industrielle appliquée'
    },
    intelligence: {
      eyebrow: 'Intelligence créative',
      title: 'Un workflow rapide de branding pour les concepts et interfaces industrielles.',
      copy:
        'Leonardo AI sert a explorer rapidement les pistes visuelles tandis que Canva verrouille la présentation dans des supports propres et executifs.',
      pipelineTitle: 'Pipeline du design a la proposition',
      pipelineCopy:
        'L objectif n est pas de faire de l art IA generique. Il s agit de raconter rapidement une histoire industrielle: scenes conceptuelles, mockups de dashboard et visuels de proposition prets pour les decideurs.',
      stepLabel: 'Etape',
      leonadoTitle: 'Leonardo AI',
      leonadoCopy: 'Utilise pour explorer les scenes, l atmosphère industrielle, la visualisation produit et les iterations rapides.',
      canvaTitle: 'Canva',
      canvaCopy: 'Utilise pour transformer les concepts valides en pitch decks, one-pagers et supports de proposition.',
      outcomeLabel: 'Resultat',
      outcomeCopy:
        'Une couche d intelligence créative qui réduit les cycles de branding, améliore la coherence visuelle et garde le message industriel constant du concept au deploiement.'
    },
    chatbot: {
      assistantIntro:
        `Je peux t aider à présenter MYC Beauty Innovation: packaging, innovation, R&D, positionnement B2B et opportunité Monastir. Pose une question sur la société ou ouvre un sujet stratégique.`,
      title: 'Assistant IA',
      subtitle: 'Concierge société MYC',
      questionsTitle: 'Questions proposées',
      quickQuestions: [
        'Que fait MYC Beauty Innovation ?',
        'Qui sont les clients principaux ?',
        'Quelles sont les activités principales ?',
        'Quel est le modèle économique ?',
        'Pourquoi Monastir est stratégique ?',
        'Comment l’IA peut aider MYC ?'
      ],
      placeholder: 'Pose une question sur MYC Beauty Innovation...',
      loading: 'Analyse du brief société...',
      buttonLabel: 'Ouvrir le chatbot société'
    },
    footer: {
      title: 'MYC Beauty Innovation',
      copy: 'Portfolio de packaging cosmétique et d innovation produit.',
      links: ['Tableau de bord', 'Solutions', 'Portfolio', 'Intelligence']
    }
  }
};

export const defaultLang = 'fr';

export function getContent(lang = defaultLang) {
  return contentByLang[lang] || contentByLang[defaultLang];
}

export { baseProjects, creativeWorkflow, developerProfile };
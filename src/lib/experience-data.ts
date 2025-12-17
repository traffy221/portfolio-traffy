export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    highlight?: string;
}

export const experienceData: Experience[] = [
    {
        role: 'Community Manager & Responsable Communication',
        company: 'Serge Espoir Matomba – PURS (Peuple Uni pour la Rénovation Sociale)',
        location: 'Cameroun',
        period: 'Juin 2024 – Déc. 2024',
        description: [
            'Définition et mise en œuvre de la stratégie de communication politique et digitale du candidat',
            'Animation quotidienne des réseaux sociaux (Twitter, Facebook, Instagram) et renforcement de l\'engagement communautaire',
            'Rédaction de contenus éditoriaux adaptés à chaque plateforme',
            'Audit de la communication digitale de For You Media Africa avec recommandations concrètes',
            'Analyse des KPI (portée, engagement, taux de clics) et ajustement de la stratégie'
        ],
        highlight: 'Expérience internationale'
    },
    {
        role: 'Développeur Web – SEO – Community Manager',
        company: 'Kwingo SARL',
        location: 'Rufisque, Sénégal',
        period: 'Déc. 2023 – Mai 2024',
        description: [
            'Conception et développement du site web de l\'entreprise avec une interface responsive',
            'Optimisation SEO du site et de l\'application mobile',
            'Création et animation des comptes Facebook, LinkedIn et Instagram',
            'Amélioration du trafic organique de +30% en 3 mois grâce à une stratégie de contenu ciblée'
        ],
        highlight: '+30% trafic organique en 3 mois'
    },
    {
        role: 'Professeur en Informatique',
        company: 'École Le Petit Prince',
        location: 'Thiès, Sénégal',
        period: 'Nov. 2022 – Juin 2023',
        description: [
            'Enseignement des bases de l\'informatique et de la bureautique à des élèves du primaire',
            'Initiation aux logiciels Word, Excel, Paint',
            'Création de supports pédagogiques adaptés'
        ]
    }
];

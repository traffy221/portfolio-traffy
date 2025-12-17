export interface Project {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    image?: string;
}

export const projectsData: Project[] = [
    {
        title: 'Teranga Blues',
        description: 'Blog moderne de réflexions et société',
        longDescription: 'Plateforme moderne de blogging avec Next.js, MDX, et un système de commentaires intégré. Design dark avec esthétique contemplative et expérience de lecture fluide.',
        technologies: ['Next.js', 'TypeScript', 'MDX', 'Tailwind CSS', 'Netlify'],
        githubUrl: 'https://github.com/traffy221/blog-teranga-blues',
        liveUrl: 'https://terangablues.netlify.app/',
        image: '/images/teranga-blues.jpg'
    },
    {
        title: 'Kwingo Pay',
        description: 'SaaS Marketing & Dashboard WhatsApp',
        longDescription: 'Plateforme SaaS complète pour la gestion de campagnes marketing WhatsApp. Dashboard analytique, gestion de templates, automatisation de campagnes de masse et CRM intégré.',
        technologies: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'WhatsApp API'],
        githubUrl: 'https://github.com/traffy221/Projet-KwingoPay',
        image: '/images/kwingo.jpg'
    },
    {
        title: 'H-Flix',
        description: 'Application mobile de recommandation de films par humeur',
        longDescription: 'Application mobile recommandant des films en fonction de l\'humeur de l\'utilisateur. Tableau de bord administrateur en React pour la gestion des films et des émotions.',
        technologies: ['React.js', 'Flutter', 'Firebase'],
        githubUrl: 'https://github.com/traffy221/H-Flix',
        image: '/images/h-flix.jpg'
    },
    {
        title: 'Service-Web Électoral',
        description: 'Plateforme de suivi d\'élections en temps réel',
        longDescription: 'Plateforme permettant la visualisation des résultats électoraux en temps réel avec authentification sécurisée et gestion des utilisateurs.',
        technologies: ['Angular', 'Laravel'],
        githubUrl: 'https://github.com/traffy221/Service-Web-',
        image: '/images/service-web.jpg'
    }
];

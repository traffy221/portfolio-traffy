export interface Skill {
    name: string;
    category: string;
}

export const skillCategories = [
    'Langages',
    'Frameworks',
    'Bases de données',
    'Sécurité & Outils'
];

export const skillsData: Skill[] = [
    // Langages
    { name: 'Java', category: 'Langages' },
    { name: 'Python', category: 'Langages' },
    { name: 'Dart', category: 'Langages' },
    { name: 'JavaScript (ES6+)', category: 'Langages' },
    { name: 'PHP', category: 'Langages' },
    { name: 'HTML5', category: 'Langages' },
    { name: 'CSS3', category: 'Langages' },

    // Frameworks
    { name: 'React.js', category: 'Frameworks' },
    { name: 'Next.js 14', category: 'Frameworks' },
    { name: 'Node.js', category: 'Frameworks' },
    { name: 'Angular', category: 'Frameworks' },
    { name: 'Flutter', category: 'Frameworks' },
    { name: 'Laravel', category: 'Frameworks' },
    { name: 'Bootstrap', category: 'Frameworks' },

    // Bases de données
    { name: 'PostgreSQL', category: 'Bases de données' },
    { name: 'MySQL', category: 'Bases de données' },
    { name: 'Supabase', category: 'Bases de données' },
    { name: 'Firebase', category: 'Bases de données' },

    // Sécurité & Outils
    { name: 'OpenSSL', category: 'Sécurité & Outils' },
    { name: 'SSL/TLS', category: 'Sécurité & Outils' },
    { name: 'Git', category: 'Sécurité & Outils' },
    { name: 'Docker', category: 'Sécurité & Outils' },
    { name: 'RESTful APIs', category: 'Sécurité & Outils' },
];

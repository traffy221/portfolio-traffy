export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    status?: 'En cours' | 'Terminé';
}

export const educationData: Education[] = [
    {
        degree: 'Master en Génie Logiciel',
        institution: 'Université Iba Der Thiam',
        location: 'Thiès',
        period: '2021 – En cours',
        status: 'En cours'
    },
    {
        degree: 'Licence en Génie Logiciel',
        institution: 'ESP Dakar',
        location: 'Dakar',
        period: '2019 – 2020',
        status: 'Terminé'
    },
    {
        degree: 'BTS en Informatique Industrielle et Réseaux',
        institution: 'CFPT Sénégal-Japon',
        location: 'Dakar',
        period: '2016 – 2019',
        status: 'Terminé'
    }
];

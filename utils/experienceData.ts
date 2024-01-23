interface Project {
    title: string
    description: string
    techs: Tech[]
}

interface Tech {
    name: string
    link?: string
}

interface ExperienceData {
    title: string
    projects: Project[]
    date: string
}

export const experienceData: ExperienceData[] = [
    {
        title: 'Desarrollador FullStack - Acroventus',
        projects: [
            {
                title: 'Reclama Bien',
                description: 'Experiencia destacada desarrollando "Reclama Bien" una web para optimizar la gestión de casos legales de un grupo de abogados. La plataforma permite emparejamientos eficientes entre clientes y abogados, a traves de funcionalidades clave como registro de casos y abogados, un panel de administración, verificación de datos, envío de casos por correo y asignación basada en filtros de categorías y servicios.',
                techs: [
                    {
                        name: 'Nuxt',
                        link: 'https://nuxt.com/'
                    },
                    {
                        name: 'TypeScript',
                        link: 'https://www.typescriptlang.org/'
                    },
                    {
                        name: 'TailwindCSS',
                        link: 'https://tailwindcss.com/'
                    },
                    {
                        name: 'MongoDB',
                        link: 'https://www.mongodb.com/es'
                    },
                    {
                        name: 'AWS-S3',
                        link: 'https://aws.amazon.com/es/s3/'
                    }
                ]
            }
        ],
        date: '10/2022 - 01/2024'
    },
]

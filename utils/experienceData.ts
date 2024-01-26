interface Project {
    title: string
    description: string
    techs: Tech[]
}

interface Tech {
    name: string
    link?: string
    icon?: string
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
                description: 'Experiencia destacada desarrollando una web para optimizar la gestión de casos legales de un grupo de abogados. La plataforma permite emparejamientos eficientes entre clientes y abogados, a traves de funcionalidades clave como registro de casos y abogados, un panel de administración, verificación de datos, envío de casos por correo y asignación basada en filtros de categorías y servicios.',
                techs: [
                    {
                        name: 'Nuxt',
                        link: 'https://nuxt.com/',
                        icon: 'nuxt'
                    },
                    {
                        name: 'TypeScript',
                        link: 'https://www.typescriptlang.org/',
                        icon: 'typescript'
                    },
                    {
                        name: 'TailwindCSS',
                        link: 'https://tailwindcss.com/',
                        icon: 'tailwind'
                    },
                    {
                        name: 'NestJS',
                        link: 'https://nestjs.com/',
                        icon: 'nest'
                    },
                    {
                        name: 'MongoDB',
                        link: 'https://www.mongodb.com/es',
                        icon: 'mongodb'
                    },
                    {
                        name: 'AWS-S3',
                        link: 'https://aws.amazon.com/es/s3/',
                        icon: 'aws'
                    }
                ]
            },
            {
                title: 'UFRO',
                description: 'Experiencia destacada desarrollando diversos sitemas necesarios para la reestructuracion de una importante universidad. Abarcando todas las funcionalidades necesarias para una correcta adminitracion interna.',
                techs: [
                    {
                        name: 'Nuxt',
                        link: 'https://nuxt.com/',
                        icon: 'nuxt'
                    },
                    {
                        name: 'TypeScript',
                        link: 'https://www.typescriptlang.org/',
                        icon: 'typescript'
                    },
                    {
                        name: 'Loopback 3',
                        link: 'https://loopback.io/',
                        icon: 'loopback'
                    },
                    {
                        name: 'MySql',
                        link: 'https://www.mysql.com/',
                        icon: 'mysql'
                    },
                    {
                        name: 'Sybase',
                        link: 'https://www.sap.com/latinamerica/products/acquired-brands/what-is-sybase.html',
                        icon: 'sybase'
                    }
                ]
            }
        ],
        date: '10/2022 - 01/2024'
    },
]

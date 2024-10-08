export interface Tech {
  name: string
  link: string
  icon: string
}

interface Problem {
  title: string
  description: string
}

interface Solution {
  title: string
  description: string
}

export interface ProjectData {
  title: string
  description: string
  link: string
  image?: string
  video?: string
  logo?: string
  techs: Tech[]
  problems: Problem[]
  solutions: Solution[]
  color: string
}

export const projectsData: ProjectData[] = [
  {
    title: 'FriendPet',
    description:
      'Esta aplicación permite a los usuarios crear perfiles personalizados para sus mascotas, incluyendo detalles como nombre, edad, raza y características especiales. Cada perfil genera un código QR único que, al escanearse con un celular, dirige a una página con la información de la mascota. Es una solución ideal para identificar mascotas perdidas, facilitando que cualquier persona acceda a los datos necesarios para contactar al dueño rápidamente.',
    link: 'https://friend-pet.vercel.app/auth/login',
    logo: 'https://res.cloudinary.com/ds3dttn8v/image/upload/f_auto,q_auto/v1/portfolio/projects/FriendPet%20Logo%20White',
    image:
      'https://res.cloudinary.com/ds3dttn8v/image/upload/w_700/,q_auto:best/v1/portfolio/projects/FriendPet-2',
    techs: [
      {
        name: 'Nuxt',
        link: 'https://nuxt.com/',
        icon: 'nuxt',
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: 'typescript',
      },
      {
        name: 'NestJS',
        link: 'https://nest.com/',
        icon: 'nest',
      },
      {
        name: 'MongoDB',
        link: 'https://www.mongodb.com/es',
        icon: 'mongodb',
      },
    ],
    problems: [
      {
        title: 'Dificultad para identificar mascotas perdidas',
        description:
          'Las mascotas perdidas a menudo llevan collares con identificaciones básicas que no son suficientes para obtener información detallada o actualizada.',
      },
      {
        title: 'Falta de un método de contacto directo',
        description:
          'Las medallas tradicionales de identificación sólo contienen el nombre de la mascota y un número telefónico, lo que limita las formas de contacto o información adicional que se podría necesitar.',
      },
      {
        title: 'Información de la mascota no siempre disponible o actualizada',
        description:
          'Los propietarios de mascotas no tienen un lugar centralizado para mantener toda la información actualizada (número de contacto, necesidades especiales, vacunas, etc.).',
      },
      {
        title: 'Desconexión entre las mascotas y la tecnología',
        description:
          'Aunque existen aplicaciones para mascotas, no siempre están vinculadas a un método sencillo y accesible como un código QR que cualquiera pueda escanear.',
      },
      {
        title: 'Pérdida de tiempo en la búsqueda de mascotas',
        description:
          'Encontrar a un dueño puede requerir tiempo si los datos de contacto no son visibles de inmediato o si se necesita más información sobre la mascota antes de tomar acción.',
      },
    ],

    solutions: [
      {
        title: 'Identificación rápida y accesible con código QR',
        description:
          'La aplicación genera un perfil detallado de la mascota que está vinculado a un código QR, el cual puede ser escaneado con cualquier dispositivo móvil para obtener acceso instantáneo a la información de la mascota.',
      },
      {
        title: 'Información completa y centralizada',
        description:
          'Cada perfil incluye datos actualizados sobre la mascota, como nombre, raza, edad, información de salud, fotos, y formas de contacto del dueño, lo que facilita una respuesta rápida en caso de pérdida.',
      },
      {
        title: 'Información de la mascota no siempre disponible o actualizada',
        description:
          'Los propietarios de mascotas no tienen un lugar centralizado para mantener toda la información actualizada (número de contacto, necesidades especiales, vacunas, etc.).',
      },
      {
        title: 'Método moderno y eficiente de identificación',
        description:
          'Al integrar el código QR en los collares o accesorios de la mascota, cualquier persona puede acceder a la información necesaria sin tener que contactar directamente al dueño, agilizando el proceso de reencuentro.',
      },
      {
        title: 'Actualización y gestión de información en tiempo real',
        description:
          'Los dueños pueden actualizar los perfiles de sus mascotas en cualquier momento, asegurando que la información siempre esté vigente y accesible.',
      },
    ],
    color: 'green',
  },

  {
    title: 'AniBackground',
    description:
      'Esta aplicación permite a los usuarios crear fondos animados personalizados a partir de una selección de diseños base. Los usuarios pueden elegir colores, patrones y estilos de animación para generar backgrounds únicos que pueden descargarse y utilizarse en diferentes proyectos, como sitios web, presentaciones y redes sociales. La plataforma facilita la creación de fondos visualmente atractivos sin necesidad de conocimientos avanzados en diseño.',
    link: 'https://ani-background.vercel.app/',
    logo: 'https://res.cloudinary.com/ds3dttn8v/image/upload/f_auto,q_auto/v1/portfolio/projects/cqtyzsp6l5lao7comovv',
    video:
      'https://res.cloudinary.com/ds3dttn8v/video/upload/w_700/,q_auto:best/v1/portfolio/projects/AniBackground',
    techs: [
      {
        name: 'Nuxt',
        link: 'https://nuxt.com/',
        icon: 'nuxt',
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        icon: 'typescript',
      },
    ],
    problems: [
      {
        title: 'Creación de fondos animados requiere habilidades avanzadas',
        description:
          'La creación de backgrounds animados personalizados normalmente requiere conocimientos en animación CSS y diseño gráfico, lo que puede limitar la creatividad de quienes no poseen estas habilidades.',
      },
      {
        title: 'Falta de opciones accesibles y personalizables',
        description:
          'Muchos generadores de fondos animados tienen opciones limitadas de personalización, lo que impide a los usuarios crear algo realmente único y adaptado a sus necesidades específicas.',
      },
      {
        title: 'El tiempo requerido para crear fondos animados',
        description:
          'Diseñar un fondo animado atractivo desde cero puede llevar tiempo, especialmente si el usuario necesita experimentar con diferentes efectos y configuraciones.',
      },
      {
        title: 'Compatibilidad y usabilidad en diferentes plataformas',
        description:
          'No todos los backgrounds animados están optimizados para ser usados en diversas plataformas y resoluciones, lo cual puede afectar su uso en diferentes contextos.',
      },
    ],
    solutions: [
      {
        title: 'Plantillas de diseño base accesibles',
        description:
          'La aplicación ofrece una variedad de plantillas animadas que pueden servir como base para la personalización, permitiendo a los usuarios comenzar con un diseño predefinido y ahorrar tiempo.',
      },
      {
        title: 'Opciones de personalización intuitivas',
        description:
          'Con controles fáciles de usar, los usuarios pueden modificar colores, velocidades de animación y patrones, creando backgrounds únicos sin necesidad de conocimientos técnicos.',
      },
      {
        title: 'Descarga y exportación sencilla',
        description:
          'Una vez creado el background, los usuarios pueden descargarlo en varios formatos optimizados para diferentes plataformas, asegurando compatibilidad y fácil integración.',
      },
      {
        title: 'Optimización automática para diferentes dispositivos',
        description:
          'Los fondos animados generados se adaptan automáticamente a diversas resoluciones, asegurando que luzcan bien en cualquier dispositivo y entorno.',
      },
      {
        title: 'Facilidad de uso para no diseñadores',
        description:
          'La plataforma permite a cualquier persona, independientemente de su experiencia en diseño, crear backgrounds animados personalizados con solo unos pocos clics.',
      },
    ],
    color: 'blue',
  },
]

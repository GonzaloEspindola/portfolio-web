interface Tech {
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
  image: string
  techs: Tech[]
  problems: Problem[]
  solutions: Solution[]
  color: string
}

export const projectsData: ProjectData[] = [
  {
    title: 'FriendPet',
    description:
      'Esta aplicación permite a los usuarios crear perfiles personalizados para sus mascotas, integrando información esencial como nombre, edad, raza y características especiales. Cada perfil está vinculado a un código QR único que puede ser escaneado fácilmente con un celular, llevando al usuario directamente a una página web con los detalles de la mascota. Esta solución es ideal para identificar mascotas perdidas, ya que cualquier persona con acceso al código QR puede ver la información necesaria para contactar al dueño rápidamente.',
    link: 'https://friend-pet.vercel.app/auth/login',
    image:
      'https://res.cloudinary.com/ds3dttn8v/image/upload/f_auto,q_auto/v1/portfolio/projects/FriendPet-1',
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
]

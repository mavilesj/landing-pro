// ============================================================
// CONTENIDO DEL SITIO - Pri Chaves
// ============================================================
// Edita este archivo para cambiar cualquier texto del sitio.
// Para agregar un nuevo producto de Expansión Alineada,
// agrega un nuevo objeto al arreglo `expansionProducts`.
// ============================================================

export const site = {
  name: 'Pri Chaves',
  tagline: 'Coaching · Mentoría',
  description:
    'Acompañamiento consciente para tu expansión personal y profesional.',
  // Link de la llamada de contacto (Calendly, WhatsApp, etc.)
  bookingLink: '#',
  // Link de contacto por email o WhatsApp
  contactLink: '#',
}

// ------------------------------------------------------------
// PÁGINA PRINCIPAL
// ------------------------------------------------------------
export const home = {
  hero: {
    greeting: 'Hola, soy',
    name: 'Pri Chaves',
    description:
      'Acompaño a mujeres en su proceso de expansión personal y profesional, desde un lugar consciente, auténtico y alineado con quienes realmente son.',
    ctaPrimary: { label: 'Ver programas', href: '/expansion-alineada' },
    ctaSecondary: { label: 'Conocer la Masterclass', href: '/masterclass' },
    // Ruta de tu foto (colócala en /public/images/hero.jpg)
    imageAlt: 'Pri Chaves',
    imageSrc: '/images/hero.jpg',
  },
  about: {
    title: '¿Por qué trabajar conmigo?',
    paragraphs: [
      'Escribe aquí tu historia. Cuéntale a tu audiencia quién eres, cuál es tu misión y qué te hace diferente como coach y mentora.',
      'Formación, experiencia, enfoque de trabajo — añade lo que resuene con tu esencia y conecte con tu cliente ideal.',
    ],
  },
  productsSection: {
    title: 'Formas de trabajar juntas',
  },
  testimonials: {
    title: 'Lo que dicen mis clientas',
    // Agrega o elimina testimonios aquí
    items: [
      {
        quote:
          'Testimonio de clienta 1. Escribe aquí el resultado transformador y la experiencia real.',
        author: 'Nombre',
        location: 'País',
      },
      {
        quote:
          'Testimonio de clienta 2. Escribe aquí el resultado transformador y la experiencia real.',
        author: 'Nombre',
        location: 'País',
      },
      {
        quote:
          'Testimonio de clienta 3. Escribe aquí el resultado transformador y la experiencia real.',
        author: 'Nombre',
        location: 'País',
      },
    ],
  },
  contact: {
    title: 'Hablemos',
    description:
      'Si sientes que es el momento de dar el siguiente paso, estoy aquí para acompañarte.',
    ctaLabel: 'Reservar una llamada',
  },
}

// ------------------------------------------------------------
// MASTERCLASS
// ------------------------------------------------------------
export const masterclass = {
  tag: 'Recurso digital',
  title: 'Nombre de la Masterclass',
  titleItalic: '',           // parte del título en cursiva (opcional)
  shortDescription:
    'Una experiencia de aprendizaje profundo con planificador de Notion incluido para acompañarte en tu proceso.',
  description:
    'Descripción principal de la masterclass. ¿Qué aprenderás? ¿A quién va dirigida? ¿Cuál es la transformación que obtendrán?',
  price: '$XX USD',
  priceNote: 'Pago único · Acceso inmediato',
  ctaLabel: 'Quiero la Masterclass',
  // Ruta de imagen (colócala en /public/images/masterclass.jpg)
  imageSrc: '/images/masterclass.jpg',
  imageAlt: 'Masterclass Pri Chaves',

  forWhom: {
    title: 'Esta masterclass es para ti si…',
    items: [
      'Situación o dolor específico de tu cliente ideal',
      'Deseo o meta que quieren alcanzar',
      'Obstáculo que enfrentan actualmente',
      'Transformación que están buscando',
    ],
  },

  includes: [
    {
      title: 'Masterclass en video',
      desc: 'Acceso inmediato y de por vida a la grabación completa.',
    },
    {
      title: 'Planificador Notion',
      desc: 'Una plantilla diseñada para que puedas aplicar lo aprendido de forma organizada y efectiva.',
    },
    {
      title: 'Material de apoyo',
      desc: 'Descripción del material complementario que se incluye.',
    },
    {
      title: 'Acceso a comunidad',
      desc: 'Descripción del espacio de comunidad si aplica.',
    },
  ],

  notionPlanner: {
    title: 'Planificador Notion',
    description:
      'Recibirás una plantilla de Notion lista para usar, diseñada específicamente para que puedas organizar y aplicar cada aprendizaje de la masterclass en tu vida diaria.',
    features: [
      'Sección del planificador 1',
      'Sección del planificador 2',
      'Sección del planificador 3',
    ],
  },

  faq: [
    {
      q: '¿Cuándo recibo el acceso?',
      a: 'Inmediatamente después de completar tu pago recibirás un email con todos los accesos.',
    },
    {
      q: '¿Por cuánto tiempo tengo acceso?',
      a: 'El acceso es de por vida. Puedes revisitar el contenido cuando quieras.',
    },
    {
      q: '¿Hay garantía?',
      a: 'Descripción de tu política de garantía o reembolso.',
    },
    {
      q: '¿Necesito conocer Notion para usar el planificador?',
      a: 'No es necesario. La plantilla está diseñada para ser intuitiva y fácil de usar desde el primer momento.',
    },
  ],
}

// ------------------------------------------------------------
// EXPANSIÓN ALINEADA — PÁGINA PRINCIPAL DEL PROGRAMA
// ------------------------------------------------------------
export const expansionOverview = {
  tag: 'Programa de coaching',
  title: 'Expansión',
  titleItalic: 'Alineada',
  description:
    'Un acompañamiento consciente y personalizado para que te muevas desde donde estás hacia donde quieres estar — con claridad, intención y alineación.',
  methodology: {
    title: '¿Cómo trabajamos juntas?',
    description:
      'Descripción de tu metodología, enfoque de trabajo o filosofía de coaching. ¿Qué hace especial tu acompañamiento? ¿Qué pueden esperar las clientas durante el proceso?',
  },
  noDecision: {
    title: '¿No sabes cuál elegir?',
    description:
      'Podemos tener una llamada gratuita de 20 minutos para encontrar juntas la opción que mejor se ajusta a tu momento actual.',
    ctaLabel: 'Reservar llamada gratuita',
  },
  testimonials: [
    {
      quote:
        'Testimonio de clienta que trabajó en el programa Expansión Alineada. Resultado real y transformador.',
      author: 'Nombre',
      location: 'País',
    },
    {
      quote:
        'Testimonio de clienta que trabajó en el programa Expansión Alineada. Resultado real y transformador.',
      author: 'Nombre',
      location: 'País',
    },
  ],
}

// ------------------------------------------------------------
// PRODUCTOS DE EXPANSIÓN ALINEADA
// ============================================================
// Para agregar un nuevo producto:
// 1. Copia uno de los objetos de abajo
// 2. Cambia el `slug` (debe ser único, sin espacios ni acentos)
// 3. Rellena el contenido
// El sitio creará la página automáticamente en:
// /expansion-alineada/[slug]
// ============================================================
export const expansionProducts: ExpansionProduct[] = [
  {
    slug: 'sesion-individual',
    tag: 'Sesión única',
    title: 'Sesión',
    titleItalic: 'Individual',
    shortDescription:
      'Una sesión única de coaching para trabajar un tema concreto con claridad y profundidad.',
    description:
      'Una sesión de coaching de [duración] para trabajar con enfoque y profundidad un tema o situación específica de tu vida o negocio.',
    price: '$XX USD',
    priceNote: '[Duración] · Videollamada por Zoom',
    ctaLabel: 'Reservar mi sesión',
    imageSrc: '/images/sesion-individual.jpg',
    imageAlt: 'Sesión individual de coaching',
    isFeatured: false,

    includes: [
      'Sesión de coaching de [duración] por videollamada.',
      'Espacio de escucha activa y acompañamiento profundo.',
      'Claridad sobre el tema o situación trabajada.',
      'Pasos concretos para avanzar después de la sesión.',
      'Cualquier otro beneficio o entregable que incluyas.',
    ],

    idealFor: [
      'Tienes una situación puntual que quieres trabajar con claridad.',
      'Quieres vivir la experiencia antes de comprometerte con un programa.',
      'Otro perfil de cliente ideal para esta opción.',
    ],

    // Para productos con sesiones detalladas (ej. programa de 3 o 6 sesiones)
    // Deja vacío si no aplica
    sessions: [],
  },

  {
    slug: 'programa-3-sesiones',
    tag: 'Programa · 3 sesiones',
    title: 'Programa',
    titleItalic: '3 Sesiones',
    shortDescription:
      'Un proceso de tres sesiones diseñado para generar un avance real y sostenido en tu vida o negocio.',
    description:
      'Un proceso de tres sesiones para generar un avance real, consciente y sostenido en el área de tu vida que más lo necesita.',
    price: '$XX USD',
    priceNote: '3 sesiones de [duración] · Videollamada por Zoom',
    ctaLabel: 'Quiero este programa',
    imageSrc: '/images/programa-3.jpg',
    imageAlt: 'Programa de 3 sesiones',
    isFeatured: false,

    includes: [
      '3 sesiones de coaching de [duración] cada una.',
      'Acompañamiento por WhatsApp entre sesiones.',
      'Material de apoyo o ejercicios personalizados.',
      'Cualquier otro beneficio o entregable.',
    ],

    idealFor: [
      'Quieres un proceso con estructura y seguimiento.',
      'Tienes un área específica de tu vida que quieres transformar.',
      'Otro perfil de cliente ideal para esta opción.',
    ],

    sessions: [
      {
        num: '01',
        title: 'Sesión de inicio',
        desc: 'Diagnóstico, definición de objetivos y diseño del proceso que vamos a recorrer juntas.',
      },
      {
        num: '02',
        title: 'Sesión de profundización',
        desc: 'Trabajo sobre las creencias, bloqueos o patrones que están limitando tu avance.',
      },
      {
        num: '03',
        title: 'Sesión de integración',
        desc: 'Cierre del proceso, consolidación de aprendizajes y plan de acción concreto para seguir avanzando.',
      },
    ],
  },

  {
    slug: 'programa-6-sesiones',
    tag: 'Programa · 6 sesiones',
    title: 'Programa',
    titleItalic: '6 Sesiones',
    shortDescription:
      'El programa más completo para una transformación profunda. Seis sesiones de acompañamiento personalizado.',
    description:
      'El programa más completo de Expansión Alineada. Seis sesiones de acompañamiento profundo para una transformación real y sostenida.',
    price: '$XX USD',
    priceNote: '6 sesiones de [duración] · Videollamada por Zoom',
    ctaLabel: 'Quiero este programa',
    imageSrc: '/images/programa-6.jpg',
    imageAlt: 'Programa de 6 sesiones',
    isFeatured: true,   // ← muestra badge "Más completo"

    includes: [
      '6 sesiones de coaching de [duración] cada una.',
      'Acompañamiento por WhatsApp durante todo el proceso.',
      'Material de apoyo y ejercicios personalizados.',
      'Acceso al Bonus de Continuidad con descuento especial.',
      'Cualquier otro beneficio o entregable.',
    ],

    idealFor: [
      'Buscas una transformación profunda y sostenida.',
      'Quieres el máximo nivel de acompañamiento.',
      'Otro perfil de cliente ideal para esta opción.',
    ],

    sessions: [
      {
        num: '01',
        title: 'Diagnóstico y visión',
        desc: 'Exploramos tu punto de partida, definimos tus objetivos y diseñamos el mapa de tu proceso.',
      },
      {
        num: '02',
        title: 'Claridad e identidad',
        desc: 'Trabajo profundo sobre quién eres y qué quieres crear desde un lugar auténtico.',
      },
      {
        num: '03',
        title: 'Creencias y bloqueos',
        desc: 'Identificamos y trabajamos los patrones que te han impedido avanzar.',
      },
      {
        num: '04',
        title: 'Acción alineada',
        desc: 'Diseñamos pasos concretos que se alinean con tu visión y tus valores.',
      },
      {
        num: '05',
        title: 'Expansión y consolidación',
        desc: 'Integramos los aprendizajes y consolidamos los nuevos hábitos y perspectivas.',
      },
      {
        num: '06',
        title: 'Cierre y proyección',
        desc: 'Celebramos el proceso, revisamos el camino recorrido y trazamos los próximos pasos.',
      },
    ],
  },

  {
    slug: 'bonus-continuidad',
    tag: 'Seguimiento',
    title: 'Bonus de',
    titleItalic: 'Continuidad',
    shortDescription:
      'Un espacio de seguimiento para quienes ya han trabajado conmigo y desean mantener el impulso de su proceso.',
    description:
      'Un espacio de seguimiento diseñado para quienes ya han trabajado conmigo y quieren mantener el impulso de su proceso, consolidar cambios y seguir expandiéndose.',
    price: '$XX USD',
    priceNote: 'Descripción del formato — sesiones/mensual/etc.',
    ctaLabel: 'Quiero el Bonus',
    imageSrc: '/images/bonus.jpg',
    imageAlt: 'Bonus de continuidad',
    isFeatured: false,

    // Nota especial que aparece en la página (dejar vacío para omitir)
    specialNote:
      'El Bonus de Continuidad está disponible exclusivamente para quienes han completado el Programa de 3 o 6 Sesiones de Expansión Alineada.',

    includes: [
      'Número y duración de sesiones de seguimiento.',
      'Acompañamiento por WhatsApp.',
      'Precio especial para ex-clientas.',
      'Cualquier otro beneficio o entregable.',
    ],

    idealFor: [
      'Ya has completado un proceso de coaching conmigo.',
      'Quieres mantener el acompañamiento para no perder el impulso.',
      'Estás en un momento de transición o nuevo desafío y necesitas apoyo.',
      'Deseas un espacio de seguimiento a un precio especial.',
    ],

    sessions: [],
  },
]

// ------------------------------------------------------------
// TIPOS (no es necesario editarlos)
// ------------------------------------------------------------
export interface ExpansionProduct {
  slug: string
  tag: string
  title: string
  titleItalic: string
  shortDescription: string
  description: string
  price: string
  priceNote: string
  ctaLabel: string
  imageSrc: string
  imageAlt: string
  isFeatured?: boolean
  specialNote?: string
  includes: string[]
  idealFor: string[]
  sessions: { num: string; title: string; desc: string }[]
}

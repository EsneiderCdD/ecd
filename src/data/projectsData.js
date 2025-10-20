import martina1 from "@/assets/images/martina1.webp";
import mt1 from "@/assets/images/mt1.png";
import mt2 from "@/assets/images/mt2.png";
import mt3 from "@/assets/images/mt3.png";
import mt4 from "@/assets/images/mt4.png";
import mrs from "@/assets/images/mrs.png";
import mrs2 from "@/assets/images/mrs2.png";
import mrs6 from "@/assets/images/mrs6.png";

import css from "@/assets/stack/css.png";
import js from "@/assets/stack/js.png";
import react from "@/assets/stack/react.png";
import ps1 from "@/assets/images/ps1.png";
import ps2 from "@/assets/images/ps2.png";
import ps5 from "@/assets/images/ps5.png";
import ps6 from "@/assets/images/ps6.png";


import fm from "@/assets/images/fm.png";
import fm1 from "@/assets/images/fm1.png";
import fm2 from "@/assets/images/fm2.png";
import fm3 from "@/assets/images/fm3.png";
import fm4 from "@/assets/images/fm4.png";

import trainit from "@/assets/images/trainit.jpg";
import ti1 from "@/assets/images/ti1.png";
import ti2 from "@/assets/images/ti2.png";
import ti3 from "@/assets/images/ti3.png";

import gua from "@/assets/images/gua.png";

import gua3 from "@/assets/images/gua3.png";
import guau4 from "@/assets/images/guau4.png";

import Guau from "@/assets/images/Guau.png";
import nocountry from "@/assets/images/nocountry.jpg";
import { generateStackHTML } from './stackIcons';

export const projectsList = [
    {
        icon: "📁",
        name: "Martina Clandestina",
        type: "Proyecto Freelance",
        date: "01/03/2025",
        size: "Proyecto Favorito",
        path: "/projects/martinaclandestina",
        description: "Martina Clandestina es una marca de almuerzos con identidad local...",
        previewUrl: martina1,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Mister Soldo",
        type: "Proyecto Freelance",
        date: "01/04/2025 ",
        size: "Completado",
        path: "/projects/mistersoldo",
        description: "Mister Soldo es una plataforma musical diseñada para ofrecer contenido...",
        previewUrl: mrs,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Psicotranspersonal",
        type: "Proyecto Freelance",
        date: "01/06/2025 ",
        size: "Completado",
        path: "/projects/psicotranspersonal",
        description: "Desarrollé una plataforma web para una psicóloga independiente...",
        previewUrl: ps1,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Framer Motion Lab",
        type: "Proyecto Personal",
        date: "16/07/2025",
        size: "Beta",
        path: "/projects/framermotionlab",
        description: "EN DESARROLLO... Laboratorio de animaciones interactivas con Framer Motion...",
        previewUrl: fm4,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "TrainIT",
        type: "Proyecto Colaborativo",
        date: "15/10/2025",
        size: "Completado",
        path: "/projects/trainittrello",
        description: "Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales. El objetivo es que los participantes amplíen su portafolios y mejoren su perfil profesional frente a las empresas activas del mercado.",
        previewUrl: trainit,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Guau",
        type: "Proyecto Personal",
        date: "11/11/2025",
        size: "En Destacado",
        path: "/projects/guau",
        description: "EN DESARROLLO... Estoy construyendo Guau como un legado tecnológico con sentido ético: una herramienta que une psicología, matemática y software en favor del bienestar animal. Más allá de la programación, el proyecto busca que la adopción sea un acto consciente, sustentado en ciencia, empatía y datos reales. Si en algún momento un refugio u organización desea integrarlo, estoy dispuesto a adaptarlo como aporte social y de libre implementación.",
        previewUrl: Guau,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "NoCountry",
        type: "Proyecto Colaborativo",
        date: "21/11/2025",
        size: "Desarrollo",
        path: "/projects/nocountry",
        description: "EN DESARROLLO... Plataforma diseñada para centralizar búsqueda y postulación...",
        previewUrl: nocountry,
        downloadUrl: null,
        linkUrl: null,
    },


    {
        icon: "📁",
        name: "Postulamania",
        type: "Proyecto Personal",
        date: "01/12/2025",
        size: "Desarrollo",
        path: "/projects/postulamania",
        description: "EN DESARROLLO... Clon de Trello adaptado para gestión de entrenamientos...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
        downloadUrl: null,
        linkUrl: null,
    },

    {
        icon: "📄",
        name: "Tareas",
        type: "Notas",
        date: "12/12/2025",
        size: "Urgente",
        path: null,
        description: "(1) Mejorar espaciado, iconos. (2)Completar Stack tecnológico. (3) Blanco y negro. (4) videos, contenido audiovisual. (5) pulir parrafos (6) Hacer postulomania ",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
        downloadUrl: null,
        linkUrl: null,
    },
];








export const projectDetailFiles = {
    martinaclandestina: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/01/2025 ",
            size: "Actualizado",
            description: "Desarrollé una carta digital dinámica con enfoque Mobile First para una marca local de almuerzos. El sistema permite navegar fácilmente entre los menús de cada día de la semana, destacando automáticamente el día actual. Además, facilita pedidos directos vía WhatsApp con mensajes autocompletados que incluyen datos del cliente y del pedido. La interfaz, ligera y funcional, incorpora animaciones suaves y rutas dinámicas optimizadas para dispositivos móviles. El contenido del menú se gestiona desde un archivo data.js, eliminando la necesidad de bases de datos o paneles administrativos, reduciendo costos y mejorando la autonomía del negocio.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/01/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Martina Clandestina",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Navegación Dinámica por Días",
                    description: ["Implementé un sistema de navegación semanal con detección automática del día actual, resaltando visualmente la jornada correspondiente y mejorando la experiencia del usuario."],
                    previewUrl: mt1,
                },
                {
                    icon: "🖼️",
                    name: "Desarrollo de la Carta Digital",
                    description: ["Construí una carta digital dinámica con React.js, Vite y React Router, priorizando la fluidez de carga, el diseño adaptable y la fácil escalabilidad del contenido."],
                    previewUrl: mt2,
                },
                {
                    icon: "🖼️",
                    name: "Diseño Visual e Identidad de Marca",
                    description: ["Incorporé animaciones sutiles, transiciones fluidas y una paleta cromática coherente con la marca, reforzando su estilo visual y su narrativa gastronómica local."],
                    previewUrl: mt3,
                },
                {
                    icon: "🖼️",
                    name: "Sistema de Pedidos Automatizado",
                    description: ["Integré un sistema de pedidos directos por WhatsApp con mensajes autocompletados, reduciendo errores, pasos manuales y garantizando coherencia en la comunicación con los clientes."],
                    previewUrl: mt4,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías Implementadas",
            type: "Imagen y texto",
            date: "25/02/2025 ",
            size: "Actualizado",
            description: generateStackHTML(['react', 'css', 'javascript', 'vite', 'mobileDesign']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "11/09/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-fm.docx",
            linkUrl: null,
        },
        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Explora el proyecto a través de una presentación visual en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "Repositorio y Recursos",
            type: "GitHub",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },
        {
            icon: "📸",
            name: "Instagram Oficial",
            type: "Instagram",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Perfil de Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/instagram-new.png",
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Sitio desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/internet--v1.png",
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },
    ],




    mistersoldo: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: "Diseñé e implementé una landing page con enfoque Mobile First para el artista Mister Soldo, optimizada para la navegación en smartphones y la visualización rápida de contenido musical. La página organiza la información en secciones claras: un carrusel principal de imágenes, reproductores de video de YouTube, una galería interactiva de álbumes con función drag & drop y un espacio dedicado a su último lanzamiento. Incorporé transiciones suaves y desplazamientos automáticos con Swiper.js para lograr una experiencia inmersiva y visualmente atractiva. El sitio fue desplegado en Vercel, asegurando compatibilidad multiplataforma, tiempos de carga óptimos y un acceso ágil desde cualquier dispositivo.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/02/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Mister Soldo",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Landing Page Mobile First",
                    description: ["Diseñé e implementé una landing page completamente orientada a dispositivos móviles, optimizando la jerarquía visual y la velocidad de carga para una experiencia fluida."],
                    previewUrl: mrs,
                },
                {
                    icon: "🖼️",
                    name: "Carruseles Dinámicos con Swiper.js",
                    description: ["Integré carruseles dinámicos con Swiper.js para presentar clips, fotografías y videos del artista de manera atractiva y con transiciones suaves."],
                    previewUrl: mrs2,
                },
                {
                    icon: "🖼️",
                    name: "Interactividad y Movimiento",
                    description: ["Desarrollé una experiencia interactiva utilizando Framer Motion, implementando gestos drag & drop que permiten explorar álbumes y contenido musical de forma inmersiva."],
                    previewUrl: mrs6,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías Implementadas",
            type: "Texto e imagen",
            date: "01/04/2025 ",
            size: "Actualizado",
            description: generateStackHTML(['react', 'framerMotion', 'swiper', 'css', 'javascript', 'vercel', 'mobileDesign']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Ficha técnica descargable en formato Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-mrs.docx",
            linkUrl: null,
        },
        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Descubre la landing page en acción mediante un video de presentación en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "Repositorio y Recursos",
            type: "GitHub",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },
        {
            icon: "📸",
            name: "Instagram Oficial",
            type: "Instagram",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Perfil de Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/instagram-new.png",
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Sitio web desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/internet--v1.png",
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },
    ],



    psicotranspersonal: [
        {
            icon: "📘",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "01/03/2025",
            size: "Actualizado",
            description: [
                "Desarrollé una página web profesional para una psicóloga independiente, utilizando React.js y Framer Motion para crear una interfaz moderna, fluida y alineada con su identidad de marca personal.",
                "Implementé un sistema de pagos propio mediante formularios seguros, reduciendo las comisiones de terceros del 10% al 3.5% y mejorando la rentabilidad del servicio.",
                "Incorporé métricas con Google Analytics para medir conversiones y analizar el comportamiento de los usuarios, brindando datos estratégicos para optimizar contenido y campañas.",
                "El sitio fue optimizado con Vite, logrando tiempos de carga mínimos, excelente rendimiento y una experiencia de navegación ágil tanto en móviles como en escritorio."
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "01/03/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Psicotranspersonal",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🧭",
                    name: "Análisis y Requerimientos",
                    description: [
                        "Lideré el proceso de análisis y levantamiento de requerimientos, aplicando entrevistas, sesiones de brainstorming, cuestionarios y encuestas, además de casos de uso y un mapa de calor de requerimientos para priorizar funcionalidades.",
                        "El proceso incluyó benchmarking y un estudio de color y branding aplicado, definiendo una base visual y estratégica coherente con la identidad profesional de la psicóloga."
                    ],
                    previewUrl: ps1,
                },
                {
                    icon: "🧱",
                    name: "Diseño y Estructura Web",
                    description: [
                        "Diseñé y desarrollé una estructura web completa y responsiva, compuesta por componentes dinámicos como footer, secciones de servicios, área hero, información profesional, preguntas frecuentes, precios y términos y condiciones."
                    ],
                    previewUrl: ps2,
                },
                {
                    icon: "💳",
                    name: "Integración de Pagos y Métricas",
                    description: [
                        "Integré una pasarela de pagos segura (PayU) que redujo las comisiones externas del 10 % al 3.5 %, fortaleciendo la autonomía financiera y el control de reservas desde la propia web.",
                        "Además, incorporé una configuración básica de Google Analytics para el seguimiento de métricas y reconocimiento digital, permitiendo medir el alcance y desempeño del sitio en tiempo real."
                    ],
                    previewUrl: ps5,
                },
                {
                    icon: "🎨",
                    name: "Animaciones y Microinteracciones",
                    description: [
                        "Implementé microinteracciones y animaciones con Framer Motion, aplicando efectos de entrada, transiciones suaves y realces luminosos en botones de acción para guiar la atención del usuario.",
                        "Incorporé cambios sutiles de color y movimiento en textos y componentes, logrando una interfaz dinámica pero sobria.",
                        "Complementé la experiencia con Swiper.js, integrando carruseles visuales, tarjetas animadas y una sección de comentarios personalizada según las preferencias de la psicóloga."
                    ],
                    previewUrl: ps6,
                }
            ]
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Imagen y texto",
            date: "01/04/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'vite', 'framer', 'swiper', 'javascript', 'css', 'google']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-ps.docx",
            linkUrl: null,
        },

        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },

        {
            icon: "🐙",
            name: "Repositorio GitHub",
            type: "GitHub",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },

        {
            icon: "📸",
            name: "Instagram Profesional",
            type: "Instagram",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/instagram-new.png",
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },

        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Sitio desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/internet--v1.png",
            linkUrl: "https://martinacocina.netlify.app/",
        },
    ],


    guau: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: [
                "Estoy construyendo Guau como una plataforma web orientada a optimizar el proceso de adopción canina mediante un sistema de compatibilidad psicométrica. El proyecto combina análisis psicológico, matemática aplicada y desarrollo web en un entorno React",

            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Guau",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🎨",
                    name: "Diseño y Frontend",
                    description: [
                        "Estoy diseñando una interfaz limpia, empática y funcional con un enfoque minimalista, priorizando la experiencia de adopción sobre la lógica de negocio. Estoy estructurando componentes reutilizables —cards dinámicas, rutas, modales y pantallas de detalle— que permiten simular el proceso visual de selección y compatibilidad de forma fluida y emocionalmente atractiva.",
                        "Estoy integrando un chatbot funcional que acompaña el test de compatibilidad, actualmente en fase inicial con una escala líquida de 1 a 4. Aunque la experiencia aún es estática, estoy trabajando en una interacción más conversacional y dinámica. A nivel visual, estoy explorando animaciones con Framer Motion y microinteracciones que refuercen la conexión entre el usuario y el proceso de adopción."
                    ],
                    previewUrl: gua,
                },
                {
                    icon: "🧩",
                    name: "Backend y Datos",
                    description: [
                        "Estoy desarrollando un backend funcional enfocado en la gestión y persistencia de datos de perros, usuarios y administradores. Actualmente incluye autenticación, rutas básicas y un panel de administración visible solo para el administrador, desde el cual es posible registrar, actualizar y gestionar la información de los animales.",
                        "No estoy implementando lógica de negocio compleja porque Guau busca mantenerse adaptable a distintos modelos sociales o institucionales. El backend sirve como soporte estructural para el motor psicométrico, dejando abierta la posibilidad de que futuras versiones integren módulos de compatibilidad, estadísticas o paneles analíticos."
                    ],
                    previewUrl: gua3,
                },
                {
                    icon: "🧠",
                    name: "Psicometría y Algoritmo",
                    description: [
                        "Estoy elaborando dos instrumentos psicométricos paralelos: el Test de Usuario y la Observación Canina. Cada uno convierte respuestas conductuales en vectores normalizados, que luego se analizan mediante un modelo matemático basado en distancia euclidiana para determinar la compatibilidad entre adoptante y perro.",
                        "Estoy diseñando interpretaciones automáticas del score, visualizaciones y ponderaciones que en el futuro permitirán ajustar la afinidad según dimensiones emocionales o rasgos de comportamiento. Es un trabajo que mezcla psicología aplicada, matemáticas y experiencia de usuario en un mismo entorno digital."
                    ],
                    previewUrl: null,
                },
                {
                    icon: "🚀",
                    name: "Proyección Técnica",
                    description: [
                        "Estoy planificando iteraciones que incorporan ponderaciones por dimensión, filtros por rasgos (tamaño, salud, energía), ajustes automáticos con datos reales y un chatbot más conversacional. Busco integrar un sistema de retroalimentación visual en las cards (animaciones, sonidos, transformaciones de imagen) que genere un entorno más inmersivo.",
                        "En etapas futuras, Guau podrá incorporar redes de grafos, IA generativa para interpretación de resultados y un módulo estadístico para refugios, manteniendo su esencia: hacer de la adopción una experiencia humana guiada por datos."
                    ],
                    previewUrl: guau4,
                }
            ]
        },

        {
            icon: "📑",
            name: "Instrumento de Observación Canina",
            type: "Word",
            date: "25/03/2025",
            size: "Actualizado",
            description: "Instrumento técnico descargable en Word con los ítems y dimensiones de observación aplicados a la evaluación conductual de perros.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/IOC.docx",
            linkUrl: null,
        },

        {
            icon: "📑",
            name: "Algoritmo de Compatibilidad",
            type: "Word",
            date: "25/03/2025",
            size: "Actualizado",
            description: "Documento técnico con la estructura matemática del modelo de compatibilidad y su interpretación.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/AC.docx",
            linkUrl: null,
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Texto e imagen",
            date: "01/04/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'css', 'javascript', 'framer', 'vite']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📘",
            name: "Ficha Técnica",
            type: "Word",
            date: "25/03/2025",
            size: "Actualizado",
            description: "Ficha técnica general del proyecto en formato Word, con especificaciones, contexto y estructura conceptual.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-gu.docx",
            linkUrl: null,
        },
    ],






    trainittrello: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/10/2025 ",
            size: "Actualizado",
            description: "TrainIT Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales. El objetivo es que los participantes amplíen su portafolios y mejoren su perfil profesional frente a las empresas activas del mercado.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto TrainIT",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Arquitectura Frontend y Componentes",
                    description: ["Desempeñé el rol de Full Stack Developer en TrainIT, con un enfoque principal en el desarrollo Frontend y contribuciones relevantes en el Backend durante las etapas intermedias del proyecto. En las primeras fases, participé activamente en la definición de la arquitectura Frontend, colaborando con el equipo en la estructuración de carpetas, la configuración de librerías y la aplicación del patrón MVC.",
                        "Asimismo, implementé la arquitectura de estilos basada en el sistema de colores diseñado por el equipo de UX/UI, desarrollando un System Color modular compuesto por variables CSS jerárquicas (colores primarios, neutros y semánticos) e integrado con Tailwind CSS, lo que permitió mantener la coherencia visual y la escalabilidad del diseño en todo el proyecto."

                    ],
                    previewUrl: ti1,
                },
                {
                    icon: "🖼️",
                    name: "Desarrollo Full-Stack",
                    description: ["En esta fase, continué desarrollando y refinando componentes del Frontend, incluyendo botones, dropdowns y enlaces interactivos, así como la implementación de diversos elementos del dashboard.",
                        "Posteriormente, participé en la implementación y optimización del módulo de edición de tableros, integrando la sincronización de datos entre backend y frontend. Esto implicó trabajar con endpoints, diseñar formularios dinámicos, modificar o crear nuevos modelos y realizar migraciones en Flask, así como gestionar cada campo de la interfaz (imágenes, etiquetas, miembros)."],

                    previewUrl: ti2,
                },
                {
                    icon: "🖼️",
                    name: "Drag & Drop",
                    description: ["Finalmente, desarrollé el sistema de arrastre y soltado (drag & drop), uno de los componentes más interactivos de la aplicación, utilizando la librería DndKit. Me encargué tanto del Frontend como del Backend, asegurando la persistencia de posiciones y estados de las tarjetas, y gestionando componentes cargados de múltiples estados y efectos. Este desarrollo implicó optimización de renders, control de bucles infinitos y estrategias avanzadas consolidando una experiencia de usuario fluida y confiable en el módulo de administración de tareas."],
                    previewUrl: ti3,
                }
            ]
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Imagen y texto",
            date: "25/02/2025 ",
            size: "Actualizado",
            description: generateStackHTML(['git', 'github', 'figma', 'typescript', 'tailwind', 'fechas', 'next', 'react', 'zustand', 'dndKit', 'python', 'postgresql', 'flask', 'flaskenv', 'pusher', 'sendgrid', 'cloudinary']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-ps.docx",
            linkUrl: "https://drive.google.com/file/d/121q0VBHBzZFUY2NnQRVRooNCw1Lv38jI/view?usp=drive_link",
        },

        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Enlaces a los repositorios del proyecto TrainIT, incluyendo tanto el Frontend como el Backend desarrollados durante el proyecto.",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            links: [
                { label: "Frontend", url: "https://github.com/Programa-TrainIT-Ar/fe-trelloop-grupo-2/tree/grupo-2" },
                { label: "Backend", url: "https://github.com/Programa-TrainIT-Ar/be-trelloop-grupo-2/tree/grupo-2" }
            ],
        },



    ],



    framermotionlab: [
        {
            icon: "📘",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "01/06/2025",
            size: "Actualizado",
            description: [
                "El sistema está estructurado como una aplicación web educativa e interactiva enfocada en el aprendizaje progresivo de animaciones en Framer Motion. Incluye un catálogo de ejemplos visuales, un sistema de navegación dinámica y un módulo tipo builder que permite experimentar con propiedades de animación en tiempo real.",
                "Cada ejemplo presenta simultáneamente el código fuente y su resultado visual, fomentando la comprensión práctica. Concebido como una herramienta pedagógica y un espacio de experimentación autodidacta, el proyecto busca democratizar el conocimiento técnico y al mismo tiempo servir como una plataforma abierta de exploración creativa."
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Framer Motion Lab",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🏠",
                    name: "Interfaz Principal",
                    description: [
                        "El desarrollo de Framer Motion Lab se estructuró como una experiencia de aprendizaje progresiva, inspirada directamente en la documentación oficial de Framer Motion.",
                        "Desde su concepción, el proyecto fue diseñado para dividir el conocimiento en tres niveles —Básico, Gestures y Layout—, abordando gradualmente las propiedades más importantes de la animación web. Actualmente, el nivel Básico se encuentra casi completo, mientras que Gestures está en desarrollo y Layout en fase de planeación."
                    ],
                    previewUrl: fm,
                },
                {
                    icon: "📊",
                    name: "Dashboard de Animaciones",
                    description: [
                        "Cada card combina el logotipo de Framer Motion con una breve descripción y una animación demostrativa, permitiendo explorar propiedades como movimiento en eje X y Y, opacidad, rotación, duración y transiciones."
                    ],
                    previewUrl: fm1,
                },
                {
                    icon: "📋",
                    name: "Explicaciones y Detalles",
                    description: [
                        "Cada card combina el logotipo de Framer Motion con una breve descripción y una animación demostrativa, permitiendo explorar propiedades como movimiento en eje X y Y, opacidad, rotación, duración y transiciones."
                    ],
                    previewUrl: fm2,
                },
                {
                    icon: "🧩",
                    name: "LabMotion Builder",
                    description: [
                        "Uno de los módulos más destacados es el Panel Interactivo o LabMotionBuilder, un entorno de experimentación que permite modificar parámetros de animación —como posición, escala, color o duración— y reproducir los resultados en tiempo real."
                    ],
                    previewUrl: fm3,
                }
            ]
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Imagen y texto",
            date: "01/06/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'css', 'javascript', 'framer', 'vite']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "01/07/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-fm.docx",
            linkUrl: null,
        },
    ],




    nocountry: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/10/2025 ",
            size: "Actualizado",
            description: "TrainIT es un programa educativo y comunidad de simulación laboral gratuita que brinda experiencia práctica mediante la participación en MVPs multidisciplinarios sin fines de lucro. Los equipos son guiados por profesionales seniors en distintos nichos, ofreciendo a los participantes la oportunidad de fortalecer sus portafolios y mejorar su perfil profesional frente a empresas activas del mercado.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto NoCountry",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Liderazgo en Desarrollo Frontend",
                    description: ["Asumí un rol de liderazgo en el desarrollo frontend, definiendo la estructura de carpetas, la organización del código y una arquitectura CSS basada en System Color. Esto garantizó coherencia visual, escalabilidad y un diseño limpio y mantenible a largo plazo."],
                    previewUrl: null,
                },
                {
                    icon: "🖼️",
                    name: "Componentes Reutilizables y Escalables",
                    description: ["Diseñé e implementé componentes modulares y reutilizables —como botones, tablas y secciones dinámicas— aplicando props y lógica adaptable para optimizar la eficiencia, la consistencia visual y la mantenibilidad del código en el proyecto."],
                    previewUrl: null,
                },
                {
                    icon: "🖼️",
                    name: "Coordinación y Supervisión del Equipo Frontend",
                    description: ["Participé activamente en la coordinación del equipo frontend, supervisando integraciones, facilitando la resolución de conflictos y asegurando el cumplimiento de los lineamientos técnicos durante todo el ciclo de desarrollo."],
                    previewUrl: null,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías Implementadas",
            type: "Texto e imagen",
            date: "01/04/2025 ",
            size: "Actualizado",
            description: `
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
        <img src="${react}" alt="React" style="width: auto; height: 48px;" title="React.js" />
        <img src="${css}" alt="CSS3" style="width: auto; height: 48px;" title="CSS3" />
        <img src="${js}" alt="JavaScript" style="width: auto; height: 48px;" title="JavaScript" />
        <span style="font-size: 14px; color: #555;">Mobile Design</span>
    </div>
`,
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word con los detalles del proyecto y su arquitectura.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-ps.docx",
            linkUrl: null,
        },
        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Recorre las principales funcionalidades y la experiencia del proyecto a través de un video explicativo en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "Repositorio y Recursos",
            type: "GitHub",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },
        {
            icon: "📸",
            name: "Instagram Oficial",
            type: "Instagram",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Instagram oficial del proyecto: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/instagram-new.png",
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Proyecto desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/internet--v1.png",
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },
    ],

    postulamania: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Postulomania es un proyecto personal actualmente en desarrollo, enfocado en el scraping y la minería de texto para el análisis automatizado de ofertas laborales y datos relacionados.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones/Aportes",
            type: "Dinámico",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Postulamania",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Contribución Inicial",
                    description: ["Actualmente en desarrollo. Se están definiendo los primeros componentes y pruebas de scraping, junto con la estructura base del proyecto en React y Vite."],
                    previewUrl: null,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Texto e imagen",
            date: "15/10/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'css', 'javascript', 'framer', 'vite']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "15/10/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable (en desarrollo).",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-ps.docx",
            linkUrl: null,
        },
    ],

};
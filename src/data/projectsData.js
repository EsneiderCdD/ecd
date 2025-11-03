import martina1 from "@/assets/images/martina1.webp";
import mt1 from "@/assets/images/mt1.png";
import mt2 from "@/assets/images/mt2.png";
import mt3 from "@/assets/images/mt3.png";
import mt4 from "@/assets/images/mt4.png";

import mr from "@/assets/images/mr.png";
import mrs from "@/assets/images/mrs.png";
import mrs2 from "@/assets/images/mrs2.png";
import mrs4 from "@/assets/images/mrs4.png";
import mrs6 from "@/assets/images/mrs6.png";
import mr7 from "@/assets/images/mr7.png";


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
import { generateStackHTML } from './stackIcons';

export const projectsList = [
    {
        icon: "📁",
        name: "Martina Clandestina",
        type: "Proyecto Freelance",
        date: "01/03/2025",
        size: "Favorito",
        path: "/projects/martinaclandestina",
        description: "Martina Clandestina es un proyecto de cocina saludable que rinde homenaje a la bisabuela Martina, una mujer resiliente cuyo legado inspiró a su familia a transformar la tradición en una propuesta culinaria consciente. Liderado por la chef Mónica y sus hijas, el emprendimiento combina recetas caseras, identidad local y servicio cálido para ofrecer experiencias gastronómicas con propósito.",
        previewUrl: martina1,
        downloadUrl: null,
        linkUrl: null,
    },

    {
        icon: "📁",
        name: "Mister Soldo",
        type: "Proyecto Freelance",
        date: "01/04/2025",
        size: "Completado",
        path: "/projects/mistersoldo",
        description: "Mister Soldo es un artista envigadeño que fusiona el Rap con ritmos urbanos y mensajes de identidad local, justicia social y esperanza. Su música refleja la esencia de Envigado: auténtica, directa y cargada de energía. Con letras honestas y beats contundentes, busca conectar con su comunidad y representar la voz de quienes transforman su realidad a través del arte.",
        previewUrl: mr,
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
        size: "Destacado",
        path: "/projects/guau",
        description: "EN DESARROLLO... Estoy construyendo Guau como un legado tecnológico con sentido ético: una herramienta que une psicología, matemática y software en favor del bienestar animal. Más allá de la programación, el proyecto busca que la adopción sea un acto consciente, sustentado en ciencia, empatía y datos reales. Si en algún momento un refugio u organización desea integrarlo, estoy dispuesto a adaptarlo como aporte social y de libre implementación.",
        previewUrl: Guau,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Gury",
        type: "Proyecto Freelance",
        date: "11/11/2025",
        size: "Reciente",
        path: "/projects/gury",
        description: "EN DESARROLLO...",
        previewUrl: Guau,
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
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "11/09/2025",
            size: "Actualizado",
            description: "Ficha técnica descargable en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            downloadUrl: "/pdf-martinaclandestina.pdf",
            linkUrl: "https://drive.google.com/file/d/1nYq8L8k3iRriFXGzonWUlCnG-Z-3WdFh/view?usp=drive_link",
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
            icon: "📋",
            name: "Contribuciones",
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
                    description: [
                        "⦿ Implementé un sistema de navegación semanal con detección automática del día actual, aplicando resaltado visual dinámico según la jornada.",
                        "⦿ Optimicé la usabilidad al permitir al usuario identificar rápidamente el menú disponible por fecha y horario."
                    ],
                    previewUrl: mt1,
                },
                {
                    icon: "🖼️",
                    name: "Desarrollo de la Carta Digital",
                    description: [
                        "⦿ Construí una **carta digital dinámica** con *React.js*, *Vite* y *React Router*, estructurando rutas y componentes reutilizables.",
                        "⦿ Enfoqué el desarrollo en la **fluidez de carga**, la **adaptabilidad visual** y la **escalabilidad del contenido**, permitiendo actualizaciones rápidas sin comprometer el rendimiento."
                    ],
                    previewUrl: mt2,
                },
                {
                    icon: "🖼️",
                    name: "Diseño Visual e Identidad de Marca",
                    description: [
                        "⦿ Diseñé una interfaz con **animaciones sutiles** y **transiciones fluidas**, reforzando la narrativa gastronómica local.",
                        "⦿ Apliqué una paleta cromática coherente con la marca y cuidé la jerarquía visual para mejorar la experiencia del usuario."
                    ],
                    previewUrl: mt3,
                },
                {
                    icon: "🖼️",
                    name: "Sistema de Pedidos Automatizado",
                    description: [
                        "⦿ Desarrollé un sistema automatizado de pedidos mediante **WhatsApp API**, con mensajes autocompletados y datos de pedido preconfigurados.",
                        "⦿ La automatización redujo errores y pasos manuales, mejorando la eficiencia y coherencia en la comunicación con los clientes."
                    ],
                    previewUrl: mt4,
                }
            ]

        },



        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "25/02/2025",
            size: "Actualizado",
            description: null,
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/MartinaClandestina",
        },

        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Explora el proyecto a través de una presentación visual en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },

    ],




    mistersoldo: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: "El desarrollo de la landing page de Mister Soldo logró consolidar en un solo espacio la esencia visual y musical del artista, presentando su recorrido, sus lanzamientos y su identidad bajo una experiencia móvil fluida y directa. El proyecto no buscó reinventar su imagen, sino amplificarla desde la simplicidad técnica, aprovechando recursos ligeros y bien integrados. La combinación entre video, interacción y movimiento permitió transmitir la energía de su propuesta artística sin depender de estructuras complejas. En conjunto, la página cumple su propósito como una vitrina digital accesible, fiel a su estilo urbano y perfectamente alineada con su trayectoria y visión creativa.",
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
            description: "Ficha técnica descargable en formato PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            downloadUrl: "/pdf-mistersoldo.pdf",
            linkUrl: "https://drive.google.com/file/d/1wjytbB1STdumzX7tEbU-wLGOnMORURSR/view?usp=drive_link",
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "15/02/2025",
            size: "Actualizado",
            description: null,
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    icon: "🖼️",
                    name: "Landing Page Mobile First",
                    description: [
                        "⦿ Diseñé e implementé una *landing page* bajo el enfoque **mobile first**, priorizando la navegación móvil y optimizando la jerarquía visual para un acceso rápido al contenido multimedia."
                    ],
                    previewUrl: mrs,
                },
                {
                    icon: "🖼️",
                    name: "Carruseles Dinámicos y Animaciones",
                    description: [
                        "⦿ Integré **Swiper.js** para la creación de carruseles dinámicos que muestran clips, fotografías y videos del artista, complementados con **animaciones sutiles mediante Framer Motion** para suavizar transiciones y entradas de texto.",

                    ],
                    previewUrl: mrs2,
                },
                {
                    icon: "🖼️",
                    name: "Interactividad Avanzada Drag & Drop",
                    description: [
                        "⦿ Implementé un módulo interactivo con **Framer Motion** que permite explorar la discografía mediante gestos *drag & drop*, actualizando dinámicamente el estado de álbumes y canciones.",

                    ],
                    previewUrl: mrs6,
                },
                {
                    icon: "🖼️",
                    name: "Secciones Complementarias",
                    description: [
                        "⦿ Construí secciones adicionales como **Momentos Destacados**, **Últimos Lanzamientos**, **Sobre el Artista** y un **footer con enlaces de contacto y redes**, consolidando una estructura coherente y completa que refuerza la navegación general."
                    ],
                    previewUrl: mrs4,
                },
                {
                    icon: "🖼️",
                    name: "Secciones Complementarias",
                    description: null,
                    previewUrl: mr7,
                }

            ]

        },


        {
            icon: "🎥",
            name: "Video",
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
            name: "Repositorio",
            type: "GitHub",
            date: "25/02/2025 ",
            size: "Actualizado",
            description: null,
            previewUrl: "https://img.icons8.com/ios-glyphs/512/github.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/mistersoldo",
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
                        "⦿ Lideré el proceso de análisis y levantamiento de requerimientos, aplicando entrevistas, sesiones de brainstorming y cuestionarios estructurados para definir el alcance funcional del sitio.",
                        "⦿ Elaboré casos de uso, mapas de calor y benchmarking visual, estableciendo una línea de diseño coherente con la identidad profesional de la psicóloga y su posicionamiento digital."
                    ],
                    previewUrl: ps1,
                },
                {
                    icon: "🧱",
                    name: "Diseño y Estructura Web",
                    description: [
                        "⦿ Diseñé una arquitectura web completamente responsiva basada en componentes modulares y reutilizables.",
                        "⦿ Implementé secciones clave como *Hero*, *Servicios*, *Preguntas Frecuentes*, *Precios*, *Footer* y *Términos y Condiciones*, asegurando coherencia visual y accesibilidad en todos los dispositivos."
                    ],
                    previewUrl: ps2,
                },
                {
                    icon: "💳",
                    name: "Integración de Pagos y Métricas",
                    description: [
                        "⦿ Integré la pasarela de pagos **PayU**, reduciendo comisiones externas del 10 % al 3.5 % y fortaleciendo la autonomía financiera del proyecto.",
                        "⦿ Incorporé métricas con **Google Analytics** para medir conversiones, analizar el comportamiento de los usuarios y obtener información clave para la toma de decisiones estratégicas."
                    ],
                    previewUrl: ps5,
                },
                {
                    icon: "🎨",
                    name: "Animaciones y Microinteracciones",
                    description: [
                        "⦿ Implementé microinteracciones y transiciones con **Framer Motion**, aplicando animaciones de entrada, realces en botones y efectos suaves que guían la atención del usuario.",
                        "⦿ Apliqué sutiles variaciones de color y movimiento para mantener una estética moderna y profesional.",
                        "⦿ Integré **Swiper.js** para carruseles, tarjetas animadas y secciones de testimonios personalizadas, mejorando la narrativa visual y la experiencia de navegación."
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
                        "⦿ Diseñé una interfaz limpia y empática con enfoque minimalista, priorizando la experiencia de adopción sobre la lógica de negocio.",
                        "⦿ Estructuré componentes reutilizables —cards dinámicas, rutas, modales y pantallas de detalle— que simulan de forma fluida el proceso visual de selección y compatibilidad.",
                        "⦿ Integré un chatbot funcional para acompañar el test de compatibilidad, actualmente basado en una escala líquida de 1 a 4. Implementé animaciones con **Framer Motion** y microinteracciones que fortalecen la conexión emocional del usuario con el flujo de adopción."
                    ],
                    previewUrl: gua,
                },
                {
                    icon: "🧩",
                    name: "Backend y Datos",
                    description: [
                        "⦿ Desarrollé un backend funcional centrado en la gestión de datos de perros, usuarios y administradores. Incluye autenticación, rutas básicas y un panel de control exclusivo para el administrador.",

                        "⦿ El backend actúa como soporte estructural del motor psicométrico, con proyección hacia módulos futuros de compatibilidad, estadísticas y paneles analíticos."
                    ],
                    previewUrl: gua3,
                },
                {
                    icon: "🧠",
                    name: "Psicometría y Algoritmo",
                    description: [
                        "⦿ Desarrollé dos instrumentos psicométricos paralelos: el **Test de Usuario** y la **Observación Canina**, ambos traduciendo respuestas conductuales en vectores normalizados.",
                        "⦿ Implementé un modelo basado en **distancia euclidiana** para calcular la compatibilidad entre adoptante y perro, integrando matemática aplicada y psicología del comportamiento.",
                        "⦿ Generé interpretaciones automáticas del puntaje y visualizaciones que permitirán ajustar la afinidad según dimensiones emocionales y rasgos conductuales."
                    ],
                    previewUrl: null,
                },
                {
                    icon: "🚀",
                    name: "Proyección Técnica",
                    description: [
                        "⦿ Planifiqué iteraciones con filtros por rasgos (tamaño, energía, salud), ponderaciones por dimensión y un chatbot más conversacional.",
                        "⦿ Busco integrar retroalimentación visual en las cards mediante animaciones, sonidos y transformaciones que refuercen la inmersión del usuario.",
                        "⦿ En versiones futuras, Guau integrará **IA generativa**, redes de grafos y módulos estadísticos para refugios, manteniendo su propósito: hacer de la adopción una experiencia humana guiada por datos."
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
            name: "Contribuciones",
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
                    description: ["⦿ Desempeñe un rol con enfoque principal *Frontend* y contribuciones relevantes en el *Backend*. Asimismo, participe en establecer la **estructuración de carpetas**, la **configuración de librerías** y **patrón de diseño**.",
                        "⦿ Implemente la estrategia ***Design System Color*** diseñado por el equipo UX/UI (colores primitivos, neutros, y semánticos) e integrándolo a Tailwind CSS.",
                        "⦿ Construí **componentes** Integrando colores, iconos, imágenes, posiciones, fondos, botones, tipografía fehacientemente al diseño en **Figma.**"
                    ],
                    previewUrl: ti1,
                },
                {
                    icon: "🖼️",
                    name: "Desarrollo Full-Stack",
                    description: ["⦿ Continué desarrollando componentes del Front, opciones *(dropdown)*, enlaces, y otros detalles complementarios al dashboard.",
                        "⦿ Realice el módulo de edición de tablero realizando ajustes en el **modelo**, **migraciones**, **lógica** de campo de la interfaz (backend) y generar la conexión desde el *Frontend* con sus respectivos componentes"],

                    previewUrl: ti2,
                },
                {
                    icon: "🖼️",
                    name: "Drag & Drop",
                    description: ["⦿ Finalmente, desarrollé el sistema de arrastre y soltado ***(Drag & Drop)*** ",
                        "⦿ Aportando coherencia desde el back para la gestión de columnas y posiciones, desplazamiento entre tarjetas y entre columnas, ajustando y reordenando según la zona droppeada.",
                        "⦿ Implementé el sistema ***kanban*** usando ***@dnd-kit/core***, optimizando el flujo de datos mediante estrategias de *sortable context*, *collision detection*  y render condicional con ***React.memo*** para minimizar re-renders durante operaciones CRUD."],
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
                        "⦿ Diseñé la estructura de la interfaz bajo un enfoque pedagógico progresivo, inspirado en la documentación oficial de Framer Motion.",
                        "⦿ Organicé el contenido en tres niveles —*Básico*, *Gestures* y *Layout*— para facilitar el aprendizaje escalonado de animaciones web. El nivel *Básico* está casi completo, *Gestures* en desarrollo y *Layout* en planificación."
                    ],
                    previewUrl: fm,
                },
                {
                    icon: "📊",
                    name: "Dashboard de Animaciones",
                    description: [
                        "⦿ Desarrollé un panel visual compuesto por *cards* interactivas que muestran ejemplos funcionales de propiedades clave como movimiento, opacidad, rotación, duración y transiciones.",
                        "⦿ Cada card combina ícono, descripción y animación, permitiendo observar el comportamiento de cada propiedad en tiempo real."
                    ],
                    previewUrl: fm1,
                },
                {
                    icon: "📋",
                    name: "Explicaciones y Detalles",
                    description: [
                        "⦿ Elaboré descripciones breves y técnicas en cada card para explicar el uso de propiedades y su efecto en las animaciones.",
                        "⦿ Incluí visualizaciones paralelas del código fuente y su resultado, reforzando la comprensión entre teoría y práctica."
                    ],
                    previewUrl: fm2,
                },
                {
                    icon: "🧩",
                    name: "LabMotion Builder",
                    description: [
                        "⦿ Implementé el módulo interactivo *LabMotion Builder*, un entorno que permite modificar parámetros de animación —posición, escala, color, duración— y visualizar resultados al instante.",
                        "⦿ Este sistema funciona como un laboratorio experimental, integrando controles dinámicos para fomentar el aprendizaje práctico de Framer Motion."
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


};
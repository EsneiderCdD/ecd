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
        size: "Completado",
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
        size: "Pausado",
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
        size: "Desarrollo",
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
        size: "Desarrollo",
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
            description: "Desarrollé una carta digital dinámica con enfoque Mobile First para una marca de almuerzos local. El sistema permite na-egar por los menús de cada día de la semana, señalando automáticamente el día actual, y facilita la realización de pedidos directos vía WhatsApp con autocompletado de datos del cliente y del pedido. La interfaz es ligera, clara y funcional, con animaciones sutiles y rutas dinámicas, optimizada para celulares. El contenido del menú se gestiona fácilmente desde un archivo data.js, eliminando la necesidad de bases de datos o paneles complejos, reduciendo costos y aumentando la autonomía de la marca.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (1)",
            type: "Imagen y texto",
            date: "30/01/2025",
            size: "Actualizado",
            description: "Implementé navegación por días de la semana con detección automática del día actual y señalización visual.",
            previewUrl: mt1,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (2)",
            type: "Imagen y texto",
            date: "15/02/2025",
            size: "Actualizado",
            description: "Desarrollé una carta digital dinámica con enfoque Mobile.Utilicé React.js, Vite y React Router. ",
            previewUrl: mt2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (3)",
            type: "Imagen y texto",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: "Incorporé animaciones sutiles, transiciones fluidas e identidad visual coherente con la marca, reforzando su narrativa y estilo original.",
            previewUrl: mt3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (4)",
            type: "Imagen y texto",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: "Integré un sistema de pedidos por WhatsApp con mensajes autocompletados, reduciendo pasos manuales y manteniendo coherencia en la comunicación.",
            previewUrl: mt4,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
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
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "GitHub",
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
            name: "Instagram",
            type: "Instagram",
            date: "25/02/2025 9:06 p.m.",
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
            description: "Diseñé e implementé una landing page con enfoque Mobile First para el artista Mister Soldo, priorizando la navegación desde smartphones y la visualización rápida de contenido musical. La interfaz organiza la información en secciones claras y fluidas: un carrusel principal con imágenes destacadas, reproductores de video integrados desde YouTube, un apartado de exploración de álbumes con función drag & drop y una sección dedicada al último lanzamiento. Incorporé transiciones suaves y desplazamientos automáticos mediante Swiper.js, optimizando la experiencia visual sin sobrecargar la interfaz. El proyecto fue desplegado en Vercel, garantizando compatibilidad multiplataforma, rendimiento liviano y acceso inmediato desde cualquier dispositivo móvil.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (1)",
            type: "Imagen",
            date: "15/02/2025",
            size: "Actualizado",
            description: "Diseñé e implementé una landing page con enfoque mobile",
            previewUrl: mrs,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (2)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Integré carruseles dinámicos con Swiper.js para presentar videos, clips y fotografías de forma fluida y atractiva.",
            previewUrl: mrs2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (3)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Desarrollé una experiencia interactiva con Framer Motion, incorporando gestos drag & drop para explorar álbumes y detalles musicales de manera inmersiva.",
            previewUrl: mrs6,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "💻",
            name: "Tecnologías Utilizadas",
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
            description: "Ficha técnica descargable en Word.",
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
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🐙",
            name: "GitHub",
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
            name: "Instagram",
            type: "Instagram",
            date: "25/02/2025 9:06 p.m.",
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
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Sitio desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: "https://img.icons8.com/ios-glyphs/512/internet--v1.png",
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },

    ],


    psicotranspersonal: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "1/03/2025 ",
            size: "Actualizado",
            description: "Desarrollé una página web profesional para una psicóloga independiente, utilizando React.js y Framer Motion para crear una interfaz moderna, fluida y alineada con su identidad de marca personal. Implementé un sistema de pagos propio mediante formularios seguros, reduciendo las comisiones de terceros del 10% al 3.5% y mejorando la rentabilidad del servicio. Incorporé métricas con Google Analytics para medir conversiones y analizar el comportamiento de los usuarios, brindando datos estratégicos para optimizar contenido y campañas. El sitio fue optimizado con Vite, logrando tiempos de carga mínimos, excelente rendimiento y una experiencia de navegación ágil tanto en móviles como en escritorio.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (1)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Lideré el proceso de análisis y levantamiento de requerimientos, aplicando entrevistas, sesiones de brainstorming, cuestionarios y encuestas, además de casos de uso y un mapa de calor de requerimientos para priorizar funcionalidades. El proceso incluyó benchmarking y un estudio de color y branding aplicado, definiendo una base visual y estratégica coherente con la identidad profesional de la psicóloga.",
            previewUrl: ps1,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (2)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Diseñé y desarrollé una estructura web completa y responsiva, compuesta por componentes dinámicos como footer, secciones de servicios, área hero, información profesional, preguntas frecuentes, precios y términos y condiciones.",
            previewUrl: ps2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (3)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Integré una pasarela de pagos segura (PayU) que redujo las comisiones externas del 10 % al 3.5 %, fortaleciendo la autonomía financiera y el control de reservas desde la propia web. Además, incorporé una configuración básica de Google Analytics para el seguimiento de métricas y reconocimiento digital, permitiendo medir el alcance y desempeño del sitio en tiempo real.",
            previewUrl: ps5,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (4)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Implementé microinteracciones y animaciones con Framer Motion, aplicando efectos de entrada, transiciones suaves y realces luminosos en botones de acción para guiar la atención del usuario. Incorporé cambios sutiles de color y movimiento en textos y componentes, logrando una interfaz dinámica pero sobria. Complementé la experiencia con Swiper.js, integrando carruseles visuales, tarjetas animadas y una sección de comentarios personalizada según las preferencias de la psicóloga.",
            previewUrl: ps6,
            downloadUrl: null,
            linkUrl: null,
        },



        {
            icon: "💻",
            name: "Tecnologías Usadas",
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
            name: "GitHub",
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
            name: "Instagram",
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
            icon: "🎨",
            name: "Diseño y Frontend",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: [
                "Estoy diseñando una interfaz limpia, empática y funcional con un enfoque minimalista, priorizando la experiencia de adopción sobre la lógica de negocio. Estoy estructurando componentes reutilizables —cards dinámicas, rutas, modales y pantallas de detalle— que permiten simular el proceso visual de selección y compatibilidad de forma fluida y emocionalmente atractiva.",
                "Estoy integrando un chatbot funcional que acompaña el test de compatibilidad, actualmente en fase inicial con una escala líquida de 1 a 4. Aunque la experiencia aún es estática, estoy trabajando en una interacción más conversacional y dinámica. A nivel visual, estoy explorando animaciones con Framer Motion y microinteracciones que refuercen la conexión entre el usuario y el proceso de adopción."
            ],
            previewUrl: gua,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "🧩",
            name: "Backend y Datos",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: [
                "Estoy desarrollando un backend funcional enfocado en la gestión y persistencia de datos de perros, usuarios y administradores. Actualmente incluye autenticación, rutas básicas y un panel de administración visible solo para el administrador, desde el cual es posible registrar, actualizar y gestionar la información de los animales.",
                "No estoy implementando lógica de negocio compleja porque Guau busca mantenerse adaptable a distintos modelos sociales o institucionales. El backend sirve como soporte estructural para el motor psicométrico, dejando abierta la posibilidad de que futuras versiones integren módulos de compatibilidad, estadísticas o paneles analíticos."
            ],
            previewUrl: gua3,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "🧠",
            name: "Psicometría y Algoritmo",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: [
                "Estoy elaborando dos instrumentos psicométricos paralelos: el Test de Usuario y la Observación Canina. Cada uno convierte respuestas conductuales en vectores normalizados, que luego se analizan mediante un modelo matemático basado en distancia euclidiana para determinar la compatibilidad entre adoptante y perro.",
                "Estoy diseñando interpretaciones automáticas del score, visualizaciones y ponderaciones que en el futuro permitirán ajustar la afinidad según dimensiones emocionales o rasgos de comportamiento. Es un trabajo que mezcla psicología aplicada, matemáticas y experiencia de usuario en un mismo entorno digital."
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
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
            icon: "🚀",
            name: "Proyección Técnica",
            type: "Texto",
            date: "15/10/2025",
            size: "Actualizado",
            description: [
                "Estoy planificando iteraciones que incorporan ponderaciones por dimensión, filtros por rasgos (tamaño, salud, energía), ajustes automáticos con datos reales y un chatbot más conversacional. Busco integrar un sistema de retroalimentación visual en las cards (animaciones, sonidos, transformaciones de imagen) que genere un entorno más inmersivo.",
                "En etapas futuras, Guau podrá incorporar redes de grafos, IA generativa para interpretación de resultados y un módulo estadístico para refugios, manteniendo su esencia: hacer de la adopción una experiencia humana guiada por datos."
            ],
            previewUrl: guau4,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Texto e imagen",
            date: "01/04/2025",
            size: "Actualizado",
            description: `
            <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                <img src="\${react}" alt="React" style="width: auto; height: 48px;" title="React.js" />
                <img src="\${vite}" alt="Vite" style="width: auto; height: 48px;" title="Vite" />
                <img src="\${js}" alt="JavaScript" style="width: auto; height: 48px;" title="JavaScript" />
                <img src="\${framer}" alt="Framer Motion" style="width: auto; height: 48px;" title="Framer Motion" />
                <span style="font-size: 14px; color: #555;">Diseño Responsivo y Animaciones Interactivas</span>
            </div>
            `,
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
            icon: "🖼️",
            name: "Arquitectura Frontend y Componentes",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: ["Desempeñé el rol de Full Stack Developer en TrainIT, con un enfoque principal en el desarrollo Frontend y contribuciones relevantes en el Backend durante las etapas intermedias del proyecto. En las primeras fases, participé activamente en la definición de la arquitectura Frontend, colaborando con el equipo en la estructuración de carpetas, la configuración de librerías y la aplicación del patrón MVC.",
                "Asimismo, implementé la arquitectura de estilos basada en el sistema de colores diseñado por el equipo de UX/UI, desarrollando un System Color modular compuesto por variables CSS jerárquicas (colores primarios, neutros y semánticos) e integrado con Tailwind CSS, lo que permitió mantener la coherencia visual y la escalabilidad del diseño en todo el proyecto."

            ],
            previewUrl: ti1,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Desarrollo Full-Stack",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: ["En esta fase, continué desarrollando y refinando componentes del Frontend, incluyendo botones, dropdowns y enlaces interactivos, así como la implementación de diversos elementos del dashboard.",
                "Posteriormente, participé en la implementación y optimización del módulo de edición de tableros, integrando la sincronización de datos entre backend y frontend. Esto implicó trabajar con endpoints, diseñar formularios dinámicos, modificar o crear nuevos modelos y realizar migraciones en Flask, así como gestionar cada campo de la interfaz (imágenes, etiquetas, miembros)."],

            previewUrl: ti2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Drag & Drop",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Finalmente, desarrollé el sistema de arrastre y soltado (drag & drop), uno de los componentes más interactivos de la aplicación, utilizando la librería DndKit. Me encargué tanto del Frontend como del Backend, asegurando la persistencia de posiciones y estados de las tarjetas, y gestionando componentes cargados de múltiples estados y efectos. Este desarrollo implicó optimización de renders, control de bucles infinitos y estrategias avanzadas consolidando una experiencia de usuario fluida y confiable en el módulo de administración de tareas.",
            previewUrl: ti3,
            downloadUrl: null,
            linkUrl: null,
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
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "1/06/2025 ",
            size: "Actualizado",
            description: "El sistema está estructurado como una aplicación web educativa e interactiva enfocada en el aprendizaje progresivo de animaciones en Framer Motion. Incluye un catálogo de ejemplos visuales, un sistema de navegación dinámica y un módulo tipo builder que permite experimentar con propiedades de animación en tiempo real. Cada ejemplo presenta simultáneamente el código fuente y su resultado visual, fomentando la comprensión práctica. Concebido como una herramienta pedagógica y un espacio de experimentación autodidacta, el proyecto busca democratizar el conocimiento técnico y al mismo tiempo servir como una plataforma abierta de exploración creativa.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Home",
            type: "Imagen",
            date: "20/06/2025 ",
            size: "Actualizado",
            description: "El desarrollo de Framer Motion Lab se estructuró como una experiencia de aprendizaje progresiva, inspirada directamente en la documentación oficial de Framer Motion. Desde su concepción, el proyecto fue diseñado para dividir el conocimiento en tres niveles —Básico, Gestures y Layout—, abordando gradualmente las propiedades más importantes de la animación web. Actualmente, el nivel Básico se encuentra casi completo, mientras que Gestures está en desarrollo e Layout en fase de planeación..",
            previewUrl: fm,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Dashboard de Animaciones",
            type: "Imagen",
            date: "20/06/2025 ",
            size: "Actualizado",
            description: "Cada card combina el logotipo de Framer Motion con una breve descripción y una animación demostrativa, permitiendo explorar propiedades como movimiento en eje X y Y, opacidad, rotación, duración y transiciones.",
            previewUrl: fm1,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Explicaciones y Detalles",
            type: "Imagen",
            date: "20/06/2025 ",
            size: "Actualizado",
            description: "Cada card combina el logotipo de Framer Motion con una breve descripción y una animación demostrativa, permitiendo explorar propiedades como movimiento en eje X y Y, opacidad, rotación, duración y transiciones.",
            previewUrl: fm2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Crear tu animacion",
            type: "Imagen",
            date: "20/06/2025 ",
            size: "Actualizado",
            description: "Uno de los módulos más destacados es el Panel Interactivo o LabMotionBuilder, un entorno de experimentación que permite modificar parámetros de animación —como posición, escala, color o duración— y reproducir los resultados en tiempo real.",
            previewUrl: fm3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Texto e imagen",
            date: "1/06/2025 ",
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
            date: "1/07/2025",
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
            description: "TrainIT Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales. El objetivo es que los participantes amplíen su portafolios y mejoren su perfil profesional frente a las empresas activas del mercado.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (1)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: " Asumí un rol de liderazgo en el desarrollo frontend, definiendo la estructura de carpetas, la organización del código y la aplicación de una arquitectura CSS basada en System Color, garantizando coherencia visual y escalabilidad en el diseño.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (2)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Desarrollo de componentes reutilizables:Implementé componentes modulares y reutilizables —como botones, tablas y secciones dinámicas— empleando props y lógica adaptable para optimizar la eficiencia y la mantenibilidad del código.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (3)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: "Participé activamente en la coordinación del equipo frontend, supervisando integraciones, apoyando la resolución de conflictos y asegurando la correcta implementación de los lineamientos técnicos durante todo el proceso de desarrollo.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "💻",
            name: "Tecnologías Usadas",
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
            name: "GitHub",
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
            name: "Instagram",
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
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },

    ],
    postulamania: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Texto",
            date: "15/10/2025 ",
            size: "Actualizado",
            description: "Postulomania esta en desarrolo y es para beneficio personal, scraping y mineria de texto.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Contribución (1)",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: " Postulomania esta en desarrolo y es para beneficio personal, scraping y mineria de texto.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
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
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/f-ps.docx",
            linkUrl: null,
        },


    ],
};
// src/data/projectsData.js
import martina1 from "@/assets/images/martina1.webp";
import martina2 from "@/assets/images/martina2.webp";
import martina3 from "@/assets/images/martina3.webp";
import martina4 from "@/assets/images/martina4.webp";
import martina5 from "@/assets/images/martina5.png";


import css from "@/assets/stack/css.png";
import js from "@/assets/stack/js.png";
import react from "@/assets/stack/react.png";

import banner from "@/assets/images/banner.webp";

import mr from "@/assets/images/mr.png";
import mr2 from "@/assets/images/mr2.png";
import mr3 from "@/assets/images/mr3.png";

import psicotranspersonal2 from "@/assets/images/psicotranspersonal2.webp";
import Psicotranspersonal3 from "@/assets/images/Psicotranspersonal3.png";
import Psicotranspersonal1 from "@/assets/images/Psicotranspersonal1.png";

import Guau from "@/assets/images/Guau.png";
import Guau2 from "@/assets/images/Guau2.png";
import Guau3 from "@/assets/images/Guau3.png";


export const projectsList = [
    {
        icon: "📁",
        name: "Martina Clandestina",
        type: "Proyecto Freelance",
        date: "1/03/2025",
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
        date: "25/03/2025 ",
        size: "Completado",
        path: "/projects/mistersoldo",
        description: "Mister Soldo es una plataforma musical diseñada para ofrecer contenido...",
        previewUrl: mr,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Psicotranspersonal",
        type: "Proyecto Freelance",
        date: "1/06/2025 ",
        size: "Completado",
        path: "/projects/psicotranspersonal",
        description: "Desarrollé una plataforma web para una psicóloga independiente...",
        previewUrl: Psicotranspersonal1,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "FramerMotionLab",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/framermotionlab",
        description: "EN DESARROLLO... Laboratorio de animaciones interactivas con Framer Motion...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Guau",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/guau",
        description: "EN DESARROLLO... Plataforma integral de servicios y productos para mascotas...",
        previewUrl: Guau,
        downloadUrl: null,
        linkUrl: null,
    },

    {
        icon: "📁",
        name: "Trainit Trello",
        type: "Proyecto Colaborativo",
        date: "11/09/2025 12:47 a.m.",
        size: "Finalizando",
        path: "/projects/trainittrello",
        description: "EN DESARROLLO... Plataforma diseñada para centralizar búsqueda y postulación...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Postulamania",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/postulamania",
        description: "EN DESARROLLO... Clon de Trello adaptado para gestión de entrenamientos...",
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
            name: "Martina Clandestina",
            type: "Imagen",
            date: "30/01/2025",
            size: "Actualizado",
            description: null,
            previewUrl: martina3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Cocina Martina",
            type: "Imagen",
            date: "15/02/2025",
            size: "Actualizado",
            description: null,
            previewUrl: martina2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Cocina Martina (1)",
            type: "Imagen",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: null,
            previewUrl: martina5,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Texto e imagen",
            date: "25/02/2025 ",
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
            date: "11/09/2025 12:58 a.m.",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },

        {
            icon: "🎥",
            name: "Video Presentación",
            type: "YouTube",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: banner,
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
            previewUrl: banner,
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
            previewUrl: banner,
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
            previewUrl: banner,
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
            name: "Mister Soldo",
            type: "Imagen",
            date: "15/02/2025",
            size: "Actualizado",
            description: null,
            previewUrl: mr3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Artista Musical",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: null,
            previewUrl: mr2,
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
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },

        {
            icon: "🌐",
            name: "Video Presentación",
            type: "YouTube",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🌐",
            name: "GitHub",
            type: "GitHub",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },
        {
            icon: "🌐",
            name: "Instagram",
            type: "Instagram",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Spotify",
            type: "Spotify",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Sitio desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: banner,
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
            name: "PsicoTranspersonal",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: null,
            previewUrl: psicotranspersonal2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Artista Musical",
            type: "Imagen",
            date: "1/03/2025",
            size: "Actualizado",
            description: null,
            previewUrl: Psicotranspersonal3,
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
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },

        {
            icon: "🌐",
            name: "Video Presentación",
            type: "YouTube",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.youtube.com/",
        },
        {
            icon: "🌐",
            name: "GitHub",
            type: "GitHub",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Repositorio del proyecto: https://github.com/ | Instagram: https://www.instagram.com/ | Website: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://github.com/",
        },
        {
            icon: "🌐",
            name: "Instagram",
            type: "Instagram",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Spotify",
            type: "Spotify",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Instagram oficial: https://www.instagram.com/ | Web: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://www.instagram.com/",
        },
        {
            icon: "🌐",
            name: "Sitio Web (Vercel)",
            type: "Vercel",
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Sitio desplegado en Vercel: https://martinacocina.netlify.app/",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: "https://martinacocina.netlify.app/",
        },

    ],






    guau: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Información",
            date: "11/09/2025 12:47 a.m.",
            size: "Actualizado",
            description: "Plataforma en desarrollo...",
            previewUrl: Guau,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 1",
            type: "Imagen",
            date: "11/09/2025 12:50 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: Guau2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 2",
            type: "Imagen",
            date: "11/09/2025 12:51 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: Guau3,
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
            date: "25/03/2025 ",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },

    ],
    framermotionlab: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Información",
            date: "11/09/2025 12:47 a.m.",
            size: "Actualizado",
            description: "Mister Soldo es una plataforma musical diseñada...",
            previewUrl: Guau,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 1",
            type: "Imagen",
            date: "11/09/2025 12:50 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: Guau2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 2",
            type: "Imagen",
            date: "11/09/2025 12:51 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: Guau3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Documento",
            date: "11/09/2025 12:55 a.m.",
            size: "Actualizado",
            description: `
                <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" style="width: 48px; height: 48px;" title="React.js" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style="width: 48px; height: 48px;" title="YouTube API" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Vite" style="width: 48px; height: 48px;" title="Vite" />
                    <span style="font-size: 14px; color: #555;">Swiper.js, Vercel</span>
                </div>
            `,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "11/09/2025 12:58 a.m.",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },
    ],


};
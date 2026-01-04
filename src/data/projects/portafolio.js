import { generateStackHTML } from '../techStack/techStack';
import banner from '@/assets/images/Banner.png'
export const portafolioData = {
    id: "portafolio",
    summary: {
        icon: "📁",
        name: "Portafolio",
        type: "Proyecto Personal",
        date: "01/11/2025",
        size: "Completado",
        path: "/projects/portafolio",
        description: "Portafolio personal diseñado para mostrar mis proyectos y habilidades profesionales.",
        previewUrl: banner,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto e Imagen",
            date: "01/11/2025",
            size: "Actualizado",
            description: "TrainIT Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales. El objetivo es que los participantes amplíen su portafolios y mejoren su perfil profesional frente a las empresas activas del mercado.",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "PDF",
            date: "01/11/2025",
            size: "Actualizado",
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/15jmB_Gu39xoOJU2SUZ4IuhIYp0QIkFxn/view?usp=drive_link",
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Imagen y texto",
            date: "01/11/2025",
            size: "Actualizado",
            description: generateStackHTML(['vite','react','javascript','css','emailjs','uiverse','flaticon','gemini']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "01/11/2025",
            size: "Actualizado",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/ecd",
        },
    ]

};

import { generateStackHTML } from '../techStack/techStack';
import banner from '@/assets/images/Banner.webp'
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
            description: "Esta es una plataforma web en evolución continua que organiza y presenta mi trabajo dentro de un entorno digital propio, dinámico y personalizado. Surge como respuesta a la necesidad de estructurar la experiencia y los proyectos acumulados, combinando organización, experimentación frontend y preparación para escenarios profesionales como networking o presentación de trayectoria. Más que un sitio estático, funciona como un espacio vivo que crece junto a mi desarrollo profesional.",
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
            description: generateStackHTML(['vite', 'react', 'javascript', 'css', 'emailjs', 'uiverse', 'flaticon', 'gemini']),
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

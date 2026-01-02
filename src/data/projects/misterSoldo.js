import mr from "@/assets/images/mr.png";
import mrs from "@/assets/images/mrs.png";
import mrs2 from "@/assets/images/mrs2.png";
import mrs4 from "@/assets/images/mrs4.png";
import mrs6 from "@/assets/images/mrs6.png";
import mr7 from "@/assets/images/mr7.png";
import { generateStackHTML } from '../techStack/techStack';

export const misterSoldoData = {
    id: "mistersoldo",
    summary: {
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
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto",
            date: "15/02/2025 ",
            size: "Actualizado",
            description: ["El desarrollo de la landing page de Mister Soldo logra consolidar en un solo espacio la esencia visual y musical del artista, presentando su recorrido, sus lanzamientos y su identidad bajo una experiencia móvil."],
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
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/16Ky9jV9CPXR_i1JMdbEQuzLM1N8cZU2y/view?usp=drive_link",
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

                    name: "Landing Page Mobile First",
                    description: [
                        "⦿ Diseñé e implementé una *landing page* bajo el enfoque **mobile first**, priorizando la navegación móvil y optimizando la jerarquía visual."
                    ],
                    previewUrl: mrs,
                },
                {

                    name: "Carruseles Dinámicos y Animaciones",
                    description: [
                        "⦿ Integré **Swiper.js** para la creación de carruseles dinámicos que muestran clips, fotografías y videos del artista.",
                    ],
                    previewUrl: mrs2,
                },
                {

                    name: "Interactividad Avanzada Drag & Drop",
                    description: [
                        "⦿ Implementé un módulo interactivo *drag & drop* que permite explorar actualizando dinámicamente el estado de álbumes y canciones. ",
                    ],
                    previewUrl: mrs6,
                },
                {

                    name: "Secciones Complementarias",
                    description: [
                        "⦿ Construí secciones adicionales como **Momentos Destacados**, **Últimos Lanzamientos**, **Sobre el Artista** y un **footer con enlaces de contacto y redes**."
                    ],
                    previewUrl: mrs4,
                },
                {

                    name: null,
                    description: null,
                    previewUrl: mr7,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Imagen y texto",
            date: "25/02/2025 ",
            size: "Actualizado",
            description: generateStackHTML(['react', 'vite', 'javascript', 'css', 'framermotion', 'mobileDesign']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "25/02/2025 ",
            size: "Actualizado",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/mistersoldo",
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "25/02/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Explora el proyecto con un video corto en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=vR1ugXdPhRA",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};

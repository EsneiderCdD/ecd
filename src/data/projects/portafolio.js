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
            linkUrl: "https://drive.google.com/file/d/1yTCNzHmn36eF3XeRi-UAtqDe3Vre3qNc/view?usp=drive_link",
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/11/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto TrainIT",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {

                    name: "Arquitectura Frontend y Componentes",
                    description: ["⦿ Desempeñe un rol FullStack. Asimismo, participe en establecer la **estructuración de carpetas**, la **configuración de librerías** y **patrón de diseño**.",
                        "⦿ Implemente la estrategia ***Design System Color*** diseñado por el equipo UX/UI (colores primitivos, neutros, y semánticos) e integrándolo a Tailwind CSS.",
                        "⦿ Construí **componentes** Integrando colores, iconos, imágenes, posiciones, fondos, botones, tipografía fehacientemente al diseño en **Figma.**"
                    ],
                    previewUrl: null,
                },
                {

                    name: "Desarrollo Full-Stack",
                    description: ["⦿ Continué desarrollando componentes del Front, opciones *(dropdown)*, enlaces, y otros detalles complementarios al dashboard.",
                        "⦿ Realice el módulo de edición de tablero realizando ajustes en el **modelo**, **migraciones**, **lógica** de campo de la interfaz (backend) y generar la conexión desde el *Frontend* con sus respectivos componentes"],

                    previewUrl: null,
                },
                {

                    name: "Drag & Drop",
                    description: ["⦿ Implementé el sistema ***kanban*** usando ***@dnd-kit/core***, optimizando el flujo de datos mediante estrategias de *sortable context*, *collision detection*  y render condicional con ***React.memo*** para minimizar re-renders durante operaciones CRUD.",
                        "⦿ Aportando coherencia desde el back para la gestión de columnas y posiciones, desplazamiento entre tarjetas y entre columnas, ajustando y reordenando según la zona droppeada."],
                    previewUrl: null,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Imagen y texto",
            date: "01/11/2025",
            size: "Actualizado",
            description: generateStackHTML(['git', 'github', 'figma', 'typescript', 'tailwind', 'datefns', 'next', 'react', 'zustand', 'dndKit', 'python', 'postgresql', 'flask', 'flasgger', 'pusher', 'cloudinary', 'sendgrid',]),
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
            links: [
                { label: "Frontend", url: "https://github.com/Programa-TrainIT-Ar/fe-trelloop-grupo-2/tree/grupo-2" },
                { label: "Backend", url: "https://github.com/Programa-TrainIT-Ar/be-trelloop-grupo-2/tree/grupo-2" }
            ],
        },


    ]

};

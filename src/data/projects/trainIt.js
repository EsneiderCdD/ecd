import trainit from "@/assets/images/trainit.webp";
import ti1 from "@/assets/images/ti1.webp";
import ti2 from "@/assets/images/ti2.webp";
import ti3 from "@/assets/images/ti3.webp";
import constanciatrain from "@/assets/images/constanciatrain.webp"

export const trainItData = {
    id: "trainittrello",
    summary: {
        icon: "📁",
        name: "TrainIT",
        type: "Experiencia Laboral",
        date: "01/06/2025",
        size: "Completado",
        path: "/projects/trainittrello",
        description: "Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales.",
        previewUrl: trainit,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto e Imagen",
            date: "01/06/2025",
            size: "Actualizado",
            description: "TrainIT Es un programa educativo y comunidad de simulación laboral gratuito, que ofrece ganar experiencia a través de la participación en MVPs multidisciplinarios sin fines de lucro, acompañados de seniors en diferentes nichos laborales.",
            previewUrl: constanciatrain,
            downloadUrl: null,
            linkUrl: null,
        },

        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto TrainIT",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {

                    name: "Arquitectura Frontend y Componentes",
                    description: ["⦿ Participé en la estructuración de carpetas, configuración de librerías y patrones de diseño. Implementé Design System Color del equipo UX/UI en Tailwind CSS. Construí componentes fieles al diseño en Figma."],
                    previewUrl: ti1,
                },
                {

                    name: "Desarrollo Full-Stack",
                    description: ["⦿ Desarrollé múltiples componentes Front y el módulo Tableros (carga de imágenes, inputs, rutas). Participé en backend: migraciones, lógica de negocio y conexión de rutas al Frontend."],

                    previewUrl: ti2,
                },
                {

                    name: "Drag & Drop",
                    description: ["⦿ Sistema kanban con drag-and-drop (@dnd-kit/core). Gestión de columnas, posiciones y reordenamiento conectado al backend."],
                    previewUrl: ti3,
                }
            ]
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=_X2ihdxtjEU",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Imagen y texto",
            date: "01/06/2025",
            size: "Actualizado",
            description: null,
            stack: ['git', 'github', 'figma', 'typescript', 'tailwind', 'datefns', 'next', 'react', 'zustand', 'dndKit', 'python', 'postgresql', 'flask', 'flasgger', 'pusher', 'cloudinary', 'sendgrid'],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            name: "Repositorios",
            type: "GitHub",
            date: "01/06/2025",
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
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "PDF",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/1yTCNzHmn36eF3XeRi-UAtqDe3Vre3qNc/view?usp=drive_link",
        },

    ]
};
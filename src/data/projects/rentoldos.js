import Rentoldos from "@/assets/images/rentoldos.webp";

export const rentoldosData = {
    id: "rentoldos",
    summary: {
        icon: "📁",
        name: "Rentoldos",
        type: "Proyecto Freelance",
        date: "15/07/2026",
        size: "En Curso",
        path: "/projects/rentoldos",
        description: "Empresa Antioqueña dedicada a la operación logística para eventos y fiestas.",
        previewUrl: Rentoldos,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto e Imagen",
            date: "15/07/2026",
            size: "Actualizado",
            description: "Empresa Antioqueña dedicada a la operación logística para eventos y fiestas.",
            previewUrl: Rentoldos,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "15/07/2026",
            size: "Actualizado",
            description: "Navega por mis principales aportes al proyecto Rentoldos",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    name: "Auditoría de Infraestructura",
                    description: ["⦿ Realicé una auditoría de infraestructura, servicios y requerimientos que permitió optimizar la solución tecnológica reduciendo en un 84,6% el costo anual de infraestructura."]
                },
                {
                    name: "Desarrollo Web",
                    description: ["⦿ Diseñé y desarrollé una nueva página web con Next.js, modernizando la experiencia visual, manteniendo el branding existente y actualizando el catálogo de productos con una estructura optimizada para SEO."]
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "15/07/2026",
            size: "Actualizado",
            description: null,
            stack: ['next', 'vite', 'react', 'css'],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};

import SwaplyAr from "@/assets/images/SwaplyAr.webp";

export const swaplyArData = {
    id: "swaplyar",
    summary: {
        icon: "📁",
        name: "SwaplyAr",
        type: "Experiencia Laboral",
        date: "01/01/2026",
        size: "Completado",
        path: "/projects/swaplyar",
        description: "SwaplyAr es una empresa de tecnología financiera dedicada a transformar el intercambio de divisas y facilitar las transacciones internacionales. Con un enfoque en la eficiencia, transparencia, seguridad e innovación, proporcionamos soluciones que permiten a nuestros usuarios gestionar sus finanzas de manera más efectiva.",
        previewUrl: SwaplyAr,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "🔒",
            name: "Confidencialidad",
            type: "Texto",
            date: "01/01/2026",
            size: "Actualizado",
            description: "Debido a un acuerdo de confidencialidad firmado con la empresa, me reservo la exposición de detalles, imágenes, videos y contribuciones que comprometan información sensible del proyecto. En su lugar, describo a grosso modo las habilidades técnicas aplicadas, sin divulgar datos internos ni procesos específicos de la organización.",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/01/2026",
            size: "Actualizado",
            description: "Navega por mis principales aportes al proyecto SwaplyAr",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    name: "Backend",
                    description: ["⦿ Backend NestJS/TypeScript: ajustes, bugs, auditoría TypeORM. Prácticas limpias con ESLint y class-validator. Swagger para documentación, Docker para entornos."],
                },
                {
                    name: "Frontend",
                    description: ["⦿ Frontend React/Next.js/Tailwind CSS: componentes reutilizables, consumo de API y diseño en Figma."],
                }
            ]
        },
    ]
};
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
                    description: [
                        "⦿ Continué y finalicé desarrollos del backend en NestJS con TypeScript, realizando ajustes, corrección de bugs, calibración de módulos y auditoría de modelos TypeORM. Aseguré buenas prácticas eliminando tipos `any`, configurando ESLint y completando DTOs con class-validator. Documenté endpoints con Swagger (OpenAPI) y mantuve entornos con Docker & Docker Compose."
                    ],
                },
                {
                    name: "Frontend",
                    description: [
                        "⦿ Implementé la visualización de datos en tablas y módulos del área administrativa, consumiendo rutas del backend para poblar información de usuarios, estados y datos respectivos, basándome en los diseños establecidos en Figma.",
                        "⦿ Desarrollé la sincronización entre el repositorio administrativo y el público, llevando datos creados por otros devs en base de datos hasta la ruta de consumo en el frontend público, incluyendo banners decorativos e informativos publicados desde el panel admin."
                    ],
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "01/01/2026",
            size: "Actualizado",
            description: null,
            stack: ['nestjs', 'swagger', 'docker', 'postgresql', 'next', 'react', 'tailwind', 'typescript'],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};
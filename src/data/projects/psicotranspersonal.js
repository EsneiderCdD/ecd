import psicotranspersonal1 from "@/assets/images/psicotranspersonal1.png";
import ps1 from "@/assets/images/ps1.png";
import ps2 from "@/assets/images/ps2.png";
import ps3 from "@/assets/images/ps3.png";
import ps4 from "@/assets/images/ps4.png";
import ps5 from "@/assets/images/ps5.png";
import ps6 from "@/assets/images/ps6.png";
import ps7 from "@/assets/images/ps7.png";
import ps8 from "@/assets/images/ps8.png";
import ps9 from "@/assets/images/ps9.png";
import ps10 from "@/assets/images/ps10.png";
import { generateStackHTML } from '../techStack/techStack';

export const psicotranspersonalData = {
    id: "psicotranspersonal",
    summary: {
        icon: "📁",
        name: "Psicotranspersonal",
        type: "Proyecto Freelance",
        date: "01/05/2025",
        size: "Completado",
        path: "/projects/psicotranspersonal",
        description: "Psicotranspersonal es la marca profesional de una psicóloga especializada en acompañamiento terapéutico con enfoque transpersonal. Con una comunidad digital de más de 190 000 seguidores, ha consolidado su presencia en redes sociales compartiendo contenido de bienestar y crecimiento personal.",
        previewUrl: psicotranspersonal1,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📘",
            name: "Descripción",
            type: "Texto",
            date: "01/05/2025",
            size: "Actualizado",
            description: [
                "El proyecto Psicotranspersonal consistió en el desarrollo de un software front-end personalizado para una psicóloga independiente.",
                " El proceso incluyó levantamiento de requerimientos, diseño responsive, integración de PayU como pasarela de pago y la incorporación de Google Analytics."
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "PDF",
            date: "01/05/2025",
            size: "Actualizado",
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/1MnGMxClkHvNImD_fFuwAgZfivNrqahMR/view?usp=drive_link",
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/05/2025",
            size: "Actualizado",
            description: null,
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {

                    description: [
                        "⦿ Desarrollé el proceso completo de análisis de requerimientos, aplicando técnicas como entrevistas, encuestas, análisis funcional, casos de uso, sesiones de brainstorming, benchmarking y elaboración de heat maps."
                    ],
                    previewUrl: "https://cdn-icons-png.flaticon.com/128/888/888034.png",
                },
                {
                    description: [
                        "⦿ Diseñé una arquitectura web responsiva, incorporando una página de inicio y un menú de navegación con secciones como: Agendar, Sobre mi, Psicotranspersonal, Círculo de Mujeres, Términos y Condiciones."
                    ],
                    previewUrl: ps1,
                },
                {
                    description: null,
                    previewUrl: ps8,
                },
                {
                    description: "⦿ También desarrollé los componentes complementarios: Mensajes(testimonios), Servicios, Pago, Preguntas Frecuentes, Términos, Condiciones, Carrusel, Tarjetas dinámicas y el footer.",
                    previewUrl: ps4,
                },
                {
                    description: null,
                    previewUrl: ps2,
                },

                {
                    previewUrl: ps7,
                    description: "⦿ Incorporé animaciones y microinteracciones con Framer Motion en encabezados, botones, textos y componentes dinámicos, aplicando efectos y transiciones que optimizan la experiencia del usuario."
                },

                {
                    description: null,
                    previewUrl: ps9,
                },
                {
                    description: null,
                    previewUrl: ps10,
                },
                {
                    previewUrl: ps6,
                },
                {
                    description: null,
                    previewUrl: ps3,
                },
                {
                    name: "Integración de Pagos y Métricas",
                    description: [
                        "⦿ Integré la pasarela de pagos **PayU**, garantizando seguridad en transacciones y reduciendo comisiones externas del 10 % al 3.5 %. ",
                        "⦿ Incorporé **Google Analytics** para el seguimiento de conversiones, sesiones y comportamiento de usuarios.",
                    ],
                    previewUrl: ps5,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "01/05/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'vite', 'framermotion', 'swiper', 'javascript', 'css', 'analytics', 'payu', 'responsive']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            name: "Repositorio ",
            type: "GitHub",
            date: "01/05/2025",
            size: "Actualizado",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/PsicologiaTranspersonal",
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "01/05/2025",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=JhMosVbo7Dw",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};

import banner from "@/assets/images/Banner.png";
import fm from "@/assets/images/fm.png";
import fm1 from "@/assets/images/fm1.png";
import fm2 from "@/assets/images/fm2.png";
import fm3 from "@/assets/images/fm3.png";
import fm4 from "@/assets/images/fm4.png";
import { generateStackHTML } from '../techStack/techStack';

export const framerMotionData = {
    id: "framermotionlab",
    summary: {
        icon: "📁",
        name: "Framer Motion Lab",
        type: "Proyecto Personal",
        date: "01/07/2025",
        size: "En Curso",
        path: "/projects/framermotionlab",
        description: "Proyecto personal orientado al aprendizaje y experimentación con animaciones web en Framer Motion.",
        previewUrl: banner,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📘",
            name: "Descripción",
            type: "Texto",
            date: "01/06/2025",
            size: "Actualizado",
            description: [
                "Framer Motion Lab como una **aplicación web educativa e interactiva** enfocada en el aprendizaje progresivo de animaciones en *Framer Motion*. Incluye un catálogo de ejemplos visuales, un sistema de navegación dinámica y un módulo tipo *builder* que permite experimentar con propiedades de animación en tiempo real. El sistema se estructura como una **herramienta pedagógica** y un espacio de experimentación autodidacta."
            ],
            previewUrl: fm4,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "PDF",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/1u-zZ3B0FGTEvUh5QrDfagLNKLTfhw-eN/view?usp=drive_link",
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Framer Motion Lab",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {

                    name: "Interfaz Principal",
                    description: [
                        "⦿ Diseño inspirado en la documentación oficial de *Framer Motion*.",
                    ],
                    previewUrl: fm,
                },
                {

                    name: "Dashboard de Animaciones",
                    description: [
                        "⦿ Desarrollo un **panel visual interactivo** compuesto por *cards* que muestran ejemplos funcionales de propiedades clave como movimiento, opacidad, rotación, duración y transiciones.",
                        "⦿ Cada *card* combina ícono, descripción y animación, permitiendo observar el comportamiento de cada propiedad en tiempo real."
                    ],
                    previewUrl: fm1,
                },
                {

                    name: "Explicaciones y Detalles",
                    description: [
                        "⦿ Elaboro **descripciones breves y técnicas** en cada *card* para explicar el uso de propiedades y su efecto en las animaciones.",
                        "⦿ Incluyo **visualizaciones paralelas** del código fuente y su resultado, reforzando la comprensión entre teoría y práctica."
                    ],
                    previewUrl: fm2,
                },
                {

                    name: "LabMotion Builder",
                    description: [
                        "⦿ Implemento el módulo interactivo **LabMotion Builder**, un entorno que permite modificar parámetros de animación. Este sistema funciona como un **laboratorio experimental**, integrando controles dinámicos para fomentar el aprendizaje práctico de *Framer Motion*."
                    ],
                    previewUrl: fm3,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "01/06/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'css', 'javascript', 'framermotion', 'vite']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🐙",
            name: "Repositorio ",
            type: "GitHub",
            date: "01/06/2025",
            size: "Actualizado",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/framer-motion",
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "01/06/2025",
            size: "Actualizado",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=BprPVV6Pl8E",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};

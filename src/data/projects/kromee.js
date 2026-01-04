import { generateStackHTML } from '../techStack/techStack';
import Kromee from "@/assets/images/kromee.jpg";

export const kromeeData = {
    id: "kromee",
    summary: {
        icon: "📁",
        name: "Kromee",
        type: "Experiencia Laboral",
        date: "01/12/2026",
        size: "En Curso",
        path: "/projects/kromee",
        description: "Kromee es una empresa de desarrollo de software enfocada en crear soluciones tecnológicas de vanguardia y alto impacto. Con un equipo experto en diversas plataformas, desde aplicaciones móviles hasta sistemas empresariales, combina innovación y excelencia técnica para entregar productos personalizados que impulsan el crecimiento y el éxito de sus clientes.",
        previewUrl: Kromee,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto",
            date: "01/01/2026",
            size: "Actualizado",
            description: [
                "En este proyecto se plantea desarrollar una plataforma integral tipo marketplace similar a Whop.com, orientada a la monetización de productos digitales y gestión de comunidades. El sistema integra módulos para la publicación de contenido, ventas, pasarelas de pago y una interfaz administrativa robusta. Me desempeño como desarrollador Full Stack en esta iniciativa, con una duración de 6 meses.",
                "Actualmente participo en el proyecto bajo un acuerdo de confidencialidad, por lo que los detalles técnicos y estratégicos se mantienen reservados."
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "01/01/2026",
            size: "Actualizado",
            description: generateStackHTML(['react', 'javascript', 'css', 'git', 'next', 'nodejs', 'docker', 'express']), // Default stack, user can edit
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        }
    ]
};

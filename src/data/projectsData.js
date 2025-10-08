// src/data/projectsData.js
import martina1 from "@/assets/images/martina1.webp";
import martina2 from "@/assets/images/martina2.webp";
import martina3 from "@/assets/images/martina3.webp";
import martina4 from "@/assets/images/martina4.webp";

import MisterSoldo from "@/assets/images/MisterSoldo.png";
import PsicoT from "@/assets/images/PsicoT.png";
import banner from "@/assets/images/banner.webp";
import ai from "@/assets/images/ai.png";
// Lista principal de proyectos (para la vista de Projects)
export const projectsList = [
    {
        icon: "📁",
        name: "MartinaClandestina",
        type: "Proyecto Freelance",
        date: "20/09/2025 9:06 p.m.",
        size: "Completado",
        path: "/projects/martinaclandestina",
        description: "Martina Clandestina es una marca de almuerzos con identidad local...",
        previewUrl: martina1,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "MisterSoldo",
        type: "Proyecto Freelance",
        date: "11/09/2025 12:47 a.m.",
        size: "Completado",
        path: "/projects/mistersoldo",
        description: "Mister Soldo es una plataforma musical diseñada para ofrecer contenido...",
        previewUrl: MisterSoldo,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Psicotranspersonal",
        type: "Proyecto Freelance",
        date: "20/09/2025 9:06 p.m.",
        size: "Completado",
        path: "/projects/psicotranspersonal",
        description: "Desarrollé una plataforma web para una psicóloga independiente...",
        previewUrl: PsicoT,
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "GUAU",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/guau",
        description: "EN DESARROLLO... Plataforma integral de servicios y productos para mascotas...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "FramerMotionLab",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/framermotionlab",
        description: "EN DESARROLLO... Laboratorio de animaciones interactivas con Framer Motion...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Trainit Trello",
        type: "Proyecto Colaborativo",
        date: "11/09/2025 12:47 a.m.",
        size: "Finalizando",
        path: "/projects/trainittrello",
        description: "EN DESARROLLO... Plataforma diseñada para centralizar búsqueda y postulación...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
        downloadUrl: null,
        linkUrl: null,
    },
    {
        icon: "📁",
        name: "Postulamania",
        type: "Proyecto Personal",
        date: "11/09/2025 12:47 a.m.",
        size: "Desarrollo",
        path: "/projects/postulamania",
        description: "EN DESARROLLO... Clon de Trello adaptado para gestión de entrenamientos...",
        previewUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
        downloadUrl: null,
        linkUrl: null,
    },
];




export const projectDetailFiles = {
    martinaclandestina: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Información",
            date: "20/09/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Desarrollé una carta digital dinámica con enfoque Mobile First para una marca de almuerzos local. El sistema permite navegar por los menús de cada día de la semana, señalando automáticamente el día actual, y facilita la realización de pedidos directos vía WhatsApp con autocompletado de datos del cliente y del pedido. La interfaz es ligera, clara y funcional, con animaciones sutiles y rutas dinámicas, optimizada para celulares. El contenido del menú se gestiona fácilmente desde un archivo data.js, eliminando la necesidad de bases de datos o paneles complejos, reduciendo costos y aumentando la autonomía de la marca.",
            previewUrl: martina4,
            downloadUrl: null,
            linkUrl: "https://example.com/nn",
        },
        {
            icon: "🖼️",
            name: "Imagen 1",
            type: "Imagen",
            date: "20/09/2025 9:15 p.m.",
            size: "Actualizado",
            description: null,
            previewUrl: martina3,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 2",
            type: "Imagen",
            date: "20/09/2025 9:16 p.m.",
            size: "Actualizado",
            description: null,
            previewUrl: martina2,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 3",
            type: "Imagen",
            date: "20/09/2025 9:16 p.m.",
            size: "Actualizado",
            description: null,
            previewUrl: martina1,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Documento",
            date: "20/09/2025 9:20 p.m.",
            size: "Actualizado",
            description: `
                <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" style="width: 48px; height: 48px;" title="React.js" />
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" style="width: 48px; height: 48px;" title="CSS3" />
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" style="width: 48px; height: 48px;" title="WhatsApp API" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Vite" style="width: 48px; height: 48px;" title="Vite" />
                    <span style="font-size: 14px; color: #555;">Responsive Design</span>
                </div>
            `,
            previewUrl: ai,
            downloadUrl: null,
            linkUrl: null,
        },

                {
            icon: "📄",
            name: "Contribuciones",
            type: "Información",
            date: "20/09/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Desarrollé una carta digital dinámica para una marca de almuerzos local usando React.js, Vite, React Router y CSS, con enfoque Mobile First para facilitar el acceso desde celulares. Implementé navegación por días de la semana con señalización automática del día actual y un sistema de pedidos directo vía WhatsApp con autocompletado de datos del cliente y del pedido, simplificando la experiencia. La interfaz es ligera, clara y funcional, con animaciones sutiles y rutas dinámicas, y el contenido del menú se gestiona fácilmente desde un archivo data.js, evitando bases de datos o paneles complejos, reduciendo costos y aumentando la autonomía de la marca.",
            previewUrl: banner,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "20/09/2025 9:25 p.m.",
            size: "Actualizado",
            description: "Descarga la ficha técnica en formato Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },
    ],

    mistersoldo: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Información",
            date: "11/09/2025 12:47 a.m.",
            size: "Actualizado",
            description: "Mister Soldo es una plataforma musical diseñada...",
            previewUrl: MisterSoldo,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 1",
            type: "Imagen",
            date: "11/09/2025 12:50 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: "https://picsum.photos/400/300?random=3",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 2",
            type: "Imagen",
            date: "11/09/2025 12:51 a.m.",
            size: "Actualizado",
            description: null,
            previewUrl: "https://picsum.photos/400/300?random=4",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Documento",
            date: "11/09/2025 12:55 a.m.",
            size: "Actualizado",
            description: `
                <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" style="width: 48px; height: 48px;" title="React.js" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" style="width: 48px; height: 48px;" title="YouTube API" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Vite" style="width: 48px; height: 48px;" title="Vite" />
                    <span style="font-size: 14px; color: #555;">Swiper.js, Vercel</span>
                </div>
            `,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "11/09/2025 12:58 a.m.",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },
    ],

    psicotranspersonal: [
        {
            icon: "📄",
            name: "Descripción del Proyecto",
            type: "Información",
            date: "20/09/2025 9:06 p.m.",
            size: "Actualizado",
            description: "Plataforma web para psicóloga independiente con identidad de marca...",
            previewUrl: PsicoT,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 1",
            type: "Imagen",
            date: "20/09/2025 9:10 p.m.",
            size: "Actualizado",
            description: null,
            previewUrl: "https://picsum.photos/400/300?random=5",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🖼️",
            name: "Imagen 2",
            type: "Imagen",
            date: "20/09/2025 9:11 p.m.",
            size: "Actualizado",
            description: null,
            previewUrl: "https://picsum.photos/400/300?random=6",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías Usadas",
            type: "Documento",
            date: "20/09/2025 9:15 p.m.",
            size: "Actualizado",
            description: `
                <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" style="width: 48px; height: 48px;" title="React.js" />
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Vite" style="width: 48px; height: 48px;" title="Vite" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Analytics" style="width: 48px; height: 48px;" title="Google Analytics" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png" alt="Payment" style="width: 48px; height: 48px;" title="Sistema de Pagos" />
                    <span style="font-size: 14px; color: #555;">Framer Motion</span>
                </div>
            `,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "Word",
            date: "20/09/2025 9:20 p.m.",
            size: "Actualizado",
            description: "Ficha técnica descargable en Word.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/732/732223.png",
            downloadUrl: "/ExampleWord.docx",
            linkUrl: null,
        },
    ],
};
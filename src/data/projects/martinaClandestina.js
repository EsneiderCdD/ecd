import martina1 from "@/assets/images/martina1.webp";
import menunav from "@/assets/images/menunav.png";
import mt2 from "@/assets/images/mt2.png";
import mt3 from "@/assets/images/mt3.png";
import mt4 from "@/assets/images/mt4.png";
import { generateStackHTML } from '../techStack/techStack';

export const martinaData = {
    id: "martinaclandestina",
    summary: {
        icon: "📁",
        name: "Martina Clandestina",
        type: "Proyecto Freelance",
        date: "01/01/2025",
        size: "Completado",
        path: "/projects/martinaclandestina",
        description: "Martina Clandestina es un proyecto de cocina saludable que rinde homenaje a la bisabuela Martina, una mujer resiliente cuyo legado inspiró a su familia a transformar la tradición en una propuesta culinaria consciente. Liderado por la chef Mónica y sus hijas, el emprendimiento combina recetas caseras, identidad local y servicio cálido para ofrecer experiencias gastronómicas con propósito.",
        previewUrl: martina1,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto",
            date: "01/01/2025",
            size: "Actualizado",
            description: ["Desarrollé una carta digital dinámica con enfoque Mobile First para una marca local de almuerzos.",
                "El sistema permite navegar fácilmente entre los menús de cada día de la semana, destacando automáticamente el día actual. Además, facilita pedidos directos vía WhatsApp con mensajes autocompletados que incluyen datos del cliente y del pedido. La interfaz, ligera y funcional, incorpora animaciones suaves y rutas dinámicas optimizadas para dispositivos móviles.",
            ],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📑",
            name: "Ficha Técnica",
            type: "PDF",
            date: "01/01/2025",
            size: "Actualizado",
            description: "Ficha técnica en PDF.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/1_nlNyZxcjeX07M7wO4XdmQvDOzDw7bAk/view?usp=drive_link",
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "01/01/2025",
            size: "Actualizado",
            description: "Navega por mis principales contribuciones y aportes al proyecto Martina Clandestina",
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {

                    name: "Navegación Dinámica por Días",
                    description: [
                        "⦿ Implementé un sistema de navegación semanal con detección automática del día actual, aplicando resaltado visual dinámico según la jornada ayudando a los usuarios a identificar rápidamente el menú disponible por fecha y horario.",
                    ],
                    previewUrl: menunav,
                },
                {

                    name: "Desarrollo de la Carta Digital",
                    description: [
                        "⦿ Construí una **carta digital dinámica** con *React.js*, *Vite* y *React Router*, estructurando rutas y componentes reutilizables.",
                    ],
                    previewUrl: mt2,
                },
                {

                    name: "Diseño Visual e Identidad de Marca",
                    description: [
                        "⦿ Diseñé una interfaz con **animaciones sutiles** y **transiciones fluidas**, reforzando la narrativa gastronómica local.",
                        "⦿ Apliqué una paleta cromática coherente con la marca y cuidé la jerarquía visual."
                    ],
                    previewUrl: mt3,
                },
                {

                    name: "Sistema de Pedidos Automatizado",
                    description: [
                        "⦿ Desarrollé un sistema automatizado de pedidos mediante **WhatsApp API**, con mensajes autocompletados y datos de pedido preconfigurados.",
                        "⦿ La automatización redujo errores y pasos manuales, mejorando la eficiencia y coherencia en la comunicación con los clientes."
                    ],
                    previewUrl: mt4,
                }
            ]
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "01/01/2025",
            size: "Actualizado",
            description: generateStackHTML(['react', 'vite', 'javascript', 'css', 'mobileDesign']),
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "01/01/2025",
            size: "Actualizado",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/MartinaClandestina",
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "01/01/2025",
            size: "Actualizado",
            description: "Explora el proyecto con un video corto en YouTube.",
            previewUrl: "https://youtube.com/watch?v=RT-zmBqt-qQ",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
    ]
};

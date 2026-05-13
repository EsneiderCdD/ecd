import banner from "@/assets/images/Banner.webp";
import gua from "@/assets/images/gua.webp";
import gua2 from "@/assets/images/gua2.webp";
import guau5 from "@/assets/images/guau5.webp";
import guau6 from "@/assets/images/guau6.webp";
import guau7 from "@/assets/images/guau7.webp";
import Guau from "@/assets/images/Guau.webp";

export const guauData = {
    id: "guau",
    summary: {
        icon: "📁",
        name: "Guau",
        type: "Proyecto Personal",
        date: "15/04/2026",
        size: "En Curso",
        path: "/projects/guau",
        description: " Estoy construyendo Guau como un legado tecnológico con sentido ético: una herramienta que une psicología, matemática y software en favor del bienestar animal. Más allá de la programación, el proyecto busca que la adopción sea un acto consciente, sustentado en ciencia, empatía y datos reales. Si en algún momento un refugio u organización desea integrarlo, estoy dispuesto a adaptarlo como aporte social y de libre implementación.",
        previewUrl: banner,
        downloadUrl: null,
        linkUrl: null,
    },
    details: [
        {
            icon: "📄",
            name: "Descripción",
            type: "Texto",
            date: "15/04/2026",
            size: "En Curso",
            description: [
                "Guau es una plataforma web que combina pruebas psicométricas, un algoritmo de compatibilidad basado en distancia euclidiana y una interfaz construida en **React**, donde cada elemento visual responde a la experiencia del usuario.",
            ],
            previewUrl: Guau,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "📋",
            name: "Contribuciones",
            type: "Dinámico",
            date: "15/04/2026",
            size: "En Curso",
            description: null,
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
            contributions: [
                {
                    name: "Diseño y Frontend",
                    description: [
                        "⦿ Diseño una interfaz priorizando la experiencia de adopción sobre la lógica de negocio.",
                        "⦿ Estructuro componentes reutilizables cards dinámicas, rutas, modales y pantallas de detalle."
                    ],
                    previewUrl: gua,
                },
                {

                    description: [
                        "⦿ Implemento tarjetas dinámicas y componentes clave como *Login*, menú de navegación tipo flechas, secciones de detalle de perros y módulo de tienda."
                    ],
                    previewUrl: guau7,
                },
                {

                    description: null,
                    previewUrl: guau5,
                },
                {

                    description: null,
                    previewUrl: guau6,
                },
                {

                    description: [
                        "⦿ Implemento una interfaz administrativa que permite gestionar dinámicamente la información de los perros —imágenes, datos y características— optimizando la carga y actualización del contenido."
                    ],
                    previewUrl: gua2,
                },
                {

                    description: [
                        "⦿ Desarrollo un backend funcional enfocado en la administración de los perros del refugio. Incluye autenticación básica y un panel que gestiona datos psicométricos, priorizando la organización y el control estructural."
                    ]
                }
            ]
        },
        {
            icon: "🎥",
            name: "Video",
            type: "YouTube",
            date: "15/04/2026",
            size: "En Curso",
            description: "Recorre el proyecto con un video en YouTube.",
            previewUrl: "https://www.youtube.com/watch?v=EuduHNDPPdE",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "💻",
            name: "Tecnologías",
            type: "Iconos",
            date: "15/04/2026",
            size: "En Curso",
            description: null,
            stack: ['react', 'javascript', 'css', 'python', 'flask', 'sqlalchemy', 'postgresql'],
            previewUrl: null,
            downloadUrl: null,
            linkUrl: null,
        },
        {
            icon: "🐙",
            name: "Repositorio",
            type: "GitHub",
            date: "15/04/2026",
            size: "En Curso",
            description: null,
            previewUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            iconUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
            downloadUrl: null,
            linkUrl: "https://github.com/EsneiderCdD/Guau",
        },
        {
            icon: "📘",
            name: "Ficha Técnica",
            type: "PDF",
            date: "15/04/2026",
            size: "En Curso",
            description: "Ficha técnica general del proyecto en formato Word, con especificaciones, contexto y estructura conceptual.",
            previewUrl: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
            linkUrl: "https://drive.google.com/file/d/1JHFImbpIbGpLePg7q3u_gDrvDs6EZ_c8/view?usp=drive_link",
        },

    ]
};
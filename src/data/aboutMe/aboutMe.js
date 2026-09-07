import FotoPortafolio from '@/assets/images/FotoPortafolio.webp';
import TrainitLogo from '@/assets/images/trainit.webp';
import SwaplyArLogo from '@/assets/images/SwaplyAr.webp';
import Sqlassociate from '@/assets/images/sqlassociate.webp';
import Datascientist from '@/assets/images/datascientist.webp';
import Rentoldos from '@/assets/images/rentoldos.webp';
import MascotaColor from '@/assets/images/mascota_color.webp';

export const aboutFiles = [
    {
        date: "02/04/2026",
        description: "Conocé más sobre mi perfil profesional y personal",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/8955/8955270.png",
        name: "Perfil Profesional",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "Desarrollador Full-Stack",
                description: [
                    "Soy Esneider Cadavid, 29 años, Full-Stack Developer con 3 años de formación y 8 meses de experiencia laboral. Con más horas acumuladas en frontend, pero con autonomía en backend."
                ],
                previewUrl: FotoPortafolio,
            },
            {
                name: "Manifiesto",
                description: [
                    "Introvertido, con pasado en derecho, oratoria y psicología, aplicador de \"conócete a ti mismo\" y \"Do It Yourself\". Tengo un entorno privilegiado: una familia que me ama y las condiciones para dedicarme a lo que más me apasiona. Nunca una vida perfecta, solo que prefiero, a modo de conclusión, vivir en una perspectiva desde las oportunidades y el potencial humano y no desde su problema."
                ],
                previewUrl: "https://i.imgur.com/0qjzt1j.png",
            }
        ]
    },
    {
        date: "01/06/2024",
        description: "Un recorrido por mi formación académica, certificaciones y aspiraciones profesionales.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        name: "Formación",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "Herramientas",
                description: [
                    "Stack principal: MongoDB, Node.js, Express, React y CSS.",
                    "Stack secundario: PostgreSQL, Next.js, Tailwind CSS, Python y TypeScript."
                ],
                chartData: {
                    type: "radar",
                    data: [
                        { subject: "CSS", value: 4.0 },
                        { subject: "JavaScript", value: 3.5 },
                        { subject: "TypeScript", value: 3.0 },
                        { subject: "React", value: 3.5 },
                        { subject: "Tailwind", value: 3.0 },
                        { subject: "Next.js", value: 2.5 },
                        { subject: "Express", value: 2.5 },
                        { subject: "Python", value: 3.0 },
                        { subject: "Flask", value: 2.0 },
                        { subject: "REST API", value: 3.0 },
                        { subject: "PostgreSQL", value: 2.5 },
                        { subject: "MongoDB", value: 3.0 },
                        { subject: "Git", value: 2.0 },
                        { subject: "Docker", value: 0.5 },
                    ]
                },
            },
            {
                name: "Desarrollador Full-Stack — 4Geeks Academy",
                description: [
                    "01/10/2024 - 01/03/2025.",
                    "Institución respaldada por el Florida Department of Education (EE. UU.). Cinco meses de formación intensiva Full-Stack: Python, Flask, PostgreSQL, React, APIs y Bootstrap, partiendo de HTML, CSS y JavaScript."
                ],
                previewUrl: "https://i.imgur.com/vSehqsd.jpeg",
            },
            {
                name: "Associate Data Scientist — DataCamp",
                description: [
                    "03/2025 - 06/2025.",
                    "Certificación en ciencia de datos: estadística, lógica, análisis exploratorio y fundamentos de machine learning aplicado."
                ],
                previewUrl: Datascientist,
            },
            {
                name: "SQL Associate — DataCamp",
                description: [
                    "06/2025 - 08/2025.",
                    "Certificación en SQL: consultas, manipulación de datos, subconsultas y manejo de bases de datos relacionales."
                ],
                previewUrl: Sqlassociate,
            }
        ]
    },
    {
        date: "01/06/2025",
        description: "Experiencia en simulación laboral y entornos corporativos reales con equipos multidisciplinarios, metodologías ágiles y code review.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3281/3281289.png",
        name: "Experiencia Laboral",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "TrainIT — 4 meses",
                description: [
                    "01/06/2025 - 01/10/2025.",
                    "Simulación laboral con +10 devs, equipo UI/UX, PM, QA, área administrativa y rol cliente. Entorno con feedbacks cruzados y revisiones colaborativas."
                ],
                previewUrl: TrainitLogo,
                linkUrl: "/projects/trainittrello",
                buttonLabel: "Saber Más",
            },
            {
                name: "SwaplyAr — 4 meses",
                description: [
                    "01/01/2026 - 04/01/2026.",
                    "Experiencia con exigencias corporativas reales, code review, +8 devs, metodologías ágiles, UI/UX definida en Figma y revisión de PR a cargo de un senior."
                ],
                previewUrl: SwaplyArLogo,
                linkUrl: "/projects/swaplyar",
                buttonLabel: "Saber Más",
            }
        ]
    },
    {
        date: "15/09/2026",
        description: "Proyecto freelance reciente.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/4157/4157361.png",
        name: "Proyectos Freelance",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "Rentoldos — 2 meses",
                description: [
                    "15/07/2026 - 15/09/2026.",
                    "Empresa Antioqueña dedicada a la operación logística para eventos y fiestas."
                ],
                previewUrl: Rentoldos,
                linkUrl: "/projects/rentoldos",
                buttonLabel: "Saber Más",
            }
        ]
    },
    {
        date: "01/01/2026",
        description: "Proyecto personal en desarrollo.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/15757/15757011.png",
        name: "Proyectos Personales",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "Postulomaníaco",
                description: [
                    "01/2026 - Fecha indefinida.",
                    "Desarrollo Postulomaníaco, un sistema de inteligencia laboral que automatiza la extracción y filtrado de ofertas en plataformas colombianas, cruzándolas con mi perfil mediante un algoritmo de compatibilidad."
                ],
                previewUrl: MascotaColor,
                linkUrl: "/projects/postulomaniaco",
                buttonLabel: "Saber Más",
            }
        ]
    }
];
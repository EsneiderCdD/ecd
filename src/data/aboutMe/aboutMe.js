import FotoPortafolio from '@/assets/images/FotoPortafolio.webp';
import TrainitLogo from '@/assets/images/trainit.webp';
import SwaplyArLogo from '@/assets/images/SwaplyAr.webp';

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
                    "Soy Esneider Cadavid, 29 años, Full-Stack Developer con +2 años de formación (continuando) y 8 meses de experiencia laboral. Enfocado en frontend con autonomía en backend. Planificador y curioso, me destaco por mi rápida adaptación a entornos profesionales y una formación constante alineada a la demanda operativa actual."
                ],
                previewUrl: FotoPortafolio,
            },
            {
                name: "Manifiesto",
                description: [
                    "Soy una persona introvertida, con pasado en Oratoria, Psicología, Derecho y habilidades comunicativas, que hoy prefiere vivir una filosofía de \"conócete a ti mismo\". Bohemio, \"Do It Yourself\", organizado, planificador. Tengo un entorno privilegiado: una familia que me ama y un entorno que me permite dedicarme a lo que más me apasiona. Nunca una vida perfecta, solo que prefiero, a modo de conclusión, vivir en la psicología positiva, una perspectiva desde las oportunidades y el potencial humano y no desde su problema. Creativo, alguien a quien cumplir sus sueños lo saca de su zona de confort —que por ahora son imaginación— pero que vio en el desarrollo de software esa posibilidad, y desde ahí su obsesión, el camino, la apuesta de poder trazar una realidad diferente. Yo lo llamo destino."
                ],
                previewUrl: "https://i.imgur.com/0qjzt1j.png",
            }
        ]
    },
    {
        date: "01/06/2024",
        description: "Un recorrido por mi formación académica, certificaciones y aspiraciones profesionales.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
        name: "Formación y Aspiraciones",
        previewUrl: null,
        size: "Actualizado",
        type: "Dinámico",
        contributions: [
            {
                name: "Camino Autodidacta",
                description: [
                    "Mi formación comenzó hace dos años de forma autodidacta. Sin título formal aún, pero con orden, disciplina y práctica constante que, desde mi experiencia, potencializan y aceleran el aprendizaje significativamente. Mi enfoque ha sido claro: vinculación laboral temprana mientras valido conocimientos con certificaciones durante el camino. A continuación, los certificados, formación actual y aspiraciones académicas que respaldan este recorrido: "
                ],
                chartData: {
                    type: "radar",
                    data: [
                        { subject: "HTML", value: 4.0 },
                        { subject: "CSS", value: 4.0 },
                        { subject: "JavaScript", value: 2.5 },
                        { subject: "TypeScript", value: 2.5 },
                        { subject: "React", value: 2.5 },
                        { subject: "Tailwind", value: 3.0 },
                        { subject: "Next.js", value: 1.5 },
                        { subject: "Python", value: 2.0 },
                        { subject: "Flask", value: 2.0 },
                        { subject: "REST API", value: 2.5 },
                        { subject: "PostgreSQL", value: 2.5 },
                        { subject: "MongoDB", value: 1.5 },
                        { subject: "Git", value: 2.0 },
                        { subject: "Docker", value: 0.5 },
                    ]
                },
            },
            {
                name: "Desarrollador Full-Stack — 4Geeks Academy",
                description: [
                    "01/10/2024 - 01/03/2025.",
                    "Institución respaldada por el Florida Department of Education (EE. UU.), con reconocimiento en formación digital —incluso universidades inscriben a sus estudiantes aquí—. Cinco meses de formación intensiva Full-Stack: Python, Flask, PostgreSQL, React, APIs y Bootstrap, partiendo de HTML, CSS y JavaScript."
                ],
                previewUrl: "https://i.imgur.com/vSehqsd.jpeg",
            },
            {
                name: "Análisis de Datos y Ciencia de Datos — DataCamp",
                description: [
                    "01/03/2026 - 01/01/2027.",
                    "Beca completa en DataCamp otorgada por PyLadies Cochabamba. DataCamp destaca por su enfoque especializado en datos y su reconocimiento global. Formación continua en Data Analytics, Machine Learning y Bases de Datos, fortaleciendo mis fundamentos en estadística, lógica y ciencia de datos aplicada a mis proyectos."
                ],
                previewUrl: "https://i.imgur.com/1IsApLc.png",
            },
            {
                name: "Aspiraciones",
                description: [
                    "2026 - 2027.",
                    "Tengo opciones de formación por beca: freeCodeCamp con certificaciones modulares; Generation Colombia para expandir hacia Unity o reforzar Java; el SENA con tecnólogo en bases de datos o desarrollo de software; y Jala University, Ingeniería completa (postulado 01/2027). Evalúo cada alternativa según empleabilidad, calidad y modalidad remota, manteniendo el control sobre mi futuro. Paralelamente, LinkedIn, pasantías, freelance y contribuciones open source enriquecen mi formación. Formalizar y trabajar no se excluyen: es un paso natural."
                ],
                previewUrl: "https://i.imgur.com/OMAU6CQ.png",
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
                name: "TrainIT",
                description: [
                    "01/06/2025 - 01/10/2025.",
                    "Simulación laboral con +10 devs, equipo UI/UX, PM, QA, área administrativa y rol cliente. Entorno con feedbacks cruzados y revisiones colaborativas."
                ],
                previewUrl: TrainitLogo,
                linkUrl: "/projects/trainittrello",
            },
            {
                name: "SwaplyAr",
                description: [
                    "01/01/2026 - 04/01/2026.",
                    "Experiencia con exigencias corporativas reales, code review, +8 devs, metodologías ágiles, UI/UX definida en Figma y revisión de PR a cargo de un senior."
                ],
                previewUrl: SwaplyArLogo,
                linkUrl: "/projects/swaplyar",
            }
        ]
    },
    {
        date: "01/06/2025",
        description: ["Pequeños proyectos freelance acumulados: landing pages, portafolios y servicios web con ingeniería de requerimientos, entrevistas y acompañamiento al cliente.", "⦿ En construcción: propuesta comercial para \"La Coca de Jacks\" (2027).", "⦿ Guau: prototipo de adopción de mascotas con estadísticas de compatibilidad y frontend atractivo, pausado hasta encontrar una fundación aliada que reciba la donación tecnológica."],
        iconUrl: "https://cdn-icons-png.flaticon.com/512/4157/4157361.png ",
        name: "Proyectos Freelance",
        previewUrl: "https://i.imgur.com/iWVeX7H.png",
        size: "Actualizado",
        type: "Información",
    },
    {
        date: "01/01/2026",
        description: "Desarrollo Postulomaníaco, un sistema de inteligencia laboral que automatiza la extracción y filtrado de ofertas en plataformas colombianas, cruzándolas con mi perfil mediante un algoritmo de compatibilidad. Incluye métricas de respuesta real del mercado —empresas que convierten, tecnologías que conviene reforzar— y una interfaz tipo mapa para visualizar oportunidades. Construido con Next.js, FastAPI, Python, PostgreSQL y Playwright. Mi proyecto voluntario más ambicioso, impulsado por la beca DataCamp y con vocación open source.",
        iconUrl: "https://cdn-icons-png.flaticon.com/512/15757/15757011.png ",
        name: "Proyectos Personales",
        previewUrl: "https://i.imgur.com/jcrQZOK.png",
        size: "Actualizado",
        type: "Información",
    }
];
import { useState } from "react";
import AboutHeader from "../About/AboutHeader";
import AboutSidebar from "../About/AboutSidebar";
import AboutInfoPanel from "../About/AboutInfoPanel";
import Taskbar from "../Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";
import FileTable from "@/components/Common/FileTable"
import MC from "@/assets/images/MC.png"
import MisterSoldo from "@/assets/images/MisterSoldo.png"
import PsicoT from "@/assets/images/PsicoT.png"



const desktopFiles = [
  {
    icon: "📁",
    name: "MartinaClandestina",
    type: "Proyecto Freelance",
    date: "20/09/2025 9:06 p.m.",
    size: "Completado",
    path: "/projects/martinaclandestina",
    description: "Martina Clandestina es una marca de almuerzos con identidad local, diseñada para que su comunidad consulte el menú diario de manera rápida y sencilla desde cualquier dispositivo. La plataforma permite realizar pedidos directamente por WhatsApp, con información del cliente y del pedido autocompletada, haciendo que el proceso sea ágil y fluido. Pensada principalmente para móviles, la carta refleja el estilo de la marca, facilita la gestión diaria y permite actualizar los menús fácilmente sin necesidad de sistemas complejos.",
    previewUrl: MC,
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
    description: "Mister Soldo es una plataforma musical diseñada para ofrecer contenido de forma rápida y visual, enfocada principalmente en usuarios móviles. La landing page organiza el contenido en secciones claras: carrusel de imágenes destacadas, reproductores de video integrados desde YouTube, exploración de álbumes mediante drag & drop y detalles del último lanzamiento, logrando una experiencia compacta y atractiva. Se incorporaron transiciones y desplazamientos automáticos con Swiper.js para una navegación fluida y ligera, respetando el estilo urbano y directo del artista. La plataforma fue desplegada en Vercel, asegurando compatibilidad multiplataforma y acceso inmediato al contenido desde cualquier dispositivo.",
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
    description: "Desarrollé una plataforma web para una psicóloga independiente, combinando React.js y Framer Motion para crear una interfaz responsiva que reflejara fielmente su identidad de marca y fortaleciera la confianza de los usuarios. Integré un sistema de pagos personalizado y seguro, reduciendo las comisiones de terceros del 10% al 3.5% y optimizando los ingresos directos. Además, configuré métricas clave con Google Analytics para rastrear conversiones y comportamiento del público, facilitando decisiones estratégicas sobre contenido y marketing. Finalmente, optimicé el rendimiento y la velocidad del sitio con Vite, asegurando tiempos de carga mínimos y mejorando la experiencia del usuario y el posicionamiento SEO."
    ,
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
    description: "EN DESARROLLO... Este proyecto busca ofrecer una plataforma integral de servicios y productos para mascotas, combinando tienda online, reservas de servicios y consejos de cuidado en un mismo lugar. La interfaz está diseñada para ser amigable y accesible desde cualquier dispositivo, priorizando la experiencia de los dueños de mascotas y facilitando la interacción con los distintos servicios. Además, se planea integrar sistemas de notificaciones y seguimiento para mejorar la comunicación y fidelización de los usuarios."
    ,
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
    description: "EN DESARROLLO... Este laboratorio está dedicado a la exploración y creación de animaciones interactivas utilizando Framer Motion en React. El objetivo es experimentar con transiciones, efectos visuales y microinteracciones para construir interfaces dinámicas y atractivas. La plataforma permite probar distintos patrones de animación, optimizando la experiencia de usuario y mejorando la presentación de componentes de manera fluida y responsiva."
    ,
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
    description: "EN DESARROLLO... Esta plataforma está diseñada para centralizar la búsqueda y postulación a múltiples ofertas de empleo, facilitando a los usuarios aplicar de manera rápida y organizada. Incluye secciones de perfil, seguimiento de postulaciones y recomendaciones personalizadas, optimizando el proceso de búsqueda laboral y mejorando la eficiencia en la gestión de oportunidades.",
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
    description: "EN DESARROLLO... Este proyecto es un clon de Trello adaptado para la gestión de entrenamientos, permitiendo a los usuarios organizar rutinas, seguimiento de ejercicios y progresos de manera visual e intuitiva. La interfaz se centra en la experiencia móvil, con arrastrar y soltar tareas, notificaciones y una estructura flexible que facilita la planificación y el control de los entrenamientos.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📄",
    name: "nn",
    type: "Acceso directo",
    date: "25/02/2025 6:53 p.m.",
    size: "-",
    description: "Documento de ejemplo (prueba de acceso directo).",
    previewUrl: "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg",
    downloadUrl: "/files/nn.pdf",
    linkUrl: "https://example.com/nn",
  },
];

function Project() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.container}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable
          files={desktopFiles}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
      <Taskbar />
    </div>
  );
}

export default Project;
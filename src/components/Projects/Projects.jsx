import { useState } from "react";
import AboutHeader from "../About/AboutHeader";
import AboutSidebar from "../About/AboutSidebar";
import AboutInfoPanel from "../About/AboutInfoPanel";
import Taskbar from "../Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";
import FileTable from "../Common/FileTable";

const desktopFiles = [
  {
    icon: "📁",
    name: "MartinaClandestina",
    type: "Carpeta",
    date: "20/09/2025 9:06 p.m.",
    size: "-",
    description: "Proyecto artístico y experimental de música y visuales.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "MisterSoldo",
    type: "Carpeta",
    date: "11/09/2025 12:47 a.m.",
    size: "-",
    description: "Aplicación de finanzas personales enfocada en control de gastos.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/2921/2921220.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "@Psicotranspersonal",
    type: "Carpeta",
    date: "20/09/2025 9:06 p.m.",
    size: "-",
    description: "Proyecto de psicología transpersonal y bienestar.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "GUAU",
    type: "Carpeta",
    date: "11/09/2025 12:47 a.m.",
    size: "-",
    description: "Proyecto de servicios y productos para mascotas.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "FramerMotionLab",
    type: "Carpeta",
    date: "11/09/2025 12:47 a.m.",
    size: "-",
    description: "Laboratorio de animaciones con Framer Motion en React.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "Trainit Trello",
    type: "Carpeta",
    date: "11/09/2025 12:47 a.m.",
    size: "-",
    description: "Clon de Trello para la gestión de entrenamientos.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968906.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📁",
    name: "Postulamania",
    type: "Carpeta",
    date: "11/09/2025 12:47 a.m.",
    size: "-",
    description: "Plataforma para postular a múltiples ofertas de empleo.",
    previewUrl: "https://cdn-icons-png.flaticon.com/512/3135/3135673.png",
    downloadUrl: null,
    linkUrl: null,
  },
  {
    icon: "📄",
    name: "nn",
    type: "Acceso directo",
    date: "25/02/2025 6:53 p.m.",
    size: "3 KB",
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

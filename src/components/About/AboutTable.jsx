import { useState } from "react";
import FileTable from "../common/FileTable";
import AboutInfoPanel from "./AboutInfoPanel";
import styles from "./About.module.css";

function AboutTable() {
  const aboutFiles = [
    {
      icon: "📁",
      name: "Proyectos ",
      date: "20/09/2025 9:06 p.m.",
      type: "Carpeta de archivos",
      size: "-",
      path: "/projects",
      description: "Carpeta con proyectos personales de desarrollo frontend y backend.",
      previewUrl: "https://cdn-icons-png.flaticon.com/512/7187/7187523.png",
      downloadUrl: null,
      linkUrl: null,
    },
    {
      icon: "📁",
      name: "Certificados",
      date: "11/09/2025 12:47 a.m.",
      type: "Carpeta de archivos",
      size: "-",
      description: "Sprint actual del proyecto, incluye tareas y avances.",
      previewUrl: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      downloadUrl: null,
      linkUrl: null,
    },
    {
      icon: "🖌️",
      name: "Hoja de vida",
      date: "25/02/2025 6:53 p.m.",
      type: "Acceso directo",
      size: "3 KB",
      previewUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      linkUrl: "https://flowcv.com/resume/trd93dr5crok",
      downloadUrl: "/cv.pdf",
      description: "Currículum actualizado con experiencia en desarrollo web.",
    }
  ];


  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.mainContent}>
      <FileTable
        files={aboutFiles}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
      <AboutInfoPanel file={selectedFile} />
    </div>
  );
}

export default AboutTable;

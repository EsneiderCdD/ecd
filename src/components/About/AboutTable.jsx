import { useState } from "react";
import FileTable from "../common/FileTable";
import AboutInfoPanel from "./AboutInfoPanel";
import styles from "./About.module.css";

function AboutTable() {
  const aboutFiles = [
    {
      icon: "📁",
      name: "Repositorio",
      date: "20/09/2025 9:06 p.m.",
      type: "Carpeta de archivos",
      size: "-",
    },
    {
      icon: "📁",
      name: "Sprint",
      date: "11/09/2025 12:47 a.m.",
      type: "Carpeta de archivos",
      size: "-",
    },
    {
      icon: "🖌️",
      name: "Adobe Illustrator 2024",
      date: "25/02/2025 6:53 p.m.",
      type: "Acceso directo",
      size: "3 KB",
      previewUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg", // 👈 ejemplo de preview específico
    },
  ];

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.mainContent}>
      {/* Tabla de archivos */}
      <FileTable
        files={aboutFiles}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />

      {/* Panel dinámico */}
      <AboutInfoPanel file={selectedFile} />
    </div>
  );
}

export default AboutTable;

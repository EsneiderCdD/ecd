import { useState } from "react";
import AboutHeader from "../About/AboutHeader";
import AboutSidebar from "../About/AboutSidebar";
import AboutInfoPanel from "../About/AboutInfoPanel";
import Taskbar from "../Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";
import FileTable from "../Common/FileTable";

const desktopFiles = [
  { icon: "📁", name: "MartinaClandestina", type: "Carpeta", date: "20/09/2025 9:06 p.m.", size: "-" },
  { icon: "📁", name: "MisterSoldo", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📁", name: "@Psicotranspersonal", type: "Carpeta", date: "20/09/2025 9:06 p.m.", size: "-" },
  { icon: "📁", name: "GUAU", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📁", name: "FramerMotionLab", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📁", name: "Trainit Trello", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📁", name: "Postulamania", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📄", name: "nn", type: "Acceso directo", date: "25/02/2025 6:53 p.m.", size: "3 KB", previewUrl: "https://camarasal.com/wp-content/uploads/2020/08/default-image-5-1.jpg" },
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

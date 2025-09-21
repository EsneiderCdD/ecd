// src/pages/Project/Project.jsx
import AboutHeader from "../About/AboutHeader";
import AboutSidebar from "../About/AboutSidebar";
import FileTable from "../common/FileTable"; 
import AboutInfoPanel from "../About/AboutInfoPanel";
import Taskbar from "../Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";


const desktopFiles = [
  { icon: "📁", name: "archivos", type: "Carpeta", date: "20/09/2025 9:06 p.m.", size: "-" },
  { icon: "📁", name: "archivos", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📄", name: "archivos", type: "Acceso directo", date: "25/02/2025 6:53 p.m.", size: "3 KB" },
];

function Project() {
  return (
    <div className={styles.container}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable files={desktopFiles} />
        <AboutInfoPanel />
      </div>
      <Taskbar />
    </div>
  );
}

export default Project;

// src/pages/DesktopFolder/DesktopFolder.jsx
import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import FileTable from "../../components/common/FileTable"; 
import AboutInfoPanel from "../../components/About/AboutInfoPanel";
import Taskbar from "../../components/Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";


const desktopFiles = [
  { icon: "📁", name: "Repositorios", type: "Carpeta", date: "20/09/2025 9:06 p.m.", size: "-" },
  { icon: "📁", name: "Sprint", type: "Carpeta", date: "11/09/2025 12:47 a.m.", size: "-" },
  { icon: "📄", name: "Adobe Illustrator 2024", type: "Acceso directo", date: "25/02/2025 6:53 p.m.", size: "3 KB" },
];

function DesktopFolder() {
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

export default DesktopFolder;

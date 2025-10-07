// src/pages/ProjectDetail/ProjectDetail.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import AboutHeader from "@/components/About/AboutHeader";
import AboutSidebar from "@/components/About/AboutSidebar";
import AboutInfoPanel from "@/components/About/AboutInfoPanel";
import Taskbar from "@/components/Taskbar/Taskbar";
import FileTable from "@/components/common/FileTable";
import styles from "@/components/About/About.module.css";
import { projectDetailFiles } from "@/data/projectsData";

function ProjectDetail() {
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  // Obtener los archivos del proyecto actual
  const files = projectDetailFiles[projectId] || [];

  return (
    <div className={styles.aboutContainer}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable
          files={files}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
      <Taskbar />
    </div>
  );
}

export default ProjectDetail;
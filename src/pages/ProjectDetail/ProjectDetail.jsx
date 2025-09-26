// src/pages/Project/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import FileTable from "../../components/Common/FileTable";
import AboutInfoPanel from "../../components/About/AboutInfoPanel";
import Taskbar from "../../components/Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";
import { projectFiles } from "../../data/projectFiles";

function ProjectDetail() {
  const { projectId } = useParams();
  const files = projectFiles[projectId] || [];

  return (
    <div className={styles.container}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable files={files} />
        <AboutInfoPanel />
      </div>
      <Taskbar />
    </div>
  );
}

export default ProjectDetail;
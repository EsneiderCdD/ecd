import { useState } from "react";
import Toolbar from "../reusable/Layout/Toolbar/Toolbar";
import Sidebar from "../reusable/Layout/Sidebar/Sidebar";
import InfoPanel from "../reusable/Layout/InfoPanel/InfoPanel";
import styles from "./AboutMe.module.css";
import DesktopTable from "../reusable/Layout/DesktopTable/DesktopTable";
import { projectsList } from "@/data/projects";

function Projects() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.aboutContainer}>
      <Toolbar />
      <div className={styles.mainContent}>
        <Sidebar />
        <DesktopTable
          files={projectsList}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <InfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default Projects;

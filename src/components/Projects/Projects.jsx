// src/components/Projects/Projects.jsx
import { useState } from "react";
import AboutHeader from "../About/AboutHeader";
import AboutSidebar from "../About/AboutSidebar";
import AboutInfoPanel from "../About/AboutInfoPanel";

import styles from "../../components/About/About.module.css";
import FileTable from "@/components/Common/FileTable";
import { projectsList } from "@/data/projectsData";

function Project() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.aboutContainer}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable
          files={projectsList}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
    
    </div>
  );
}

export default Project;
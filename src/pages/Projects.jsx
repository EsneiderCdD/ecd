import { useState } from "react";

import Toolbar from "../components/Layout/Toolbar/Toolbar";
import AboutSidebar from "../components/Layout/AboutSidebar";
import AboutInfoPanel from "../components/Layout/AboutInfoPanel";
import styles from "../components/Layout/About.module.css";
import FileTable from "@/components/Common/FileTable";
import { projectsList } from "@/data/projectsData";
import { useSorting } from "@/hooks/useSorting";

function Projects() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { sortedData, handleSortChange } = useSorting(projectsList);

  return (
    <div className={styles.aboutContainer}>
      <Toolbar onSortChange={handleSortChange} />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable
          files={sortedData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default Projects;

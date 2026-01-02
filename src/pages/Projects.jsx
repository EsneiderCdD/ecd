import { useState } from "react";

import Toolbar from "../components/Layout/Toolbar/Toolbar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import InfoPanel from "../components/Layout/InfoPanel/InfoPanel";
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
        <Sidebar />
        <FileTable
          files={sortedData}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <InfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default Projects;

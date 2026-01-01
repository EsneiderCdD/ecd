import { useState } from "react";
import AboutHeader from "../components/About/AboutHeader";
import AboutSidebar from "../components/About/AboutSidebar";
import AboutInfoPanel from "../components/About/AboutInfoPanel";
import styles from "../components/About/About.module.css";
import FileTable from "@/components/Common/FileTable";
import { projectsList } from "@/data/projectsData";
import { useSorting } from "@/hooks/useSorting";

function Projects() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { sortedData, handleSortChange } = useSorting(projectsList);

  return (
    <div className={styles.aboutContainer}>
      <AboutHeader onSortChange={handleSortChange} />
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

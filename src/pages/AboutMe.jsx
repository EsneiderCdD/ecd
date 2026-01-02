// src/pages/AboutMe.jsx
import { useState } from "react";
import Toolbar from "@/components/Layout/Toolbar/Toolbar";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import InfoPanel from "@/components/Layout/InfoPanel/InfoPanel";
import styles from "@/components/Layout/About.module.css";
import FileTable from "@/components/Common/FileTable";
import { aboutFiles } from "@/data/aboutData";
import { useSorting } from "@/hooks/useSorting";

function AboutMe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { sortedData, handleSortChange } = useSorting(aboutFiles);

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

export default AboutMe;

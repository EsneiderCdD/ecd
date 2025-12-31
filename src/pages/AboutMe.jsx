// src/pages/AboutMe.jsx
import { useState } from "react";
import AboutHeader from "@/components/About/AboutHeader";
import AboutSidebar from "@/components/About/AboutSidebar";
import AboutInfoPanel from "@/components/About/AboutInfoPanel";
import styles from "@/components/About/About.module.css";
import FileTable from "@/components/Common/FileTable";
import { aboutFiles } from "@/data/aboutData";
import { useSorting } from "@/hooks/useSorting";

function AboutMe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const { sortedData, handleSortChange } = useSorting(aboutFiles);

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

export default AboutMe;

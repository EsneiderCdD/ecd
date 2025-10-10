// src/components/About/About.jsx
import { useState } from "react";
import AboutHeader from "./AboutHeader";
import AboutSidebar from "./AboutSidebar";
import AboutInfoPanel from "./AboutInfoPanel";

import styles from "./About.module.css";
import FileTable from "@/components/Common/FileTable";
import { aboutFiles } from "@/data/aboutData";

function About() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.aboutContainer}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable
          files={aboutFiles}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <AboutInfoPanel file={selectedFile} />
      </div>
  
    </div>
  );
}

export default About;
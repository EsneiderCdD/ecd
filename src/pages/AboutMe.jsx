import { useState } from "react";
import Toolbar from "@/reusable/Layout/Toolbar/Toolbar";
import Sidebar from "@/reusable/Layout/Sidebar/Sidebar";
import InfoPanel from "@/reusable/Layout/InfoPanel/InfoPanel";
import styles from "./AboutMe.module.css";
import DesktopTable from "@/reusable/Layout/DesktopTable/DesktopTable";
import { aboutFiles } from "@/data/aboutMe/aboutMe";

function AboutMe() {
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className={styles.aboutContainer}>
      <Toolbar />
      <div className={styles.mainContent}>
        <Sidebar />
        <DesktopTable
          files={aboutFiles}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <InfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default AboutMe;

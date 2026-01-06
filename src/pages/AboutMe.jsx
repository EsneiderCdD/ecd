import { useState } from "react";
import Toolbar from "@/components/Layout/Toolbar/Toolbar";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import InfoPanel from "@/components/Layout/InfoPanel/InfoPanel";
import styles from "./AboutMe.module.css";
import DesktopTable from "@/components/Layout/DesktopTable/DesktopTable";
import { aboutFiles } from "@/data/aboutMe/aboutMe";
import { useSorting } from "@/hooks/useSorting";

function AboutMe() {
  const [selectedFile, setSelectedFile] = useState(null);
  const {sortedData, handleSortChange } = useSorting(aboutFiles);

  return (
    <div className={styles.aboutContainer}>
      <Toolbar onSortChange={handleSortChange} />
      <div className={styles.mainContent}>
        <Sidebar />
        <DesktopTable
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

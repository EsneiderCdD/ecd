import { useState } from "react";
import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import FileTable from "../../components/common/FileTable";
import AboutInfoPanel from "../../components/About/AboutInfoPanel";

import styles from "../../components/About/About.module.css";
import { useSorting } from "@/hooks/useSorting";

function DesktopFolder() {
  const [selectedFile, setSelectedFile] = useState(null);
  // DesktopFolder no tiene datos específicos, pero mantenemos la estructura
  const { sortedData, handleSortChange } = useSorting([]);

  return (
    <div className={styles.container}>
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

export default DesktopFolder;

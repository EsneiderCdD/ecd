import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import FileTable from "../../components/common/FileTable";
import AboutInfoPanel from "../../components/About/AboutInfoPanel";

import styles from "../../components/About/About.module.css";



function DesktopFolder() {
  return (
    <div className={styles.container}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <FileTable />
        <AboutInfoPanel />
      </div>
     
    </div>
  );
}

export default DesktopFolder;

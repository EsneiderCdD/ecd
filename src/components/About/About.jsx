import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import AboutTable from "../../components/About/AboutTable";
import AboutInfoPanel from "../../components/About/AboutInfoPanel";
import Taskbar from "../../components/Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      <AboutHeader />
      <div className={styles.mainContent}>
        <AboutSidebar />
        <AboutTable />
        <AboutInfoPanel />
      </div>
      <Taskbar />
    </div>
  );
}

export default About;

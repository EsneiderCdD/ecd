import AboutHeader from "../../components/About/AboutHeader";
import AboutSidebar from "../../components/About/AboutSidebar";
import AboutTable from "../../components/About/AboutTable";
import AboutInfoPanel from "../../components/About/AboutInfoPanel";
import Taskbar from "../../components/Taskbar/Taskbar";
import styles from "../../components/About/About.module.css";

function About() {
  return (
    <div className={styles.aboutContainer}>
      {/* Bloque superior vacío (header) */}
      <AboutHeader />

      <div className={styles.mainContent}>
        {/* Sidebar izquierda */}
        <AboutSidebar />

        {/* Centro: tabla de archivos */}
        <AboutTable />

        {/* Panel derecho */}
        <AboutInfoPanel />
      </div>

      {/* Barra de tareas abajo */}
      <Taskbar />
    </div>
  );
}

export default About;

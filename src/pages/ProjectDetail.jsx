import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../components/Layout/Toolbar/Toolbar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import InfoPanel from "../components/Layout/InfoPanel/InfoPanel";
import DesktopTable from "../components/Layout/DesktopTable/DesktopTable";
import styles from "./AboutMe.module.css";
import { projectDetailFiles } from "@/data/projectsData";
import { useSorting } from "@/hooks/useSorting";
import { useAchievements } from "@/context/AchievementsContext";

function ProjectDetail() {
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const { trackProjectVisit } = useAchievements();
  const hasTrackedRef = useRef(false);
  const files = projectDetailFiles[projectId] || [];
  const { sortedData, handleSortChange } = useSorting(files);

  useEffect(() => {
    if (projectId && !hasTrackedRef.current) {
      trackProjectVisit(projectId);
      hasTrackedRef.current = true;
    }
    return () => {
      hasTrackedRef.current = false;
    };
  }, [projectId, trackProjectVisit]);

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

export default ProjectDetail;

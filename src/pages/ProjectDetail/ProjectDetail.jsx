// src/pages/ProjectDetail/ProjectDetail.jsx (ACTUALIZADO)
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AboutHeader from "@/components/About/AboutHeader";
import AboutSidebar from "@/components/About/AboutSidebar";
import AboutInfoPanel from "@/components/About/AboutInfoPanel";
import FileTable from "@/components/common/FileTable";
import styles from "@/components/About/About.module.css";
import { projectDetailFiles } from "@/data/projectsData";
import { useSorting } from "@/hooks/useSorting";
import { useAchievements } from "@/context/AchievementsContext";

function ProjectDetail() {
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const { trackProjectVisit } = useAchievements();
  const hasTrackedRef = useRef(false);

  // Trackear la visita solo UNA VEZ cuando cambie el projectId
  useEffect(() => {
    if (projectId && !hasTrackedRef.current) {
      trackProjectVisit(projectId);
      hasTrackedRef.current = true;
    }

    // Resetear cuando cambie de proyecto
    return () => {
      hasTrackedRef.current = false;
    };
  }, [projectId, trackProjectVisit]);

  const files = projectDetailFiles[projectId] || [];
  const { sortedData, handleSortChange } = useSorting(files);

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

export default ProjectDetail;
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AboutHeader from "../components/Layout/AboutHeader";
import AboutSidebar from "../components/Layout/AboutSidebar";
import AboutInfoPanel from "../components/Layout/AboutInfoPanel";
import FileTable from "@/components/common/FileTable";
import styles from "../components/Layout/About.module.css";
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

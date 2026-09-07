import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Toolbar from "../reusable/Layout/Toolbar/Toolbar";
import Sidebar from "../reusable/Layout/Sidebar/Sidebar";
import InfoPanel from "../reusable/Layout/InfoPanel/InfoPanel";
import DesktopTable from "../reusable/Layout/DesktopTable/DesktopTable";
import styles from "./AboutMe.module.css";
import { projectDetailFiles, allProjectsData } from "@/data/projects";
import { useAchievements } from "@/context/AchievementsContext";

function ProjectDetail() {
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const { trackProjectVisit } = useAchievements();
  const hasTrackedRef = useRef(false);

  const project = allProjectsData[projectId];
  const files = projectDetailFiles[projectId] || [];

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
      <Toolbar />
      <div className={styles.mainContent}>
        <Sidebar />
        {project?.isComingSoon || files.length === 0 ? (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            gap: '20px',
            textAlign: 'center',
            padding: '20px'
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/6581/6581211.png"
              alt="En construcción"
              style={{
                width: '128px',
                height: '128px',
                opacity: 0.9,
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
              }}
            />
          </div>
        ) : (
          <DesktopTable
            files={files}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        )}
        <InfoPanel file={selectedFile} />
      </div>
    </div>
  );
}

export default ProjectDetail;

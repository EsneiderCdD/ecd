import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "../styles/InfoPanel.module.css";
import { useAchievements } from "@/context/AchievementsContext";

function ActionButtons({ file, currentContribution, isVideoFile }) {
    const { trackPdfDownload } = useAchievements();

    const contributionLink = currentContribution?.linkUrl;
    const projectPath = file.path;

    if (isVideoFile || (!file.linkUrl && !file.links && !contributionLink && !projectPath)) return null;

    return (
        <div className={styles.buttons}>
            {contributionLink && (
                <a href={contributionLink}>
                    <button className={styles.winButton}>
                        <ExternalLink size={16} style={{ marginRight: "6px" }} />
                        {currentContribution?.buttonLabel || "Saber Más"}
                    </button>
                </a>
            )}
            {file.links && Array.isArray(file.links) ? (
                file.links.map((link, index) => {
                    if (typeof link.url === 'string' && (link.url.includes('youtube.com') || link.url.includes('youtu.be'))) return null;

                    return (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                                if (file.type === 'PDF' || file.type === 'Word') {
                                    const fileId = `${file.name}||${file.date}||${index}`;
                                    try { trackPdfDownload(fileId); } catch (e) { }
                                }
                            }}
                        >
                            <button className={styles.winButton}>
                                <ExternalLink size={16} style={{ marginRight: "6px" }} />
                                {link.label || "Saber Más"}
                            </button>
                        </a>
                    );
                })
            ) : (
                file.linkUrl && (
                    <a
                        href={file.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            if (file.type === 'PDF' || file.type === 'Word') {
                                const fileId = `${file.name}||${file.date}`;
                                try { trackPdfDownload(fileId); } catch (e) { }
                            }
                        }}
                    >
                        <button className={styles.winButton}>
                            <ExternalLink size={16} style={{ marginRight: "6px" }} />
                            {file.buttonLabel || "Saber Más"}
                        </button>
                    </a>
                )
            )}
            {projectPath && (
                <Link to={projectPath}>
                    <button className={styles.winButton}>
                        {file.buttonLabel || "Saber Más"}
                    </button>
                </Link>
            )}
        </div>
    );
}

export default ActionButtons;

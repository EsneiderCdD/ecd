import { ExternalLink } from "lucide-react";
import styles from "../styles/InfoPanel.module.css";
import { useAchievements } from "@/context/AchievementsContext";

function ActionButtons({ file, isVideoFile }) {
    const { trackPdfDownload } = useAchievements();

    if (isVideoFile || (!file.linkUrl && !file.links)) return null;

    return (
        <div className={styles.buttons}>
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
                                {link.label || "Ver"}
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
                            Ver
                        </button>
                    </a>
                )
            )}
        </div>
    );
}

export default ActionButtons;

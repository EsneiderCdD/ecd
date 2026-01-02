import { useState, useEffect } from "react";
import styles from "../styles/InfoPanel.module.css";
import { getYouTubeEmbedUrl } from "../utils/videoHelpers";
import { useAchievements } from "@/context/AchievementsContext";

function MediaPreview({ file, currentContribution }) {
    const { trackVideoView } = useAchievements();
    const [videoOverlayActive, setVideoOverlayActive] = useState(true);

    const previewUrl = currentContribution?.previewUrl || file.previewUrl;

    useEffect(() => {
        setVideoOverlayActive(true);
    }, [file, currentContribution]);

    if (!previewUrl) return null;

    const isYouTube = previewUrl.includes("youtube.com") || previewUrl.includes("youtu.be");

    return (
        <div className={styles.imageBox}>
            {isYouTube ? (
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <iframe
                        className={styles.previewVideo}
                        src={getYouTubeEmbedUrl(previewUrl)}
                        title={currentContribution?.name || file.name}
                        frameBorder="0"
                        style={{ width: '100%', height: '100%' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    {videoOverlayActive && (
                        <div
                            onClick={() => {
                                try {
                                    const videoId = `${file.name}||${previewUrl}`;
                                    trackVideoView(videoId);
                                } catch (e) { }
                                setVideoOverlayActive(false);
                            }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                cursor: 'pointer',
                                background: 'transparent'
                            }}
                        />
                    )}
                </div>
            ) : (
                (() => {
                    const isIcon = previewUrl.includes("flaticon.com") || previewUrl.includes("icons8.com") || previewUrl.includes("icon");
                    return (
                        <img
                            src={previewUrl}
                            alt={`Vista previa de ${currentContribution?.name || file.name}`}
                            className={`${styles.previewImage} ${isIcon ? styles.previewIcon : ''}`}
                        />
                    );
                })()
            )}
        </div>
    );
}

export default MediaPreview;

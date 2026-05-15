import styles from "./styles/InfoPanel.module.css";
import { usePanelResizer } from "./hooks/usePanelResizer";
import { useContributionNav } from "./hooks/useContributionNav";
import MediaPreview from "./components/MediaPreview";
import ContributionNav from "./components/ContributionNav";
import ActionButtons from "./components/ActionButtons";
import Description from "./components/Description";
import { stackIcons } from "@/data/techStack/techStack";

function InfoPanel({ file }) {
    const { width, handleMouseDown } = usePanelResizer();

    // Logic hooks
    const {
        currentContributionIndex,
        currentContribution,
        showContributionNavigation,
        handlePreviousContribution,
        handleNextContribution
    } = useContributionNav(file);

    if (!file) {
        return (
            <div className={styles.infoPanel} style={{ width: `${width}px` }}>
                <div className={styles.resizer} onMouseDown={handleMouseDown} />
                <p style={{ padding: "20px", textAlign: "center", color: "#666" }}>
                    Selecciona un archivo o carpeta para ver la información
                </p>
            </div>
        );
    }

    const isImageOnly = file.type === "Imagen" && !file.description;
    const resolvedPreviewUrl = currentContribution?.previewUrl || file.previewUrl || '';
    const isVideoFile = typeof resolvedPreviewUrl === 'string' && (resolvedPreviewUrl.includes('youtube.com') || resolvedPreviewUrl.includes('youtu.be') || file.type === 'YouTube');

    return (
        <div className={styles.infoPanel} style={{ width: `${width}px` }}>
            <div className={styles.resizer} onMouseDown={handleMouseDown} />

            {/* Media */}
            <MediaPreview
                file={file}
                currentContribution={currentContribution}
            />

            {/* Navigation */}
            {showContributionNavigation && (
                <ContributionNav
                    currentIndex={currentContributionIndex}
                    total={file.contributions.length}
                    onPrevious={handlePreviousContribution}
                    onNext={handleNextContribution}
                />
            )}

            {/* Title */}
            {currentContribution && (
                <h3 className={styles.contributionTitle}>{currentContribution.name}</h3>
            )}

            {/* Description */}
            {!isImageOnly && (
                <Description
                    content={currentContribution?.description || file.description}
                />
            )}

            {/* Buttons */}
            <ActionButtons
                file={file}
                currentContribution={currentContribution}
                isVideoFile={isVideoFile}
            />

            {/* Tech Stack */}
            {file.stack && (
                <div className={styles.stackContainer}>
                    {file.stack.map(key => {
                        const icon = stackIcons[key];
                        if (!icon) return null;
                        return <img key={key} src={icon.src} alt={icon.alt} title={icon.title} />;
                    })}
                </div>
            )}
        </div>
    );
}

export default InfoPanel;

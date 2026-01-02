import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../styles/InfoPanel.module.css";

function ContributionNav({
    currentIndex,
    total,
    onPrevious,
    onNext
}) {
    return (
        <div className={styles.contributionNavigation}>
            <button
                className={styles.navButton}
                onClick={onPrevious}
                disabled={currentIndex === 0}
            >
                <ChevronLeft size={16} />
            </button>
            <span className={styles.contributionCounter}>
                {currentIndex + 1} / {total}
            </span>
            <button
                className={styles.navButton}
                onClick={onNext}
                disabled={currentIndex === total - 1}
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
}

export default ContributionNav;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import styles from "../styles/Toolbar.module.css";
import { useTheme } from "@/context/ThemeContext";
import FeedbackModal from "@/features/FeedbackModal/FeedbackModal";

function SocialButtons() {
    const { theme, toggleTheme } = useTheme();
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

    return (
        <>
            <div className={styles.icons2}>
                {/* GitHub */}
                <a
                    href="https://github.com/EsneiderCdD"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                        alt="GitHub"
                        title="GitHub"
                        className={styles.icon}
                    />
                </a>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/esneidercdd/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        alt="LinkedIn"
                        title="LinkedIn"
                        className={styles.icon}
                    />
                </a>

                {/* C.V */}
                <a
                    href="https://flowcv.com/resume/trd93dr5crok"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                        alt="Hoja de Vida"
                        title="Hoja de Vida - C.V"
                        className={`${styles.icon} ${styles.hoverIcon}`}
                    />
                </a>

                {/* Theme */}
                <div
                    onClick={toggleTheme}
                    style={{ cursor: "pointer" }}
                    className={styles.themeIcon}
                >
                    {theme === "light" ? (
                        <Moon
                            className={styles.icon}
                            title="Modo oscuro"
                            style={{ color: "var(--text-primary)" }}
                        />
                    ) : (
                        <Sun
                            className={styles.icon}
                            title="Modo claro"
                            style={{ color: "var(--text-primary)" }}
                        />
                    )}
                </div>

                {/* Feedback */}
                <div
                    onClick={() => setIsFeedbackOpen(true)}
                    style={{ cursor: "pointer", display: "flex" }}
                    title="Feedback"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                        alt="Feedback"
                        className={`${styles.icon} ${styles.hoverIcon}`}
                    />
                </div>

                {/* Support - Próximamente */}
                <Link to="/coming-soon" style={{ display: 'flex' }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6581/6581211.png "
                        alt="Próximamente..."
                        title="Próximamente..."
                        className={`${styles.icon} ${styles.hoverIcon} ${styles.supportIcon}`}
                    />
                </Link>
            </div>

            <FeedbackModal
                isOpen={isFeedbackOpen}
                onClose={() => setIsFeedbackOpen(false)}
            />
        </>
    );
}

export default SocialButtons;

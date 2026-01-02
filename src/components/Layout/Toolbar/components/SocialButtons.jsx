import { Moon, Sun } from "lucide-react";
import styles from "../styles/Toolbar.module.css";
import { useTheme } from "@/context/ThemeContext";

function SocialButtons() {
    const { theme, toggleTheme } = useTheme();

    return (
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

            {/* 📄 Hoja de Vida - C.V */}
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

            {/* Tema (modo claro/oscuro) */}
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

            {/* ❤️ Favorito */}
            <img
                src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                alt="Feedback"
                title="Feedback"
                className={`${styles.icon} ${styles.hoverIcon}`}
            />

            {/* 🛠️ Soporte */}
            <img
                src="/icons/support.png"
                alt="Soporte"
                title="Soporte"
                className={`${styles.icon} ${styles.hoverIcon} ${styles.supportIcon}`}
            />
        </div>
    );
}

export default SocialButtons;

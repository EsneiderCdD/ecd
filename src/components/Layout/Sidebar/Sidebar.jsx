import styles from "./styles/Sidebar.module.css";
import { useSidebarResizer } from "./hooks/useSidebarResizer";
import NavigationLink from "./components/NavigationLink";

function Sidebar() {
    const { width, handleMouseDown } = useSidebarResizer();

    return (
        <div className={styles.sidebar} style={{ width: `${width}px` }}>
            <div className={styles.sidebarResizer} onMouseDown={handleMouseDown} />

            {/* Main Navigation */}
            <div className={styles.mainNavSection}>
                <NavigationLink
                    to="/"
                    icon="https://cdn-icons-png.flaticon.com/128/2933/2933245.png"
                    label="Escritorio"
                />

                <NavigationLink
                    to="/about"
                    icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    label="Sobre mí"
                />

                <NavigationLink
                    to="/projects"
                    icon="https://cdn-icons-png.flaticon.com/128/1559/1559881.png"
                    label="Proyectos"
                />
            </div>

            <div className={styles.sidebarDivider}></div>

            {/* Secondary Navigation */}
            <div className={styles.achievementsSection}>
                <NavigationLink
                    to="/notifications"
                    icon="https://cdn-icons-png.flaticon.com/512/1827/1827349.png"
                    label="Notificaciones"
                />
            </div>
        </div>
    );
}

export default Sidebar;

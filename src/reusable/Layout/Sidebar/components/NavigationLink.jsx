import { NavLink } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

function NavigationLink({ to, icon, label, title }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
            }
        >
            <div className={styles.iconsidebarContainer}>
                <img
                    src={icon}
                    alt={title || label}
                    title={title || label}
                    className={styles.iconsidebar}
                />
                <p className="text-navigation">{label}</p>
            </div>
        </NavLink>
    );
}

export default NavigationLink;

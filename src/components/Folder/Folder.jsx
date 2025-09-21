import { Link } from "react-router-dom";
import styles from './Folder.module.css'

function Folder({label,to}) {
    return(
        <div className={styles.folder}>
            <Link to={to} className={styles.link}>
            <div className={styles.icon}></div>
            <span className={styles.label}>{label}</span>
            </Link>
        </div>
    );
}
export default Folder;
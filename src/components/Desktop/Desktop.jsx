import DesktopFolders from "../DesktopFolders/DesktopFolders";
import Taskbar from "../Taskbar/Taskbar";
import styles from "./Desktop.module.css";

function Desktop() {
    return (
        <div className={styles.container}>
            <DesktopFolders />
            <Taskbar />
        </div>
    )
}
export default Desktop
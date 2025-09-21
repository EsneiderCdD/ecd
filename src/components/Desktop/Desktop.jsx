import Taskbar from "../Taskbar/Taskbar";
import styles from "./Desktop.module.css";

function Desktop() {
    return (
        <div className={styles.container}>
            <Taskbar/>
        </div>
    )
}
export default Desktop
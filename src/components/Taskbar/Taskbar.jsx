import styles from './Taskbar.module.css'

function Taskbar() {
    return (
       <div className={styles.taskbar}>
        <div className={styles.left}>
            <span>CLIMA</span>
        </div>
        <div className={styles.center}>
            <span>BUSCADOR</span>
        </div>
        <div className={styles.right}>
            <span>HORA Y FECHA</span>
        </div>
       </div> 
    )
}
export default Taskbar
import { useState } from "react";
import Toolbar from "../reusable/Layout/Toolbar/Toolbar";
import Sidebar from "../reusable/Layout/Sidebar/Sidebar";
import InfoPanel from "../reusable/Layout/InfoPanel/InfoPanel";
import styles from "./AboutMe.module.css"; // Reutilizamos los estilos existentes

function ComingSoon() {
    // InfoPanel espera un archivo seleccionado, aquí será null por defecto
    const [selectedFile] = useState(null);

    return (
        <div className={styles.aboutContainer}>
            {/* Toolbar presente pero sin función de ordenamiento real */}
            <Toolbar onSortChange={() => { }} />

            <div className={styles.mainContent}>
                <Sidebar />

                {/* Contenedor central que reemplaza la tabla */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-primary)',
                    gap: '20px',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6581/6581211.png"
                        alt="En construcción"
                        style={{
                            width: '128px',
                            height: '128px',
                            opacity: 0.9,
                            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                        }}
                    />
                    <h2 style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                    }}>
                        Proximamente...
                    </h2>
                </div>

                <InfoPanel file={selectedFile} />
            </div>
        </div>
    );
}

export default ComingSoon;

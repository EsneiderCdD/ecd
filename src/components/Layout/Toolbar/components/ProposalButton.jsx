import { useState } from "react";
import ContactModal from "@/features/ContactModal/ContactModal";
import styles from "../styles/ProposalButton.module.css";

function ProposalButton() {
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        subject: "",
    });

    const handleOpenModal = () => {
        setModalConfig({
            isOpen: true,
            subject: "Hacer una Propuesta",
        });
    };

    const handleCloseModal = () => {
        setModalConfig({
            isOpen: false,
            subject: "",
        });
    };

    return (
        <>
            <div className={styles.container}>
                <div
                    className={styles.button}
                    onClick={handleOpenModal}
                    title="Hacer una Propuesta"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/924/924915.png"
                        alt="Nuevo"
                        className={styles.icon}
                    />
                </div>
            </div>

            <ContactModal
                isOpen={modalConfig.isOpen}
                onClose={handleCloseModal}
                subject={modalConfig.subject}
            />
        </>
    );
}

export default ProposalButton;

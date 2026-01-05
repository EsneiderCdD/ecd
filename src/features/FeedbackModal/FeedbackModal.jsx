import { X } from "lucide-react";
import styles from "./styles/FeedbackModal.module.css";
import { useFeedbackForm } from "./hooks/useFeedbackForm";
import { FeedbackInput, FeedbackTextArea } from "./components/FeedbackFields";

function FeedbackModal({ isOpen, onClose }) {
    const {
        formData,
        isSubmitting,
        submitStatus,
        handleChange,
        handleSubmit
    } = useFeedbackForm({ onClose });

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <form className={styles.body} onSubmit={handleSubmit}>
                    <div className={styles.card}>

                        {/* Header */}
                        <div className={styles.cardHeader}>
                            <h2 className={styles.title}>Feedback</h2>
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                                type="button"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Description */}
                        <p className={styles.description}>
                            “Cada comentario es una pequeña hoja que ayuda a dar forma a este proyecto. Déjame tu comentario.”
                        </p>

                        {/* Name Field */}
                        <FeedbackInput
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            label="Tu Nombre"
                            required={true}
                        />

                        {/* Message (Required) */}
                        <FeedbackTextArea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            label="Tu mensaje de feedback"
                        />

                        {/* Feedback Messages */}
                        {submitStatus === "success" && (
                            <div className={styles.successMessage}>
                                ✓ Gracias por tu feedback
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className={styles.errorMessage}>
                                ✗ Por favor completa todos los campos
                            </div>
                        )}

                        {/* Footer / Actions */}
                        <div className={styles.buttonsContainer}>
                            <button
                                type="button"
                                className={styles.cancelBtn}
                                onClick={onClose}
                                disabled={isSubmitting}
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar"}
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default FeedbackModal;

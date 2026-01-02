import { X } from "lucide-react";
import styles from "./styles/ContactModal.module.css";
import { useContactForm } from "./hooks/useContactForm";
import { FormInput, FormTextArea } from "./components/FormFields";
import { TypeSelector } from "./components/TypeSelectors";
import { proposalOptions, contactOptions, getContactLabel } from "./data/formConfig";

function ContactModal({ isOpen, onClose, subject }) {
    // Logic
    const {
        formData,
        isSubmitting,
        submitStatus,
        handleChange,
        handleTypeChange,
        handleSubmit
    } = useContactForm({ onClose, subject });

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <form className={styles.body} onSubmit={handleSubmit}>
                    <div className={styles.card}>

                        {/* Header */}
                        <div className={styles.cardHeader}>
                            <h2 className={styles.title}>{subject}</h2>
                            <button
                                className={styles.closeButton}
                                onClick={onClose}
                                type="button"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Name Field */}
                        <FormInput
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            label="¿Cómo te llamas?"
                        />

                        {/* Proposal Type */}
                        <TypeSelector
                            label="Selecciona un tipo de propuesta:"
                            options={proposalOptions}
                            activeValue={formData.proposalType}
                            onSelect={(val) => handleTypeChange("proposalType", val)}
                        />

                        {/* Contact Info */}
                        <div className={styles.contactSection}>
                            <TypeSelector
                                label="¿Dónde te puedo responder?"
                                options={contactOptions}
                                activeValue={formData.contactType}
                                onSelect={(val) => handleTypeChange("contactType", val)}
                            />

                            <FormInput
                                name="contactValue"
                                value={formData.contactValue}
                                onChange={handleChange}
                                label={getContactLabel(formData.contactType)}
                            />
                        </div>

                        {/* Message */}
                        <FormTextArea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            label="Tu mensaje"
                        />

                        {/* Feedback Messages */}
                        {submitStatus === "success" && (
                            <div className={styles.successMessage}>
                                ✓ Mensaje enviado correctamente
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className={styles.errorMessage}>
                                ✗ Completá todos los campos requeridos
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

export default ContactModal;

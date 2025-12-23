import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./ContactModal.module.css";

function ContactModal({ isOpen, onClose, subject }) {
  const [formData, setFormData] = useState({
    name: "",
    proposalType: "labor",
    contactType: "email",
    contactValue: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const nameValid = formData.name.trim().length > 0;
      const messageValid = formData.message.trim().length > 0;
      const contactValid = formData.contactValue.trim().length > 0;

      if (!nameValid || !messageValid || !contactValid) {
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        proposal_type: formData.proposalType,
        contact_type: formData.contactType,
        contact_value: formData.contactValue,
        message: `${formData.message}\n\n---\nTipo de contacto: ${formData.contactType}\nDato de contacto: ${formData.contactValue}`,
        subject,
      };

      await emailjs.send(
        "service_vkp2owt",
        "template_hmn997n",
        templateParams,
        "8di11YFBS_cGkbIrW"
      );

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setFormData({
          name: "",
          proposalType: "labor",
          contactType: "email",
          contactValue: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 2000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <form className={styles.body} onSubmit={handleSubmit}>
          <div className={styles.card}>
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

            <div className={styles.inputBox}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={formData.name ? styles.filled : ""}
              />
              <span className={styles.label}>¿Cómo te llamas?</span>
            </div>

            <div className={styles.contactSection}>
              <p className={styles.contactHint}>
                Selecciona un tipo de propuesta:
              </p>

              <div className={`${styles.contactSelector} ${styles.proposalGrid}`}>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.proposalType === "labor" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, proposalType: "labor" })
                  }
                >
                  Oferta Laboral
                </button>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.proposalType === "freelance" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, proposalType: "freelance" })
                  }
                >
                  Proyecto Freelance
                </button>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.proposalType === "colaborativo" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, proposalType: "colaborativo" })
                  }
                >
                  Proyecto Colaborativo
                </button>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.proposalType === "otro" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, proposalType: "otro" })
                  }
                >
                  Otro
                </button>
              </div>
            </div>

            <div className={styles.contactSection}>
              <p className={styles.contactHint}>
                ¿Dónde te puedo responder?
              </p>

              <div className={styles.contactSelector}>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.contactType === "email" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, contactType: "email" })
                  }
                >
                  Email
                </button>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.contactType === "phone" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, contactType: "phone" })
                  }
                >
                  Teléfono
                </button>
                <button
                  type="button"
                  className={`${styles.selectorBtn} ${formData.contactType === "social" ? styles.active : ""
                    }`}
                  onClick={() =>
                    setFormData({ ...formData, contactType: "social" })
                  }
                >
                  Red / Web
                </button>
              </div>

              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="contactValue"
                  value={formData.contactValue}
                  onChange={handleChange}
                  required
                  className={formData.contactValue ? styles.filled : ""}
                />
                <span className={styles.label}>
                  {formData.contactType === "email" && "Correo electrónico"}
                  {formData.contactType === "phone" && "Teléfono"}
                  {formData.contactType === "social" && "Red social / Web"}
                </span>
              </div>
            </div>

            <div className={styles.inputBox}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={formData.message ? styles.filled : ""}
              />
              <span className={styles.label}>Tu mensaje</span>
            </div>

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

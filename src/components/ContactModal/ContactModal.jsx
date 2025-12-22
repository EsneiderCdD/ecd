// src/components/ContactModal/ContactModal.jsx
import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./ContactModal.module.css";

function ContactModal({ isOpen, onClose, subject }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [contactError, setContactError] = useState(false);

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
    setContactError(false);

    try {
      // Validación adicional (no solo HTML): nombre, mensaje y al menos un contacto
      const nameValid = formData.name.trim().length > 0;
      const messageValid = formData.message.trim().length > 0;
      const contactValid = Boolean(formData.email || formData.phone || formData.website);

      if (!nameValid || !messageValid || !contactValid) {
        setContactError(!contactValid);
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      // Configuración de EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        website: formData.website,
        subject: subject,
        message: formData.message,
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
          email: "",
          phone: "",
          website: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Error al enviar:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Body del modal - Diseño inspirado en formulario moderno */}
        <form className={styles.body} onSubmit={handleSubmit}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.title}>{subject}</h2>
              <button className={styles.closeButton} onClick={onClose} type="button">
                <X size={16} />
              </button>
            </div>

            {/* Campo Nombre */}
            <div className={styles.inputBox}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={formData.name ? styles.filled : ""}
              />
              <span className={styles.label}>¿Como te llamas?</span>
            </div>

            {/* Sección de Contacto */}
            <div className={styles.contactSection}>
              <p className={styles.contactHint}>¿Donde te puedo responder? (Mínimo una opción)</p>

              {/* Email */}
              <div className={styles.inputBox}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formData.email ? styles.filled : ""}
                />
                <span className={styles.label}>Correo Electrónico</span>
              </div>

              {/* Teléfono y Website en grid */}
              <div className={styles.gridInputs}>
                <div className={styles.inputBox}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formData.phone ? styles.filled : ""}
                  />
                  <span className={styles.label}>Teléfono</span>
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className={formData.website ? styles.filled : ""}
                  />
                  <span className={styles.label}>Red Social / Web</span>
                </div>
              </div>

              {contactError && (
                <div className={styles.errorMessage}>
                  ✗ Por favor, indica al menos un método de contacto.
                </div>
              )}
            </div>

            {/* Campo Mensaje */}
            <div className={styles.inputBox}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className={formData.message ? styles.filled : ""}
              />
              <span className={styles.label}>Tu mensaje</span>
            </div>

            {/* Mensajes de estado */}
            {submitStatus === "success" && (
              <div className={styles.successMessage}>
                ✓ Mensaje enviado correctamente
              </div>
            )}

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                ✗ Error al enviar. Intenta nuevamente
              </div>
            )}

            {/* Botones */}
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
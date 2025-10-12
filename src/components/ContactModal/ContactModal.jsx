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
        {/* Header estilo Windows */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.icon}>✉️</span>
            <span>{subject}</span>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Body del modal */}
        <form className={styles.body} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre completo"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+57 300 123 4567"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="website">Sitio Web / Red Social</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="linkedin.com/in/tuperfil"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Cuéntame sobre tu proyecto o propuesta..."
            />
          </div>

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

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
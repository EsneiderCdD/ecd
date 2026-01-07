import { useState } from "react";
import { messageService } from "../../../services/messageService";

export function useContactForm({ onClose, subject }) {
    const [formData, setFormData] = useState({
        name: "",
        proposalType: "labor",
        contactType: "email",
        contactValue: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleTypeChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const nameValid = formData.name.trim().length > 0;
            const messageValid = formData.message.trim().length > 0;
            const contactValid = formData.contactValue.trim().length > 0;

            // Email Validation if applicable
            let emailValid = true;
            if (formData.contactType === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                emailValid = emailRegex.test(formData.contactValue);
            }

            if (!nameValid || !messageValid || !contactValid || !emailValid) {
                setSubmitStatus("error");
                setIsSubmitting(false);
                return;
            }

            // Mapeo de datos para el backend
            // El backend espera: name, proposalType, contactType, contactValue, message
            // Coincide exactamente con nuestro formData, así que podemos enviarlo directo
            // o crear un objeto explícito si queremos ser más estrictos.

            await messageService.sendMessage({
                ...formData,
                subject // Aunque el backend no guarda subject explícitamente en la tabla actual, se podría añadir al mensaje o ignorar.
            });

            setSubmitStatus("success");
            setShowConfetti(true);
            setTimeout(() => {
                onClose();
                resetForm();
                setSubmitStatus(null);
                setShowConfetti(false);
            }, 2000);
        } catch (error) {
            console.error("Error enviando formulario:", error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            proposalType: "labor",
            contactType: "email",
            contactValue: "",
            message: "",
        });
    };

    return {
        formData,
        isSubmitting,
        submitStatus,
        handleChange,
        handleTypeChange,
        handleSubmit,
        showConfetti
    };
}

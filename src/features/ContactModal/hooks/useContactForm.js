import { useState } from "react";
import { messageService } from "../../../services/messageService";
import { useEffects } from "../../../context/EffectsContext";

export function useContactForm({ onClose, subject }) {
    const [formData, setFormData] = useState({
        name: "",
        proposalType: "labor",
        contactType: "email",
        contactValue: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const { triggerCelebration } = useEffects();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        if (errorMessage) setErrorMessage(null);
    };

    const handleTypeChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            if (!formData.name.trim()) {
                setErrorMessage("Error en el campo Nombre");
                setIsSubmitting(false);
                return;
            }
            if (!formData.contactValue.trim()) {
                setErrorMessage(`Error en el campo ${formData.contactType === 'email' ? 'Email' : 'Telefono'}`);
                setIsSubmitting(false);
                return;
            }
            if (formData.contactType === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.contactValue)) {
                    setErrorMessage("Error en el campo Email (formato inválido)");
                    setIsSubmitting(false);
                    return;
                }
            }
            if (!formData.message.trim()) {
                setErrorMessage("Error en el campo Mensaje");
                setIsSubmitting(false);
                return;
            }

            await messageService.sendMessage({
                ...formData,
                subject
            });

            triggerCelebration();

            setTimeout(() => {
                onClose();
                resetForm();
            }, 1000);
        } catch (error) {
            console.error("Error enviando formulario:", error);
            setErrorMessage("Error al enviar el formulario");
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
        errorMessage,
        handleChange,
        handleTypeChange,
        handleSubmit,

    };
}

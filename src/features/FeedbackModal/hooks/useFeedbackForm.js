import { useState } from "react";
import { feedbackService } from "../../../services/feedbackService";
import { useEffects } from "../../../context/EffectsContext";

export function useFeedbackForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
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
            if (!formData.message.trim()) {
                setErrorMessage("Error en el campo Mensaje");
                setIsSubmitting(false);
                return;
            }

            await feedbackService.sendFeedback(formData);

            triggerCelebration();

            setTimeout(() => {
                onClose();
                resetForm();
            }, 1000);
        } catch (error) {
            console.error("Error enviando feedback:", error);
            setErrorMessage("Error enviando feedback");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            name: "",
            message: "",
        });
    };

    return {
        formData,
        isSubmitting,
        errorMessage,
        handleChange,
        handleSubmit,

    };
}

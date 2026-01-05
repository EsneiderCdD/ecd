import { useState } from "react";

export function useFeedbackForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
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
            const messageValid = formData.message.trim().length > 0;

            if (!messageValid) {
                setSubmitStatus("error");
                setIsSubmitting(false);
                return;
            }

            // Simulación de envío al backend
            // Aquí se conectará con messageService en el futuro
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log("Feedback enviado:", formData);

            setSubmitStatus("success");
            setTimeout(() => {
                onClose();
                resetForm();
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            console.error("Error enviando feedback:", error);
            setSubmitStatus("error");
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
        submitStatus,
        handleChange,
        handleSubmit
    };
}

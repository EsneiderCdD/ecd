import { useState } from "react";
import { feedbackService } from "../../../services/feedbackService";

export function useFeedbackForm({ onClose }) {
    const [formData, setFormData] = useState({
        name: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const nameValid = formData.name.trim().length > 0;
            const messageValid = formData.message.trim().length > 0;

            if (!nameValid || !messageValid) {
                setSubmitStatus("error");
                setIsSubmitting(false);
                return;
            }

            await feedbackService.sendFeedback(formData);

            setSubmitStatus("success");
            setShowConfetti(true);
            setTimeout(() => {
                onClose();
                resetForm();
                setSubmitStatus(null);
                setShowConfetti(false);
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
        handleSubmit,
        showConfetti
    };
}

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
                resetForm();
                setSubmitStatus(null);
            }, 2000);
        } catch (error) {
            console.error("EmailJS Error:", error);
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
        handleSubmit
    };
}

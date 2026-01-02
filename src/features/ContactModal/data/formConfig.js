export const proposalOptions = [
    { value: "labor", label: "Oferta Laboral" },
    { value: "freelance", label: "Proyecto Freelance" },
    { value: "colaborativo", label: "Proyecto Colaborativo" },
    { value: "otro", label: "Otro" }
];

export const contactOptions = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Teléfono" },
    { value: "social", label: "Red / Web" }
];

export const getContactLabel = (type) => {
    switch (type) {
        case "email": return "Correo electrónico";
        case "phone": return "Teléfono";
        case "social": return "Red social / Web";
        default: return "Dato de contacto";
    }
};

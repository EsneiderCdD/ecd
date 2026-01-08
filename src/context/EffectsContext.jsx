import { createContext, useContext, useState } from "react";

const EffectsContext = createContext();

export function EffectsProvider({ children }) {
    const [isConfettiPlaying, setIsConfettiPlaying] = useState(false);

    const triggerConfetti = () => {
        setIsConfettiPlaying(true);
        // Auto-reset after duration to allow re-triggering
        setTimeout(() => {
            setIsConfettiPlaying(false);
        }, 8000);
    };

    return (
        <EffectsContext.Provider value={{ isConfettiPlaying, triggerConfetti }}>
            {children}
        </EffectsContext.Provider>
    );
}

export function useEffects() {
    const context = useContext(EffectsContext);
    if (!context) {
        throw new Error("useEffects must be used within an EffectsProvider");
    }
    return context;
}

import { createContext, useContext, useState } from "react";
import applauseSound from "../assets/audio/applause-cheer.mp3";

const EffectsContext = createContext();

export function EffectsProvider({ children }) {
    const [isConfettiPlaying, setIsConfettiPlaying] = useState(false);

    const triggerCelebration = () => {
        //Confetti (Visual)
        setIsConfettiPlaying(true);
        setTimeout(() => {
            setIsConfettiPlaying(false);
        }, 8000);

        //Audio (Sound)
        const audio = new Audio(applauseSound);
        audio.volume = 0.5; 
        audio.play().catch(e => console.error("Audio play failed:", e));
    };

    return (
        <EffectsContext.Provider value={{ isConfettiPlaying, triggerCelebration }}>
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

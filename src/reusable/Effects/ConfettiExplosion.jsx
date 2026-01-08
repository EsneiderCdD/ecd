import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadConfettiPreset } from "@tsparticles/preset-confetti";
import { confettiOptions, explosionSequence } from "./config/confettiConfig";

function ConfettiExplosion({ customOptions }) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadConfettiPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container) => {
        if (!container) return;

        // Use sequence from options or fallback to default exported sequence
        // Note: customOptions passed from Playground might NOT have the sequence if it was just a copy of confettiOptions.
        // But since we want "surgical" control, we rely on the exported explosionSequence here.
        const sequence = explosionSequence;

        sequence.forEach((emitterConfig) => {
            setTimeout(() => {
                container.addEmitter(emitterConfig);
            }, emitterConfig.delay);
        });
    };

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={customOptions || confettiOptions}
        />
    );
}

export default ConfettiExplosion;

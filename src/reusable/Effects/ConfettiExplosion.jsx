import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadConfettiPreset } from "@tsparticles/preset-confetti";
import { confettiOptions, explosionSequence } from "./config/confettiConfig";

function ConfettiExplosion() {
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
            options={confettiOptions}
        />
    );
}

export default ConfettiExplosion;

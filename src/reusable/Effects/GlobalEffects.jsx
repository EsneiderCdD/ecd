import { useEffects } from "../../context/EffectsContext";
import ConfettiExplosion from "./ConfettiExplosion";

function GlobalEffects() {
    const { isConfettiPlaying } = useEffects();

    if (!isConfettiPlaying) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
            <ConfettiExplosion />
        </div>
    );
}

export default GlobalEffects;

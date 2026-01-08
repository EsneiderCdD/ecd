import ConfettiExplosion from '../reusable/Effects/ConfettiExplosion';

function EffectsPlayground() {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#1a1a1a', // Neutral dark background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative'
        }}>
            <h1 style={{
                color: '#fff',
                zIndex: 10,
                fontFamily: 'sans-serif',
                opacity: 0.5
            }}>
                Confetti Playground
            </h1>
            {/* Renders the original, unmodified effect */}
            <ConfettiExplosion />
        </div>
    );
}

export default EffectsPlayground;

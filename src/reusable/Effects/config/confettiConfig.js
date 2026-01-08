export const confettiOptions = {
    preset: "confetti",
    fullScreen: {
        enable: true,
        zIndex: 9999
    },
    particles: {
        number: {
            value: 0
        },
        color: {
            value: ["#FFD700", "#FF4500", "#00BFFF", "#ffffff"]
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: { min: 0, max: 1 },
            animation: {
                enable: true,
                speed: 2,
                startValue: "max",
                destroy: "min"
            }
        },
        size: {
            value: { min: 3, max: 7 }
        },
        move: {
            enable: true,
            speed: { min: 10, max: 30 },
            direction: "none",
            random: false,
            straight: false,
            outModes: "destroy",
            decay: 0.1,
            gravity: {
                enable: true,
                acceleration: 5
            }
        }
    },
    emitters: [] // Ensure preset defaults don't fire automatically
};

export const explosionSequence = [
    {
        direction: "none",
        rate: { quantity: 15, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 50, y: 45 }, // Slightly higher than center
        life: { count: 1, duration: 0.1 },
        delay: 0
    },
    {
        direction: "none",
        rate: { quantity: 20, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 15, y: 10 }, // High top-left corner
        life: { count: 1, duration: 0.1 },
        delay: 1200
    },
    {
        direction: "none",
        rate: { quantity: 20, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 80, y: 30 }, // Mid-high right
        life: { count: 1, duration: 0.1 },
        delay: 2500
    },
    {
        direction: "none",
        rate: { quantity: 25, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 30, y: 70 }, // Bottom left
        life: { count: 1, duration: 0.1 },
        delay: 3800
    },
    {
        direction: "none",
        rate: { quantity: 25, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 85, y: 15 }, // Very high top-right corner
        life: { count: 1, duration: 0.1 },
        delay: 4500
    },
    {
        direction: "none",
        rate: { quantity: 40, delay: 0.1 },
        size: { width: 0, height: 0 },
        position: { x: 50, y: 10 }, // Top center explosion
        life: { count: 1, duration: 0.1 },
        delay: 6000
    }
];

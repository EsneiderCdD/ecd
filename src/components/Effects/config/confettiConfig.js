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
    emitters: [
        {
            direction: "none",
            rate: { quantity: 15, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 50, y: 50 },
            life: { count: 1, duration: 0.1, delay: 0 }
        },
        {
            direction: "none",
            rate: { quantity: 20, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 20, y: 30 },
            life: { count: 1, duration: 0.1, delay: 0.2 }
        },
        {
            direction: "none",
            rate: { quantity: 20, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 80, y: 30 },
            life: { count: 1, duration: 0.1, delay: 0.4 }
        },
        {
            direction: "none",
            rate: { quantity: 25, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 30, y: 70 },
            life: { count: 1, duration: 0.1, delay: 0.6 }
        },
        {
            direction: "none",
            rate: { quantity: 25, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 70, y: 70 },
            life: { count: 1, duration: 0.1, delay: 0.8 }
        },
        {
            direction: "none",
            rate: { quantity: 40, delay: 0.1 },
            size: { width: 0, height: 0 },
            position: { x: 50, y: 40 },
            life: { count: 1, duration: 0.1, delay: 1 }
        }
    ]
};

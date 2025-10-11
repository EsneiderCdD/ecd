// src/components/ParticleBackground/ParticleBackground.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ===== CONFIGURACIÓN (Ajusta estos valores según tu preferencia) =====
    const CONFIG = {
      particleCount: 8000,      // Número de partículas
      pointColor1: "#2155CD",   // Color primario (azul)
      pointColor2: "#FF4949",   // Color secundario (rojo)
      pointSize: 3,             // Tamaño base de partículas
      angularVelocity: 0,       // Rotación (0 = sin rotación, prueba con 0.3)
      velocity: 0.01,           // Velocidad hacia adelante
      fadeColor: "#0a0a0a"      // Color de fondo (casi negro)
    };

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    camera.position.z = 1000;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Vertex Shader
    const vertexShader = `
      uniform float iTime;
      uniform float iVelocity;
      
      attribute vec2 aSeed;
      attribute float aSize;
      
      varying float vRandColor;
      
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
      
      void main() {
        vec3 p = position;
        
        float t = iTime * 1000.0;
        float v = iVelocity;
        float s = v * t;
        p.z = mod(p.z + s, 2000.0);
        
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        float pSize = aSize * (200.0 / -mvPosition.z);
        gl_PointSize = pSize;
        
        float randColor = random(aSeed);
        vRandColor = randColor;
      }
    `;

    // Fragment Shader
    const fragmentShader = `
      uniform vec3 iColor1;
      uniform vec3 iColor2;
      
      varying float vRandColor;
      
      float circle(vec2 st, float r) {
        vec2 dist = st - vec2(0.5);
        return 1.0 - smoothstep(r - (r * 1.15), r, dot(dist, dist) * 4.0);
      }
      
      void main() {
        vec2 p = gl_PointCoord - 0.5 + 0.5;
        
        vec3 color = iColor1;
        if (vRandColor > 0.0 && vRandColor < 0.5) {
          color = iColor2;
        }
        
        float shape = circle(p, 1.0);
        vec3 col = color * shape;
        
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    // Crear geometría de partículas
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(CONFIG.particleCount * 3);
    const seeds = new Float32Array(CONFIG.particleCount * 2);
    const sizes = new Float32Array(CONFIG.particleCount);

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const i3 = i * 3;
      const i2 = i * 2;
      
      const theta = Math.random() * Math.PI * 2;
      const r = Math.random() * 40 + 10;
      positions[i3] = r * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(theta);
      positions[i3 + 2] = Math.random() * 2000;
      
      seeds[i2] = Math.random();
      seeds[i2 + 1] = Math.random();
      
      sizes[i] = CONFIG.pointSize + Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 2));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    // Material con shaders
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        iTime: { value: 0 },
        iColor1: { value: new THREE.Color(CONFIG.pointColor1) },
        iColor2: { value: new THREE.Color(CONFIG.pointColor2) },
        iVelocity: { value: CONFIG.velocity }
      }
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    scene.background = new THREE.Color(CONFIG.fadeColor);

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const elapsedTime = (Date.now() - startTime) / 1000;
      
      material.uniforms.iTime.value = elapsedTime;
      particles.rotation.z += CONFIG.angularVelocity * 0.01;
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticleBackground;
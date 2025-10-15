// src/data/stackIcons.js

// Importar iconos locales
import cssIcon from "@/assets/stack/css.png";
import jsIcon from "@/assets/stack/js.png";
import reactIcon from "@/assets/stack/react.png";

/**
 * Configuración centralizada de iconos del stack tecnológico
 * 
 * Estructura:
 * - src: puede ser un import local o una URL
 * - alt: texto alternativo
 * - title: tooltip al hacer hover
 * - size: tamaño personalizado (altura en px, el ancho será "auto")
 */
export const stackIcons = {
  // Frontend
  react: {
    src: reactIcon,
    alt: "React",
    title: "React.js",
    size: 48
  },
  
  css: {
    src: cssIcon,
    alt: "CSS3",
    title: "CSS3",
    size: 48
  },
  
  javascript: {
    src: jsIcon,
    alt: "JavaScript",
    title: "JavaScript ES6+",
    size: 48
  },
  
  html: {
    src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    alt: "HTML5",
    title: "HTML5",
    size: 48
  },
  
  tailwind: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
    size: 48
  },
  
  bootstrap: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "Bootstrap",
    title: "Bootstrap",
    size: 48
  },
  
  framerMotion: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    alt: "Framer Motion",
    title: "Framer Motion",
    size: 48
  },
  
  vite: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "Vite",
    title: "Vite",
    size: 48
  },
  
  // Backend
  nodejs: {
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    alt: "Node.js",
    title: "Node.js",
    size: 48
  },
  
  express: {
    src: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    alt: "Express",
    title: "Express.js",
    size: 48
  },
  
  // Bases de datos
  mongodb: {
    src: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    alt: "MongoDB",
    title: "MongoDB",
    size: 48
  },
  
  postgresql: {
    src: "https://cdn-icons-png.flaticon.com/512/919/919836.png",
    alt: "PostgreSQL",
    title: "PostgreSQL",
    size: 48
  },
  
  // Herramientas
  git: {
    src: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    alt: "Git",
    title: "Git",
    size: 48
  },
  
  github: {
    src: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    alt: "GitHub",
    title: "GitHub",
    size: 48
  },
  
  vercel: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "Vercel",
    title: "Vercel",
    size: 48
  },
  
  figma: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    alt: "Figma",
    title: "Figma",
    size: 48
  },
  
  swiper: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "Swiper.js",
    title: "Swiper.js",
    size: 48
  },
  
  // Otros
  responsive: {
    src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    alt: "Responsive Design",
    title: "Responsive Design",
    size: 48
  },
  
  seo: {
    src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    alt: "SEO",
    title: "SEO",
    size: 48
  },
  
  analytics: {
    src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    alt: "Google Analytics",
    title: "Google Analytics",
    size: 48
  },
  
  payments: {
    src: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    alt: "Integración de Pagos",
    title: "Integración de Pagos",
    size: 48
  },
  
  // Librería DnD
  dndKit: {
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    alt: "DnD Kit",
    title: "DnD Kit",
    size: 48
  },
  
  // Texto adicional (para casos como "Mobile Design")
  mobileDesign: {
    text: "Mobile Design",
    size: 14
  },
  
  fullStack: {
    text: "Full Stack",
    size: 14
  }
};

/**
 * Genera el HTML para mostrar el stack tecnológico
 * @param {Array<string>} stackKeys - Array con las keys del stackIcons
 * @returns {string} HTML string
 */
export const generateStackHTML = (stackKeys) => {
  const items = stackKeys.map(key => {
    const config = stackIcons[key];
    
    if (!config) {
      console.warn(`Stack icon "${key}" no encontrado en stackIcons.js`);
      return '';
    }
    
    // Si es texto
    if (config.text) {
      return `<span style="font-size: ${config.size}px; color: #555;">${config.text}</span>`;
    }
    
    // Si es imagen
    return `<img 
      src="${config.src}" 
      alt="${config.alt}" 
      title="${config.title}" 
      style="width: auto; height: ${config.size}px;" 
    />`;
  }).join('');
  
  return `
    <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
      ${items}
    </div>
  `;
};
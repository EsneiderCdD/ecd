// src/data/stackIcons.js

// Importar iconos locales

import boostrap from "@/assets/stack/boostrap.png";
import tailwild from "@/assets/stack/tailwild.png";
import css from "@/assets/stack/css.png"
import flask from "@/assets/stack/flask.png";
import googleanalytics from "@/assets/stack/googleanalytics.png";
import js from "@/assets/stack/js.png";
import openAI from "@/assets/stack/openAI.png";
import postgresql from "@/assets/stack/postgresql.png";
import python from "@/assets/stack/python.png";
import payu from "@/assets/stack/payu.png";
import ps from "@/assets/stack/ps.png";
import react from "@/assets/stack/react.png";
import swiper from "@/assets/stack/swiper.png";
import ts from "@/assets/stack/ts.png";
import next from "@/assets/stack/next.png";
import zustand from "@/assets/stack/zustand.png";
import cloudinary from "@/assets/stack/cloudinary.png";
import discord from "@/assets/stack/discord.webp";
import dndkit from "@/assets/stack/dndkit.png";
import figma from "@/assets/stack/figma.png";
import flasgger from "@/assets/stack/flasgger.png";
import github from "@/assets/stack/github.webp";
import git from "@/assets/stack/git.png";
import pusher from "@/assets/stack/pusher.png";
import sendgrid from "@/assets/stack/sendgrid.png";
import mobiledesing from "@/assets/stack/mobiledesing.png";
import responsive from "@/assets/stack/responsive.png";
import vite from "@/assets/stack/vite.jpg";

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

  dndKit: {
    src: dndkit,
    alt: "DnD Kit",
    title: "DnD Kit",
    size: 48
  },
  zustand: {
    src: zustand,
    alt: "Zustand",
    title: "Zustand",
    size: 48
  },

  typescript: {
    src: ts,
    alt: "TypeScript",
    title: "TypeScript",
    size: 48
  },

  react: {
    src: react,
    alt: "React",
    title: "React.js",
    size: 48
  },

  next: {
    src: next,
    alt: "Next.js",
    title: "Next.js",
    size: 48
  },
  
  css: {
    src: css,
    alt: "CSS3",
    title: "CSS3",
    size: 48
  },
  
  javascript: {
    src: js,
    alt: "JavaScript",
    title: "JavaScript ES6+",
    size: 48
  },
  
  
  tailwind: {
    src: tailwild,
    alt: "Tailwind CSS",
    title: "Tailwind CSS",
    size: 48
  },
  
  bootstrap: {
    src: boostrap,
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
    src: vite,
    alt: "Vite",
    title: "Vite",
    size: 48
  },
  
  // Backend
  python: {
    src: python,
    alt: "Python",
    title: "Python",
    size: 48
  },
  
  flask: {
    src: flask,
    alt: "Flask",
    title: "Flask",
    size: 48
  },

  // Bases de datos
  
  postgresql: {
    src: postgresql,
    alt: "PostgreSQL",
    title: "PostgreSQL",
    size: 48
  },
  
  // Herramientas
  git: {
    src: git,
    alt: "Git",
    title: "Git",
    size: 48
  },
  discord: {
    src: discord,
    alt: "Discord",
    title: "Discord",
    size: 48
  },
  
  github: {
    src: github,
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
    src: figma,
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


  mobileDesign: {
   src: mobiledesing,
   alt: "Mobile Design",
   title: "Mobile Design",
   size: 48
  },


  pusher: {
    src: pusher,
    alt: "Pusher",
    title: "Pusher",
    size: 48
  },
  sendgrid: {
    src: sendgrid,
    alt: "SendGrid",
    title: "SendGrid",
    size: 48
  },
  responsive: {
    src: responsive,
    alt: "Responsive Design",
    title: "Responsive Design",
    size: 48
  },
  cloudinary: {
    src: cloudinary,
    alt: "Cloudinary",
    title: "Cloudinary",
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

  
  // Texto adicional

  flaskenv: {
    text: "Migrate, Alembic, CORS, JWT-Extended, Flasgger, Bcrypt, SocketIO",
    size: 14
  },
  fechas: {
    text: "date-fns, react-datepicker",
    size: 14
  },
  
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
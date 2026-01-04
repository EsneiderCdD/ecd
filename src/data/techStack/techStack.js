// Imports
import cloudinary from "@/assets/stack/cloudinary.png";
import css from "@/assets/stack/css.webp";
import datefns from "@/assets/stack/datefns.png";
import dndkit from "@/assets/stack/dndkit.png";
import docker from "@/assets/stack/docker.png";
import express from "@/assets/stack/expressjs.webp";
import figma from "@/assets/stack/figma.png";
import flasgger from "@/assets/stack/flasgger.png";
import flask from "@/assets/stack/flask.png";
import framermotion from "@/assets/stack/framermotion.png";
import git from "@/assets/stack/git.png";
import github from "@/assets/stack/github.webp";
import googleanalytics from "@/assets/stack/googleanalytics.webp";
import js from "@/assets/stack/js.webp";
import mobiledesign from "@/assets/stack/mobiledesing.webp";
import next from "@/assets/stack/next.png";
import nodejs from "@/assets/stack/nodejs.webp";
import payu from "@/assets/stack/payu.webp";
import postgresql from "@/assets/stack/postgresql.png";
import pusher from "@/assets/stack/pusher.png";
import python from "@/assets/stack/python.png";
import react from "@/assets/stack/react.png";
import responsive from "@/assets/stack/responsive.png";
import sendgrid from "@/assets/stack/sendgrid.png";
import swiperjs from "@/assets/stack/swiper.webp";
import tailwind from "@/assets/stack/tailwild.png";
import ts from "@/assets/stack/ts.png";
import vite from "@/assets/stack/vite.webp";
import zustand from "@/assets/stack/zustand.png";

// Configuration
export const stackIcons = {
  analytics: { src: googleanalytics, alt: "Google Analytics", title: "Google Analytics", size: 48 },
  cloudinary: { src: cloudinary, alt: "Cloudinary", title: "Cloudinary", size: 48 },
  css: { src: css, alt: "CSS3", title: "CSS3", size: 48 },
  datefns: { src: datefns, alt: "Date-fns", title: "Date-fns", size: 48 },
  dndKit: { src: dndkit, alt: "DnD Kit", title: "DnD Kit", size: 48 },
  docker: { src: docker, alt: "Docker", title: "Docker", size: 58 },
  express: { src: express, alt: "Express.js", title: "Express.js", size: 54 },
  figma: { src: figma, alt: "Figma", title: "Figma", size: 48 },
  flasgger: { src: flasgger, alt: "Flasgger", title: "Flasgger", size: 48 },
  flask: { src: flask, alt: "Flask", title: "Flask", size: 48 },
  framermotion: { src: framermotion, alt: "Framer Motion", title: "Framer Motion", size: 48 },
  git: { src: git, alt: "Git", title: "Git", size: 48 },
  github: { src: github, alt: "GitHub", title: "GitHub", size: 48 },
  javascript: { src: js, alt: "JavaScript", title: "JavaScript ES6+", size: 48 },
  mobileDesign: { src: mobiledesign, alt: "Mobile Design", title: "Mobile Design", size: 48 },
  next: { src: next, alt: "Next.js", title: "Next.js", size: 48 },
  nodejs: { src: nodejs, alt: "Node.js", title: "Node.js", size: 48 },
  payu: { src: payu, alt: "Integración de Pagos", title: "Integración de Pagos", size: 48 },
  postgresql: { src: postgresql, alt: "PostgreSQL", title: "PostgreSQL", size: 48 },
  pusher: { src: pusher, alt: "Pusher", title: "Pusher", size: 48 },
  python: { src: python, alt: "Python", title: "Python", size: 48 },
  react: { src: react, alt: "React", title: "React.js", size: 48 },
  responsive: { src: responsive, alt: "Responsive Design", title: "Responsive Design", size: 52 },
  sendgrid: { src: sendgrid, alt: "SendGrid", title: "SendGrid", size: 48 },
  swiper: { src: swiperjs, alt: "Swiper.js", title: "Swiper.js", size: 48 },
  tailwind: { src: tailwind, alt: "Tailwind CSS", title: "Tailwind CSS", size: 48 },
  typescript: { src: ts, alt: "TypeScript", title: "TypeScript", size: 48 },
  vite: { src: vite, alt: "Vite", title: "Vite", size: 48 },
  zustand: { src: zustand, alt: "Zustand", title: "Zustand", size: 48 },
};

// HTML Generation Utility
export const generateStackHTML = (stackKeys) => {
  const items = stackKeys.map(key => {
    const config = stackIcons[key];

    if (!config) {
      console.warn(`Stack icon "${key}" missing`);
      return '';
    }

    if (config.text) {
      return `<span style="font-size: ${config.size}px; color: #555;">${config.text}</span>`;
    }

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
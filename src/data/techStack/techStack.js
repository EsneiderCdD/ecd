// Imports
import cloudinary from "@/assets/stack/cloudinary.webp";
import css from "@/assets/stack/css.webp";
import datefns from "@/assets/stack/datefns.webp";
import dndkit from "@/assets/stack/dndkit.webp";
import docker from "@/assets/stack/docker.webp";
import emailjs from "@/assets/stack/emailjs.webp";
import express from "@/assets/stack/expressjs.webp";
import figma from "@/assets/stack/figma.webp";
import flasgger from "@/assets/stack/flasgger.webp";
import flask from "@/assets/stack/flask.webp";
import flaticon from "@/assets/stack/flaticon.webp";
import framermotion from "@/assets/stack/framermotion.webp";
import gemini from "@/assets/stack/gemini.webp";
import git from "@/assets/stack/git.webp";
import github from "@/assets/stack/github.webp";
import googleanalytics from "@/assets/stack/googleanalytics.webp";
import js from "@/assets/stack/js.webp";
import mobiledesign from "@/assets/stack/mobiledesing.webp";
import next from "@/assets/stack/next.webp";
import nodejs from "@/assets/stack/nodejs.webp";
import openai from "@/assets/stack/openai.webp";
import payu from "@/assets/stack/payu.webp";
import pixabay from "@/assets/stack/pixabay.webp";
import postgresql from "@/assets/stack/postgresql.webp";
import pusher from "@/assets/stack/pusher.webp";
import python from "@/assets/stack/python.webp";
import react from "@/assets/stack/react.webp";
import responsive from "@/assets/stack/responsive.webp";
import sendgrid from "@/assets/stack/sendgrid.webp";
import swiperjs from "@/assets/stack/swiper.webp";
import tailwind from "@/assets/stack/tailwild.webp";
import ts from "@/assets/stack/ts.webp";
import uiverse from "@/assets/stack/uiverse.webp";
import vite from "@/assets/stack/vite.webp";
import zustand from "@/assets/stack/zustand.webp";

// Configuration
export const stackIcons = {
  analytics: { src: googleanalytics, alt: "Google Analytics", title: "Google Analytics", size: 48 },
  cloudinary: { src: cloudinary, alt: "Cloudinary", title: "Cloudinary", size: 48 },
  css: { src: css, alt: "CSS3", title: "CSS3", size: 48 },
  datefns: { src: datefns, alt: "Date-fns", title: "Date-fns", size: 48 },
  dndKit: { src: dndkit, alt: "DnD Kit", title: "DnD Kit", size: 48 },
  docker: { src: docker, alt: "Docker", title: "Docker", size: 58 },
  emailjs: { src: emailjs, alt: "EmailJS", title: "EmailJS", size: 48 },
  express: { src: express, alt: "Express.js", title: "Express.js", size: 54 },
  figma: { src: figma, alt: "Figma", title: "Figma", size: 48 },
  flasgger: { src: flasgger, alt: "Flasgger", title: "Flasgger", size: 48 },
  flask: { src: flask, alt: "Flask", title: "Flask", size: 48 },
  flaticon: { src: flaticon, alt: "Flaticon", title: "Flaticon", size: 52 },
  framermotion: { src: framermotion, alt: "Framer Motion", title: "Framer Motion", size: 48 },
  gemini: { src: gemini, alt: "Google Gemini", title: "Google Gemini", size: 54 },
  git: { src: git, alt: "Git", title: "Git", size: 48 },
  github: { src: github, alt: "GitHub", title: "GitHub", size: 48 },
  javascript: { src: js, alt: "JavaScript", title: "JavaScript ES6+", size: 48 },
  mobileDesign: { src: mobiledesign, alt: "Mobile Design", title: "Mobile Design", size: 48 },
  next: { src: next, alt: "Next.js", title: "Next.js", size: 48 },
  nodejs: { src: nodejs, alt: "Node.js", title: "Node.js", size: 48 },
  openai: { src: openai, alt: "OpenAI", title: "OpenAI", size: 48 },
  payu: { src: payu, alt: "Integración de Pagos", title: "Integración de Pagos", size: 48 },
  pixabay: { src: pixabay, alt: "Pixabay", title: "Pixabay", size: 48 },
  postgresql: { src: postgresql, alt: "PostgreSQL", title: "PostgreSQL", size: 48 },
  pusher: { src: pusher, alt: "Pusher", title: "Pusher", size: 48 },
  python: { src: python, alt: "Python", title: "Python", size: 48 },
  react: { src: react, alt: "React", title: "React.js", size: 48 },
  responsive: { src: responsive, alt: "Responsive Design", title: "Responsive Design", size: 52 },
  sendgrid: { src: sendgrid, alt: "SendGrid", title: "SendGrid", size: 48 },
  swiper: { src: swiperjs, alt: "Swiper.js", title: "Swiper.js", size: 48 },
  tailwind: { src: tailwind, alt: "Tailwind CSS", title: "Tailwind CSS", size: 48 },
  typescript: { src: ts, alt: "TypeScript", title: "TypeScript", size: 48 },
  uiverse: { src: uiverse, alt: "Uiverse", title: "Uiverse", size: 48 },
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
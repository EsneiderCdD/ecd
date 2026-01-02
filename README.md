# ECD - Portfolio Personal

Un portfolio personal moderno construido con React y Vite, que simula una experiencia de escritorio interactiva con un sistema completo de dark mode y arquitectura modular.

## 🚀 Características

### ✨ Funcionalidades Principales
- **🏠 Página de Inicio**: Landing page con presentación personal
- **📁 Explorador de Escritorio**: Simulación de un sistema de archivos con carpetas organizadas
- **👤 Sección Acerca de**: Portfolio detallado con tabla de archivos y panel de información
- **💼 Proyectos**: Galería de proyectos con detalles individuales
- **🌙 Dark Mode**: Sistema completo de cambio de tema con persistencia
- **🏆 Sistema de Logros**: Gamificación con notificaciones interactivas

### 🎨 Interfaz de Usuario
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Iconografía Moderna**: Uso de Lucide React y assets optimizados
- **Tema Unificado**: Variables CSS personalizadas y módulos CSS

### 🛠️ Arquitectura Técnica
- **Diseño Modular**: Separación clara de responsabilidades (Data, UI, Features)
- **Data-Driven**: Contenido gestionado a través de archivos de datos estructurados
- **CSS Modules**: Estilos encapsulados para evitar colisiones
- **Optimización de Assets**: Gestión eficiente de imágenes y recursos estáticos

## 🏗️ Tecnologías Utilizadas

### Frontend
- **React** - Biblioteca principal
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Enrutamiento
- **Lucide React** - Iconografía

### Servicios
- **EmailJS** - Envío de emails desde el frontend

### Desarrollo
- **ESLint** - Linting y calidad de código
- **CSS Vars & Modules** - Gestión avanzada de estilos

## 📁 Estructura del Proyecto

```
src/
├── assets/              # Recursos estáticos gestionados por Vite
│   ├── background/      # Fondos de pantalla
│   ├── icons/           # Iconos de UI
│   ├── images/          # Imágenes de proyectos
│   ├── stack/           # Logos de tecnologías
│   └── stickers/        # Assets para gamificación
├── components/          # Componentes de presentación reutilizables
│   ├── Layout/          # Componentes estructurales (Sidebar, Toolbar, InfoPanel, etc.)
│   └── Notifications/   # Componentes de notificación (Toasts)
├── context/             # Contextos de React (Estado Global)
│   ├── ThemeContext.jsx 
│   └── AchievementsContext.jsx
├── data/                # Capa de Datos (Modularizada)
│   ├── aboutMe/         # Información personal
│   ├── projects/        # Datos individuales de cada proyecto
│   ├── statusTags/      # Configuración de etiquetas de estado
│   └── techStack/       # Catálogo de tecnologías e iconos
├── features/            # Módulos funcionales completos
│   └── ContactModal/    # Feature de contacto (Lógica + UI + Data)
├── pages/               # Páginas principales (Vistas)
│   ├── Home.jsx
│   ├── AboutMe.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   └── Notifications/   # Vista de notificaciones
├── routes/              # Configuración de rutas
└── styles/              # Estilos globales y temas
    └── themes.css
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd ecd
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 🎨 Sistema de Temas

El proyecto implementa un sistema completo de dark mode con variables CSS globales y persistencia local.

### Variables CSS
- **Colores de fondo**: `--bg-primary`, `--bg-secondary`, `--bg-header`
- **Colores de texto**: `--text-primary`, `--text-secondary`, `--text-muted`
- **Bordes**: `--border-color`, `--border-light`, `--border-header`

## 🔧 Configuración

### Alias de Importación
El proyecto usa alias `@` para imports relativos, facilitando la importación desde `src/`:
```javascript
import { data } from '@/data/projects';
```

### Variables de Entorno
Para EmailJS, crear archivo `.env`:
```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

## 👨‍💻 Autor

**EsneiderCdD**
- GitHub: [@EsneiderCdD](https://github.com/EsneiderCdD)
- LinkedIn: [esneidercdd](https://www.linkedin.com/in/esneidercdd/)

---

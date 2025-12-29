# ECD - Portfolio Personal

Un portfolio personal moderno construido con React y Vite, que simula una experiencia de escritorio interactiva con un sistema completo de dark mode.

## 🚀 Características

### ✨ Funcionalidades Principales
- **🏠 Página de Inicio**: Landing page con presentación personal
- **📁 Explorador de Escritorio**: Simulación de un sistema de archivos con carpetas organizadas
- **👤 Sección Acerca de**: Portfolio detallado con tabla de archivos y panel de información
- **💼 Proyectos**: Galería de proyectos con detalles individuales
- **🌙 Dark Mode**: Sistema completo de cambio de tema con persistencia

### 🎨 Interfaz de Usuario
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Animaciones Suaves**: Transiciones y efectos hover elegantes
- **Iconografía Moderna**: Uso de Lucide React para iconos consistentes
- **Tema Unificado**: Variables CSS personalizadas para fácil mantenimiento

### 🛠️ Funcionalidades Técnicas
- **Enrutamiento**: React Router para navegación SPA
- **Gestión de Estado**: Context API para el tema
- **Formularios**: Integración con EmailJS para contacto
- **Organización Modular**: Componentes reutilizables y bien estructurados

## 🏗️ Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal
- **Vite 7.1.6** - Herramienta de construcción y desarrollo
- **React Router DOM 7.9.1** - Enrutamiento
- **Lucide React 0.544.0** - Iconografía

### Servicios
- **EmailJS 4.4.1** - Envío de emails desde el frontend

### Desarrollo
- **ESLint** - Linting y calidad de código
- **TypeScript Types** - Tipado estático para React
 - **Sistema de Logros** - Context API + UI de notificaciones

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── About/           # Componentes específicos de la sección About
│   │   ├── Dropdown/    # Menú desplegable con modal de contacto
│   │   ├── AboutHeader.jsx
│   │   ├── AboutSidebar.jsx
│   │   └── AboutTable.jsx
│   ├── ContactModal/    # Modal para formulario de contacto
│   ├── Desktop/         # Componentes del explorador de escritorio
│   ├── DesktopFolder/   # Carpetas del escritorio
│   ├── DraggableFolder/ # Carpetas del sistema
│   ├── Folder/          # Componente base de carpeta
│   ├── Achievements/    # Componentes de logros y notificaciones
│   └── Projects/        # Componentes de proyectos
├── context/             # Contextos de React
│   └── ThemeContext.jsx # Gestión del tema (light/dark)
│   └── AchievementsContext.jsx # Gestión de logros y notificaciones
├── data/                # Datos estáticos
│   ├── aboutData.js     # Información personal
│   ├── projectsData.js  # Datos de proyectos
│   └── stackIcons.js    # Iconos de tecnologías
├── pages/               # Páginas principales
│   ├── Home/            # Página de inicio
│   ├── About/           # Página acerca de
│   ├── DesktopFolder/   # Explorador de escritorio
│   ├── Projects/        # Lista de proyectos
│   └── ProjectDetail/   # Detalle de proyecto individual
│   └── Achievements/    # Página de logros y notificaciones
├── routes/              # Configuración de rutas
│   └── AppRouter.jsx    # Router principal
├── styles/              # Estilos globales
│   └── themes.css       # Variables CSS para temas
└── assets/              # Recursos estáticos
    ├── images/          # Imágenes del portfolio
    ├── icons/           # Iconos personalizados
    └── stack/           # Logos de tecnologías
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

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 🎨 Sistema de Temas

El proyecto implementa un sistema completo de dark mode con:

### Variables CSS
- **Colores de fondo**: `--bg-primary`, `--bg-secondary`, `--bg-header`
- **Colores de texto**: `--text-primary`, `--text-secondary`, `--text-muted`
- **Bordes**: `--border-color`, `--border-light`, `--border-header`
- **Estados**: `--hover-bg`, `--selected-row`

### Persistencia
- El tema se guarda en `localStorage`
- Se aplica automáticamente al cargar la página
- Toggle disponible en el header

## 📱 Páginas y Rutas

- **`/`** - Página de inicio con presentación
- **`/desktop`** - Explorador de escritorio interactivo
- **`/about`** - Portfolio detallado con información personal
- **`/projects`** - Galería de proyectos
- **`/projects/:projectId`** - Detalle individual de proyecto
- **`/achievements`** - Sistema de logros y notificaciones

## 🔧 Configuración

### Alias de Importación
El proyecto usa alias `@` para imports relativos:
```javascript
import Component from '@/components/Component'
```
Configurado en `vite.config.js` dentro de `resolve.alias`.

### Variables de Entorno
Para EmailJS, crear archivo `.env`:
```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

## 🎯 Características Destacadas

### Drag & Drop
- Carpetas completamente arrastrables
- Feedback visual durante el arrastre
- Validación de zonas de drop

### Modal de Contacto
- Formulario integrado con EmailJS
- Múltiples opciones de contacto
- Validación de campos

### Responsive Design
- Adaptable a móviles y tablets
- Grid layouts flexibles
- Componentes escalables

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

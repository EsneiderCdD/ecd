# Auditoría Técnica: Manejo de HTML en Descripción

**Fecha:** 02/01/2026

## Hallazgo
Se identificó el uso de la función `generateStackHTML` dentro del módulo de datos de proyectos (`src/data/projects/*.js`). Esta función genera strings de HTML crudo que son renderizados posteriormente usando `dangerouslySetInnerHTML`.

## Problema
- **Seguridad y Rendimiento**: El uso de `dangerouslySetInnerHTML` bypass el Virtual DOM de React.
- **Acoplamiento**: La lógica de visualización (HTML) está fuertemente acoplada a la capa de datos.

## Propuesta de Solución (Deuda Técnica)
Para futuras iteraciones, se recomienda:

1. **Separación de Datos**:
   Modificar los archivos de datos para que devuelvan estructuras puras, no HTML.
   ```javascript
   // Antes
   description: generateStackHTML(['react', 'vite'])

   // Después
   stack: ['react', 'vite']
   ```

2. **Componente de Renderizado**:
   Crear un componente dedicado (`<TechStackRenderer stack={file.stack} />`) que consuma el array de tecnologías y renderice los iconos utilizando React estándar, eliminando la necesidad de inyección de HTML.

3. **Migración**:
   Esto requerirá actualizar `InfoPanel.jsx` para soportar múltiples tipos de contenido más allá de texto/html simple.

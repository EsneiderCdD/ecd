// src/components/DesktopFolders/DesktopFolders.jsx
import { useState } from 'react';
import { DndContext, DragOverlay, rectIntersection, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import DraggableFolder from '../DraggableFolder/DraggableFolder';
import DroppableCell from '../DroppableCell/DroppableCell';
import styles from "./DesktopFolders.module.css";

// Configuración de la grilla
const GRID_CONFIG = {
  cols: 10,
  rows: 6,
};

function DesktopFolders() {
  const [folders, setFolders] = useState([
    { id: 'inicio', label: 'Inicio', to: '/', position: { col: 1, row: 1 } },
    { id: 'sobre-mi', label: 'Sobre mí', to: '/about', position: { col: 1, row: 2 } },
    { id: 'proyectos', label: 'Proyectos', to: '/projects', position: { col: 1, row: 3 } },
  ]);

  const [activeId, setActiveId] = useState(null);

  // Sensores con restricción: solo drag si se mantiene presionado Y se mueve
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // Debe moverse al menos 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 200, // En móvil, esperar 200ms
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  // Generar todas las celdas de la grilla
  const cells = [];
  for (let row = 1; row <= GRID_CONFIG.rows; row++) {
    for (let col = 1; col <= GRID_CONFIG.cols; col++) {
      cells.push({ col, row });
    }
  }

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    // Verificar si se soltó sobre una celda
    if (over.id.toString().startsWith('cell-')) {
      const [, col, row] = over.id.split('-').map(Number);
      
      // Verificar si la celda ya está ocupada
      const isCellOccupied = folders.some(
        f => f.position.col === col && f.position.row === row && f.id !== active.id
      );

      if (!isCellOccupied) {
        setFolders((items) =>
          items.map((item) =>
            item.id === active.id
              ? { ...item, position: { col, row } }
              : item
          )
        );
      }
    }
  };

  const activeFolder = folders.find(f => f.id === activeId);

  // Verificar qué celdas están ocupadas
  const isCellOccupied = (col, row) => {
    return folders.some(f => f.position.col === col && f.position.row === row);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={rectIntersection}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.container}>
        {/* Renderizar todas las celdas droppables */}
        {cells.map(({ col, row }) => (
          <DroppableCell
            key={`cell-${col}-${row}`}
            id={`cell-${col}-${row}`}
            col={col}
            row={row}
            isOccupied={isCellOccupied(col, row)}
          />
        ))}

        {/* Renderizar las carpetas */}
        {folders.map((folder) => (
          <DraggableFolder
            key={folder.id}
            id={folder.id}
            label={folder.label}
            to={folder.to}
            gridPosition={folder.position}
          />
        ))}
      </div>

      <DragOverlay>
        {activeId && activeFolder ? (
          <div className={styles.dragOverlay}>
            <div className={styles.folderIcon}></div>
            <span className={styles.folderLabel}>{activeFolder.label}</span>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

export default DesktopFolders;
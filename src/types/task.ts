// src/types/task.ts
export interface Task {
  id: number;           // Identificador único de la tarea
  title: string;        // Texto de la tarea
  completed: boolean;   // Estado (completada o pendiente)
  createdAt?: string;   // (opcional) Fecha de creación
  updatedAt?: string;   // (opcional) Fecha de última actualización
}

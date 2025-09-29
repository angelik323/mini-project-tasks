// src/stores/useTasksStore.ts
import { defineStore } from 'pinia';
import type { Task } from '../types/task';
import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as Task[],
    loading: false,
    error: null as string | null
  }),
  getters: {
    completedTasks: (state) => state.tasks.filter(t => t.completed)
  },
  actions: {
    async fetchTasks() {
      this.loading = true;
      try {
        const { data } = await axios.get<Task[]>(API_URL);
        this.tasks = data;
      } catch (err) {
        this.error = 'Error cargando tareas';
      } finally {
        this.loading = false;
      }
    },
    async addTask(title: string) {
      try {
        const { data } = await axios.post<Task>(API_URL, {
          title,
          completed: false
        });
        this.tasks.push(data);
      } catch {
        this.error = 'Error agregando tarea';
      }
    },
    async toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id);
      if (!task) return;
      try {
        const { data } = await axios.patch<Task>(`${API_URL}/${id}`, {
          completed: !task.completed
        });
        task.completed = data.completed;
      } catch {
        this.error = 'Error actualizando tarea';
      }
    },
    async deleteTask(id: number) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        this.tasks = this.tasks.filter(t => t.id !== id);
      } catch {
        this.error = 'Error eliminando tarea';
      }
    }
  }
});

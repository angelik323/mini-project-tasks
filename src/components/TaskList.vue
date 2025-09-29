<!-- src/components/TaskList.vue -->
<script setup>
import { onMounted, ref } from 'vue';
import { useTasksStore } from '../stores/useTasksStore';
import { useTaskFilter } from '../composables/useTaskFilter';

const newTask = ref('');
const store = useTasksStore();
const { filter, filteredTasks } = useTaskFilter();

onMounted(() => {
  store.fetchTasks();
});

function add() {
  if (newTask.value.trim()) {
    store.addTask(newTask.value);
    newTask.value = '';
  }
}
</script>

<template>
  <div>
    <h2>Mis Tareas</h2>

    <input v-model="newTask" @keyup.enter="add" placeholder="Nueva tarea" />
    <button @click="add">Agregar</button>

    <select v-model="filter">
      <option value="all">Todas</option>
      <option value="completed">Completadas</option>
      <option value="pending">Pendientes</option>
    </select>

    <div v-if="store.loading">Cargando...</div>
    <div v-if="store.error" style="color: red">{{ store.error }}</div>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="store.toggleTask(task.id)"
        />
        {{ task.title }}
        <button @click="store.deleteTask(task.id)">X</button>
      </li>
    </ul>
  </div>
</template>

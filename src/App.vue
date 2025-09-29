<!-- src/App.vue -->
<script setup lang="ts">
import TaskList from './components/TaskList.vue';
</script>

<template>
  <div id="app">
    <header class="app-header">
      <h1>Gestor de Tareas</h1>
      <p class="subtitle">Vue 3 · TypeScript · Pinia · JSON Server</p>
    </header>

    <main class="container">
      <TaskList />
    </main>

    <footer class="app-footer">
      <small>Hecho con ❤️ — Practica Pinia y APIs</small>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #1f2937;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f4f6;
  padding: 28px;
  box-sizing: border-box;
}

.app-header {
  text-align: center;
  margin-bottom: 18px;
}

.app-header h1 {
  margin: 0;
  font-size: 1.9rem;
  letter-spacing: -0.01em;
}

.subtitle {
  margin: 6px 0 0;
  color: #6b7280;
  font-size: 0.95rem;
}

.container {
  width: 100%;
  max-width: 820px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
}

/* Ajustes responsivos */
@media (max-width: 640px) {
  .container {
    padding: 16px;
  }
}

.app-footer {
  margin-top: 16px;
  color: #9ca3af;
}
</style>


// src/composables/useTaskFilter.ts
import { ref, computed } from 'vue';
import { useTasksStore } from '../stores/useTasksStore';

export function useTaskFilter() {
  const filter = ref<'all' | 'completed' | 'pending'>('all');
  const store = useTasksStore();

  const filteredTasks = computed(() => {
    if (filter.value === 'completed') {
      return store.completedTasks;
    }
    if (filter.value === 'pending') {
      return store.tasks.filter((t) => !t.completed);
    }
    return store.tasks;
  });

  return {
    filter,
    filteredTasks,
  };
}

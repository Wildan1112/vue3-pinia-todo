<template>
    <main>
    <!-- Heading -->
    <header>
      <img src="../assets/pinia.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- filter  -->
    <nav class="filter">
        <button @click="filter = 'all'">All Tasks</button>
        <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
        <p>All Tasks ({{ taskStore.totalCount }})</p>
        <div v-for="task in taskStore.tasks" >
            <TaskDetails :data="task" />
        </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
        <p>Favorite Tasks ({{ taskStore.favCount }})</p>
        <div v-for="task in taskStore.favs" >
            <TaskDetails :data="task" />
        </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from '../components/TaskDetails.vue';

export default {
    components: { TaskDetails },
    setup() {
        const taskStore = useTaskStore()
        const filter = ref('all')

        return { taskStore, filter }
    }

}
</script>
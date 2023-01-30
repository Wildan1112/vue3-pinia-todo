<template>
    <main>
    <!-- Heading -->
    <header>
      <img src="../assets/pinia.svg" alt="Pinia Logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- New Task Form -->
    <div class="new-task-form">
        <TaskForm />
    </div>

    <!-- filter  -->
    <nav class="filter">
        <button @click="filter = 'all'">All Tasks</button>
        <button @click="filter = 'favs'">Favs Tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

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
import TaskForm from '../components/TaskForm.vue';

export default {
    components: { TaskDetails, TaskForm },
    setup() {
        const taskStore = useTaskStore()

        // fetch tasks
        taskStore.getTasks()

        const filter = ref('all')

        return { taskStore, filter }
    }

}
</script>
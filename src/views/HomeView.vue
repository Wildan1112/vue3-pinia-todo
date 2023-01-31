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
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
        <p>All Tasks ({{ totalCount }})</p>
        <div v-for="task in tasks" >
            <TaskDetails :data="task" />
        </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
        <p>Favorite Tasks ({{ favCount }})</p>
        <div v-for="task in favs" >
            <TaskDetails :data="task" />
        </div>
    </div>

    <button @click="taskStore.$reset">reset</button>
  </main>
  
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
import TaskDetails from '../components/TaskDetails.vue';
import TaskForm from '../components/TaskForm.vue';
import { storeToRefs } from 'pinia';

export default {
    components: { TaskDetails, TaskForm },
    setup() {
        const taskStore = useTaskStore()

        const { tasks, loading, favs, totalCount, favCount} = storeToRefs(taskStore)

        // fetch tasks
        taskStore.getTasks()

        const filter = ref('all')

        return { taskStore, filter, tasks, loading, favs, totalCount, favCount }
    }

}
</script>
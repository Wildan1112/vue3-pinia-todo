<template>
    <div class="task">
        <h3>{{ data.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(data.id)">delete</i>
            <i class="material-icons" :class="{active: data.isFav}" @click="taskStore.toggleFav(data.id)">favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';

export default {
    props: ['data'],
    setup() {
        const taskStore = useTaskStore()

        return { taskStore }
    }
}
</script>
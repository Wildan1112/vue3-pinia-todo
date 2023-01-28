import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: 'Eat', isFav: true},
            {id: 2, title: 'Code', isFav: true},
            {id: 3, title: 'Sleep', isFav: false},
        ],
        // name: 'Azam'
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav) 
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p 
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    

    
})
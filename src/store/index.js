import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {id: 1, title: 'Estudar Vue', status: true },
      {id: 2, title: 'Commitar o To-do', status: false },
      {id: 3, title: 'Estudar React', status: false },
    ]
  },
  mutations: {
    handleAddTask(state, title) {
      if(title) {
        state.tasks.push({
          id: new Date().getTime(),
          title,
          status: false
        })
      }
    },
    handleRemoveTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})

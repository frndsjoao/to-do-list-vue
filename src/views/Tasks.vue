<template>
  <div class="tasklist">
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="input"
        label="Add a task"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
  
    <div>
      <v-list flat subheader>
        <v-list-item-group>
          
          <div 
            v-for="task, index in $store.state.tasks" 
            :key="index"
          >
            <Task :task="task" />
          </div>

        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script>
import Task from '../components/tasks/Task.vue'
  export default {
    name: 'Home',
    components: { Task },
    data() {
      return {
        input: null,
      }
    },
    methods: {
      handleAddTask() {
        this.$store.commit('handleAddTask', this.input)
        this.input = null
      }
    }
  }
</script>

<style scoped>
  div.tasklist {
    margin-top: 15px;
  }
</style>

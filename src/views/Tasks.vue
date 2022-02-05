<template>
  <div class="tasklist">
    <v-col
      cols="12"
      sm="6"
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
            v-for="task, index in tasks" 
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
        tasks: [
          { title: 'Estudar Vue', status: false },
          { title: 'Commitar o To-do', status: false },
          { title: 'Estudar React', status: false },
        ]
      }
    },
    methods: {
      handleAddTask() {
        if(this.input) {
          this.tasks.push({
            title: this.input,
            status: false
          })
        }
        this.input = null
      },
      handleRemoveTask() {
        // this.tasks = this.tasks.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  div.tasklist {
    margin-top: 15px;
  }
</style>

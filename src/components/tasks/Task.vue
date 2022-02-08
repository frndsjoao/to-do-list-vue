<template>
  <div>
    <v-list-item 
      :class="{'cyan lighten-5': task.status}"
      @click="task.status = !task.status"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="task.status"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through': task.status}"
          >
            {{task.title}}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn 
            icon
            @click.stop="handleRemoveTask(task.id)"
          >
            <v-icon color="blue-grey lighten-3">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider style="margin: 5px 0"/>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    handleRemoveTask(id) {
      this.$store.commit('handleRemoveTask', id)
    }
  }
}
</script>


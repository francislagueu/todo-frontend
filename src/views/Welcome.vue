<template>
  <div class="home">
    <div>
    <v-text-field
      v-model="name"
      label="List Name"
      required
    ></v-text-field>

    <v-btn class="purple darken-4" @click="createList" dark>submit</v-btn>
    </div>
    <v-container fluid grid-list-md>
        <v-layout column>
            <v-flex >
                <TodoList 
                    class="pt-10" fluid
                    v-for="list in listName"
                    v-bind:key="list._id"
                    v-bind:listName="list"
                    />
            </v-flex>
        </v-layout>
    </v-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import List from '@/services/todolist';

export default {
  name: "welcome",
  data(){
    return {
      name,
      listName:[]
    }
  },
  components: {
    TodoList
  },
  methods: {
    async createList(){
      const list = (await List.createTodoList({name: this.name})).data;
      console.log(list);
      this.$store.dispatch('addToList', list);
      this.listName.push(list)
      this.name = '';
    },
  },
   async beforeMount(){
        this.listName = (await List.getAllTodoList()).data;
        this.$store.dispatch('setList', this.listName);
        console.log(this.listName);
    }
};
</script>

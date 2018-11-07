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
        <v-layout row wrap>
            <v-flex xs8 off-set-2>
                <TodoList 
                    class="pt-10" fluid
                    v-for="list in listName"
                    v-bind:key="list._id"
                    v-bind:id="list._id"
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
        try{
            const list = (await List.createTodoList({name: this.name})).data;
            this.listName.push(list)
            this.name = '';
            this.$swal('Success', 'The list has been successfully created', 'success');
        }catch(err){
            this.$swal('Error','Something went wrong while creating the list', 'error')
        }
      
    },
  },
   async beforeMount(){
        this.listName = (await List.getAllTodoList()).data;
    }
};
</script>

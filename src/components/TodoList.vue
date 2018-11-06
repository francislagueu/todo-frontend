<template >
    <v-layout row wrap>
    <v-flex xs6 sm4 offset-sm3>
      <v-card>
        <v-toolbar color="purple darken-2" dark>

          <v-toolbar-title>{{listName.name}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon @click="editListName">edit</v-icon>
        </v-toolbar>
         <div>
        <v-text-field
        v-model="name"
        label="Item Name"
        required
        ></v-text-field>
    <v-btn class="purple darken-4" @click="createList" dark>Add</v-btn>
    </div>
        <v-list >
            <Item 
        v-for="item in listName.items"
        v-bind:todo="item"
        v-bind:key="item._id"
        v-on:remove-item="removeItem"
        ></Item>
          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    
</template>
<script>
import Item from '@/components/TodoItem'
export default {
    data(){
        return{
            name: '',
            todoList:[],
            item:null
        }
        
    },
    props: ['listName'],
    components:{
        Item
    },
    mounted(){
        this.todoList = this.listName.items;
    },
    methods:{
        async createList(){
            this.todoList.push({name: this.name, completed: false});
            this.item = (await Item.createItems({name: this.name, completed: false})).data;
            console.log(item);
            this.name = ''
        },
        editListName(){

        },
        removeItem(todo){
            const index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        }
    }
}
</script>
<style scoped>

</style>



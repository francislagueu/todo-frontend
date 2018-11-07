<template >
    <v-layout >
    <v-flex>
      <v-card>
        <v-toolbar color="purple darken-2" dark>

          <v-toolbar-title>{{listName.name}}</v-toolbar-title>
          <!-- <v-spacer></v-spacer>
          <v-icon @click="editListName">edit</v-icon> -->
        </v-toolbar>
        <div>
        <v-text-field
        v-model="itemName"
        label="Item Name"
        required
        @keyup.13="addItem"
        ></v-text-field>
    <v-btn class="purple darken-4" @click="addItem" dark>Add</v-btn>
    </div>
        <v-list >
            <Item 
        v-for="item in listName.items"
        v-bind:todo="item"
        v-bind:key="item._id"
        v-on:remove-item="removeItem"
        v-on:complete-item="completeItem"
        ></Item>
          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    
</template>
<script>
import Item from '@/components/TodoItem';
import Todo from '@/services/todo';
import _ from 'underscore';
export default {
    data(){
        return{
            name: '',
            itemName:'',
            todoList:[],
            item:null
        }
        
    },
    props: ['listName', 'id', 'items'],
    components:{
        Item,
    },
    mounted(){
        this.todoList = this.listName.items;
    },
    methods:{
        editListName(){

        },
        async removeItem(todo){
            console.log(todo);
            const msg = (await Todo.deleteTodo(this.id,todo._id)).data;
            console.log(msg);
            const index = this.todoList.indexOf(todo);
            this.todoList.splice(index, 1);
        },
        async addItem(){
            var newItem = this.itemName.trim();
            if(newItem){
                console.log(this.id);
                const resItem = (await Todo.createTodo({name: newItem, completed: false},this.id)).data;
                this.todoList.push(resItem);
                console.log(resItem);
                this.itemName = '';
            }
        },
        async completeItem(todo){
            const flag = !todo.completed
            const msg = (await Todo.updateTodo(this.id, todo._id, {name: todo.name,completed: flag})).data;
            console.log(msg);
            const item = _.find(this.todoList, function(it){
                return it._id === todo._id;
            });
            if(item){
                item.completed = !item.completed;
            }
            console.log(item);
        }
    }
}
</script>
<style scoped>

</style>




<template >
    <v-list-tile >
        <v-list-tile-action>
            <v-checkbox
            @change="todo.completed = !todo.completed"
            :checked="todo.completed"
            ></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content :class="{completed: todo.completed}" >
        {{todo.name}}
        </v-list-tile-content>
        <v-list-tile-action>
            <v-icon color="red" @click.prevent="deleteTodo(todo)">delete</v-icon>
        </v-list-tile-action>
    </v-list-tile>
</template>
<script>
export default {
    props: ['todo'],
    methods: {
        deleteTodo(todo){
            this.$emit('remove-item', todo);
        }
    }
};
</script>
<style scoped>
.completed{
    text-decoration: line-through;
}
</style>


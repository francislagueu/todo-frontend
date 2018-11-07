
<template >
    <v-list-tile >
        <v-list-tile-action>
            <v-checkbox
            @change="complete(todo)"
            :checked="!!todo.completed"
            ></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content :class="{completed: todo.completed}" >
        {{todo.name}}
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <v-chip v-if="todo.completed"  color="teal" text-color="white">
            <v-avatar>
                <v-icon>check_circle</v-icon>
            </v-avatar>
            completed
        </v-chip>
        <v-spacer></v-spacer>
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
            console.log(todo);
            this.$emit('remove-item', todo);
        },
        complete(todo){
            console.log(todo);
            this.$emit('complete-item', todo);
        }
    }
};
</script>
<style scoped>
.completed{
    text-decoration: line-through;
    color: #555;
}
</style>


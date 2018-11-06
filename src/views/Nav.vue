<template>
    <v-toolbar fixed class="purple darken-3" dark app>
        <v-toolbar-title class="mr-4" >
            <v-btn flat @click="goto({name: 'home'})">
                TodoApp
            </v-btn>
            
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark
            v-if="!$store.state.isAuthenticated"
            @click="goto({name:'login'})"
            >Login</v-btn>
            <v-btn flat dark
            v-if="!$store.state.isAuthenticated"
            @click="goto({name:'register'})"
            >Register</v-btn>
            <v-btn flat dark>
            <strong
            v-if="$store.state.isAuthenticated"
            > Welcome {{$store.state.user.first_name}}</strong>
            </v-btn>
            <v-btn flat dark
            v-if="$store.state.isAuthenticated"
            @click="logout"
            >Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
    methods: {
        goto(route){
            this.$router.push(route);
        },
        logout(){
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$store.dispatch('setList', []);
            this.$router.push({name: 'home'});
        }
    }
}
</script>
<style scoped>

</style>



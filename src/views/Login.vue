<template>
    <v-layout column justify-center >
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="purple darken-3" dark>
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field
                     label="Username"
                     v-model="username"
                     ></v-text-field>
                    <v-text-field
                     label="Password"
                     type="password"
                     v-model="password"
                     >
                    </v-text-field>
                <div class="error" v-html="error"/>
                <br>
                <v-btn class="purple darken-4" @click="login" dark>
                    Login
                </v-btn>
                </div>
            </div>
        </v-flex>
    </v-layout>
    
    
    
</template>
<script>
import Auth from '@/services/auth';
export default {
    data(){
        return {
            username: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login(){
            try{
                const response = await Auth.login({
                    username: this.username,
                    password: this.password
                });
                this.$store.dispatch('setToken', response.data.token);
                this.$store.dispatch('setUser', response.data.data);
                this.$router.push({name: 'welcome'});
            }catch(err){
                this.error = err.response.data.error;
            }
        }
    }
}
</script>
<style scoped>

</style>



<template>
    <v-layout column justify-center >
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="purple darken-3" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field
                     label="Username"
                     v-model="username"
                     >
                    </v-text-field>
                    <v-text-field
                     label="Email"
                     v-model="email"
                     >
                    </v-text-field>
                    <v-text-field
                     label="First Name"
                     v-model="first_name"
                     >
                    </v-text-field>
                    <v-text-field
                     label="Last Name"
                     v-model="last_name"
                     >
                    </v-text-field>
                    <v-text-field
                     label="Password"
                     type="password"
                     v-model="password"
                     >
                    </v-text-field>
                <div class="error" v-html="error"/>
                <br>
                <v-btn class="purple darken-4" @click="register" dark>
                    Register
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
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            error: null
        }
    },
    methods: {
        async register(){
            try{
                const response = await Auth.register({
                    email: this.email,
                    username: this.username,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    password: this.password
                });
            }catch(err){
                this.error = err.response.data.error;
            }
        }
    }
}
</script>
<style scoped>

</style>



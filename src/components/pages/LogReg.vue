<template>
  <v-layout column>
    <panel :current="this.pageName" :next="this.switchPageName" @submit="submit">
      <div class="danger-alert" v-html="error"/>
      <form
        name="registerForm"
        autocomplete="off"
      >
        <v-text-field
          label="Login"
          v-model="login"
          autofocus
        ></v-text-field>

        <routable path="/register">
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
          ></v-text-field>
        </routable>

        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>

        <routable path="/login">
          <v-switch v-model="memento" label="MEMENTO" color="red" ></v-switch>
        </routable>
      </form>
    </panel>
  </v-layout>
</template>

<script>
import {regLog} from '@/services/api'


export default {
  data () {
    return {
      login: '',
      email: '',
      password: '',
      memento: false,
      error: ''
    }
  },
  mounted () {
    console.log(this.$route)
  },
  computed: {
    path () {
      return this.$route.path
    },
    pageName () {
      return this.path.replace(/\//, '').toUpperCase()
    },
    switchPageName () {
      return this.pageName.toLowerCase() === 'register' ? 'LOGIN' : 'REGISTER'
    }
  },
  methods: {
    async submit () {
      switch(this.pageName){
        case 'REGISTER':{
          let response = await regLog.reg({
            login: this.login,
            email: this.email,
            password: this.password
          });
          console.log("RESPONSE IS: "+response.data);
          break;
        }
        case 'LOGIN':{
          let response = await regLog.log({
            login: this.login,
            remember: this.memento,
            password: this.password
          });
          console.log("RESPONSE IS: "+response.data);
          break;
        }
      }
      this.$router.push({
        name: 'main'
      });
    }
  }
}
</script>

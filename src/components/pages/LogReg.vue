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
    submit () {
      if (this.pageName === 'REGISTER') {
        this.reg({
          login: this.login,
          email: this.email,
          password: this.password
        })
        .then((input)=>console.log("RESPONSE IS: "+input));
      } else if (this.pageName === 'LOGIN') {
        this.log({
          login: this.login,
          remember: this.memento,
          password: this.password
        });
      }
      this.$router.push({
        name: 'main'
      });
    },
    async reg (data) {
      try {
        return await regLog.register(data)
        console.log("REGISTER SENT");
      } catch (err) {
        console.error(JSON.stringify(err))
        this.error = err.response.data.message
      }
    },
    async log (data) {
      try {
        await regLog.login(data)
        console.log("LOGIN SENT");
      } catch (err) {
        console.error(JSON.stringify(err))
        this.error = err.response.data.message
      }
    }
  }
}
</script>

<template>
  <v-layout column>
    <panel title="REGISTER">
      <form
        name="registerForm"
        autocomplete="off">
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
      </form>
      <div class="danger-alert" v-html="error"/>
      <v-btn
        dark
        class="cyan"
        @click="register">
        Register
      </v-btn>
    </panel>
  </v-layout>
</template>

<script>
import RegLog from '@/services/api/RegLog'

export default {
  data () {
    return {
      login: '',
      email: '',
      password: '',
      error: ''
    }
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    async register () {
      try {
        await RegLog.send({
          login: this.login,
          mail: this.email,
          password: this.password
        })
        this.$router.push({
          name: 'main'
        })
      } catch (err) {
        console.error(JSON.stringify(err))
        this.error = err.response.data.message
      }
    }
  }
}
</script>

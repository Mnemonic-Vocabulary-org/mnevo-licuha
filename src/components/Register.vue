<template>
  <v-layout column>
    <panel title="REGISTER">
      <form
        name="registerForm"
        autocomplete="off">
        <v-text-field
          label="Login"
          v-model="login"
        ></v-text-field>
        <br>
        <v-text-field
          label="Email"
          type="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
      </form>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
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
    data() {
      return {
        login: '',
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async register() {
        try {
          await RegLog.send({
            login: this.login,
            mail: this.email,
            password: this.password
          });
          this.$router.push({
            name: 'main'
          })
        } catch (err) {
          console.error(JSON.stringify(err));
          this.error = err.response.data.message;
        }
      }
    }
  }
</script>

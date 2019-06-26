<template>
  <v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
    <div class="white elevation-2" :style="transition">

      <v-toolbar flat
                 dense
                 v-bind:style="[transition, rotate, panelColor]"
                 dark
      >
        <v-toolbar-title v-bind:style="[transitionWord, rotate]"
                         class="button-link"
                         @click='$emit("submit")'
        >
          {{current}}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title v-bind:style="[transitionWord, rotate]"
                         class="button-link"
                         @click="navigateTo('/'+next.toLowerCase())"
        >
          {{next}}
        </v-toolbar-title>

      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No slot content defined.
        </slot>
      </div>
    </div>
  </v-flex>
</template>

<script>

  export default {
    props: [
      'current',
      'next'
    ],
    data () {
      return {
        degree: 0,
        transition: {
          transition: 'transform 2s'
        },
        transitionWord: {
          transition: 'transform 3s'
        },
        panelColor: {
          background: 'linear-gradient(to left, #e66465, #9198e5)'
        },
        styles: {}
      }
    },
    computed: {
      rotate () {
        return {transform: `rotateY(${this.degree}deg)`}
      }
    },
    methods: {
      navigateTo (route) {
        this.degree = this.degree === 180 ? 0 : 180
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>
  .toolbar__title {
    margin-left: 0px;
  }

  .button-link {
    cursor: pointer;
  }

  .submit:hover {
    transition: transform 3s;
    background: black;
  }
</style>

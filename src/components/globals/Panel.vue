<template>
  <v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
    <div class="white elevation-2" :style="transition">

      <v-toolbar flat dense v-bind:style="[transition, rotate, panelColor]"
                 dark>

        <v-toolbar-title v-bind:style="[transitionWord, rotate]">
          {{title}}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title v-bind:style="[transitionWord, rotate]" class="button-link" @click="navigateTo('/'+goTo.toLowerCase())">
          {{goTo}}
        </v-toolbar-title>

      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No slot content defined.
        </slot>
      </div>
      <v-toolbar flat dense v-bind:style="[styles.submit.view]" class="button-link submit">
        <v-spacer></v-spacer>
        <v-toolbar-title v-bind:style="[transitionWord]" >
          {{title}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>
  </v-flex>
</template>

<script>

export default {
  props: [
    'title',
    'goTo'
  ],
  data () {
    return {
      degree: 0,
      transition: {
        transition: 'transform 2s'
      },
      transitionWord:{
        transition: 'transform 3s'
      },
      panelColor: {
        background: 'linear-gradient(to left, #e66465, #9198e5)'
      },
      styles:{
        submit:{
          view: {
            background: 'linear-gradient(#ffffff, #eeeeee)'
          }
        }
      }
    }
  },
  computed: {
    rotate (){
      return {transform: `rotateY(${this.degree}deg)`}
    }
  },
  methods: {
    navigateTo (route) {
      this.degree += 180;
      console.log(this.degree);
      this.$router.push(route);
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

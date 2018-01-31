<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="http://i67.tinypic.com/opy0iu.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Coming Soon</h3>
            <div v-model="one">{{one.one}}<br>{{one.two}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="nonPatient">My Name Patients</v-btn>
          <v-btn flat color="orange" @click="nonPatient2">Get Patients</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data() {
      return {
        one: {
          one: "Just Be Patient",
          two: "I'm working on this shit",
        }
      }
    },
    methods:{
      nonPatient(){
        this.one.one = "Be Calm"
      },
      nonPatient2(){
        this.one.two = "Im working dammit!"
      }
    }
  }
</script>

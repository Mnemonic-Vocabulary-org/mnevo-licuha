<template>
  <div>
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
            <v-btn flat color="orange" @click="nonPatient">My Name is Patience</v-btn>
            <v-btn flat color="orange" @click="nonPatient2">Get Patience</v-btn>
             <div flat color="orange" >
               
             <v-layout row justify-center>
    <v-btn
      color="grey"
      dark
      @click.stop="dialog++"
    >
      PANIC!
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Chillax?</v-card-title>

        <v-card-text>
          Chillout, badmotherfucker !
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            flat="flat"
            @click="dialog++"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog--"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
             </div>
          </v-card-actions>
        </v-card>
        <v-autocomplete
          chips
          deletable-chips
          browser-autocomplete
          autofocus
          hide-no-data
          item-avatar="fingerprint"
          v-model="model"
          :items="states"
          label="search mnewo"
          persistent-hint
          append-icon="search"
          :prepend-inner-icon="'add'"
          :loading="active"
          @click:prepend-inner="log('PREPEND CLICKED! '+model)"
          @change="(e)=>log(e)"
          @focus="active=true"
          @focusout="active=false"
          :value="model"
        ></v-autocomplete>
        <list-with-pic expandable="true"></list-with-pic>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      one: {
        one: 'Just Be Patient',
        two: "I'm working on this shit"
      },
      dialog: 0,
      states: ["one","two","pidr"],
      model: "owowowo",
      active: false
    }
  },
  methods: {
    log(msg){
      console.log(msg)    },
    nonPatient () {
      this.one.one = 'Be Calm'
    },
    nonPatient2 () {
      this.one.two = 'Im working dammit!'
    }
  }
}
</script>

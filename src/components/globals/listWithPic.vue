<template>
  <v-expansion-panel expand xs12 sm6 offset-sm3>
    <v-expansion-panel-content>
      <template v-slot:actions>
        <v-icon color="primary">unfold_more</v-icon>
      </template>
      <template v-slot:header>
        <div>mnewo 1</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <template v-slot:actions>
        <v-icon color="teal">unfold_more</v-icon>
      </template>
      <template v-slot:header>
        <div>mnewo 2</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <template v-slot:actions>
        <v-icon color="error">unfold_more</v-icon>
      </template>
      <template v-slot:header>
        <div>mnewo 3</div>
      </template>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
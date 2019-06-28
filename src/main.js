// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Panel from '@/components/globals/Panel'
import BtnNavigate from '@/components/globals/BtnNavigate'
import {store} from './services/store'
import Routable from './components/globals/Routable'
import listWithPic from './components/globals/listWithPic'

Vue.config.productionTip = false

Vue.use(Vuetify, { iconfont: 'md'})
Vue.component('panel', Panel)
Vue.component('btn-navigate', BtnNavigate)
Vue.component('routable', Routable)
Vue.component('list-with-pic', listWithPic)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})

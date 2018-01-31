import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Register from '@/components/Register'
import Main from '@/components/Main'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})

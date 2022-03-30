import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import Tickets from '../views/Tickets'
import MyProfile from '../views/MyProfile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

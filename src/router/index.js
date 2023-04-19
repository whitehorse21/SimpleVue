import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/account/Profile.vue'
import Modulea from '../views/Modulea.vue'
import Moduleb from '../views/Moduleb.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/modulea',
    name: 'Modulea',
    component: Modulea
  },
  {
    path: '/moduleb',
    name: 'Moduleb',
    component: Moduleb
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

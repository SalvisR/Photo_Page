import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Popular from '../views/Popular.vue'
import Categories from '../views/Categories.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:search',
    name: 'searchpage',
    component: Search
  },
  {
    path: '/popular',
    name: 'popular',
    component: Popular
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

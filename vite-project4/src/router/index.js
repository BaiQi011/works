import { createRouter, createWebHistory } from 'vue-router'
import Counter from '../components/counter.vue'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/counter',
  //   name: 'Counter',
  //   component: Counter
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
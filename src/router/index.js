import { createRouter, createWebHistory } from 'vue-router'
import PageAddUsers from '../views/PageAddUsers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: PageAddUsers
    }
  ]
})

export default router

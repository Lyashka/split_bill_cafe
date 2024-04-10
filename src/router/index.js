import { createRouter, createWebHistory } from 'vue-router'
import PageAddUsers from '../views/PageAddUsers.vue'
import PageAddProducts from '../views/PageAddProducts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: PageAddUsers
    },
    {
      path: '/products',
      name: 'products',
      component: PageAddProducts
    }
  ]
})

export default router

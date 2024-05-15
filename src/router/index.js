import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: () => import('../views/PageAddUsers.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/PageAddProducts.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('../views/PageResults.vue')
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/analyze',
      component: () => import('../views/Analyze.vue')
    }
  ]
})

export default router

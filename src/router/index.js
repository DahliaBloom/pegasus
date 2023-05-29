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
      path: '/game',
      component: () => import('../views/AnalyzeGame.vue')
    }
  ]
})

export default router

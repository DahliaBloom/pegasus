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
    },
    {
     path: '/puzzle/classic',
     component: () => import('../views/PuzzleClassic.vue')
    },
    {
      path: '/puzzle',
      component: () => import('../views/PuzzleHome.vue')
     }
  ]
})

export default router

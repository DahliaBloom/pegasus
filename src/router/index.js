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
      path: '/puzzle/rush',
      component: () => import('../views/PuzzleRush.vue')
    },
    {
      path: '/puzzle',
      component: () => import('../views/PuzzleHome.vue')
    },
    {
      path: '/wrapped',
      component: () => import('../views/Wrapped.vue')
    }
  ]
})

export default router

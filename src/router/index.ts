import { createRouter, createWebHistory } from 'vue-router'
import DashView from '@/views/DashView.vue'
import PlantsView from '@/views/PlantsView.vue'
import WateringsView from '@/views/WateringsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dash',
      component: DashView,
    },
    {
      path: '/plants',
      name: 'plants',
      component: PlantsView,
    },
    {
      path: '/waterings',
      name: 'waterings',
      component: WateringsView,
    },
  ],
})

export default router

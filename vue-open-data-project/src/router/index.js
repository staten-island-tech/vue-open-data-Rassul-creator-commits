import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChartView from '../components/ChartView.vue'
import DeathCard from '../components/DeathCard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/stats', component: ChartView},
    { path: '/death', component: DeathCard},
  ]
})

export default router

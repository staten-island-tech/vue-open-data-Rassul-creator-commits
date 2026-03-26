import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: home, component: HomeView },
    { path: '/death', component: DeathView.component },
  ],
})

export default router

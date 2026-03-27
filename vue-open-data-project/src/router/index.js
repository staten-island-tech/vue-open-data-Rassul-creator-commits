import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DeathVue from './views/DeathVue.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/death', component: DeathVue },
  ],
})
export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../Views/Login/index.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
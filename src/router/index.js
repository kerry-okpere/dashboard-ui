import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../Views/Login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../Views/Login/index.vue'),
  },
  {
    path: '/payments',
    name: 'Payment',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/balances',
    name: 'Balances',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/developers',
    name: 'Developers',
    component: () => import('../Views/Dashboard/index.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../Views/Dashboard/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
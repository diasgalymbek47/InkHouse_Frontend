import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/views/Products.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/basket',
      name: 'Basket',
      component: () => import('@/views/Basket.vue'),
    },
  ],
})

export default router

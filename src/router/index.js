import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
        {
          path: 'onboard',
          component: () => import('../pages/onboard.vue'),
        },
        {
          path: 'onboard-aggregators',
          component: () => import('../pages/onboard-aggregators.vue'),
        },
        {
          path: 'onboard-aggregators-single',
          component: () => import('../pages/onboard-aggregators-single.vue'),
        },
        {
          path: 'onboard-aggregators-multiple',
          component: () => import('../pages/onboard-aggregators-multiple.vue'),
        },
        {
          path: 'aggregators',
          component: () => import('../pages/aggregators.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
        {
          path: 'logout',
          component: () => import('../pages/login.vue'),
        },
      ],
    },
  ],
})

export default router

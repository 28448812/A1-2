import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: '/',
            name: 'PublicHealth',
            component: () => import('@/views/PublicHealth.vue')
        },
        {
            path: '/PublicHealth',
            name: 'PublicHealth',
            component: () => import('@/views/PublicHealth.vue')
        },
           {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/Login.vue')
        },
              {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/auth/Register.vue')
        },
    ]
});

export default router;

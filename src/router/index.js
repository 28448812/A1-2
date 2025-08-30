import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: '/',
            name: 'BeautiHome',
            component: () => import('@/views/BeautiHome.vue')
        },
        {
            path: '/BeautiHome',
            name: 'BeautiHome',
            component: () => import('@/views/BeautiHome.vue')
        },
           {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/auth/Login.vue')
        },
    ]
});

export default router;

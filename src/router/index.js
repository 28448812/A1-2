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
    ]
});

export default router;

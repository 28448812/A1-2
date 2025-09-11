import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
            path: '/',
            name: 'UserLayout',
            component: () => import('@/views/UserLayout.vue'),
            children:[
                {
                    path: '/PublicHealth',
                    name: 'PublicHealth',
                    component: () => import('@/views/PublicHealth.vue')
                },
                {
                    path: '/resourcesDetail/:index',
                    name: 'ResourceDetail',
                    component:  () => import('@/views/ResourceDetail.vue'),
                    props: true, // Enable props to receive route params
                },
            ]
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
